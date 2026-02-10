import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface SectionHeadingProps {
  heading: string
  subtitle?: string
  light?: boolean
  className?: string
}

export function SectionHeading({
  heading,
  subtitle,
  light,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn('mb-12 text-center md:mb-16', className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className={cn(
          'font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
          light ? 'text-ocean-950' : 'text-white'
        )}
      >
        {heading}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mx-auto mt-4 max-w-2xl text-lg',
            light ? 'text-ocean-700' : 'text-ocean-300'
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mx-auto mt-6 h-1 w-16 rounded-full',
          light ? 'bg-ocean-500' : 'bg-ocean-400'
        )}
      />
    </motion.div>
  )
}
