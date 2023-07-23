import modules from './NavbarBase.module.css'
import useIsLessWidth from '../../hooks/useIsLessWidth'
import { RiCloseFill } from 'react-icons/ri'
import { HiMenu } from 'react-icons/hi'
import { useMemo, useState } from 'react'

export interface Props {
  positionType?: PositionType
  smallScreen?: number
  topClose?: number
  topOpen?: number
  navChildren?: React.ReactNode
  headerChildren?: React.ReactNode
  actionChrildren?: React.ReactNode
  // containerStyle?: React.CSSProperties
  // actionSlidingDivMobileStyle?: React.CSSProperties
  // navContainerMobileStyle?: React.CSSProperties
  // slideTopClose?: number
  // slideTopOpen?: number
  // isOpen?: boolean
  // onOpen?: () => void
  // onClose?: () => void
}

export enum PositionType {
  Relative = 'relative',
  Absolute = 'absolute',
  Fixed = 'fixed'
}

const NavbarBase: React.FC<Props> = ({
  positionType = PositionType.Fixed,
  smallScreen = 1101,
  topClose = 300,
  topOpen = 50,
  navChildren,
  headerChildren,
  actionChrildren
}: // menuType = MenuType.Absolute,
// containerStyle = {},
// actionSlidingDivMobileStyle = {},
// navContainerMobileStyle = {},
// slideTopClose = -30,
// isOpen = false,
// onOpen = () => {},
// onClose = () => {}
Props) => {
  const { isLessWidth } = useIsLessWidth(smallScreen)

  const [open, setOpen] = useState(false)

  const handleOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  if (isLessWidth)
    return (
      <div className={'fd-navbar-base ' + `fd-position-${positionType}`}>
        <div className="fd-navbar-base-small-screen-header">
          <div>{headerChildren}</div>
          <div className="fd-navbar-base-small-screen-icons">
            {open ? (
              <RiCloseFill onClick={handleClose} className="fd-navbar-base-icon" />
            ) : (
              <HiMenu onClick={handleOpen} className="fd-navbar-base-icon" />
            )}
          </div>
        </div>
        <div
          style={{ marginTop: open ? `${topOpen}px` : `-${topClose}px` }}
          className="fd-navbar-base-small-screen-nav-action-container"
        >
          <nav>{navChildren}</nav>
          <div>{actionChrildren}</div>
        </div>
      </div>
    )

  return (
    <div className={'fd-navbar-base ' + `fd-position-${positionType}`}>
      <div className="fd-navbar-base-content">
        <div className="fd-navbar-base-header">{headerChildren}</div>
        <nav className="fd-navbar-base-nav fd-center-absolute">{navChildren}</nav>
        <div className="fd-navbar-base-action">{actionChrildren}</div>
      </div>
    </div>
  )
}

export default NavbarBase
