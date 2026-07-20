import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Plus, MapPin } from 'lucide-react'
import Header from '../components/Header'
import StatusSeal from '../components/StatusSeal'
import { STATUS } from '../data/mockData'

const FILTERS = ['All', STATUS.PENDING, STATUS.IN_PROGRESS, STATUS.RESOLVED, STATUS.REJECTED]

export default function Complaints({ complaints, onMenuClick }) {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return complaints
      .filter((c) => filter === 'All' || c.status === filter)
      .filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.id.toLowerCase().includes(query.toLowerCase()),
      )
      .sort((a, b) => new Date(b.updatedOn) - new Date(a.updatedOn))
  }, [complaints, filter, query])

  return (
    <>
      <Header title="Complaints" subtitle={`${complaints.length} total requests filed`} onMenuClick={onMenuClick} />

      <main className="px-5 md:px-8 py-6 max-w-5xl">
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title or complaint ID"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-ink/10 bg-panel text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
            />
          </div>
          <Link
            to="/complaints/new"
            className="flex items-center justify-center gap-2 bg-indigo text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-indigo-dark transition-colors shrink-0"
          >
            <Plus size={16} /> File new complaint
          </Link>
        </div>

        <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-colors ${
                filter === f
                  ? 'bg-indigo text-white border-indigo'
                  : 'bg-panel text-ink/60 border-ink/10 hover:border-ink/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-panel rounded-xl shadow-card border border-ink/5 px-6 py-14 text-center">
            <p className="font-display text-lg font-semibold text-ink">No complaints match this view</p>
            <p className="text-sm text-ink/50 mt-1">Try a different filter or search term.</p>
          </div>
        ) : (
          <div className="space-y-3 pb-6">
            {filtered.map((c) => (
              <Link
                key={c.id}
                to={`/complaints/${c.id}`}
                className="block bg-panel rounded-xl shadow-card border border-ink/5 px-5 py-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-ink/40">{c.id}</p>
                    <p className="font-medium text-ink mt-0.5">{c.title}</p>
                    <div className="flex items-center gap-1.5 text-xs text-ink/50 mt-1.5">
                      <MapPin size={12} /> {c.location}
                    </div>
                  </div>
                  <StatusSeal status={c.status} />
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-ink/5 text-xs text-ink/40">
                  <span>{c.category}</span>
                  <span>Updated {c.updatedOn}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
