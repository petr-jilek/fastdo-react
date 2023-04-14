import { useState } from "react"
import ActionRowCard from "./ActionRowCard"
import { AiFillDelete, AiFillEye } from "react-icons/ai"
import Spacer from "../general/Spacer"

export interface Props {
  name: string
  imgUrl: string
  onDelete?: (name: string) => void
  loadingDelete?: boolean
}

export default function MediaImageRowCard({ name, imgUrl, onDelete = () => {}, loadingDelete = false }: Props) {
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
            loading: loadingDelete,
          },
        ]}
      />
      <Spacer />

      <div style={{ width: "100%", textAlign: "center" }}>
        {displayImage && <img src={imgUrl} alt="img" loading="lazy" style={{ maxWidth: "90%" }} />}
      </div>
    </>
  )
}
