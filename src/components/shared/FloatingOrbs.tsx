import { cn } from '../../lib/utils'

interface FloatingOrbsProps {
  className?: string
  count?: 3 | 4 | 5
}

const orbConfigs = [
  { size: 'h-64 w-64', pos: 'top-10 -left-20', anim: 'animate-drift', opacity: 'opacity-[0.07]', color: 'bg-ocean-500' },
  { size: 'h-48 w-48', pos: 'bottom-20 right-10', anim: 'animate-float-slow', opacity: 'opacity-[0.05]', color: 'bg-ocean-400' },
  { size: 'h-32 w-32', pos: 'top-1/2 left-1/3', anim: 'animate-float-reverse', opacity: 'opacity-[0.06]', color: 'bg-ocean-600' },
  { size: 'h-40 w-40', pos: '-top-10 right-1/4', anim: 'animate-drift', opacity: 'opacity-[0.04]', color: 'bg-ocean-300' },
  { size: 'h-24 w-24', pos: 'bottom-10 left-1/4', anim: 'animate-float', opacity: 'opacity-[0.08]', color: 'bg-ocean-400' },
]

export function FloatingOrbs({ className, count = 3 }: FloatingOrbsProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {orbConfigs.slice(0, count).map((orb, i) => (
        <div
          key={i}
          className={cn(
            'absolute rounded-full blur-[80px]',
            orb.size,
            orb.pos,
            orb.anim,
            orb.opacity,
            orb.color
          )}
          style={{ animationDelay: `${i * 2}s` }}
        />
      ))}
    </div>
  )
}
