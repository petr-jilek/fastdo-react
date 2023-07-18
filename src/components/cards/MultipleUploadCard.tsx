import { useState } from "react"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi"
import FileSelector from "../form/selectors/FileSelector"
import Spacer from "../general/Spacer"
import Card from "./Card"
import HrSpacer from "../general/HrSpacer"
import { ErrorModel } from "../../api/models"

export interface Props {
  fileSelectorLabel?: string
  acceptedFileTypes?: string[]
  onUpload?: (file: File) => Promise<void>
  onFinish?: () => void
}

interface ErrorUploadedModel {
  name?: string | undefined
  error?: ErrorModel | undefined
}

export default function MultipleUploadCard({
  fileSelectorLabel = "Nahrajte .csv soubory ",
  acceptedFileTypes = ["*"],
  onUpload = () => Promise.resolve(),
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
        await onUpload(file!)
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
    <Card>
      <>
        <div style={{ textAlign: "center" }}>
          <FileSelector
            mutlipleFiles
            label={fileSelectorLabel}
            acceptedFileTypes={acceptedFileTypes}
            onMutlipleChange={(files) => uploadFiles(files)}
            busyLoading={uploading}
          />
        </div>

        {(uploading || uploadFinished) && (
          <>
            <Spacer />
            <HrSpacer />
            <Spacer />
            <p>
              <strong>Správně nahráno: {successUploadedCount}</strong>
            </p>
            <p>
              <strong>Špatně nahráno: {errorUploadedCount}</strong>
            </p>
            <p>
              <strong>
                Celkem nahráno: {successUploadedCount + errorUploadedCount} / {totalCount}
              </strong>
            </p>
            <Spacer />
            <HrSpacer />
          </>
        )}

        <div style={{ textAlign: "center" }}>
          {uploadFinished && (
            <>
              {errorUploadedCount === 0 ? (
                <AiOutlineCheckCircle
                  style={{ height: "150px", width: "150px", cursor: "pointer", color: "var(--fastdo-success-color)" }}
                />
              ) : (
                <BiErrorCircle
                  style={{ height: "150px", width: "150px", cursor: "pointer", color: "var(--fastdo-error-color)" }}
                />
              )}
              <Spacer />
            </>
          )}
        </div>

        <div>
          {errorUploadedModels.length > 0 && (
            <>
              <h2>Špatně nahrané soubory</h2>
              {errorUploadedModels.map((model, index) => (
                <div key={index}>
                  <p>
                    <strong>{model.name}</strong>
                  </p>
                  <p>{model.error?.message}</p>
                  <Spacer />
                </div>
              ))}
            </>
          )}
        </div>
      </>
    </Card>
  )
}
