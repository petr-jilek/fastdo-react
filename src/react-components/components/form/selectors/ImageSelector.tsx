import styles from "./ImageSelector.module.css"
import { AiOutlineClose } from 'react-icons/ai'

export interface Props {
    imageNames: string[],
    getImageUrl: string,
    show: boolean,
    onClose?: () => void,
    onSelect?: (imageName: string) => void,
}

export default function ImageSelector({ imageNames, getImageUrl, show, onClose = () => { }, onSelect = () => { } }: Props) {
    return (
        <div style={{ display: show ? "block" : "none" }} className={styles.component}>
            <div className={styles.headerDiv}>
                <p >Zvol obrázek</p>
                <AiOutlineClose
                    style={{ height: "26px", width: "26px", cursor: "pointer", color: "var(--primary-white-color)" }}
                    onClick={() => onClose()}
                />
            </div>
            <div className={styles.imagesDiv}>
                {
                    imageNames?.map((item, index) => <div key={index} className={styles.imageDiv}>
                        <img src={getImageUrl + "/" + item} alt="img" onClick={() => onSelect(item)} />
                    </div>)
                }
            </div>
        </div>
    );
}