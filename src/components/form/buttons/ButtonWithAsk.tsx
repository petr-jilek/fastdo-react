import { useState } from "react"
import Spacer from "../../general/Spacer"
import CenterModal from "../../modals/CenterModal"
import Button, { Props as ButtonProps } from "./Button"

export interface Props {
  buttonProps: ButtonProps
  modalText?: string
  yesButtonLabel?: string
  noButtonLabel?: string
  onAccepted?: () => Promise<void>
}

export default function ButtonWithAsk({
  buttonProps,
  modalText = "Opravdu chcete provést akci?",
  yesButtonLabel = "Ano",
  noButtonLabel = "Ne",
  onAccepted = () => Promise.resolve(),
}: Props) {
  const [showModal, setShowModal] = useState(false)

  const onYesClick = async () => {
    await onAccepted()
    setShowModal(false)
  }

  const onNoClick = () => {
    setShowModal(false)
  }

  return (
    <>
      <Button {...buttonProps} onClick={() => setShowModal(true)} />
      <CenterModal show={showModal} onShaderClick={() => setShowModal(false)}>
        <>
          <Spacer height={10} />
          <p className="heading3" style={{ textAlign: "center" }}>
            {modalText}
          </p>
          <Spacer height={30} />
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Button label={yesButtonLabel} onClick={() => onYesClick()} loading={buttonProps.loading} />
            <Spacer width={20} vertical={false} />
            <Button label={noButtonLabel} onClick={() => onNoClick()} outlined loading={buttonProps.loading} />
          </div>
        </>
      </CenterModal>
    </>
  )
}
