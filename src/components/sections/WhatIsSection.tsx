import { motion } from 'framer-motion'
import { FileText, Shield, Globe } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { siteContent } from '../../data/content'

export function WhatIsSection() {
  const { whatIs } = siteContent

  const diagramItems = [
    { data: whatIs.diagram.claim, icon: FileText, color: 'bg-ocean-500' },
    { data: whatIs.diagram.evidence, icon: Shield, color: 'bg-ocean-600' },
    { data: whatIs.diagram.record, icon: Globe, color: 'bg-ocean-700' },
  ]

  return (
    <section id={whatIs.id} className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          heading={whatIs.heading}
          subtitle={whatIs.subtitle}
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
            {whatIs.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-ocean-800/80"
              >
                {p}
              </p>
            ))}
          </motion.div>

          {/* Diagram column */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {diagramItems.map((item, i) => (
              <div key={i} className="w-full max-w-sm">
                <motion.div
                  className="flex items-start gap-4 rounded-xl border border-ocean-100 bg-ocean-50 p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.color}`}
                  >
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ocean-900">
                      {item.data.title}
                    </h3>
                    <p className="mt-1 text-sm text-ocean-600">
                      {item.data.description}
                    </p>
                  </div>
                </motion.div>
                {/* Connector arrow */}
                {i < diagramItems.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="h-6 w-px bg-ocean-300" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
