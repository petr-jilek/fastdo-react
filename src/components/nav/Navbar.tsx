import { useState } from 'react'
import NavbarBase, { type Props as NavbarBaseProps } from './NavbarBase'

export interface Props {
  LinkElement: any
  navbarBaseProps?: NavbarBaseProps
  navItems: NavItem[]
}

export interface NavItem {
  label: string
  linkProps?: any
}

export interface ActionProfileProps {
  profileLabel: string
  profileLinkProps?: any
  logoutLabel: string
  logoutLinkProps?: any
}

const Navbar: React.FC<Props> = ({ LinkElement, navbarBaseProps, navItems }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <NavbarBase
      {...navbarBaseProps}
      open={open}
      onOpenIconClick={() => {
        setOpen(true)
      }}
      onCloseIconClick={() => {
        setOpen(false)
      }}
      onOutsideClick={() => {
        setOpen(false)
      }}
      navChildren={
        <ul className="fd-navbar-ul">
          {navItems.map((item, index) => (
            <li key={index}>
              <LinkElement
                {...item.linkProps}
                className="fd-navbar-link"
                onClick={() => {
                  setOpen(false)
                }}
              >
                {item.label}
              </LinkElement>
            </li>
          ))}
        </ul>
      }
    />
  )
}

export default Navbar
