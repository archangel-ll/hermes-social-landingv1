import styles from './Strategy.module.css'

const CAL_LINK = 'https://cal.com/consultinghermes/15min'

const strategySteps = [
  {
    num: '01',
    title: 'Hook engineering',
    desc: 'First 2 seconds decide everything. We build for the stop.',
  },
  {
    num: '02',
    title: 'Platform-native storytelling',
    desc: 'TikTok, Reels, and Shorts each have their own language. We speak all three.',
  },
  {
    num: '03',
    title: 'Results-first editing',
    desc: 'Every cut, caption, and CTA is intentional. Nothing decorative.',
  },
]

export function StrategyLeft() {
  return (
    <div className={styles.split}>
      <div className={styles.visual}>
        <img src="/assets/img-10.png" alt="Strategy" loading="lazy" className={styles.imagePlaceholder} />
        <div className={styles.overlayRight} />
      </div>
      <div className={styles.content}>
        <div className={styles.sectionLabel}>Our Approach</div>
        <h2 className={styles.title}>
          Strategy Before <em>Everything</em>
        </h2>
        <p className={styles.body}>
          Every piece of content starts with a clear objective and works backward. Hook, story,
          CTA. Nothing accidental.
        </p>
        <ul className={styles.steps}>
          {strategySteps.map((s) => (
            <li key={s.num} className={styles.step}>
              <span className={styles.stepNum}>{s.num}</span>
              <div>
                <strong className={styles.stepTitle}>{s.title}</strong>
                <span className={styles.stepDesc}>{s.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function MindsetRight() {
  return (
    <div className={styles.split}>
      <div className={`${styles.content} ${styles.contentDark}`}>
        <div className={styles.sectionLabel}>The Mindset</div>
        <h2 className={styles.title}>
          Above the <em>Noise.</em><br />Always.
        </h2>
        <p className={styles.body}>
          You&apos;re not paying for software. You&apos;re investing in a partner who delivers
          content that makes a real impact on your brand and bottom line.
        </p>
        <blockquote className={styles.quote}>
          <p>&ldquo;We don&apos;t make AI videos. We make content that makes an impact.&rdquo;</p>
        </blockquote>
        <a href={CAL_LINK} className={styles.btnGold}>Start Your Campaign</a>
      </div>
      <div className={styles.visual}>
        <img src="/assets/img-11.png" alt="Above the clouds" loading="lazy" className={styles.imagePlaceholder} />
        <div className={styles.overlayLeft} />
      </div>
    </div>
  )
}
