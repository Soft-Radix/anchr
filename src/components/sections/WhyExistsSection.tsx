import { motion } from 'framer-motion'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { FloatingOrbs } from '../shared/FloatingOrbs'
import { ParallaxImage } from '../shared/ParallaxImage'
import { siteContent } from '../../data/content'

export function WhyExistsSection() {
  const { whyExists } = siteContent

  return (
    <section
      id={whyExists.id}
      className="relative bg-gradient-to-b from-ocean-950 to-ocean-900 py-20 md:py-28"
    >
      <FloatingOrbs count={3} />

      <Container>
        <SectionHeading
          heading={whyExists.heading}
          subtitle={whyExists.subtitle}
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image column with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ParallaxImage
              src="/images/why-exists.jpg"
              alt="Signing a document — preserving the record"
              className="h-[320px] sm:h-[400px] lg:h-[460px]"
            />
          </motion.div>

          {/* Text column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {whyExists.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-base leading-relaxed text-ocean-200/80 md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
