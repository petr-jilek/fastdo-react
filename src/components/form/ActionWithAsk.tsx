import { useState } from "react"
import Spacer from "../general/Spacer"
import CenterModal from "../modals/CenterModal"
import Button from "./buttons/Button"

export interface Props {
  ActionElement?: any
  modalContent?: any
  modalText?: string
  yesButtonLabel?: string
  noButtonLabel?: string
  onAccepted?: () => Promise<void>
  onDenied?: () => void
}

export default function ActionWithAsk({
  ActionElement = null,
  modalContent = null,
  modalText = "Opravdu chcete provést akci?",
  yesButtonLabel = "Ano",
  noButtonLabel = "Ne",
  onAccepted = () => Promise.resolve(),
  onDenied = () => {},
}: Props) {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const onYesClick = async () => {
    setLoading(true)
    await onAccepted()
    setLoading(false)
    setShowModal(false)
  }

  const onNoClick = () => {
    onDenied()
    setShowModal(false)
  }

  return (
    <>
      {ActionElement && <div onClick={() => setShowModal(true)}>{ActionElement}</div>}
      <CenterModal show={showModal} onShaderClick={() => onNoClick()}>
        <>
          <Spacer size={10} />
          {modalContent ? (
            modalContent
          ) : (
            <p className="heading3" style={{ textAlign: "center" }}>
              {modalText}
            </p>
          )}
          <Spacer size={30} />
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Button label={yesButtonLabel} onClick={() => onYesClick()} loading={loading} />
            <Spacer size={20} horizontal />
            <Button label={noButtonLabel} onClick={() => onNoClick()} outlined loading={loading} />
          </div>
        </>
      </CenterModal>
    </>
  )
}
