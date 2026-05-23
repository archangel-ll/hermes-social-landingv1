import { marqueeItems } from '../data/content'
import styles from './Marquee.module.css'

export default function Marquee() {
  // Duplicate items for seamless loop
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot}>●</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
