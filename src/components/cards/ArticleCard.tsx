import styles from "./ArticleCard.module.css"

export interface Props {
  id: string
  name: string
  imageName: string
  getImageUrl: string
  description?: string
  note?: string
  LinkComponent: React.ElementType
}

export default function ArticleCard({
  id,
  name,
  imageName,
  getImageUrl,
  description = "",
  note = "",
  LinkComponent,
}: Props) {
  return (
    <LinkComponent to={"/articles/" + id} className={styles.wrapper}>
      <div className={styles.component}>
        <div className={styles.imageDiv}>
          <img src={getImageUrl + "/" + imageName} alt={imageName} loading="lazy" title={name} />
        </div>
        <div className={styles.textDiv}>
          <h3>{name}</h3>
          {note !== "" ? <p className={styles.noteP}>{note}</p> : <></>}
          {description !== "" ? <p>{description}</p> : <></>}
        </div>
      </div>
    </LinkComponent>
  )
}
