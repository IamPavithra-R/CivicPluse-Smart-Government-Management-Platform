import { Menu, Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile, notifications } from '../data/mockData'

export default function Header({ title, subtitle, onMenuClick }) {
  const unread = notifications.filter((n) => !n.read).length

  return (
    <header className="sticky top-0 z-20 bg-paper/90 backdrop-blur border-b border-ink/10">
      <div className="flex items-center justify-between px-5 md:px-8 py-4">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onMenuClick}
            className="md:hidden text-ink/70 hover:text-ink shrink-0"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
          <div className="min-w-0">
            <h1 className="font-display text-xl md:text-2xl font-semibold text-ink truncate">{title}</h1>
            {subtitle && <p className="text-sm text-ink/50 mt-0.5 truncate">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <Link to="/notifications" className="relative text-ink/60 hover:text-ink transition-colors">
            <Bell size={20} />
            {unread > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brick text-white text-[10px] leading-none rounded-full w-4 h-4 flex items-center justify-center font-medium">
                {unread}
              </span>
            )}
          </Link>
          <Link to="/profile" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-indigo text-white flex items-center justify-center text-xs font-semibold">
              {profile.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <span className="hidden sm:block text-sm font-medium text-ink">{profile.name.split(' ')[0]}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
