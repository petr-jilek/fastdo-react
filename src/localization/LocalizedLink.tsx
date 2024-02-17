import { Link, LinkProps } from 'react-router-dom'

import { buildLocalizedPath } from './localization'

export default function LocalizedLink(props: LinkProps) {
  return <Link {...props} to={buildLocalizedPath(props.to as string)}></Link>
}
