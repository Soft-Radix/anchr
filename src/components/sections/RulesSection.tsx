import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { RuleCard } from '../shared/RuleCard'
import { FloatingOrbs } from '../shared/FloatingOrbs'
import { siteContent } from '../../data/content'

export function RulesSection() {
  const { rules } = siteContent

  return (
    <section id={rules.id} className="relative bg-ocean-800 py-20 md:py-28">
      <FloatingOrbs count={4} />

      <Container>
        <SectionHeading heading={rules.heading} subtitle={rules.subtitle} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rules.items.map((rule, i) => (
            <RuleCard
              key={rule.title}
              number={rule.number}
              title={rule.title}
              description={rule.description}
              icon={rule.icon}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
