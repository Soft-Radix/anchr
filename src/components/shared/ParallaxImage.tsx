import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '../../lib/utils'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  overlayClassName?: string
}

export function ParallaxImage({ src, alt, className, overlayClassName }: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <div ref={ref} className={cn('relative overflow-hidden rounded-2xl', className)}>
      <motion.img
        src={src}
        alt={alt}
        className="h-[120%] w-full object-cover"
        style={{ y }}
      />
      <div className={cn(
        'pointer-events-none absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-ocean-950/30',
        overlayClassName
      )} />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  )
}
