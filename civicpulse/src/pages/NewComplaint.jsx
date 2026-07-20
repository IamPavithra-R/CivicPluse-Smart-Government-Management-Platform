import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadCloud, CheckCircle2 } from 'lucide-react'
import Header from '../components/Header'
import { CATEGORIES, STATUS } from '../data/mockData'

export default function NewComplaint({ onSubmit, onMenuClick }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '',
    category: CATEGORIES[0],
    description: '',
    location: '',
    priority: 'Medium',
  })
  const [files, setFiles] = useState([])
  const [submittedId, setSubmittedId] = useState(null)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleFiles = (e) => {
    const chosen = Array.from(e.target.files || []).map((f) => f.name)
    setFiles(chosen)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title.trim() || !form.description.trim() || !form.location.trim()) return

    const id = `CP-2026-${String(Math.floor(10000 + Math.random() * 89999))}`
    const today = new Date().toISOString().slice(0, 10)
    onSubmit({
      id,
      title: form.title,
      category: form.category,
      description: form.description,
      status: STATUS.PENDING,
      priority: form.priority,
      submittedOn: today,
      updatedOn: today,
      location: form.location,
      officer: null,
      images: files.length,
      timeline: [{ date: today, label: 'Complaint filed', note: 'Awaiting assignment to the relevant department.' }],
    })
    setSubmittedId(id)
  }

  if (submittedId) {
    return (
      <>
        <Header title="File a Complaint" onMenuClick={onMenuClick} />
        <main className="px-5 md:px-8 py-16 max-w-xl mx-auto text-center">
          <CheckCircle2 size={44} className="text-banyan mx-auto mb-4" />
          <h2 className="font-display text-2xl font-semibold text-ink">Complaint filed</h2>
          <p className="text-ink/60 mt-2">
            Your reference number is{' '}
            <span className="font-mono text-ink font-medium">{submittedId}</span>. You'll be notified as it
            moves through review.
          </p>
          <div className="flex gap-3 justify-center mt-7">
            <button
              onClick={() => navigate(`/complaints/${submittedId}`)}
              className="bg-indigo text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-indigo-dark transition-colors"
            >
              Track this complaint
            </button>
            <button
              onClick={() => navigate('/complaints')}
              className="bg-panel border border-ink/10 text-ink text-sm font-medium px-5 py-2.5 rounded-lg hover:border-ink/30 transition-colors"
            >
              Back to all complaints
            </button>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header title="File a Complaint" subtitle="Report a civic issue in your area" onMenuClick={onMenuClick} />

      <main className="px-5 md:px-8 py-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-panel rounded-xl shadow-card border border-ink/5 p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">Issue title</label>
            <input
              value={form.title}
              onChange={update('title')}
              required
              placeholder="e.g. Overflowing drain near market road"
              className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Category</label>
              <select
                value={form.category}
                onChange={update('category')}
                className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm bg-panel focus:outline-none focus:ring-2 focus:ring-indigo/40"
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Priority</label>
              <select
                value={form.priority}
                onChange={update('priority')}
                className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm bg-panel focus:outline-none focus:ring-2 focus:ring-indigo/40"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">Location</label>
            <input
              value={form.location}
              onChange={update('location')}
              required
              placeholder="Street, area, ward"
              className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">Description</label>
            <textarea
              value={form.description}
              onChange={update('description')}
              required
              rows={4}
              placeholder="Describe the issue in detail — what's happening, since when, and how it affects you"
              className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1.5">Supporting photos (optional)</label>
            <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-ink/15 rounded-lg py-6 cursor-pointer hover:border-indigo/40 transition-colors">
              <UploadCloud size={22} className="text-ink/40" />
              <span className="text-sm text-ink/50">
                {files.length ? `${files.length} file(s) selected` : 'Click to upload images'}
              </span>
              <input type="file" accept="image/*" multiple onChange={handleFiles} className="hidden" />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo text-white font-medium py-3 rounded-lg hover:bg-indigo-dark transition-colors"
          >
            Submit complaint
          </button>
        </form>
      </main>
    </>
  )
}
