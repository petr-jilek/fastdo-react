export interface Props {
    height?: number
}

export default function HrSpacer({ height = 1 }: Props) {

    return <div style={{ backgroundColor: "var(--primary-black-color)", height: `${height}px` }}></div>
}
