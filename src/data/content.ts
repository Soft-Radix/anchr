export const siteContent = {
  nav: {
    links: [
      { label: 'What Is ANCHR', href: '#what-is' },
      { label: 'Why It Exists', href: '#why-exists' },
      { label: 'Rules', href: '#rules' },
      { label: 'Claims', href: '#claims' },
      { label: 'Evidence', href: '#evidence' },
      { label: 'Sources', href: '#sources' },
      { label: 'Boundaries', href: '#what-not' },
      { label: 'Status', href: '#status' },
    ],
  },

  hero: {
    title: 'ANCHR',
    tagline: 'A platform to preserve claims and evidence as permanent public records.',
    motto: 'History only moves forward.',
  },

  whatIs: {
    id: 'what-is',
    heading: 'What Is ANCHR?',
    subtitle: 'A claim registry and evidence hub.',
    paragraphs: [
      'Users can record claims about real-world events, statements, or narratives, and attach evidence to those claims over time. Once a claim is created, it becomes a fixed point in the historical record. It cannot be edited, rewritten, or silently removed.',
      'As new information emerges, evidence can be added, and new claims can be created that reference earlier ones. This creates a transparent record of how understanding changes — without erasing what came before.',
      'Rather than presenting a single "current version" of events, ANCHR preserves the full lineage of claims and evidence, allowing history to be examined as it actually unfolded.',
    ],
    diagram: {
      claim: {
        title: 'Claim',
        description: 'A fixed assertion recorded at a specific point in time',
      },
      evidence: {
        title: 'Evidence',
        description: 'Supporting material appended over time, each piece timestamped',
      },
      record: {
        title: 'Public Record',
        description: 'The full lineage — permanent, transparent, and open to all',
      },
    },
  },

  whyExists: {
    id: 'why-exists',
    heading: 'Why ANCHR Exists',
    subtitle: 'Public narratives are fragile.',
    paragraphs: [
      'Articles are updated without visibility into earlier versions. Statements are revised after the fact. Context is lost as information is condensed, reframed, or removed entirely.',
      'Over time, it becomes difficult to answer simple but important questions: What was originally claimed? What evidence was available at that time? When did understanding change — and why?',
      'ANCHR exists to protect that context. By preserving claims and evidence as immutable records, ANCHR ensures that history remains inspectable, traceable, and honest about its own evolution.',
    ],
  },

  rules: {
    id: 'rules',
    heading: 'Rules of the Record',
    subtitle: 'Five foundational principles that govern every entry.',
    items: [
      {
        number: 1,
        title: 'Immutable Claims',
        description: 'Once a claim is created, its text and original context cannot be changed. The record stands.',
        icon: 'Shield',
      },
      {
        number: 2,
        title: 'Append-Only Records',
        description: 'New evidence can be added, but nothing is ever deleted. Existing records are never overwritten. The record only grows.',
        icon: 'ListPlus',
      },
      {
        number: 3,
        title: 'Time-Bound Evidence',
        description: 'Every piece of evidence is timestamped. It reflects what was known at a specific moment, not applied retroactively.',
        icon: 'Clock',
      },
      {
        number: 4,
        title: 'Revisions Don\'t Erase',
        description: 'If a source revises its statement, both versions are preserved. Corrections and updates are expressed as new claims referencing earlier ones.',
        icon: 'History',
      },
      {
        number: 5,
        title: 'Neutrality Preserved',
        description: 'The system does not declare claims true or false. It records what exists, not what should be believed.',
        icon: 'Scale',
      },
    ],
  },

  claims: {
    id: 'claims',
    heading: 'How Claims Work',
    subtitle: 'Claims are permanent anchors in the public record.',
    paragraphs: [
      'A claim in ANCHR is a single, clearly stated assertion recorded at a specific point in time. From that moment on, the claim serves as a historical anchor — a reference point that can be examined, cited, or challenged, but never rewritten.',
      'If a claim later proves incomplete, incorrect, or disputed, the response is not to edit the original claim. Instead, a new claim is created that explicitly references the earlier one, describing how it supersedes, corrects, or contradicts it.',
    ],
    steps: [
      {
        title: 'Claim Registered',
        description: 'A clearly stated assertion is recorded at a specific point in time. It becomes a fixed point in the record.',
      },
      {
        title: 'Context Preserved',
        description: 'The original text, attribution, and timestamp are locked. The claim stands exactly as it was stated.',
      },
      {
        title: 'Evidence Attached',
        description: 'Supporting or contextual sources can be linked at any time. Each addition is timestamped independently.',
      },
      {
        title: 'New Claims Reference Old',
        description: 'If understanding changes, new claims reference earlier ones — creating a visible chain of accountability.',
      },
      {
        title: 'Full Lineage Visible',
        description: 'The complete history is publicly accessible. Readers can see what was originally stated and how understanding changed.',
      },
    ],
  },

  evidence: {
    id: 'evidence',
    heading: 'Evidence & History',
    subtitle: 'A timeline of when things became known.',
    intro: 'Evidence in ANCHR is added as a timeline. Each piece — whether a source link, document reference, or contextual note — is recorded as its own immutable entry, complete with attribution and timestamp. Evidence does not modify a claim; it adds context to it.',
    items: [
      {
        title: 'Claim Registered',
        description: 'A public statement is recorded as-is. Timestamped. Immutable.',
      },
      {
        title: 'Initial Evidence',
        description: 'Supporting or contextual sources are attached at the time of registration.',
      },
      {
        title: 'New Evidence Emerges',
        description: 'As new information becomes public, it is appended to the claim record.',
      },
      {
        title: 'Source Revision Detected',
        description: 'If a source changes its reporting, both versions are preserved.',
      },
      {
        title: 'Full Lineage Visible',
        description: 'The complete history of the claim and its evidence is publicly accessible.',
      },
    ],
  },

  sources: {
    id: 'sources',
    heading: 'Sources',
    subtitle: 'Grounded in publicly available reporting.',
    paragraphs: [
      'ANCHR references publicly available Western media sources as contextual inputs. These sources provide background, reporting, and primary material that can be linked to claims and evidence entries.',
      'Each source is clearly attributed, time-indexed, and preserved as a reference rather than republished content. Sources are treated as context — not as arbiters of truth.',
      'Discovery is designed to help users explore claims and evidence by topic, time, or region, allowing patterns and relationships to emerge without ranking, scoring, or algorithmic amplification.',
    ],
    discoveryCards: [
      {
        title: 'By Topic',
        description: 'Explore claims organized by subject area — allowing patterns to emerge across related narratives.',
        icon: 'Layers',
      },
      {
        title: 'By Time',
        description: 'Trace how narratives evolved chronologically — see what was claimed and when evidence followed.',
        icon: 'Clock',
      },
      {
        title: 'By Region',
        description: 'Filter records by geographic relevance — see how reporting varies across outlets and locations.',
        icon: 'Globe',
      },
    ],
  },

  whatNot: {
    id: 'what-not',
    heading: 'What ANCHR Does Not Do',
    subtitle: 'Intentionally limited by design.',
    items: [
      {
        title: 'Does Not Determine Truth',
        description: 'ANCHR records claims and evidence. It does not judge them.',
      },
      {
        title: 'Does Not Rank or Score',
        description: 'There is no algorithm deciding what matters more. No popularity metrics, no engagement signals.',
      },
      {
        title: 'Does Not Settle Disputes',
        description: 'ANCHR is not an arbiter. It is an archive. Disputes are expressed as competing claims in the record.',
      },
      {
        title: 'Does Not Optimize for Virality',
        description: 'There are no likes, shares, or engagement metrics. The record exists to preserve, not to amplify.',
      },
    ],
  },

  status: {
    id: 'status',
    heading: 'Status',
    subtitle: 'Foundational stage.',
    paragraphs: [
      'ANCHR is currently in its foundational stage. The focus is on clearly defining the structure, rules, and integrity of the record before expanding functionality.',
      'Correctness and trustworthiness are prioritized over speed or scale. The system is being developed deliberately, with the goal of creating a durable foundation that can support long-term use without compromising its principles.',
    ],
    cta: 'The record begins here.',
  },

  footer: {
    motto: 'History only moves forward.',
    copyright: `© ${new Date().getFullYear()} ANCHR. All rights reserved.`,
  },
}

export const sectionIds = [
  'what-is',
  'why-exists',
  'rules',
  'claims',
  'evidence',
  'sources',
  'what-not',
  'status',
] as const

export type SectionId = (typeof sectionIds)[number]
