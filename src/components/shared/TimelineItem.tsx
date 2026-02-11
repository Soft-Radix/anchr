import { motion } from 'framer-motion'

interface TimelineItemProps {
  title: string
  description: string
  index: number
  isLast?: boolean
}

export function TimelineItem({
  title,
  description,
  index,
  isLast,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-6 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ocean-400 bg-ocean-900 transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(77,168,218,0.4)]">
          <div className="h-3 w-3 rounded-full bg-ocean-400 transition-transform duration-300 group-hover:scale-125" />
        </div>
        {!isLast && (
          <div className="w-px grow bg-gradient-to-b from-ocean-400 to-ocean-800" />
        )}
      </div>

      {/* Content */}
      <div className="pb-4 pt-1">
        <h3 className="font-display text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-ocean-200/80">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
