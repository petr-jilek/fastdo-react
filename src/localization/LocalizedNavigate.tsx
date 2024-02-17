import { Navigate, NavigateProps } from 'react-router-dom'

import { buildLocalizedPath } from './localization'

export default function LocalizedNavigate(props: NavigateProps) {
  return <Navigate {...props} to={buildLocalizedPath(props.to as string)}></Navigate>
}
