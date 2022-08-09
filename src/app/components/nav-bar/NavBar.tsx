import styles from "./NavBar.module.css"
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import PrimaryButton from '../form/buttons/Button';

interface Props {
    items: NavItem[],
    homeItem?: NavItem | null,
    buttonItems?: NavButtonItem[],
    navTopDefault?: number | undefined,
    lightRoutes?: string[],
}

export interface NavItem {
    to: string,
    text: string,
}

export interface NavButtonItem {
    to: string,
    text: string,
    outlined: boolean,
}

export default function NavBar({
    items,
    homeItem = null,
    buttonItems = [],
    navTopDefault = -30,
    lightRoutes = []
}: Props) {
    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false)
    const [navTop, setNavTop] = useState(navTopDefault)

    const open = () => {
        setIsOpen(true)
        setNavTop(0)
    }

    const close = () => {
        setIsOpen(false)
        setNavTop(navTopDefault);
    }

    const lightStyle = lightRoutes.some(_ => location.pathname.match(_)) || isOpen
        ? { color: "white" }
        : {}

    return (
        <div className={styles.component}>
            <div className={styles.logoDiv}>
                {
                    homeItem
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
                            <PrimaryButton link={item.to} label={item.text} outlined={item.outlined} smallPadding={true} onClick={close} />
                        </li>
                    )}
                </ul>
            </nav>

            <div className={styles.iconDiv}>
                {isOpen ? <RiCloseFill onClick={close} style={lightStyle} /> : <HiMenu onClick={open} style={lightStyle} />}
            </div>
        </div>
    );
}
