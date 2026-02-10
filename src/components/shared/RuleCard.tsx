import { motion } from 'framer-motion'
import { Shield, ListPlus, Clock, History, Scale } from 'lucide-react'
import { cn } from '../../lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Shield,
  ListPlus,
  Clock,
  History,
  Scale,
}

interface RuleCardProps {
  number: number
  title: string
  description: string
  icon: string
  index: number
}

export function RuleCard({ number, title, description, icon, index }: RuleCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-white/10 p-6 backdrop-blur-md',
        'bg-white/5 transition-colors duration-300 hover:border-ocean-400/30 hover:bg-white/10'
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
    >
      {/* Number watermark */}
      <span className="pointer-events-none absolute right-4 top-2 select-none font-display text-7xl font-bold text-ocean-400/10">
        {number}
      </span>
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-500/20">
          {IconComponent && <IconComponent className="text-ocean-400" size={24} />}
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-ocean-200/80">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
