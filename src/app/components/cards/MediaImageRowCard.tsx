import { useState } from "react";
import ActionRowCard from "./ActionRowCard";

export interface Props {
    name: string,
    getImageUrl: string,
    onDelete?: (id: string) => void,
}

export default function MediaImageRowCard({ name, getImageUrl, onDelete = () => { } }: Props) {
    const [displayImage, setDisplayImage] = useState(false);

    return (
        <>
            <ActionRowCard
                id={name}
                label={name}
                showActionItems={["see", "delete"]}
                onActionSee={() => setDisplayImage(!displayImage)}
                onActionDelete={(name) => onDelete(name)}
            />
            {
                displayImage === true
                    ? <img src={getImageUrl + "/" + encodeURIComponent(name)} alt="img" style={{ width: "90%" }} />
                    : ""
            }
        </>
    );
}
