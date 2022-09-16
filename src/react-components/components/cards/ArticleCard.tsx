import styles from "./ArticleCard.module.css";

export interface Props {
  id: string;
  name: string;
  description: string;
  imageName: string;
  getImageUrl: string;
  note?: string;
  imageOnClick?: (id: string) => void;
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
    <div className={styles.component}>
      <div
        className={styles.imageDiv}
        style={{ backgroundImage: `url(${getImageUrl + "/" + imageName})` }}
        onClick={() => imageOnClick(id)}
      >
        <img
          src={getImageUrl + "/" + imageName}
          alt="img"
          onClick={() => imageOnClick(id)}
        />
      </div>
      <div className={styles.textDiv}>
        <h3 onClick={() => imageOnClick(id)}>{name}</h3>
        {note !== "" ? <p className={styles.noteP}>{note}</p> : <></>}
        {description !== "" ? <p>{description}</p> : <></>}
      </div>
    </div>
  );
}
