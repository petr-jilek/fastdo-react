import { AiFillDelete, AiFillEye, AiFillEdit } from 'react-icons/ai'

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
        <div style={{ width: "100%", padding: "0.2rem 1rem", margin: "1rem 0", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", borderRadius: "20rem" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px 0", flexWrap: "wrap" }}>
                <p style={{ margin: "0" }}>{label}</p>
                <div style={{ display: "flex" }}>
                    {
                        showActionItems.includes("edit")
                            ? <>
                                <AiFillEdit
                                    style={{ height: "26px", width: "26px", cursor: "pointer", color: "black" }}
                                    onClick={() => onActionEdit(id)}
                                />
                                <div style={{ width: "10px" }}></div>
                            </>
                            : <></>
                    }

                    {
                        showActionItems.includes("see")
                            ? <>
                                <AiFillEye
                                    style={{ height: "26px", width: "26px", cursor: "pointer", color: "black" }}
                                    onClick={() => onActionSee(id)}
                                />
                                <div style={{ width: "10px" }}></div>
                            </>
                            : <></>
                    }

                    {
                        showActionItems.includes("delete")
                            ? <>
                                <AiFillDelete
                                    style={{ height: "26px", width: "26px", cursor: "pointer", color: "black" }}
                                    onClick={() => onActionDelete(id)}
                                />
                            </>
                            : <></>
                    }
                </div>
            </div>
        </div>
    );
}
