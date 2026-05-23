import styles from './Footer.module.css'

const HermesLogo = () => (
  <svg viewBox="0 0 36 36" fill="none" width="24" height="24">
    <path
      d="M18 3L22 12H32L24 18L27 28L18 22L9 28L12 18L4 12H14L18 3Z"
      fill="#C9A84C"
    />
  </svg>
)

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.logo}>
        <HermesLogo />
        <span className={styles.logoText}>Hermes Consulting</span>
      </a>
      <p className={styles.copy}>&copy; 2026 Consulting Hermes. Toronto, ON.</p>
      <p>
        <a href="mailto:support@consultinghermes.com" className={styles.email}>
          support@consultinghermes.com
        </a>
      </p>
    </footer>
  )
}
