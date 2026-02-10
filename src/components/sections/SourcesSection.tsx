import { motion } from 'framer-motion'
import { Layers, Clock, Globe } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { siteContent } from '../../data/content'

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Layers,
  Clock,
  Globe,
}

export function SourcesSection() {
  const { sources } = siteContent

  return (
    <section id={sources.id} className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          heading={sources.heading}
          subtitle={sources.subtitle}
          light
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sources.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-ocean-800/80"
              >
                {p}
              </p>
            ))}
          </motion.div>

          {/* Discovery cards */}
          <div className="space-y-4">
            {sources.discoveryCards.map((card, i) => {
              const IconComponent = iconMap[card.icon]
              return (
                <motion.div
                  key={card.title}
                  className="flex items-start gap-4 rounded-xl border border-ocean-100 bg-ocean-50 p-5 transition-shadow hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ocean-500">
                    {IconComponent && (
                      <IconComponent size={20} className="text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ocean-900">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-ocean-600">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
