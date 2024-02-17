import { Link, LinkProps } from 'react-router-dom'

import { buildLocalizedPath } from './localization'

export interface Props extends Omit<LinkProps, 'lang'> {
  lang?: string | null
}

export default function LocalizedLink({ lang = null, ...props }: Props) {
  return <Link {...props} to={buildLocalizedPath(props.to as string)}></Link>
}
