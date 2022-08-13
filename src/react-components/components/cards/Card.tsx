import styles from "./Card.module.css"

export interface Props {
    children: JSX.Element[] | JSX.Element
}

export default function Card({ children }: Props) {
    return (
        <div className={styles.component}>
            {children}
        </div>
    );
}
