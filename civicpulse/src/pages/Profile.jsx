import { useState } from 'react'
import { Pencil, Save, LogOut } from 'lucide-react'
import Header from '../components/Header'
import StatusSeal from '../components/StatusSeal'
import { schemes } from '../data/mockData'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Field({ label, value, editing, onChange }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink/40 uppercase tracking-wide">{label}</p>
      {editing ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full mt-1 px-3 py-2 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
        />
      ) : (
        <p className="text-sm font-medium text-ink mt-1">{value}</p>
      )}
    </div>
  )
}

export default function Profile({ complaints, onMenuClick }) {
  const { currentUser, updateProfile, logout } = useAuth()
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [data, setData] = useState(currentUser || {})

  const update = (key) => (val) => setData((d) => ({ ...d, [key]: val }))
  const recent = [...complaints].sort((a, b) => new Date(b.submittedOn) - new Date(a.submittedOn)).slice(0, 5)

  const handleSaveOrEdit = () => {
    if (editing) updateProfile(data)
    setEditing((e) => !e)
  }

  const handleLogout = () => {
    logout()
    navigate('/register')
  }

  return (
    <>
      <Header title="Profile" subtitle="Your personal details and complaint history" onMenuClick={onMenuClick} />

      <main className="px-5 md:px-8 py-6 max-w-3xl pb-12 space-y-6">
        <div className="bg-panel rounded-xl shadow-card border border-ink/5 p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-indigo text-white flex items-center justify-center font-display font-semibold text-lg">
                {data.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="font-display font-semibold text-lg text-ink">{data.name}</p>
                <p className="text-xs font-mono text-ink/40 uppercase tracking-wide">{data.role || 'Citizen'}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleSaveOrEdit}
                className="flex items-center gap-1.5 text-sm font-medium text-indigo hover:underline"
              >
                {editing ? <Save size={15} /> : <Pencil size={15} />}
                {editing ? 'Save' : 'Edit'}
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm font-medium text-brick hover:underline"
              >
                <LogOut size={15} />
                Log out
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Email" value={data.email} editing={editing} onChange={update('email')} />
            <Field label="Phone" value={data.phone} editing={editing} onChange={update('phone')} />
            <Field label="Address" value={data.address} editing={editing} onChange={update('address')} />
          </div>
        </div>

        <div className="bg-panel rounded-xl shadow-card border border-ink/5 p-6">
          <p className="font-display font-semibold text-ink mb-4">Recent complaint history</p>
          <div className="divide-y divide-ink/5">
            {recent.map((c) => (
              <Link
                key={c.id}
                to={`/complaints/${c.id}`}
                className="flex items-center justify-between gap-3 py-3 hover:bg-paper/60 -mx-2 px-2 rounded-lg transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-xs font-mono text-ink/40">{c.id}</p>
                  <p className="text-sm font-medium text-ink truncate">{c.title}</p>
                </div>
                <StatusSeal status={c.status} />
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-panel rounded-xl shadow-card border border-ink/5 p-6">
          <p className="font-display font-semibold text-ink mb-4">Schemes you may be eligible for</p>
          <div className="space-y-3">
            {schemes.map((s) => (
              <div key={s.name} className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-ink">{s.name}</p>
                  <p className="text-xs text-ink/50">{s.dept}</p>
                </div>
                <span className="text-xs font-mono text-ink/40 shrink-0">Deadline: {s.deadline}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
