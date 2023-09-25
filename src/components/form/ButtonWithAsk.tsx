import ActionWithAsk, { type Props as ActionWithAskProps } from './ActionWithAsk'
import Button, { type Props as ButtonProps } from './Button'

export interface Props {
  children?: React.ReactNode
  actionWithAskProps?: ActionWithAskProps
  buttonProps: ButtonProps
}

const ButtonWithAsk: React.FC<Props> = ({ children, actionWithAskProps, buttonProps }: Props) => {
  return (
    <ActionWithAsk {...actionWithAskProps} actionElement={<Button {...buttonProps} />}>
      {children}
    </ActionWithAsk>
  )
}

export default ButtonWithAsk
