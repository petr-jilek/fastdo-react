export interface Props {
    vertical?: boolean,
    height?: number,
    width?: number,
}

export default function Spacer({ vertical = true, height = 10, width = 10 }: Props) {
    if (vertical)
        return <div style={{ width: "100%", height: `${height}px` }}></div>

    return <div style={{ height: "100%", width: `${width}px` }}></div>
}
