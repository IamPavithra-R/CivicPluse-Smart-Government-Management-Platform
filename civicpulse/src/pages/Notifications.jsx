import { useState } from 'react'
import { Bell, Megaphone, Gift, CalendarDays } from 'lucide-react'
import Header from '../components/Header'
import { notifications as initialNotifs } from '../data/mockData'

const ICONS = {
  status: Bell,
  announcement: Megaphone,
  scheme: Gift,
  event: CalendarDays,
}

const LABELS = {
  status: 'Complaint update',
  announcement: 'Announcement',
  scheme: 'Scheme',
  event: 'Event',
}

export default function Notifications({ onMenuClick }) {
  const [items, setItems] = useState(initialNotifs)

  const markAllRead = () => setItems((prev) => prev.map((n) => ({ ...n, read: true })))

  return (
    <>
      <Header title="Notifications" subtitle="Updates on your complaints and civic announcements" onMenuClick={onMenuClick} />

      <main className="px-5 md:px-8 py-6 max-w-2xl pb-12">
        <div className="flex justify-end mb-4">
          <button onClick={markAllRead} className="text-sm text-indigo font-medium hover:underline">
            Mark all as read
          </button>
        </div>

        <div className="space-y-3">
          {items.map((n) => {
            const Icon = ICONS[n.type] || Bell
            return (
              <div
                key={n.id}
                className={`flex gap-4 rounded-xl border p-4 transition-colors ${
                  n.read ? 'bg-panel border-ink/5' : 'bg-amber-light border-amber/20'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    n.read ? 'bg-ink/5 text-ink/40' : 'bg-amber/15 text-amber'
                  }`}
                >
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-medium text-ink/40 uppercase tracking-wide">{LABELS[n.type]}</p>
                    {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-brick" />}
                  </div>
                  <p className="text-sm font-medium text-ink mt-0.5">{n.title}</p>
                  <p className="text-sm text-ink/50 mt-0.5">{n.body}</p>
                  <p className="text-xs text-ink/35 mt-1.5 font-mono">{n.date}</p>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
