import { AiFillDelete, AiFillEye, AiFillEdit, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import styles from "./ActionRowCard.module.css"

export interface Props {
    id: string,
    label: string,
    showActionItems?: string[],
    onActionEdit?: (id: string) => void,
    onActionDelete?: (id: string) => void,
    onActionSee?: (id: string) => void,
    onActionMoveUp?: (id: string) => void,
    onActionMoveDown?: (id: string) => void,
}

export default function ActionRowCard({
    id,
    label,
    showActionItems = ["edit", "delete", "see"],
    onActionEdit = () => { },
    onActionDelete = () => { },
    onActionSee = () => { },
    onActionMoveUp = () => { },
    onActionMoveDown = () => { },
}: Props) {
    return (
        <div className={styles.component}>
            <div className={styles.componentDiv}>
                <p>{label}</p>
                <div className={styles.actionsDiv}>
                    {
                        showActionItems.includes("see")
                            ? <>
                                <AiFillEye className={styles.actionIcon} onClick={() => onActionSee(id)} />
                                <div className={styles.actionsSeparatorDiv}></div>
                            </>
                            : <></>
                    }

                    {
                        showActionItems.includes("moveUp")
                            ? <>
                                <AiOutlineArrowUp className={styles.actionIcon} onClick={() => onActionMoveUp(id)} />
                                <div className={styles.actionsSeparatorDiv}></div>
                            </>
                            : <></>
                    }

                    {
                        showActionItems.includes("moveDown")
                            ? <>
                                <AiOutlineArrowDown className={styles.actionIcon} onClick={() => onActionMoveDown(id)} />
                                <div className={styles.actionsSeparatorDiv}></div>
                            </>
                            : <></>
                    }

                    {
                        showActionItems.includes("edit")
                            ? <>
                                <AiFillEdit className={styles.actionIcon} onClick={() => onActionEdit(id)} />
                                <div style={{ width: "10px" }}></div>
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
