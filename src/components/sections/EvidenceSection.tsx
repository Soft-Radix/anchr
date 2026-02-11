import { motion } from 'framer-motion'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { TimelineItem } from '../shared/TimelineItem'
import { FloatingOrbs } from '../shared/FloatingOrbs'
import { siteContent } from '../../data/content'

export function EvidenceSection() {
  const { evidence } = siteContent

  return (
    <section
      id={evidence.id}
      className="relative bg-ocean-900 py-20 md:py-28"
    >
      <FloatingOrbs count={3} />

      <Container>
        <SectionHeading
          heading={evidence.heading}
          subtitle={evidence.subtitle}
        />

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-ocean-200/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          {evidence.intro}
        </motion.p>

        <div className="mx-auto max-w-xl">
          {evidence.items.map((item, i) => (
            <TimelineItem
              key={item.title}
              title={item.title}
              description={item.description}
              index={i}
              isLast={i === evidence.items.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
