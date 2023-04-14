import { Button } from "@mui/material"
import PrimaryCircularProgress from "../../raw/PrimaryCircularProgress"

export interface Props {
  label: string
  acceptedFileTypes: string[]
  mutlipleFiles?: boolean
  onChange?: (file: File) => void
  onMutlipleChange?: (files: FileList) => void
  busyLoading?: boolean
}

export default function FileSelector({
  label,
  acceptedFileTypes,
  mutlipleFiles = false,
  onChange = () => {},
  onMutlipleChange = () => {},
  busyLoading = false,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (mutlipleFiles) {
      if (e?.target?.files?.length! > 0) {
        onMutlipleChange(e!.target!.files!)
      }
    } else {
      if (e?.target?.files?.length! > 0) {
        const file = e!.target!.files![0]
        onChange(file)
      }
    }
  }

  if (busyLoading)
    return (
      <div style={{ padding: "1rem 3.4rem" }}>
        <PrimaryCircularProgress size={50} />
      </div>
    )

  return (
    <div>
      <input
        accept={acceptedFileTypes.join(",")}
        style={{ display: "none" }}
        id="raised-button-file"
        type="file"
        multiple={mutlipleFiles}
        onChange={handleChange}
      />
      <label htmlFor="raised-button-file">
        <Button
          variant="contained"
          component="span"
          style={{
            background: "var(--fastdo-button-background)",
            borderRadius: "var(--fastdo-button-border-radius)",
            padding: "var(--fastdo-button-padding)",
            textTransform: "none",
            fontWeight: "var(--fastdo-button-font-weight)",
            fontSize: "var(--fastdo-button-font-size)",
          }}
        >
          {label}
        </Button>
      </label>
    </div>
  )
}
