import styles from "./ArticleCard.module.css"

export interface Props {
  id: string
  name: string
  description: string
  imageName: string
  getImageUrl: string
  note?: string
  imageOnClick?: (id: string) => void
}

export default function ArticleCard({
  id,
  name,
  description,
  imageName,
  getImageUrl,
  note = "",
  imageOnClick = () => {},
}: Props) {
  return (
    <div className={styles.component} onClick={() => imageOnClick(id)}>
      <div className={styles.imageDiv}>
        <img src={getImageUrl + "/" + imageName} alt={imageName} loading="lazy" title={name} />
      </div>
      <div className={styles.textDiv}>
        <h3>{name}</h3>
        {note !== "" ? <p className={styles.noteP}>{note}</p> : <></>}
        {description !== "" ? <p>{description}</p> : <></>}
      </div>
    </div>
  )
}
