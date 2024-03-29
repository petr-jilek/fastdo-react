export interface Props {
  height?: number
  color?: string
}

export default function HrSpacer({ height = 1, color = "var(--fastdo-hr-spacer-color)" }: Props) {
  return <div style={{ backgroundColor: color, height: `${height}px`, width: "100%" }}></div>
}
