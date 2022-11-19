import { Navigate, RouteProps } from "react-router-dom"

type Props = RouteProps & {
  children: JSX.Element
}

export default function PrivateRoute({ children }: Props) {
  const token = window.localStorage.getItem("identity_token")

  if (!token) return <Navigate to="/404" />
  return children
}
