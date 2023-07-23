import styles from './Navbar1.module.css'
import { useState } from 'react'
import PrimaryNavbarBase, { MenuType } from './base/PrimaryNavbarBase'

export interface Props {
  LinkComponent: any
  headerProps?: HeaderProps
  headerElement?: any
  navItems: NavItem[]
  actionType?: ActionType
  actionProfileProps?: ActionProfileProps
  actionElement?: any
  menuType?: MenuType
}

export interface HeaderProps {
  linkProps?: any
  imgSrc: string
  label?: string
}

export interface NavItem {
  linkProps?: any
  label: string
}

export enum ActionType {
  None = 0,
  Own = 1,
  Profile = 2
}

export interface ActionProfileProps {
  profileLabel: string
  profileLinkProps?: any
  logoutLabel: string
  logoutLinkProps?: any
}

export default function Navbar1({
  LinkComponent,
  headerProps = { linkProps: {}, imgSrc: '', label: '' },
  headerElement = null,
  navItems,
  actionType = ActionType.None,
  actionProfileProps,
  actionElement = <></>,
  menuType = MenuType.Absolute
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const getActionElement = () => {
    switch (actionType) {
      case ActionType.None:
        return <></>
      case ActionType.Own:
        return actionElement
      case ActionType.Profile:
        return (
          <>
            <LinkComponent
              {...actionProfileProps?.profileLinkProps}
              className={styles.profileLabel}
              onClick={() => setIsOpen(false)}
            >
              {actionProfileProps?.profileLabel}
            </LinkComponent>
            <LinkComponent
              {...actionProfileProps?.logoutLinkProps}
              className={styles.actionLink}
              onClick={() => setIsOpen(false)}
            >
              {actionProfileProps?.logoutLabel}
            </LinkComponent>
          </>
        )
      default:
        return <></>
    }
  }

  return (
    <PrimaryNavbarBase
      menuType={menuType}
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      headerElement={
        headerElement ? (
          headerElement
        ) : (
          <LinkComponent {...headerProps.linkProps} style={{ display: 'flex' }} onClick={() => setIsOpen(false)}>
            <div className={styles.headerDiv}>
              <img src={headerProps.imgSrc} alt="logo" />
              {headerProps.label && <h2>{headerProps.label}</h2>}
            </div>
          </LinkComponent>
        )
      }
      navElement={
        <ul className={styles.navUl}>
          {navItems.map((item, index) => (
            <li key={index}>
              <LinkComponent {...item.linkProps} className={styles.navLink} onClick={() => setIsOpen(false)}>
                {item.label}
              </LinkComponent>
            </li>
          ))}
        </ul>
      }
      actionElement={<div className={styles.actionDiv}>{getActionElement()}</div>}
      containerStyle={{
        background: 'var(--fastdo-light-color)'
      }}
      actionSlidingDivMobileStyle={{
        background: 'var(--fastdo-light-color)',
        paddingTop: '2.6rem'
      }}
      navContainerMobileStyle={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '0.6rem',
        borderBottom: '1px var(--fastdo-gray1-color) solid'
      }}
    />
  )
}
