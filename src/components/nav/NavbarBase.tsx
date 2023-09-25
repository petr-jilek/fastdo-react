import useIsLessWidth from '../../hooks/useIsLessWidth'
import { RiCloseFill } from 'react-icons/ri'
import { HiMenu } from 'react-icons/hi'
import react from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import useHideOnScroll from '../../hooks/useHideOnScroll'

export interface Props {
  positionType?: PositionType
  scrollHidingType?: ScrollHidingType
  smallScreen?: number
  marginTopClose?: number
  marginTopOpen?: number
  topScrollHide?: number
  open?: boolean
  onOpenIconClick?: () => void
  onCloseIconClick?: () => void
  onOutsideClick?: () => void
  navChildren?: React.ReactNode
  headerChildren?: React.ReactNode
  actionChrildren?: React.ReactNode
  styles?: StyleProps
}

export interface StyleProps {
  component?: React.CSSProperties
  content?: React.CSSProperties
  header?: React.CSSProperties
  nav?: React.CSSProperties
  action?: React.CSSProperties
  smallScreenComponent?: React.CSSProperties
  smallScreenHeaderContainer?: React.CSSProperties
  smallScreenHeader?: React.CSSProperties
  smallScreenIcons?: React.CSSProperties
  smallScreenOpenIcon?: React.CSSProperties
  smallScreenCloseIcon?: React.CSSProperties
  smallScreenNavActionContainer?: React.CSSProperties
  smallScreenNav?: React.CSSProperties
  smallScreenAction?: React.CSSProperties
}

export enum PositionType {
  relative = 'relative',
  absolute = 'absolute',
  fixed = 'fixed'
}

export enum ScrollHidingType {
  none = 'none',
  hide = 'hide',
  hideBigScreen = 'hideBigScreen',
  hideSmallScreen = 'hideSmallScreen'
}

const NavbarBase: React.FC<Props> = ({
  positionType = PositionType.fixed,
  scrollHidingType = ScrollHidingType.none,
  smallScreen = 1100,
  marginTopClose = 300,
  marginTopOpen = 50,
  topScrollHide = 100,
  open = false,
  onOpenIconClick = () => {},
  onCloseIconClick = () => {},
  onOutsideClick = () => {},
  navChildren,
  headerChildren,
  actionChrildren,
  styles = {}
}: Props) => {
  const { isLessWidth } = useIsLessWidth(smallScreen)

  const ref = react.useRef(null)
  useClickOutside(ref, onOutsideClick)

  const { show } = useHideOnScroll()

  if (isLessWidth)
    return (
      <div
        ref={ref}
        className={'fd-navbar-base ' + `fd-position-${positionType}`}
        style={{
          padding: positionType === PositionType.relative ? '0' : 'var(--fd-padding-1) var(--fd-padding-3)',
          top:
            scrollHidingType === ScrollHidingType.hide || scrollHidingType === ScrollHidingType.hideSmallScreen
              ? show || open
                ? '0'
                : `-${topScrollHide}px`
              : '0',
          ...styles.smallScreenComponent
        }}
      >
        <div
          className={'fd-navbar-base-small-screen-header-container ' + `fd-position-${positionType}`}
          style={{
            top:
              scrollHidingType === ScrollHidingType.hide || scrollHidingType === ScrollHidingType.hideSmallScreen
                ? show || open
                  ? '0'
                  : `-${topScrollHide}px`
                : '0',
            ...styles.smallScreenHeaderContainer
          }}
        >
          <div style={styles.smallScreenHeader}>{headerChildren}</div>
          <div className="fd-navbar-base-small-screen-icons" style={styles.smallScreenIcons}>
            {open ? (
              <RiCloseFill
                onClick={onCloseIconClick}
                className="fd-navbar-base-icon"
                style={styles.smallScreenCloseIcon}
              />
            ) : (
              <HiMenu onClick={onOpenIconClick} className="fd-navbar-base-icon" style={styles.smallScreenOpenIcon} />
            )}
          </div>
        </div>
        <div
          className="fd-navbar-base-small-screen-nav-action-container"
          style={{
            marginTop: open ? `${marginTopOpen}px` : `-${marginTopClose}px`,
            ...styles.smallScreenNavActionContainer
          }}
        >
          <nav style={styles.smallScreenNav}>{navChildren}</nav>
          <div style={styles.smallScreenAction}>{actionChrildren}</div>
        </div>
      </div>
    )

  return (
    <div
      className={'fd-navbar-base ' + `fd-position-${positionType}`}
      style={{
        padding: 'var(--fd-padding-1) var(--fd-padding-3)',
        top:
          scrollHidingType === ScrollHidingType.hide || scrollHidingType === ScrollHidingType.hideBigScreen
            ? show
              ? '0'
              : `-${topScrollHide}px`
            : '0',
        ...styles.component
      }}
    >
      <div className="fd-navbar-base-content" style={styles.content}>
        <div style={styles.header}>{headerChildren}</div>
        <nav className="fd-center-absolute" style={styles.nav}>
          {navChildren}
        </nav>
        <div style={styles.action}>{actionChrildren}</div>
      </div>
    </div>
  )
}

export default NavbarBase
