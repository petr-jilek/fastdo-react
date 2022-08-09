import { Outlet } from "react-router-dom";
import { Button as MyButton } from "../../app/components/form/buttons/Button";
import NavBar, { NavButtonItem, NavItem } from "../../app/components/nav-bar/NavBar";

export default function HomeView() {
    const navItems: NavItem[] = [
        { to: "/cards", text: "Cards" },
        { to: "/form", text: "Form" },
        { to: "/quill", text: "Quill" },
        { to: "/raw", text: "Raw" },
    ];

    const navButtonItems: NavButtonItem[] = [
        { to: "/", text: "Home", outlined: false },
        { to: "/", text: "HomeOutlined", outlined: true },
    ]

    return (
        <>
            <NavBar
                items={navItems}
                buttonItems={navButtonItems}
                homeItem={{ to: "/", text: "react-components" }}
                navTopDefault={-40}
            />

            <div style={{
                paddingTop: "4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
            }} >
                <div style={{
                    maxWidth: "1000px",
                    width: "100%",
                    padding: "0 1rem"
                }}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}
