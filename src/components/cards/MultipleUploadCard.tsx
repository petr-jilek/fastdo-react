import { useState } from "react"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi"
import { ErrorModel } from "../../api/baseAgent"
import FileSelector from "../form/selectors/FileSelector"
import Spacer from "../general/Spacer"
import styles from "./MultipleUploadCard.module.css"

export interface Props {
  fileSelectorLabel?: string
  acceptedFileTypes?: string[]
  onUploadCsv?: (file: File) => Promise<void>
  onFinish?: () => void
}

interface ErrorUploadedModel {
  name?: string | undefined
  error?: ErrorModel | undefined
}

export default function MultipleUploadCard({
  fileSelectorLabel = "Nahrajte .csv soubory ",
  acceptedFileTypes = ["*"],
  onUploadCsv = () => Promise.resolve(),
  onFinish = () => {},
}: Props) {
  const [uploading, setUploading] = useState(false)
  const [uploadFinished, setUploadFinished] = useState(false)

  const [successUploadedCount, setSuccessUploadedCount] = useState(0)
  const [errorUploadedCount, setErrorUploadedCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  const [errorUploadedModels, setErrorUploadedModels] = useState<ErrorUploadedModel[]>([])

  const reset = () => {
    setUploadFinished(false)
    setSuccessUploadedCount(0)
    setErrorUploadedCount(0)
    setErrorUploadedModels([])
  }

  const uploadFiles = async (files: FileList) => {
    setUploading(true)
    reset()
    setTotalCount(files.length)

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i)

      try {
        await onUploadCsv(file!)
        setSuccessUploadedCount((_) => _ + 1)
      } catch (error: any) {
        const errorModel = error as ErrorModel
        // eslint-disable-next-line no-loop-func
        setErrorUploadedModels((_) => [..._, { name: file?.name, error: errorModel }])
        setErrorUploadedCount((_) => _ + 1)
      }
    }

    setUploading(false)
    setUploadFinished(true)
    onFinish()
  }

  return (
    <div className={styles.component}>
      <FileSelector
        label={fileSelectorLabel}
        acceptedFileTypes={acceptedFileTypes}
        mutlipleFiles={true}
        onMutlipleChange={(files) => uploadFiles(files)}
        busyLoading={uploading}
      />
      <Spacer height={20} />

      <div className={styles.statusDiv}>
        {uploading || uploadFinished ? <p>{`Správně nahráno: ${successUploadedCount}`}</p> : <></>}
        {uploading || uploadFinished ? <p>{`Špatně nahráno: ${errorUploadedCount}`}</p> : <></>}
        {uploading || uploadFinished ? (
          <p>{`Celkem nahráno: ${successUploadedCount + errorUploadedCount}/${totalCount}`}</p>
        ) : (
          <></>
        )}
      </div>

      {uploadFinished ? (
        errorUploadedCount === 0 ? (
          <AiOutlineCheckCircle style={{ height: "150px", width: "150px", cursor: "pointer", color: "#05B20C" }} />
        ) : (
          <BiErrorCircle
            style={{ height: "150px", width: "150px", cursor: "pointer", color: "var(--primary-error-color)" }}
          />
        )
      ) : (
        <></>
      )}
      <Spacer height={10} />

      <div className={styles.errorUploadedDiv}>
        {errorUploadedModels.length > 0 ? (
          <>
            <h3>Špatně nahrané soubory</h3>
            {errorUploadedModels.map((model, index) => (
              <div key={index}>
                <p>{model.name}</p>
                <p style={{ fontSize: "1rem", margin: "0 2rem" }}>{model.error?.message}</p>
                <Spacer height={10} />
              </div>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
