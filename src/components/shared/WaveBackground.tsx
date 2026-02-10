import { cn } from '../../lib/utils'

interface WaveBackgroundProps {
  fromColor?: string
  toColor?: string
  flip?: boolean
  className?: string
}

export function WaveBackground({
  fromColor = '#0a1628',
  toColor = '#eef8fc',
  flip,
  className,
}: WaveBackgroundProps) {
  return (
    <div
      className={cn(
        'pointer-events-none relative -mt-1 w-full overflow-hidden',
        flip && 'rotate-180',
        className
      )}
    >
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        preserveAspectRatio="none"
        style={{ height: '60px' }}
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,100 L0,100 Z"
          fill={toColor}
        />
        <path
          d="M0,60 C240,90 480,20 720,60 C960,90 1200,20 1440,60 L1440,100 L0,100 Z"
          fill={toColor}
          opacity="0.5"
        />
        <rect x="0" y="0" width="1440" height="1" fill={fromColor} opacity="0" />
      </svg>
    </div>
  )
}
