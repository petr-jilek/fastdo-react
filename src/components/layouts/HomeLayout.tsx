import styles from "./HomeLayout.module.css"
import PrimaryHelmet from "../yolo/PrimaryHelmet"
import { useEffect } from "react"

export interface Props {
  headProps?: HeadProps | null
  title?: string
  centerItems?: boolean
  scroolToTop?: boolean
  style?: React.CSSProperties
  children: React.ReactNode
  downOutsideElement?: any
}

export interface HeadProps {
  HeadHelement?: any
  title: string
  link: string
  imageCard: string
}

export default function HomeLayout({
  headProps = null,
  title = "",
  centerItems = false,
  scroolToTop = false,
  style = {},
  children,
  downOutsideElement = <></>,
}: Props) {
  const getComponentClass = () => {
    let className = styles.component
    if (centerItems) className += " " + styles.centerItems
    return className
  }

  useEffect(() => {
    if (scroolToTop) window.scrollTo(0, 0)
  })

  return (
    <>
      <div className={getComponentClass()} style={style}>
        {headProps && (
          <PrimaryHelmet
            HeadHelement={headProps.HeadHelement}
            title={headProps.title}
            link={headProps.link}
            imageCard={headProps.imageCard}
          />
        )}

        <div className={styles.contentDiv}>
          {title && <h1>{title}</h1>}
          {children}
        </div>
      </div>
      {downOutsideElement}
    </>
  )
}
