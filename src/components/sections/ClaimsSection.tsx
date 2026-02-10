import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { siteContent } from '../../data/content'

function ChainDiagram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = siteContent.claims.steps

  return (
    <div ref={ref} className="relative mx-auto max-w-md">
      {/* Vertical connecting line with draw animation */}
      <svg
        className="absolute left-6 top-0 h-full w-1"
        viewBox="0 0 4 500"
        fill="none"
      >
        <motion.line
          x1="2"
          y1="20"
          x2="2"
          y2="480"
          stroke="#4da8da"
          strokeWidth="2"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
        />
      </svg>

      {/* Steps */}
      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="relative flex items-start gap-5 pl-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            {/* Node */}
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ocean-500 bg-ocean-50">
              <span className="font-display text-lg font-bold text-ocean-700">
                {i + 1}
              </span>
            </div>

            {/* Content */}
            <div className="pt-1">
              <h3 className="font-display text-lg font-semibold text-ocean-900">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ocean-700/80">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function ClaimsSection() {
  const { claims } = siteContent

  return (
    <section id={claims.id} className="bg-ocean-50 py-20 md:py-28">
      <Container>
        <SectionHeading
          heading={claims.heading}
          subtitle={claims.subtitle}
          light
        />

        {/* Intro paragraphs */}
        <div className="mx-auto mb-12 max-w-2xl space-y-4">
          {claims.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="text-center text-base leading-relaxed text-ocean-800/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <ChainDiagram />
      </Container>
    </section>
  )
}
