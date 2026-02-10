import { motion } from 'framer-motion'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { siteContent } from '../../data/content'

function WordByWordReveal({ text }: { text: string }) {
  const words = text.split(' ')

  return (
    <motion.p
      className="text-center font-display text-2xl font-bold text-ocean-300 sm:text-3xl lg:text-4xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.3em] inline-block"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                delay: i * 0.15,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}

export function StatusSection() {
  const { status } = siteContent

  return (
    <section
      id={status.id}
      className="relative bg-ocean-950 py-20 md:py-28"
      style={{
        backgroundImage:
          'radial-gradient(circle at 50% 50%, rgba(26, 107, 181, 0.12) 0%, transparent 60%)',
      }}
    >
      <Container narrow>
        <SectionHeading
          heading={status.heading}
          subtitle={status.subtitle}
        />

        <div className="space-y-5">
          {status.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              className="text-center text-base leading-relaxed text-ocean-200/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* CTA with word-by-word reveal */}
        <div className="mt-16">
          <WordByWordReveal text={status.cta} />
        </div>

        {/* Decorative anchor */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-ocean-500 to-transparent" />
        </motion.div>
      </Container>
    </section>
  )
}
