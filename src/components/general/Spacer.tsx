export interface Props {
  horizontal?: boolean
  size?: number
}

export default function Spacer({ horizontal = false, size = 10 }: Props) {
  if (horizontal) return <div style={{ height: "100%", width: `${size}px` }}></div>

  return <div style={{ width: "100%", height: `${size}px` }}></div>
}
