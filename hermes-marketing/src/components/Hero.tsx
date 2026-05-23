import styles from './Hero.module.css'

const CAL_LINK = 'https://cal.com/consultinghermes/15min'

const heroStats = [
  { value: '94%', label: 'Client Retention' },
  { value: '48H', label: 'Turnaround' },
  { value: '3X', label: 'Avg Engagement' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.videoBg}>
        {/* Replace with: <video autoPlay muted loop playsInline src="/assets/hero-bg.mp4" /> */}
        <div className={styles.videoPlaceholder} />
      </div>

      <div className={styles.content}>
        <div className={`${styles.eyebrow} fu`}>Short-Form Content Agency &mdash; Toronto</div>
        <h1 className={`${styles.h1} fu d1`}>
          We Don't<br />
          Make <span className={styles.outline}>AI</span><br />
          <span className={styles.igold}>Videos.</span>
        </h1>
        <p className={`${styles.sub} fu d2`}>
          Strategic short-form content that stops the scroll, builds your brand, and drives real
          business results.
        </p>
        <div className={`${styles.actions} fu d3`}>
          <a href={CAL_LINK} className={styles.btnGold}>Book a Free Call</a>
          <a href="#showcase" className={styles.btnOutline}>See Our Work ↓</a>
        </div>
      </div>

      <div className={`${styles.stats} fu d4`}>
        {heroStats.map((s) => (
          <div key={s.label}>
            <div className={styles.statNum}>{s.value}</div>
            <div className={styles.statLbl}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
