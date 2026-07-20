import { STATUS } from '../data/mockData'

const STYLES = {
  [STATUS.PENDING]: 'text-amber',
  [STATUS.IN_PROGRESS]: 'text-indigo',
  [STATUS.RESOLVED]: 'text-banyan',
  [STATUS.REJECTED]: 'text-brick',
}

export default function StatusSeal({ status }) {
  const cls = STYLES[status] || 'text-ink'
  return <span className={`seal ${cls}`}>{status}</span>
}
