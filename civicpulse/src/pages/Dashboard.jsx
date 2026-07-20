import { Link } from 'react-router-dom'
import { FilePlus2, FileText, Bell, ArrowUpRight } from 'lucide-react'
import Header from '../components/Header'
import StatusSeal from '../components/StatusSeal'
import { STATUS, notifications } from '../data/mockData'

function StatCard({ label, value, accent }) {
  return (
    <div className="bg-panel rounded-xl shadow-card p-5 flex-1 min-w-[140px]">
      <p className="text-xs font-medium text-ink/50 uppercase tracking-wide">{label}</p>
      <p className={`font-display text-3xl font-semibold mt-2 ${accent}`}>{value}</p>
    </div>
  )
}

export default function Dashboard({ complaints, onMenuClick }) {
  const counts = {
    pending: complaints.filter((c) => c.status === STATUS.PENDING).length,
    inProgress: complaints.filter((c) => c.status === STATUS.IN_PROGRESS).length,
    resolved: complaints.filter((c) => c.status === STATUS.RESOLVED).length,
  }
  const recent = [...complaints]
    .sort((a, b) => new Date(b.updatedOn) - new Date(a.updatedOn))
    .slice(0, 4)
  const recentNotifs = notifications.slice(0, 3)

  return (
    <>
      <Header title="Dashboard" subtitle="Welcome back — here's what's happening with your civic requests" onMenuClick={onMenuClick} />

      <main className="px-5 md:px-8 py-6 space-y-8 max-w-5xl">
        {/* Quick actions */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/complaints/new"
            className="group bg-indigo text-white rounded-xl p-5 flex items-center justify-between shadow-card hover:bg-indigo-dark transition-colors"
          >
            <div>
              <p className="font-display font-semibold text-lg">File a complaint</p>
              <p className="text-white/60 text-sm mt-0.5">Report a civic issue</p>
            </div>
            <FilePlus2 size={22} className="text-sandstone shrink-0" />
          </Link>
          <Link
            to="/complaints"
            className="group bg-panel rounded-xl p-5 flex items-center justify-between shadow-card hover:shadow-md transition-shadow border border-ink/5"
          >
            <div>
              <p className="font-display font-semibold text-lg text-ink">Track requests</p>
              <p className="text-ink/50 text-sm mt-0.5">View all complaints</p>
            </div>
            <FileText size={22} className="text-indigo shrink-0" />
          </Link>
          <Link
            to="/notifications"
            className="group bg-panel rounded-xl p-5 flex items-center justify-between shadow-card hover:shadow-md transition-shadow border border-ink/5"
          >
            <div>
              <p className="font-display font-semibold text-lg text-ink">Notifications</p>
              <p className="text-ink/50 text-sm mt-0.5">Updates & announcements</p>
            </div>
            <Bell size={22} className="text-indigo shrink-0" />
          </Link>
        </section>

        {/* Status summary */}
        <section>
          <h2 className="font-display text-lg font-semibold text-ink mb-3">Status summary</h2>
          <div className="flex flex-wrap gap-4">
            <StatCard label="Pending" value={counts.pending} accent="text-amber" />
            <StatCard label="In Progress" value={counts.inProgress} accent="text-indigo" />
            <StatCard label="Resolved" value={counts.resolved} accent="text-banyan" />
          </div>
        </section>

        {/* Recent complaints */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-lg font-semibold text-ink">Recent complaints</h2>
            <Link to="/complaints" className="text-sm text-indigo font-medium flex items-center gap-1 hover:underline">
              View all <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="bg-panel rounded-xl shadow-card divide-y divide-ink/5 border border-ink/5">
            {recent.map((c) => (
              <Link
                key={c.id}
                to={`/complaints/${c.id}`}
                className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-paper/60 transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-xs font-mono text-ink/40">{c.id}</p>
                  <p className="text-sm font-medium text-ink truncate mt-0.5">{c.title}</p>
                </div>
                <StatusSeal status={c.status} />
              </Link>
            ))}
          </div>
        </section>

        {/* Notifications preview */}
        <section className="pb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-lg font-semibold text-ink">Latest announcements</h2>
            <Link to="/notifications" className="text-sm text-indigo font-medium flex items-center gap-1 hover:underline">
              View all <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="bg-panel rounded-xl shadow-card divide-y divide-ink/5 border border-ink/5">
            {recentNotifs.map((n) => (
              <div key={n.id} className="px-5 py-4">
                <p className="text-sm font-medium text-ink">{n.title}</p>
                <p className="text-sm text-ink/50 mt-0.5">{n.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
