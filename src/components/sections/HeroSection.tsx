import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { ParticleField } from '../shared/ParticleField'
import { AnchorIcon } from '../shared/AnchorIcon'
import { siteContent } from '../../data/content'

export function HeroSection() {
  const { hero } = siteContent

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950">
      <ParticleField />

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Floating anchor icon */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="animate-float">
            <AnchorIcon size={80} className="text-ocean-400/80" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display text-7xl font-black tracking-[0.2em] text-white sm:text-8xl lg:text-9xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {hero.title}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-6 max-w-xl text-lg font-light text-ocean-200/80 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {hero.tagline}
        </motion.p>

        {/* Motto */}
        <motion.p
          className="mt-4 font-display text-sm font-medium tracking-widest text-ocean-400/70 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {hero.motto}
        </motion.p>

        {/* Scroll indicator */}
        <motion.button
          className="mt-16 flex flex-col items-center gap-2 text-ocean-400/50 transition-colors hover:text-ocean-400 bg-transparent border-none cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          onClick={() =>
            document
              .getElementById('what-is')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  )
}
