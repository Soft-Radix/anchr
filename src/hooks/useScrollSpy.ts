import { useState, useEffect } from 'react'
import type { SectionId } from '../data/content'

export function useScrollSpy(sectionIds: readonly string[], offset = 100) {
  const [activeId, setActiveId] = useState<SectionId | ''>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id as SectionId)
          }
        }
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0,
      }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [sectionIds, offset])

  return activeId
}
