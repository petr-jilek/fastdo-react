import styles from './PrimaryNavbarBase.module.css'
import useIsLessWidth from '../../../hooks/useIsLessWidth'
import { RiCloseFill } from 'react-icons/ri'
import { HiMenu } from 'react-icons/hi'
import { useMemo } from 'react'

export interface Props {
  navElement: any
  headerElement?: any
  actionElement?: any
  menuType?: MenuType
  containerStyle?: React.CSSProperties
  actionSlidingDivMobileStyle?: React.CSSProperties
  navContainerMobileStyle?: React.CSSProperties
  slideTopClose?: number
  slideTopOpen?: number
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export enum MenuType {
  Relative = 0,
  Absolute = 1,
  Fixed = 2,
  FixedHiding = 3,
  FixedHidingBigScreen = 4,
  FixedHidingSmallScreen = 5
}

export default function PrimaryNavbarBase({
  navElement,
  headerElement = <></>,
  actionElement = <></>,
  menuType = MenuType.Absolute,
  containerStyle = {},
  actionSlidingDivMobileStyle = {},
  navContainerMobileStyle = {},
  slideTopClose = -30,
  isOpen = false,
  onOpen = () => {},
  onClose = () => {}
}: Props) {
  const { isLessWidth } = useIsLessWidth(1101)

  const containerClass = useMemo(() => {
    switch (menuType) {
      case MenuType.Relative:
        return styles.componentRelative
      case MenuType.Absolute:
        return styles.componentAbsolute
      case MenuType.Fixed:
        return styles.componentFixed
      case MenuType.FixedHiding:
        return styles.componentFixedHiding
      case MenuType.FixedHidingBigScreen:
        return styles.componentFixedHidingBigScreen
      case MenuType.FixedHidingSmallScreen:
        return styles.componentFixedHidingSmallScreen
      default:
        return styles.componentAbsolute
    }
  }, [menuType])

  if (isLessWidth)
    return (
      <div className={styles.componentMobile + ' ' + containerClass} style={containerStyle}>
        <div className={styles.headerDivMobile}>{headerElement}</div>
        <div
          className={styles.actionSlidingDivMobile}
          style={{ ...actionSlidingDivMobileStyle, top: isOpen ? '0' : `${slideTopClose}rem` }}
        >
          <nav className={styles.navContainerMobile} style={navContainerMobileStyle}>
            {navElement}
          </nav>
          <div className={styles.actionDivMobile}>{actionElement}</div>
        </div>
        <div className={styles.openCloseIconDiv}>
          {isOpen ? (
            <RiCloseFill onClick={onClose} className={styles.closeMenuIcon} />
          ) : (
            <HiMenu onClick={onOpen} className={styles.openMenuIcon} />
          )}
        </div>
      </div>
    )

  return (
    <div className={styles.component + ' ' + containerClass} style={containerStyle}>
      <div className={styles.headerDiv}>{headerElement}</div>
      <nav className={styles.navContainer}>{navElement}</nav>
      <div className={styles.actionDiv}>{actionElement}</div>
    </div>
  )
}
