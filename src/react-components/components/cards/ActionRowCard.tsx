import { AiFillDelete, AiFillEye, AiFillEdit } from 'react-icons/ai'
import styles from "./ActionRowCard.module.css"

export interface Props {
    id: string,
    label: string,
    showActionItems?: string[],
    onActionEdit?: (id: string) => void,
    onActionDelete?: (id: string) => void,
    onActionSee?: (id: string) => void,
}

export default function ActionRowCard({
    id,
    label,
    showActionItems = ["edit", "delete", "see"],
    onActionEdit = () => { },
    onActionDelete = () => { },
    onActionSee = () => { }
}: Props) {
    return (
        <div className={styles.component}>
            <div className={styles.componentDiv}>
                <p>{label}</p>
                <div className={styles.actionsDiv}>
                    {
                        showActionItems.includes("edit")
                            ? <>
                                <AiFillEdit className={styles.actionIcon} onClick={() => onActionEdit(id)} />
                                <div style={{ width: "10px" }}></div>
                            </>
                            : <></>
                    }

                    {
                        showActionItems.includes("see")
                            ? <>
                                <AiFillEye className={styles.actionIcon} onClick={() => onActionSee(id)} />
                                <div className={styles.actionsSeparatorDiv}></div>
                            </>
                            : <></>
                    }

                    {
                        showActionItems.includes("delete")
                            ? <>
                                <AiFillDelete className={styles.actionIcon} onClick={() => onActionDelete(id)} />
                            </>
                            : <></>
                    }
                </div>
            </div>
        </div>
    );
}
