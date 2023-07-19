import ActionWithAsk, { Props as ActionWithAskProps } from '../ActionWithAsk'
import Button, { type Props as ButtonProps } from './Button'

export interface Props {
  buttonProps: ButtonProps
  actionWithAskProps: ActionWithAskProps
}

export default function ButtonWithAsk({ buttonProps, actionWithAskProps }: Props) {
  return <ActionWithAsk {...actionWithAskProps} ActionElement={<Button {...buttonProps} />} />
}
