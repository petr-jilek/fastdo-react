export interface Props {
  horizontal?: boolean
  height?: number
  width?: number
}

export default function Spacer({ horizontal = false, height = 10, width = 10 }: Props) {
  if (horizontal) return <div style={{ height: "100%", width: `${width}px` }}></div>

  return <div style={{ width: "100%", height: `${height}px` }}></div>
}
