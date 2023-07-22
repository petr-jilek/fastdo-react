import PrimaryHelmet from '../yolo/PrimaryHelmet'
import { type Props as PrimaryHelmetProps } from '../yolo/PrimaryHelmet'
import { useMemo } from 'react'

export interface Props {
  title?: string
  centerItems?: boolean
  children: React.ReactNode
  topChildren?: React.ReactNode
  bottomChildren?: React.ReactNode
  componentProps?: ComponentProps
  styles?: StyleProps
}

export interface StyleProps {
  component?: React.CSSProperties
  contentDiv?: React.CSSProperties
  title?: React.CSSProperties
}

export interface ComponentProps {
  helmet?: PrimaryHelmetProps
}

const PageLayout: React.FC<Props> = ({
  title = '',
  centerItems = false,
  children,
  topChildren,
  bottomChildren,
  componentProps,
  styles
}: Props) => {
  const componentClass = useMemo(() => {
    let className = 'fd-page-layout'
    if (centerItems) className += ' fd-page-layout-center-items'
    return className
  }, [centerItems])

  return (
    <div className={componentClass} style={styles?.component}>
      {componentProps?.helmet && <PrimaryHelmet {...componentProps.helmet} />}

      {topChildren}
      <div className="fd-page-layout-content-div" style={styles?.contentDiv}>
        {title && <h1 style={styles?.title}>{title}</h1>}
        {children}
      </div>
      {bottomChildren}
    </div>
  )
}

export default PageLayout
