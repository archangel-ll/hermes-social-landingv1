import type { ShowcaseImage, ShowcaseVideo } from '../types'
import styles from './Showcase.module.css'

// Replace src values with real paths after extracting base64 assets
// Run: npm run extract-assets  (see README)
const showcaseImages: ShowcaseImage[] = [
  { src: '/assets/img-1.jpg', alt: 'Fashion Editorial', tag: 'Fashion Editorial' },
  { src: '/assets/img-2.jpg', alt: 'Cinematic Hook', tag: 'Cinematic Hook' },
  { src: '/assets/img-3.jpg', alt: 'Brand Promo', tag: 'Brand Promo' },
  { src: '/assets/img-4.jpg', alt: 'Lifestyle Content', tag: 'Lifestyle Content' },
  { src: '/assets/img-5.jpg', alt: 'Luxury Portrait', tag: 'Luxury Portrait' },
]

const showcaseImages2: ShowcaseImage[] = [
  { src: '/assets/img-6.jpg', alt: 'Creative Direction', tag: 'Creative Direction' },
  { src: '/assets/img-7.jpg', alt: 'Brand Exposure', tag: 'Brand Exposure' },
  { src: '/assets/img-8.jpg', alt: 'Content Creation', tag: 'Content Creation' },
  { src: '/assets/img-9.jpg', alt: 'Agency Operations', tag: 'Agency Operations' },
]

const showcaseVideos: ShowcaseVideo[] = [
  { src: '/assets/video-1.mp4', tag: 'Viral Results' },
  { src: '/assets/video-2.mp4', tag: 'Studio Showcase' },
  {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DlOJMzWsswXAXi4iPfzKfLdNcp/hf_20260522_212236_9a43ee70-75ab-46b4-8618-4d9a99f097db.mp4',
    tag: 'Brand Hook',
  },
  {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3DlOJMzWsswXAXi4iPfzKfLdNcp/hf_20260522_212119_7d61e514-2273-462c-887a-fc830e0e8a4f.mp4',
    tag: 'Cinematic Short',
  },
]

function ShowcaseItem({ image }: { image: ShowcaseImage }) {
  return (
    <div className={styles.item}>
      <img src={image.src} alt={image.alt} loading="lazy" />
      <div className={styles.border} />
      <div className={styles.overlay}>
        <span className={styles.tag}>{image.tag}</span>
      </div>
    </div>
  )
}

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

      <div className={styles.grid}>
        {showcaseImages.map((img) => (
          <ShowcaseItem key={img.alt} image={img} />
        ))}
      </div>

      <div className={styles.grid2}>
        {showcaseImages2.map((img) => (
          <ShowcaseItem key={img.alt} image={img} />
        ))}
      </div>

      <div className={styles.videoHeader}>
        <div className={styles.sectionLabel}>Video Reels</div>
        <p className={styles.videoSubtitle}>Scroll-stopping short-form video produced for clients.</p>
      </div>

      <div className={styles.videoGrid}>
        {showcaseVideos.map((v) => (
          <VideoItem key={v.tag} video={v} />
        ))}
      </div>
    </section>
  )
}
