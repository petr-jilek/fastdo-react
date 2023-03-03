import styles from "./Navbar1.module.css"
import { useState } from "react"
import PrimaryNavbarBase, { MenuType } from "./base/PrimaryNavbarBase"

export interface Props {
  LinkComponent: any
  headerProps: HeaderProps
  navItems: NavItem[]
  actionType?: ActionType
  actionProfileProps?: ActionProfileProps
  actionElement?: any
  menuType?: MenuType
}

export interface HeaderProps {
  to: string
  imgSrc: string
  label?: string
}

export interface NavItem {
  to: string
  label: string
}

export enum ActionType {
  None = 0,
  Own = 1,
  Profile = 2,
}

export interface ActionProfileProps {
  profileLabel: string
  profileTo: string
  logoutLabel: string
  logoutTo: string
}

export default function Navbar1({
  LinkComponent,
  headerProps,
  navItems,
  actionType = ActionType.None,
  actionProfileProps,
  actionElement = <></>,
  menuType = MenuType.Absolute,
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
              to={actionProfileProps?.profileTo}
              href={actionProfileProps?.profileTo}
              className={styles.profileLabel}
              onClick={() => setIsOpen(false)}
            >
              {actionProfileProps?.profileLabel}
            </LinkComponent>
            <LinkComponent
              to={actionProfileProps?.logoutTo}
              href={actionProfileProps?.logoutTo}
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
      isOpen={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      headerElement={
        <LinkComponent
          to={headerProps.to}
          href={headerProps.to}
          style={{ display: "flex" }}
          onClick={() => setIsOpen(false)}
        >
          <div className={styles.headerDiv}>
            <img src={headerProps.imgSrc} alt="logo" />
            {headerProps.label && <h2>{headerProps.label}</h2>}
          </div>
        </LinkComponent>
      }
      navElement={
        <ul className={styles.navUl}>
          {navItems.map((item, index) => (
            <li key={index}>
              <LinkComponent to={item.to} href={item.to} className={styles.navLink} onClick={() => setIsOpen(false)}>
                {item.label}
              </LinkComponent>
            </li>
          ))}
        </ul>
      }
      menuType={menuType}
      actionElement={<div className={styles.actionDiv}>{getActionElement()}</div>}
      containerStyle={{
        background: "var(--fastdo-light-color)",
      }}
      actionSlidingDivMobileStyle={{
        background: "var(--fastdo-light-color)",
        paddingTop: "2.6rem",
      }}
      navContainerMobileStyle={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "0.6rem",
        borderBottom: "1px var(--fastdo-gray1-color) solid",
      }}
    />
  )
}
