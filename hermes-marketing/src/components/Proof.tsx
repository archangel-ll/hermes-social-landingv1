import { proofStats, addOns } from '../data/content'
import styles from './Proof.module.css'

export default function Proof() {
  return (
    <section className={styles.section} id="proof">
      <div className={styles.sectionLabel}>Why Hermes</div>
      <h2 className={styles.title}>
        Numbers That <em>Matter</em>
      </h2>
      <p className={styles.subtitle}>Real metrics. Real results. Real impact on your brand.</p>

      <div className={styles.statsGrid}>
        {proofStats.map((s) => (
          <div key={s.label} className={styles.statCard}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
            <div className={styles.statDesc}>{s.description}</div>
          </div>
        ))}
      </div>

      <div className={styles.sectionLabel} style={{ marginBottom: '1rem' }}>Add-Ons</div>
      <h2 className={styles.addOnTitle}>Enhance Any Package</h2>
      <p className={styles.subtitle}>Bolt these onto any plan.</p>

      <div className={styles.addOnGrid}>
        {addOns.map((a) => (
          <div key={a.name} className={styles.addOnCard}>
            <div className={styles.addOnPrice}>{a.price}</div>
            <div className={styles.addOnName}>{a.name}</div>
            <div className={styles.addOnDesc}>{a.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
