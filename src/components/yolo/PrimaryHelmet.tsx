import { type ReactNode } from 'react'

export interface Props {
  HeadHelement: any
  title: string
  link: string
  imageCard: string
  description?: string
  lang?: string
  ogType?: string
  largeTwitterCard?: boolean
  noIndex?: boolean
  children?: ReactNode
}

const PrimaryHelmet: React.FC<Props> = ({
  HeadHelement,
  title,
  link,
  imageCard,
  description = '',
  lang = 'en',
  ogType = 'article',
  largeTwitterCard = false,
  noIndex = false,
  children = null
}: Props) => {
  const metaRobots = noIndex ? 'noindex, nofollow' : 'index, follow'
  const twitterCardType = largeTwitterCard ? 'summary_large_image' : 'summary'

  return (
    <HeadHelement>
      <html lang={lang} />
      <title>{title}</title>
      <link rel="canonical" href={link} />
      <meta name="robots" content={metaRobots} />
      {description && <meta name="description" content={description} />}

      {/* OG Tags */}
      {/* https://ogp.me/ */}
      <meta property="og:url" content={link} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imageCard} />
      {description && <meta property="og:description" content={description} />}

      {/* Twitter tags */}
      {/* https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started */}
      <meta property="twitter:site" content="twitter username of website" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:creator" content="twitter username of webpage content" />
      <meta property="twitter:card" content={twitterCardType} />
      <meta property="twitter:image" content={imageCard} />

      {/* https://moz.com/blog/meta-referrer-tag */}
      <meta name="referrer" content="origin-when-crossorigin" />

      {children}
    </HeadHelement>
  )
}

export default PrimaryHelmet
