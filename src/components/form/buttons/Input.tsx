import Button, { getButtonClass, Props as ButtonProps } from "./Button"

export interface Props {
  buttonProps: ButtonProps
  type?: "submit" | "reset" | "button"
}

export default function Input({ buttonProps, type = "submit" }: Props) {
  if (buttonProps.loading) return <Button {...buttonProps} />

  return (
    <input
      className={
        "fastdo-button " +
        getButtonClass(buttonProps.disabled ?? false, buttonProps.outlined ?? false, buttonProps.danger ?? false)
      }
      type={type}
      style={buttonProps.style}
      value={buttonProps.label}
    />
  )
}
