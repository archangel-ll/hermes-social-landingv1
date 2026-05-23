import type { RetainerPlan } from '../types'

const CAL_LINK = 'https://cal.com/consultinghermes/15min'
const EMAIL_LINK = 'mailto:support@consultinghermes.com'

export const retainerPlans: RetainerPlan[] = [
  {
    tier: 'Starter',
    price: 500,
    features: [
      '4 x 15s marketing videos',
      'Basic captions and hooks',
      '1 revision per video',
      '48-hour delivery',
    ],
    ctaLabel: 'Get Started',
    ctaHref: CAL_LINK,
    ctaVariant: 'outline',
  },
  {
    tier: '⭐ Growth — Most Popular',
    price: 1200,
    featured: true,
    features: [
      '12 x 15s videos (mix of styles)',
      'Hook writing and captions',
      '2 revisions per video',
      'Basic performance report',
      'Priority delivery',
    ],
    ctaLabel: 'Book a Call',
    ctaHref: CAL_LINK,
    ctaVariant: 'solid',
  },
  {
    tier: 'Premium',
    price: 2500,
    features: [
      '20 x 15s videos',
      'Full content strategy',
      'Hook writing, captions, posting schedule',
      'Unlimited revisions',
      'Monthly strategy call',
    ],
    ctaLabel: 'Contact Us',
    ctaHref: EMAIL_LINK,
    ctaVariant: 'outline',
  },
]
