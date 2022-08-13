import styles from "./ArticleCard.module.css"

export interface Props {
    id: string,
    name: string,
    description: string,
    note: string,
    imageName: string,
    getImageUrl: string,
    imageOnClick?: (id: string) => void,
}

export default function ArticleCard({ id, name, description, note, imageName, getImageUrl, imageOnClick = () => { } }: Props) {
    return (
        <div className={styles.component}>
            <div className={styles.imageDiv} style={{ backgroundImage: `url(${getImageUrl + "/" + imageName})` }} onClick={() => imageOnClick(id)}>
                <img src={getImageUrl + "/" + imageName} alt="img" onClick={() => imageOnClick(id)} />
            </div>
            <div className={styles.textDiv}>
                <h3>{name}</h3>
                <p className={styles.noteP}>{note}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}
