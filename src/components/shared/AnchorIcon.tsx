import { cn } from '../../lib/utils'

interface AnchorIconProps {
  className?: string
  size?: number
}

export function AnchorIcon({ className, size = 48 }: AnchorIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-ocean-400', className)}
    >
      {/* Ring at top */}
      <circle
        cx="32"
        cy="14"
        r="6"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Vertical shaft */}
      <line
        x1="32"
        y1="20"
        x2="32"
        y2="54"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Horizontal bar */}
      <line
        x1="22"
        y1="32"
        x2="42"
        y2="32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Left fluke */}
      <path
        d="M16 44 C16 44 22 50 32 54"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right fluke */}
      <path
        d="M48 44 C48 44 42 50 32 54"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
