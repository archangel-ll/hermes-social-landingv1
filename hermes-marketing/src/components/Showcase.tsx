import type { ShowcaseVideo } from '../types'
import styles from './Showcase.module.css'

// Portfolio videos — uploaded to public/assets/
// Row 1: big bento grid (replaces old image grid)
const portfolioVideos: ShowcaseVideo[] = [
  { src: '/assets/hf_20260522_023842_80cc1429-08c3-4a47-af6c-3e734b3a0b5a.mp4', tag: 'Fashion Editorial' },
  { src: '/assets/hf_20260522_024614_9398934f-8e8f-4fd1-b7ea-da303ab4ae34.mp4', tag: 'Cinematic Hook' },
  { src: '/assets/hf_20260522_141324_a331385a-94e4-460c-95a1-a06ecadabbaf.mp4', tag: 'Brand Promo' },
  { src: '/assets/hf_20260522_210817_84c49059-f642-4122-8e9e-425fed65ccb0.mp4', tag: 'Lifestyle Content' },
  { src: '/assets/hf_20260522_210945_2ca2a3b5-1253-4d46-89dc-920c1e4a98e2.mp4', tag: 'Luxury Portrait' },
]

// Row 2: 4-column grid
const portfolioVideos2: ShowcaseVideo[] = [
  { src: '/assets/hf_20260522_211041_611a8f3a-adb8-4f60-ab6f-eb0e35a108cc.mp4', tag: 'Creative Direction' },
  { src: '/assets/hf_20260522_211115_ae3dc6b8-9df4-4b6b-8931-40d7d2df3ed4.mp4', tag: 'Brand Exposure' },
  { src: '/assets/hf_20260522_211309_eae7f9b6-e685-4b6c-8294-abd0161a93a9.mp4', tag: 'Content Creation' },
  { src: '/assets/hf_20260522_211636_9bc1fb99-fe10-42c8-bef8-42f93672d23c.mp4', tag: 'Agency Reel' },
]

// Reels section
const reelVideos: ShowcaseVideo[] = [
  { src: '/assets/hf_20260522_022025_cf6aa034-4771-4374-8cb5-2b10fb15585a.mp4', tag: 'Viral Results' },
  { src: '/assets/hf_20260522_211950_ac42fb2f-11ae-4123-a422-0d9f5d8ca0a7.mp4', tag: 'Scroll Stopper' },
  {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DlOJMzWsswXAXi4iPfzKfLdNcp/hf_20260522_212236_9a43ee70-75ab-46b4-8618-4d9a99f097db.mp4',
    tag: 'Brand Hook',
  },
  {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DlOJMzWsswXAXi4iPfzKfLdNcp/hf_20260522_212119_7d61e514-2273-462c-887a-fc830e0e8a4f.mp4',
    tag: 'Cinematic Short',
  },
]

function VideoItem({ video }: { video: ShowcaseVideo }) {
  return (
    <div className={styles.videoItem}>
      <video src={video.src} autoPlay muted loop playsInline />
      <div className={styles.videoOverlay} />
      <span className={styles.videoTag}>{video.tag}</span>
    </div>
  )
}

export default function Showcase() {
  return (
    <section className={styles.section} id="showcase">
      <div className={styles.sectionLabel}>Portfolio</div>
      <h2 className={styles.title}>
        Content That <em>Stops</em><br />The Scroll
      </h2>
      <p className={styles.subtitle}>
        Every frame crafted for maximum impact. This is the caliber of content we produce for your
        brand.
      </p>

      {/* Row 1 — 5 videos, first one tall */}
      <div className={styles.grid}>
        {portfolioVideos.map((v, i) => (
          <div
            key={v.tag}
            className={styles.videoItem}
            style={i === 0 ? { gridRow: 'span 2' } : undefined}
          >
            <video src={v.src} autoPlay muted loop playsInline />
            <div className={styles.videoOverlay} />
            <span className={styles.videoTag}>{v.tag}</span>
          </div>
        ))}
      </div>

      {/* Row 2 — 4 videos */}
      <div className={styles.grid2}>
        {portfolioVideos2.map((v) => (
          <VideoItem key={v.tag} video={v} />
        ))}
      </div>

      {/* Reels */}
      <div className={styles.videoHeader}>
        <div className={styles.sectionLabel}>Video Reels</div>
        <p className={styles.videoSubtitle}>Scroll-stopping short-form video produced for clients.</p>
      </div>

      <div className={styles.videoGrid}>
        {reelVideos.map((v) => (
          <VideoItem key={v.tag} video={v} />
        ))}
      </div>
    </section>
  )
}
