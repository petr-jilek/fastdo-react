import { Button } from '@mui/material'
import { ColorType, Button as FdButton } from '../..'

export interface Props {
  label: string
  colorType?: ColorType
  accept?: string[]
  multiple?: boolean
  onChange?: (file: File) => void
  onMutlipleChange?: (files: FileList) => void
  loading?: boolean
}

export default function FileSelector({
  label,
  colorType = ColorType.primary,
  accept = ['*'],
  multiple = false,
  onChange = () => {},
  onMutlipleChange = () => {},
  loading = false
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (multiple) {
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

  if (loading) return <FdButton colorType={colorType} label={label} loading />

  return (
    <div>
      <input
        accept={accept.join(',')}
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        multiple={multiple}
        onChange={handleChange}
      />
      <label htmlFor="raised-button-file">
        <Button
          variant="contained"
          component="span"
          style={{
            background: `var(--fd-${colorType}-color)`,
            borderRadius: 'var(--fd-border-radius-3)',
            padding: 'var(--fd-padding-2) var(--fd-padding-3)',
            textTransform: 'none',
            fontWeight: 'var(--fd-p1-font-weight)',
            fontSize: 'var(--fd-p1-font-size)'
          }}
        >
          {label}
        </Button>
      </label>
    </div>
  )
}
