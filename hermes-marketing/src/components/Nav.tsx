import styles from './Nav.module.css'

const CAL_LINK = 'https://cal.com/consultinghermes/15min'

const HermesLogo = () => (
  <svg viewBox="0 0 36 36" fill="none" width="32" height="32">
    <path
      d="M18 3L22 12H32L24 18L27 28L18 22L9 28L12 18L4 12H14L18 3Z"
      fill="#C9A84C"
    />
  </svg>
)

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        <HermesLogo />
        <span className={styles.logoText}>Hermes Consulting</span>
      </a>
      <ul className={styles.navLinks}>
        <li><a href="#showcase">Work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#retainers">Pricing</a></li>
        <li><a href="#book">Contact</a></li>
      </ul>
      <a href={CAL_LINK} className={styles.navCta}>Book a Call</a>
    </nav>
  )
}
