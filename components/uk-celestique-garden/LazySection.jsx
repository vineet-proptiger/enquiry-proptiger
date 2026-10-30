'use client'
import React, { useState, useEffect, useRef } from 'react'

/**
 * LazySection
 * On-demand code & asset loading using native IntersectionObserver.
 * - Keeps network tab clean: Chunks/assets only load when user scrolls near the section.
 * - Acts like Next.js prefetch: rootMargin loads content 200px before it enters the viewport.
 * - Zero CLS: minHeight maintains layout stability so subsequent sections aren't pulled up into the viewport prematurely.
 * - Anchor scroll friendly: retains ID while pending so hash links work seamlessly.
 */
export default function LazySection({
  children,
  id,
  minHeight = '350px',
  rootMargin = '200px 0px',
  className = '',
}) {
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (isInView) return

    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()

          // Trigger AOS refresh when dynamic component loads
          if (typeof window !== 'undefined' && window.AOS) {
            try {
              window.AOS.refresh()
            } catch (err) {
              // ignore aos refresh errors
            }
          }
        }
      },
      {
        root: null,
        rootMargin,
        threshold: 0.01,
      }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [isInView, rootMargin])

  return (
    <div
      ref={containerRef}
      // When not in view, maintain ID for anchor scrolling; once in view, inner section provides ID
      id={!isInView ? id : undefined}
      className={className}
      style={!isInView ? { minHeight, contentVisibility: 'auto' } : undefined}
    >
      {isInView ? children : null}
    </div>
  )
}
