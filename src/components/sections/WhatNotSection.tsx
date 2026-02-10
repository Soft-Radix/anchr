import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { siteContent } from '../../data/content'

export function WhatNotSection() {
  const { whatNot } = siteContent

  return (
    <section
      id={whatNot.id}
      className="bg-gradient-to-b from-ocean-900 to-ocean-950 py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          heading={whatNot.heading}
          subtitle={whatNot.subtitle}
        />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {whatNot.items.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                <X size={20} className="text-red-400" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ocean-200/70">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
