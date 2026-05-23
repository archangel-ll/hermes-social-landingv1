import { useEffect } from "react"

export function useFadeInObserver(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    elements.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(22px)'
      el.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [selector])
}

export function useParallax(selector: string, factor = 0.12) {
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      document.querySelectorAll<HTMLVideoElement>(selector).forEach((v) => {
        v.style.transform = `scale(1.05) translateY(${y * factor}px)`
      })
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [selector, factor])
}
