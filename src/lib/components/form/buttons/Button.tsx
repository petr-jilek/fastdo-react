import styles from "./Button.module.css"
import { useNavigate } from "react-router-dom"
import PrimaryCircularProgress from "../../raw/PrimaryCircularProgress";

export interface Props {
    label: string,
    onClick?: ({ e }: IButtonClickData) => void,
    leftBorderRadius?: boolean,
    rightBorderRadius?: boolean,
    outlined?: boolean,
    link?: string,
    smallPadding?: boolean,
    children?: JSX.Element | null,
    busy?: boolean,
    busyLoading?: boolean
}

export interface IButtonClickData {
    e?: React.MouseEvent<HTMLElement>
}

export function Button({
    label,
    onClick = () => { },
    leftBorderRadius = true,
    rightBorderRadius = true,
    outlined = false,
    link = "",
    smallPadding = false,
    children = null,
    busy = false,
    busyLoading = false
}: Props) {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (busy || busyLoading)
            return

        e.preventDefault()
        onClick({ e: e })

        if (link !== "")
            navigate(link)
    }

    if (busyLoading)
        return <PrimaryCircularProgress size={60} />

    if (busy)
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
        ><PrimaryCircularProgress size={20} white={true} /></button>

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
