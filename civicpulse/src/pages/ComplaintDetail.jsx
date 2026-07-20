import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Phone, Star, ImageIcon } from 'lucide-react'
import Header from '../components/Header'
import StatusSeal from '../components/StatusSeal'
import { STATUS } from '../data/mockData'

function Stars({ value, onRate }) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          onMouseEnter={() => onRate && setHover(n)}
          onMouseLeave={() => onRate && setHover(0)}
          onClick={() => onRate && onRate(n)}
          disabled={!onRate}
          className={onRate ? 'cursor-pointer' : 'cursor-default'}
        >
          <Star
            size={20}
            className={(hover || value) >= n ? 'fill-sandstone text-sandstone' : 'text-ink/20'}
          />
        </button>
      ))}
    </div>
  )
}

export default function ComplaintDetail({ complaints, onRate, onComment, onMenuClick }) {
  const { id } = useParams()
  const complaint = complaints.find((c) => c.id === id)
  const [comment, setComment] = useState('')

  if (!complaint) {
    return (
      <>
        <Header title="Complaint not found" onMenuClick={onMenuClick} />
        <main className="px-8 py-10">
          <Link to="/complaints" className="text-indigo text-sm font-medium">
            ← Back to complaints
          </Link>
        </main>
      </>
    )
  }

  const submitComment = (e) => {
    e.preventDefault()
    if (!comment.trim()) return
    onComment(complaint.id, comment.trim())
    setComment('')
  }

  return (
    <>
      <Header title={complaint.id} subtitle={complaint.category} onMenuClick={onMenuClick} />

      <main className="px-5 md:px-8 py-6 max-w-3xl pb-12">
        <Link to="/complaints" className="inline-flex items-center gap-1.5 text-sm text-ink/50 hover:text-ink mb-4">
          <ArrowLeft size={15} /> Back to complaints
        </Link>

        <div className="bg-panel rounded-xl shadow-card border border-ink/5 p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-display text-xl font-semibold text-ink">{complaint.title}</h2>
            <StatusSeal status={complaint.status} />
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-sm text-ink/50">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {complaint.location}
            </span>
            <span>Filed {complaint.submittedOn}</span>
            {complaint.images > 0 && (
              <span className="flex items-center gap-1.5">
                <ImageIcon size={14} /> {complaint.images} photo{complaint.images > 1 ? 's' : ''} attached
              </span>
            )}
          </div>

          <p className="text-sm text-ink/70 leading-relaxed mt-4">{complaint.description}</p>

          {complaint.status === STATUS.REJECTED && complaint.rejectionReason && (
            <div className="mt-4 bg-brick-light border border-brick/20 rounded-lg px-4 py-3 text-sm text-brick">
              {complaint.rejectionReason}
            </div>
          )}

          {complaint.officer && (
            <div className="mt-5 pt-5 border-t border-ink/5 flex items-center justify-between">
              <div>
                <p className="text-xs text-ink/40 uppercase tracking-wide">Assigned officer</p>
                <p className="text-sm font-medium text-ink mt-0.5">{complaint.officer.name}</p>
                <p className="text-xs text-ink/50">{complaint.officer.dept}</p>
              </div>
              <a
                href={`tel:${complaint.officer.phone}`}
                className="flex items-center gap-1.5 text-sm text-indigo font-medium"
              >
                <Phone size={14} /> {complaint.officer.phone}
              </a>
            </div>
          )}
        </div>

        {complaint.status === STATUS.RESOLVED && (
          <div className="bg-panel rounded-xl shadow-card border border-ink/5 p-6 mt-5">
            <p className="font-medium text-ink text-sm mb-2">Rate this resolution</p>
            <Stars value={complaint.rating || 0} onRate={(n) => onRate(complaint.id, n)} />
            {complaint.rating && <p className="text-xs text-ink/40 mt-2">Thanks for your feedback.</p>}
          </div>
        )}

        {/* Timeline */}
        <div className="bg-panel rounded-xl shadow-card border border-ink/5 p-6 mt-5">
          <p className="font-display font-semibold text-ink mb-4">Timeline</p>
          <ol className="space-y-5">
            {complaint.timeline.map((t, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo mt-1.5 shrink-0" />
                  {i < complaint.timeline.length - 1 && <span className="w-px flex-1 bg-ink/10 mt-1" />}
                </div>
                <div className="pb-1">
                  <p className="text-xs font-mono text-ink/40">{t.date}</p>
                  <p className="text-sm font-medium text-ink mt-0.5">{t.label}</p>
                  <p className="text-sm text-ink/50 mt-0.5">{t.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <form onSubmit={submitComment} className="flex gap-2 mt-6 pt-5 border-t border-ink/5">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment or update"
              className="flex-1 px-3.5 py-2 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
            />
            <button
              type="submit"
              className="bg-indigo text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-indigo-dark transition-colors"
            >
              Post
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
