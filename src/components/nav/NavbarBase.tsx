import modules from './NavbarBase.module.css'
import useIsLessWidth from '../../hooks/useIsLessWidth'
import { RiCloseFill } from 'react-icons/ri'
import { HiMenu } from 'react-icons/hi'
import { useEffect, useMemo, useState } from 'react'

export interface Props {
  positionType?: PositionType
  smallScreen?: number
  topClose?: number
  topOpen?: number
  open?: boolean
  onOpenIconClick?: () => void
  onCloseIconClick?: () => void
  onOutsideClick?: () => void
  navChildren?: React.ReactNode
  headerChildren?: React.ReactNode
  actionChrildren?: React.ReactNode
}

export enum PositionType {
  relative = 'relative',
  absolute = 'absolute',
  fixed = 'fixed'
}

const NavbarBase: React.FC<Props> = ({
  positionType = PositionType.fixed,
  smallScreen = 1101,
  topClose = 300,
  topOpen = 50,
  open = false,
  onOpenIconClick = () => {},
  onCloseIconClick = () => {},
  onOutsideClick = () => {},
  navChildren,
  headerChildren,
  actionChrildren
}: Props) => {
  const { isLessWidth } = useIsLessWidth(smallScreen)

  // handle onOutsideClick
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside)
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [])

  if (isLessWidth)
    return (
      <div
        className={'fd-navbar-base ' + `fd-position-${positionType}`}
        style={{ padding: positionType === PositionType.relative ? '0' : 'var(--fd-padding-1) var(--fd-padding-3)' }}
      >
        <div className={'fd-navbar-base-small-screen-header ' + `fd-position-${positionType}`}>
          <div>{headerChildren}</div>
          <div className="fd-navbar-base-small-screen-icons">
            {open ? (
              <RiCloseFill onClick={onCloseIconClick} className="fd-navbar-base-icon" />
            ) : (
              <HiMenu onClick={onOpenIconClick} className="fd-navbar-base-icon" />
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
    <div
      className={'fd-navbar-base ' + `fd-position-${positionType}`}
      style={{
        padding: 'var(--fd-padding-1) var(--fd-padding-3)'
      }}
    >
      <div className="fd-navbar-base-content">
        <div>{headerChildren}</div>
        <nav className="fd-center-absolute">{navChildren}</nav>
        <div>{actionChrildren}</div>
      </div>
    </div>
  )
}

export default NavbarBase
