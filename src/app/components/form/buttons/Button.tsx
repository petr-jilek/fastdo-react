import styles from "./Button.module.css"
import { useNavigate } from "react-router-dom"

export interface Props {
    label: string,
    onClick?: ({ e }: IButtonClickData) => void,
    leftBorderRadius?: boolean,
    rightBorderRadius?: boolean,
    outlined?: boolean,
    link?: string,
    smallPadding?: boolean,
    children?: JSX.Element | null,
}

export interface IButtonClickData {
    e?: React.MouseEvent<HTMLElement>
}

export default function Button({
    label,
    onClick = () => { },
    leftBorderRadius = true,
    rightBorderRadius = true,
    outlined = false,
    link = "",
    smallPadding = false,
    children = null,
}: Props) {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        onClick({ e: e });
        if (link !== "")
            navigate(link)
    }

    return <button
        className={
            [
                styles.component,
                outlined ? styles.componentOutlined : styles.componentDefault,
                leftBorderRadius ? styles.componentLeftBorderRadius : "",
                rightBorderRadius ? styles.componentRightBorderRadius : "",
                smallPadding ? styles.smallPadding : styles.defaultPadding
            ].join(" ")}
        onClick={handleClick}
    >{children ? children : label}</button>;
}
