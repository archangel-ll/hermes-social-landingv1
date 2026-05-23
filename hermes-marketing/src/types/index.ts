export interface ServiceCard {
  icon: string
  name: string
  description: string
  priceRange: string
}

export interface RetainerFeature {
  text: string
}

export interface RetainerPlan {
  tier: string
  price: number
  featured?: boolean
  features: string[]
  ctaLabel: string
  ctaHref: string
  ctaVariant: 'solid' | 'outline'
}

export interface AddOn {
  price: string
  name: string
  description: string
}

export interface ProofStat {
  value: string
  label: string
  description: string
}

export interface ShowcaseImage {
  src: string
  alt: string
  tag: string
}

export interface ShowcaseVideo {
  src: string
  tag: string
}
