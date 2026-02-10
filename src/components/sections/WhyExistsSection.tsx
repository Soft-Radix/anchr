import { motion } from 'framer-motion'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { siteContent } from '../../data/content'

export function WhyExistsSection() {
  const { whyExists } = siteContent

  return (
    <section
      id={whyExists.id}
      className="bg-gradient-to-b from-ocean-950 to-ocean-900 py-20 md:py-28"
    >
      <Container narrow>
        <SectionHeading
          heading={whyExists.heading}
          subtitle={whyExists.subtitle}
        />

        <div className="space-y-6">
          {whyExists.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="text-center text-base leading-relaxed text-ocean-200/80 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </Container>
    </section>
  )
}
