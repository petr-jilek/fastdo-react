export interface Props {
  value: boolean
  onChange?: () => void
  label?: string
}

export default function CheckBox({ value, onChange = () => {}, label = "" }: Props) {
  return (
    <div className="fastdo-CheckBox-component">
      <input type="checkbox" checked={value} onChange={onChange} />
      {label && <label>{label}</label>}
    </div>
  )
}
