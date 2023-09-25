import { ColorType } from '../..'

export interface Props {
  value: boolean
  colorType?: ColorType
  label?: string
  labelLeft?: boolean
  onChange?: () => void
  styles?: StyleProps
}

export interface StyleProps {
  container?: React.CSSProperties
  input?: React.CSSProperties
  label?: React.CSSProperties
}

const CheckBox: React.FC<Props> = ({
  value,
  colorType = ColorType.primary,
  onChange = () => {},
  label = '',
  labelLeft = false,
  styles = {}
}: Props) => {
  return (
    <div className="fd-check-box-container" style={styles.container}>
      {labelLeft && label && (
        <label className="fd-check-box-label" style={{ marginRight: '10px', ...styles.input }}>
          {label}
        </label>
      )}
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        className={'fd-check-box-input ' + 'fd-check-box-input-' + colorType}
        style={styles.input}
      />
      {!labelLeft && label && (
        <label className="fd-check-box-label" style={{ marginLeft: '10px', ...styles.input }}>
          {label}
        </label>
      )}
    </div>
  )
}

export default CheckBox
