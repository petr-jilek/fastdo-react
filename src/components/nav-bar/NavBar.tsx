import styles from "./NavBar.module.css"
import { useEffect, useState } from "react"
import { HiMenu } from "react-icons/hi"
import { RiCloseFill } from "react-icons/ri"
import Button from "../form/buttons/Button"
import React from "react"
import useComponentVisible from "../../hooks/useComponentVisible"

interface Props {
  items: NavItem[]
  homeItem?: NavItem | null
  homeLogo?: string | null
  homeLogoLink?: string | null
  homeLogoTop?: number
  homeLogoLeft?: number
  homeLogoMaxWidth?: number
  buttonItems?: NavButtonItem[]
  navTopDefault?: number | undefined
  openMenuIconPaddingTop?: number
  lightRoutes?: string[]
  languages?: string[]
  language?: string
  onLanguageChange?: (value: string) => void
  menuType?: MenuType
  darkThemeSelected?: boolean
  themeSwitcher?: boolean
  onThemeChange?: () => void
  Link: React.ElementType
  location: any
}

export enum MenuType {
  Absolute = 0,
  Flex = 1,
}

export interface NavItem {
  to: string
  text: string
}

export interface NavButtonItem {
  to: string
  text: string
  outlined: boolean
  onClick?: () => void
}

export default function NavBar({
  items,
  homeItem = null,
  homeLogo = null,
  homeLogoLink = null,
  homeLogoTop = 0,
  homeLogoLeft = 0,
  homeLogoMaxWidth = 150,
  buttonItems = [],
  navTopDefault = -30,
  openMenuIconPaddingTop = 0,
  lightRoutes = [],
  languages = [],
  language = "",
  onLanguageChange = () => {},
  menuType = MenuType.Absolute,
  darkThemeSelected = false,
  themeSwitcher = false,
  onThemeChange = () => {},
  Link,
  location,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [navTop, setNavTop] = useState(navTopDefault)
  const [showLanguageSelection, setShowLanguageSelection] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(language)

  const { ref } = useComponentVisible(true, () => close())

  const open = () => {
    setIsOpen(true)
    setNavTop(0)
  }

  const close = () => {
    setIsOpen(false)
    setNavTop(navTopDefault)
  }

  const changeLanguage = (value: string) => {
    onLanguageChange(value)
    setCurrentLanguage(value)
    setShowLanguageSelection(false)
    close()
  }

  const [lastScrollY, setLastScrollY] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY < 100) setShow(true)
        if (window.scrollY > lastScrollY) {
          if (window.scrollY > 100)
            // if scroll down hide the navbar
            setShow(false)
        } else {
          // if scroll up show the navbar
          setShow(true)
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY)
      }
    }

    if (menuType === MenuType.Flex) {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", controlNavbar)

        // cleanup function
        return () => {
          window.removeEventListener("scroll", controlNavbar)
        }
      }
    }
  }, [lastScrollY, menuType])

  const lightStyle =
    lightRoutes.some((_) => location.pathname.match(_)) || isOpen ? { color: "var(--primary-white-color)" } : {}

  return (
    <div
      className={[
        styles.component,
        menuType === MenuType.Absolute ? styles.componentAbsolute : "",
        menuType === MenuType.Flex ? (show || isOpen ? styles.componentFlex : styles.componentFlexHidden) : "",
      ].join(" ")}
      ref={ref}
    >
      <div className={styles.logoDiv}>
        {homeLogo ? (
          homeLogoLink ? (
            <Link to={homeLogoLink} onClick={close}>
              <img
                src={homeLogo}
                alt="logo"
                loading="lazy"
                className={styles.homeLogoImg}
                title="Logo"
                style={{
                  top: homeLogoTop + "rem",
                  left: homeLogoLeft + "rem",
                  maxWidth: homeLogoMaxWidth + "px",
                  maxHeight: menuType === MenuType.Flex ? "52px" : "",
                }}
              />
            </Link>
          ) : (
            <img
              src={homeLogo}
              alt="logo"
              className={styles.homeLogoImg}
              style={{ top: homeLogoTop + "rem", left: homeLogoLeft + "rem", maxWidth: homeLogoMaxWidth + "px" }}
            />
          )
        ) : homeItem ? (
          <Link to={homeItem.to} onClick={close} style={lightStyle}>
            {homeItem.text}
          </Link>
        ) : (
          <Link to="/" onClick={close} style={lightStyle}>
            Home
          </Link>
        )}
      </div>

      <nav style={{ top: navTop + "rem" }}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.to} onClick={close} style={lightStyle}>
                {item.text}
              </Link>
            </li>
          ))}
          {/* {buttonItems.map((item, index) => (
            <li key={index}>
              {item.onClick ? (
                <Button
                  label={item.text}
                  outlined={item.outlined}
                  smallPadding={true}
                  onClick={() => {
                    close()
                    item.onClick!()
                  }}
                />
              ) : (
                <Button link={item.to} label={item.text} outlined={item.outlined} smallPadding={true} onClick={close} />
              )}
            </li>
          ))} */}

          {languages.length > 0 ? (
            <li style={{ ...lightStyle, ...{ position: "relative" } }} className={styles.languagesLi}>
              <p className={styles.languageCurrentP} onClick={() => setShowLanguageSelection((_) => !_)}>
                {currentLanguage.toUpperCase()}
              </p>
              {showLanguageSelection ? (
                <div className={styles.languagesContainerDiv}>
                  {languages.map((item, index) => (
                    <React.Fragment key={item}>
                      <p style={{ color: "var(--primary-menu-color)" }} onClick={() => changeLanguage(item)}>
                        {item.toUpperCase()}
                      </p>
                      {index !== languages.length - 1 ? <div className={styles.languagesSeparatorDiv} /> : <></>}
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </li>
          ) : (
            <></>
          )}

          {languages.length > 0 ? (
            <li className={styles.languagesMobileLi}>
              <div className={styles.languagesContainerMobileDiv}>
                {languages.map((item, index) => (
                  <React.Fragment key={item}>
                    <p onClick={() => changeLanguage(item)}>{item.toUpperCase()}</p>
                    {index !== languages.length - 1 ? <div className={styles.languagesSeparatorMobileDiv} /> : <></>}
                  </React.Fragment>
                ))}
              </div>
            </li>
          ) : (
            <></>
          )}
          {themeSwitcher ? (
            <div style={{ padding: "4px 0" }}>
              {/* <PrimaryThemeSwitch value={darkThemeSelected} onChange={() => onThemeChange()} /> */}
            </div>
          ) : (
            <></>
          )}
        </ul>
      </nav>

      <div className={styles.iconDiv} style={{ paddingTop: openMenuIconPaddingTop + "rem" }}>
        {isOpen ? (
          <RiCloseFill onClick={close} style={lightStyle} className={styles.closeMenuIcon} />
        ) : (
          <HiMenu onClick={open} style={lightStyle} />
        )}
      </div>
    </div>
  )
}
