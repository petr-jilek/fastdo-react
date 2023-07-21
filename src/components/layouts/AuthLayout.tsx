import styles from './AuthLayout.module.css'
import PrimaryHelmet from '../yolo/PrimaryHelmet'

export interface Props {
  headProps?: HeadProps | null
  title?: string
  centerItems?: boolean
  children: JSX.Element[] | JSX.Element
}

export interface HeadProps {
  HeadHelement?: any
  title: string
  link: string
  imageCard: string
}

const AuthLayout: React.FC<Props> = ({ headProps = null, title = '', centerItems = false, children }: Props) => {
  const getComponentClass = (): string => {
    let className = styles.component
    if (centerItems) className += ' ' + styles.centerItems
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
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
