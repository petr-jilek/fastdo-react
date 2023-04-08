import styles from "./HomeLayout.module.css"
import PrimaryHelmet from "../components/yolo/PrimaryHelmet"

export interface Props {
  headProps?: HeadProps | null
  header?: string
  centerItems?: boolean
  children: JSX.Element[] | JSX.Element
}

export interface HeadProps {
  HeadHelement?: any
  title: string
  link: string
  imageCard: string
}

export default function HomeLayout({ headProps = null, header = "", centerItems = false, children }: Props) {
  const getComponentClass = () => {
    let className = styles.component
    if (centerItems) className += " " + styles.centerItems
    return className
  }

  return (
    <div className={getComponentClass()}>
      {headProps && (
        <PrimaryHelmet
          HeadHelement={headProps.HeadHelement}
          title={headProps.title}
          link={headProps.link}
          imageCard={headProps.imageCard}
        />
      )}

      <div className={styles.contentDiv}>
        {header && <h1>{header}</h1>}
        {children}
      </div>
    </div>
  )
}
