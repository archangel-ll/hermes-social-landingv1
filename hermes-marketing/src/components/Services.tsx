import { services } from '../data/services'
import { retainerPlans } from '../data/retainers'
import type { ServiceCard, RetainerPlan } from '../types'
import styles from './Services.module.css'

function ServiceCardItem({ card }: { card: ServiceCard }) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{card.icon}</span>
      <div className={styles.name}>{card.name}</div>
      <div className={styles.desc}>{card.description}</div>
      <div className={styles.price}>{card.priceRange}</div>
    </div>
  )
}

function RetainerCard({ plan }: { plan: RetainerPlan }) {
  return (
    <div className={`${styles.retainer} ${plan.featured ? styles.featured : ''}`}>
      <div className={styles.tier}>{plan.tier}</div>
      <div className={styles.retainerPrice}>
        <sup>$</sup>{plan.price.toLocaleString()}
      </div>
      <div className={styles.perMonth}>per month</div>
      <ul className={styles.features}>
        {plan.features.map((f) => (
          <li key={f}>
            <span className={styles.check}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={plan.ctaHref}
        className={`${styles.cta} ${plan.ctaVariant === 'solid' ? styles.ctaSolid : styles.ctaOutline}`}
      >
        {plan.ctaLabel}
      </a>
    </div>
  )
}

export default function Services() {
  return (
    <>
      {/* One-Off Packages */}
      <section className={styles.section} id="services">
        <div className={styles.sectionLabel}>What We Offer</div>
        <h2 className={styles.title}>
          One-Off <em>Packages</em>
        </h2>
        <p className={styles.subtitle}>No retainer needed. Order what you need, when you need it.</p>
        <div className={styles.cardGrid}>
          {services.map((s) => (
            <ServiceCardItem key={s.name} card={s} />
          ))}
        </div>
      </section>

      {/* Retainers */}
      <section className={styles.section} id="retainers" style={{ borderTop: '1px solid var(--border)' }}>
        <div className={styles.sectionLabel}>Monthly Retainers</div>
        <h2 className={styles.title}>
          Grow With a <em>Partner</em>
        </h2>
        <p className={styles.subtitle}>
          Consistent content, consistent growth. Pick the plan that fits your brand.
        </p>
        <div className={styles.retainerGrid}>
          {retainerPlans.map((p) => (
            <RetainerCard key={p.tier} plan={p} />
          ))}
        </div>
      </section>
    </>
  )
}
