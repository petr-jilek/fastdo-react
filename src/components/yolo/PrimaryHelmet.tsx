import { ReactNode } from "react"

type PropTypes = {
  HeadHelement: any
  title: string
  link: string
  imageCard: string
  ogType?: string
  largeTwitterCard?: boolean
  noIndex?: boolean
  children?: ReactNode
}

export default function PrimaryHelmet({
  HeadHelement,
  title,
  link,
  imageCard,
  ogType = "article",
  largeTwitterCard = false,
  noIndex = false,
  children = null,
}: PropTypes) {
  const metaRobots = noIndex ? "noindex, nofollow" : "index, follow"
  const twitterCardType = largeTwitterCard ? "summary_large_image" : "summary"

  return (
    <HeadHelement>
      <html lang="en" />
      <title>{title}</title>
      <link rel="canonical" href={link} />
      <meta name="robots" content={metaRobots} />

      {/* OG Tags */}
      {/* https://ogp.me/ */}
      <meta property="og:url" content={link} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imageCard} />

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
