import Input from "../components/form/buttons/Input"
import Spacer from "../components/general/Spacer"

export interface Props {
  submitLabel: string
  loadingSubmit: boolean
  onSubmit: () => void
  style?: React.CSSProperties
  children: JSX.Element[] | JSX.Element
}

export default function FormLayout({ submitLabel, loadingSubmit, onSubmit, style, children }: Props) {
  const submit = async (e: any) => {
    e.preventDefault()
    if (loadingSubmit) return
    onSubmit()
  }

  return (
    <form onSubmit={submit} style={style}>
      {children}
      <Spacer />
      <Input buttonProps={{ label: submitLabel, style: { width: "100%" }, loading: loadingSubmit }} />
    </form>
  )
}
