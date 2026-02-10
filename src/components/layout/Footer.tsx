import { AnchorIcon } from '../shared/AnchorIcon'
import { siteContent } from '../../data/content'

export function Footer() {
  return (
    <footer className="border-t border-ocean-800/50 bg-ocean-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <AnchorIcon size={20} />
          <span className="font-display text-sm font-semibold tracking-wider text-ocean-300">
            ANCHR
          </span>
        </div>
        <p className="text-sm text-ocean-400/60 italic">
          {siteContent.footer.motto}
        </p>
        <p className="text-xs text-ocean-500/50">
          {siteContent.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
