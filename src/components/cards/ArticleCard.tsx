import styles from "./ArticleCard.module.css"
import Card from "./Card"

export interface Props {
  LinkComponent: React.ElementType
  link: string
  name: string
  imageUrl: string
  note?: string
  description?: string
}

export default function ArticleCard({ LinkComponent, link, name, imageUrl, note = "", description = "" }: Props) {
  return (
    <LinkComponent to={link}>
      <div className={styles.component}>
        <div className={styles.imgDiv}>
          <img src={imageUrl} alt={name} title={name} loading="lazy" />
        </div>
        <div className={styles.textDiv}>
          <h2>{name}</h2>
          {note && <p className={styles.note}>{note}</p>}
          {description && <p>{description}</p>}
        </div>
      </div>
    </LinkComponent>
  )
}
