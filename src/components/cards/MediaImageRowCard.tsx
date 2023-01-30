import { useState } from "react"
import ActionRowCard from "./ActionRowCard"
import { AiFillDelete, AiFillEye } from "react-icons/ai"
import Spacer from "../general/Spacer"

export interface Props {
  name: string
  getImageUrl: string
  onDelete?: (name: string) => void
}

export default function MediaImageRowCard({ name, getImageUrl, onDelete = () => {} }: Props) {
  const [displayImage, setDisplayImage] = useState(false)

  return (
    <>
      <ActionRowCard
        id={name}
        label={name}
        actionItems={[
          {
            icon: AiFillEye,
            onClick: () => setDisplayImage((_) => !_),
          },
          {
            icon: AiFillDelete,
            onClick: (id) => onDelete(id),
          },
        ]}
      />
      <Spacer />

      <div style={{ width: "100%", textAlign: "center" }}>
        {displayImage === true ? (
          <img
            src={getImageUrl + "/" + encodeURIComponent(name)}
            alt="img"
            loading="lazy"
            style={{ maxWidth: "90%" }}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
