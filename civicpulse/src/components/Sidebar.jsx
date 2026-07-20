import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutGrid, FileText, Bell, UserRound, Landmark, X, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutGrid, end: true },
  { to: '/complaints', label: 'Complaints', icon: FileText },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/profile', label: 'Profile', icon: UserRound },
]

export default function Sidebar({ open, onClose }) {
  const { logout, currentUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    onClose()
    navigate('/register')
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-ink/40 z-30 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full w-64 bg-indigo text-white flex flex-col
        transform transition-transform duration-200 ease-out
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border-2 border-sandstone flex items-center justify-center shrink-0">
              <Landmark size={18} className="text-sandstone" />
            </div>
            <div>
              <p className="font-display font-semibold text-lg leading-none">CivicPulse</p>
              <p className="text-[11px] tracking-wide text-white/60 mt-1">Citizen Portal</p>
            </div>
          </div>
          <button onClick={onClose} className="md:hidden text-white/70 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white border-l-2 border-sandstone'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Icon size={18} strokeWidth={2} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-colors"
          >
            <LogOut size={18} strokeWidth={2} />
            Log out
          </button>
          <div className="px-3.5 pt-3 text-xs text-white/40 leading-relaxed">
            {currentUser?.name && (
              <>
                Signed in as {currentUser.name}
                <br />
              </>
            )}
            Ward 12 Municipal Office · Helpline: 1800-425-1000
          </div>
        </div>
      </aside>
    </>
  )
}
