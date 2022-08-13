import { Navigate, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
    children: JSX.Element;
}

export default function PrivateRoute({ children }: Props) {
    const token = window.localStorage.getItem('identity_token')

    if (!token)
        return <Navigate to="/" />
    return children
}
