import type { AddOn, ProofStat } from '../types'

export const addOns: AddOn[] = [
  { price: '+50%', name: 'Rush Delivery', description: '24-hour guaranteed turnaround' },
  { price: '$25', name: 'Extra Revision', description: 'Per video, after delivery' },
  { price: '$25/video', name: 'Hook Copywriting', description: 'Scroll-stopping platform copy' },
  { price: '$50/mo', name: 'Platform Optimization', description: 'TikTok, Reels, Shorts formats' },
  { price: '$150', name: 'Strategy Consult', description: 'Full content roadmap, one session' },
]

export const proofStats: ProofStat[] = [
  {
    value: '48H',
    label: 'Average Delivery Time',
    description: 'From brief to delivered video, faster than any agency in Toronto.',
  },
  {
    value: '3X',
    label: 'Average Engagement Lift',
    description: 'Hook-first content consistently outperforms generic brand posts.',
  },
  {
    value: '94%',
    label: 'Client Retention Rate',
    description: 'Clients stay because the content works. Simple as that.',
  },
]

export const marqueeItems: string[] = [
  'TikTok Content',
  'Instagram Reels',
  'YouTube Shorts',
  'Viral Hooks',
  'Brand Strategy',
  'Fast Delivery',
  'High Conversion',
  'Toronto Agency',
]
