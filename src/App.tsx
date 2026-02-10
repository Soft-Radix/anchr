import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { WhatIsSection } from './components/sections/WhatIsSection'
import { WhyExistsSection } from './components/sections/WhyExistsSection'
import { RulesSection } from './components/sections/RulesSection'
import { ClaimsSection } from './components/sections/ClaimsSection'
import { EvidenceSection } from './components/sections/EvidenceSection'
import { SourcesSection } from './components/sections/SourcesSection'
import { WhatNotSection } from './components/sections/WhatNotSection'
import { StatusSection } from './components/sections/StatusSection'
import { WaveBackground } from './components/shared/WaveBackground'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WaveBackground fromColor="#0a1628" toColor="#ffffff" />
        <WhatIsSection />
        <WaveBackground fromColor="#ffffff" toColor="#0a1628" flip />
        <WhyExistsSection />
        <WaveBackground fromColor="#193d63" toColor="#174876" />
        <RulesSection />
        <WaveBackground fromColor="#174876" toColor="#eef8fc" />
        <ClaimsSection />
        <WaveBackground fromColor="#eef8fc" toColor="#193d63" flip />
        <EvidenceSection />
        <WaveBackground fromColor="#193d63" toColor="#ffffff" />
        <SourcesSection />
        <WaveBackground fromColor="#ffffff" toColor="#193d63" flip />
        <WhatNotSection />
        <WaveBackground fromColor="#0a1628" toColor="#0a1628" />
        <StatusSection />
      </main>
      <Footer />
    </>
  )
}

export default App
