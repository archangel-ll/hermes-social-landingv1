import styles from './CTA.module.css'

const CAL_LINK = 'https://cal.com/consultinghermes/15min'

export default function CTA() {
  return (
    <section className={styles.section} id="book">
      <div className={styles.videoBg}>
        {/* Replace with: <video autoPlay muted loop playsInline src="/assets/cta-bg.mp4" /> */}
        <div className={styles.videoPlaceholder} />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.eyebrow}>Free 20-Minute Strategy Call</div>
        <h2 className={styles.heading}>
          Ready to<br />
          <em>Stop Scrolling</em><br />
          Past Mediocre?
        </h2>
        <p className={styles.body}>
          Book a free call. We&apos;ll map out a content strategy built specifically for your brand
          and show you exactly what&apos;s possible.
        </p>
        <div className={styles.actions}>
          <a href={CAL_LINK} className={styles.btnGold}>Book Your Free Call</a>
          <a href="mailto:support@consultinghermes.com" className={styles.btnOutline}>
            Email Us Instead
          </a>
        </div>
      </div>
    </section>
  )
}
