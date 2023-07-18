import { useState } from "react"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi"
import FileSelector from "../form/selectors/FileSelector"
import Spacer from "../general/Spacer"
import Card from "./Card"
import { ErrorModel } from "../../api/models"

export interface Props {
  fileSelectorLabel?: string
  acceptedFileTypes?: string[]
  onUpload?: (file: File) => Promise<void>
}

interface ErrorUploadedModel {
  name?: string | undefined
  error?: ErrorModel | undefined
}

export default function FileUploadCard({
  fileSelectorLabel = "Nahrajte .csv soubory ",
  acceptedFileTypes = ["*"],
  onUpload = () => Promise.resolve(),
}: Props) {
  const [uploading, setUploading] = useState(false)
  const [uploadFinished, setUploadFinished] = useState(false)
  const [errorUploadedModel, setErrorUploadedModel] = useState<ErrorUploadedModel | undefined>(undefined)

  const uploadFile = async (file: File) => {
    setUploadFinished(false)
    setErrorUploadedModel(undefined)
    setUploading(true)

    try {
      await onUpload(file)
    } catch (error: any) {
      var errorModel = error as ErrorModel
      setErrorUploadedModel({ name: file?.name, error: errorModel })
    }

    setUploadFinished(true)
    setUploading(false)
  }

  return (
    <Card>
      <>
        <div style={{ textAlign: "center" }}>
          <FileSelector
            label={fileSelectorLabel}
            acceptedFileTypes={acceptedFileTypes}
            onChange={(file) => uploadFile(file)}
            busyLoading={uploading}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          {uploadFinished && (
            <>
              {errorUploadedModel ? (
                <BiErrorCircle
                  style={{ height: "150px", width: "150px", cursor: "pointer", color: "var(--fastdo-error-color)" }}
                />
              ) : (
                <AiOutlineCheckCircle
                  style={{ height: "150px", width: "150px", cursor: "pointer", color: "var(--fastdo-success-color)" }}
                />
              )}
              <Spacer />
            </>
          )}
        </div>

        {errorUploadedModel && (
          <>
            <div style={{ overflow: "auto", maxHeight: "1000px" }}>
              <h3>{errorUploadedModel.name}</h3>
              <h3>{errorUploadedModel.error?.message}</h3>
              <p>{errorUploadedModel.error?.detail}</p>
            </div>
            <Spacer />
          </>
        )}
      </>
    </Card>
  )
}
