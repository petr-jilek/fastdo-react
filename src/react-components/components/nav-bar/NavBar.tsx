import styles from "./NavBar.module.css"
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { Button } from '../form/buttons/Button';
import { useTranslation } from 'react-i18next';
import React from "react";

interface Props {
    items: NavItem[],
    homeItem?: NavItem | null,
    homeLogo?: string | null,
    homeLogoLink?: string | null,
    homeLogoTop?: number,
    homeLogoLeft?: number,
    buttonItems?: NavButtonItem[],
    navTopDefault?: number | undefined,
    openMenuIconPaddingTop?: number,
    lightRoutes?: string[],
    languages?: string[]
}

export interface NavItem {
    to: string,
    text: string,
}

export interface NavButtonItem {
    to: string,
    text: string,
    outlined: boolean,
    onClick?: () => void,
}

export default function NavBar({
    items,
    homeItem = null,
    homeLogo = null,
    homeLogoLink = null,
    homeLogoTop = 0,
    homeLogoLeft = 0,
    buttonItems = [],
    navTopDefault = -30,
    openMenuIconPaddingTop = 0,
    lightRoutes = [],
    languages = []
}: Props) {
    const location = useLocation()
    const { i18n } = useTranslation()

    const [isOpen, setIsOpen] = useState(false)
    const [navTop, setNavTop] = useState(navTopDefault)
    const [showLanguageSelection, setShowLanguageSelection] = useState(false)
    const [currentLanguageLabel, setCurrentLanguageLabel] = useState('CZ')

    useEffect(() => {
        var lang = localStorage.getItem('lang')
        if (lang) {
            i18n.changeLanguage(lang)
            setCurrentLanguageLabel(lang.toUpperCase())
        }
    }, [i18n])

    const open = () => {
        setIsOpen(true)
        setNavTop(0)
    }

    const close = () => {
        setIsOpen(false)
        setNavTop(navTopDefault);
    }

    const changeLanguage = (value: string) => {
        i18n.changeLanguage(value)
        localStorage.setItem('lang', value)
        setCurrentLanguageLabel(value.toUpperCase())
        setShowLanguageSelection(false)
        close()
    }

    const lightStyle = lightRoutes.some(_ => location.pathname.match(_)) || isOpen
        ? { color: "var(--primary-white-color)" }
        : {}

    return (
        <div className={styles.component}>
            <div className={styles.logoDiv}>
                {
                    homeLogo
                        ? homeLogoLink
                            ? <Link to={homeLogoLink} onClick={close}>
                                <img src={homeLogo} alt="logo" className={styles.homeLogoImg} style={{ top: homeLogoTop + "rem", left: homeLogoLeft + "rem" }} />
                            </Link>
                            : <img src={homeLogo} alt="logo" className={styles.homeLogoImg} style={{ top: homeLogoTop + "rem", left: homeLogoLeft + "rem" }} />
                        : homeItem
                            ? <Link to={homeItem.to} onClick={close} style={lightStyle}>{homeItem.text}</Link>
                            : <Link to='/' onClick={close} style={lightStyle}>Home</Link>
                }
            </div>

            <nav style={{ top: navTop + "rem" }}>
                <ul>
                    {items.map((item, index) =>
                        <li key={index}>
                            <Link to={item.to} onClick={close} style={lightStyle}>{item.text}</Link>
                        </li>
                    )}
                    {buttonItems.map((item, index) =>
                        <li key={index}>
                            {
                                item.onClick
                                    ? <Button label={item.text} outlined={item.outlined} smallPadding={true} onClick={() => {
                                        close()
                                        item.onClick!()
                                    }} />
                                    : <Button link={item.to} label={item.text} outlined={item.outlined} smallPadding={true} onClick={close} />
                            }
                        </li>
                    )}

                    {
                        languages.length > 0
                            ? <li style={{ ...lightStyle, ...{ position: "relative" } }} className={styles.languagesLi}>
                                <p
                                    className={styles.languageCurrentP}
                                    onClick={() => setShowLanguageSelection(_ => !_)}
                                >
                                    {currentLanguageLabel}
                                </p>
                                {
                                    showLanguageSelection
                                        ? <div className={styles.languagesContainerDiv}>
                                            {languages.map((item, index) => (
                                                <React.Fragment key={item}>
                                                    <p onClick={() => changeLanguage(item)}>{item.toUpperCase()}</p>
                                                    {index !== languages.length - 1
                                                        ? <div className={styles.languagesSeparatorDiv} />
                                                        : <></>}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        : <></>
                                }
                            </li> : <></>
                    }

                    {
                        languages.length > 0
                            ? <li className={styles.languagesMobileLi}>
                                <div className={styles.languagesContainerMobileDiv}>
                                    {languages.map((item, index) => (
                                        <React.Fragment key={item}>
                                            <p onClick={() => changeLanguage(item)}>{item.toUpperCase()}</p>
                                            {index !== languages.length - 1
                                                ? <div className={styles.languagesSeparatorMobileDiv} />
                                                : <></>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </li> : <></>
                    }
                </ul>
            </nav>

            <div className={styles.iconDiv} style={{ paddingTop: openMenuIconPaddingTop + "rem" }}>
                {
                    isOpen
                        ? <RiCloseFill onClick={close} style={lightStyle} className={styles.closeMenuIcon} />
                        : <HiMenu onClick={open} style={lightStyle} />
                }
            </div>
        </div>
    );
}
