export interface Props {
  horizontal?: boolean
  both?: boolean
  size?: number
}

export default function Spacer({ horizontal = false, both = false, size = 10 }: Props) {
  if (both) return <div style={{ height: `${size}px`, width: `${size}px` }}></div>
  if (horizontal) return <div style={{ height: "100%", width: `${size}px` }}></div>

  return <div style={{ width: "100%", height: `${size}px` }}></div>
}
