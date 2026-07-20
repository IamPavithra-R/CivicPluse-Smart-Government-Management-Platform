// In-memory mock data. No backend — this simulates a citizen's records.

export const CATEGORIES = [
  'Roads & Potholes',
  'Water Supply',
  'Electricity',
  'Sanitation & Waste',
  'Street Lighting',
  'Public Property Damage',
  'Drainage',
  'Other',
]

export const STATUS = {
  PENDING: 'Pending',
  IN_PROGRESS: 'In Progress',
  RESOLVED: 'Resolved',
  REJECTED: 'Rejected',
}

export const initialComplaints = [
  {
    id: 'CP-2026-01842',
    title: 'Large pothole near Anna Nagar bus stop',
    category: 'Roads & Potholes',
    description:
      'A deep pothole has formed near the bus stop on 2nd Avenue, causing traffic slowdowns and a fall risk for two-wheelers, especially after rain.',
    status: STATUS.IN_PROGRESS,
    priority: 'High',
    submittedOn: '2026-06-18',
    updatedOn: '2026-07-05',
    location: 'Anna Nagar, 2nd Avenue',
    officer: { name: 'R. Karthik', dept: 'Roads & Infrastructure', phone: '+91 98400 11234' },
    images: 1,
    timeline: [
      { date: '2026-06-18', label: 'Complaint filed', note: 'Submitted by citizen with photo evidence.' },
      { date: '2026-06-20', label: 'Assigned to officer', note: 'Routed to Roads & Infrastructure division.' },
      { date: '2026-06-27', label: 'Site inspection completed', note: 'Officer confirmed the pothole and scheduled repair.' },
      { date: '2026-07-05', label: 'Repair work in progress', note: 'Contractor has started patch work, expected completion in 5 days.' },
    ],
  },
  {
    id: 'CP-2026-01799',
    title: 'No water supply for 3 days — Kamaraj Street',
    category: 'Water Supply',
    description:
      'Households on Kamaraj Street have had no piped water supply since Monday. Tanker service has not arrived either.',
    status: STATUS.RESOLVED,
    priority: 'High',
    submittedOn: '2026-06-10',
    updatedOn: '2026-06-15',
    location: 'Kamaraj Street, Ward 12',
    officer: { name: 'S. Meena', dept: 'Water Board', phone: '+91 98400 55678' },
    images: 0,
    rating: 4,
    timeline: [
      { date: '2026-06-10', label: 'Complaint filed', note: 'Reported no supply for 3 days.' },
      { date: '2026-06-11', label: 'Assigned to officer', note: 'Routed to Water Board, Ward 12.' },
      { date: '2026-06-13', label: 'Valve repair completed', note: 'Faulty distribution valve replaced.' },
      { date: '2026-06-15', label: 'Resolved', note: 'Supply restored and confirmed with resident.' },
    ],
  },
  {
    id: 'CP-2026-01756',
    title: 'Streetlight not working outside community park',
    category: 'Street Lighting',
    description: 'The streetlight at the park entrance has been off for two weeks, making the area unsafe at night.',
    status: STATUS.PENDING,
    priority: 'Medium',
    submittedOn: '2026-07-08',
    updatedOn: '2026-07-08',
    location: 'Gandhi Park, Main Gate',
    officer: null,
    images: 2,
    timeline: [{ date: '2026-07-08', label: 'Complaint filed', note: 'Awaiting assignment to electricity division.' }],
  },
  {
    id: 'CP-2026-01698',
    title: 'Garbage not collected for over a week',
    category: 'Sanitation & Waste',
    description: 'Waste collection has been irregular on Nehru Colony 4th Cross, leading to overflowing bins.',
    status: STATUS.REJECTED,
    priority: 'Low',
    submittedOn: '2026-06-02',
    updatedOn: '2026-06-06',
    location: 'Nehru Colony, 4th Cross',
    officer: { name: 'V. Prakash', dept: 'Sanitation Dept.', phone: '+91 98400 99012' },
    images: 1,
    rejectionReason: 'Duplicate of complaint CP-2026-01671, already resolved on 2026-06-05.',
    timeline: [
      { date: '2026-06-02', label: 'Complaint filed', note: 'Reported irregular collection.' },
      { date: '2026-06-06', label: 'Closed as duplicate', note: 'Marked duplicate of an already-resolved complaint.' },
    ],
  },
]

export const notifications = [
  {
    id: 1,
    type: 'status',
    title: 'Repair work started on your pothole complaint',
    body: 'CP-2026-01842 is now in progress — contractor has begun patch work near Anna Nagar bus stop.',
    date: '2026-07-05',
    read: false,
  },
  {
    id: 2,
    type: 'announcement',
    title: 'Monsoon drainage maintenance — Ward 8 to 14',
    body: 'Municipal teams will desilt storm drains from 15–20 July. Minor traffic diversions expected.',
    date: '2026-07-11',
    read: false,
  },
  {
    id: 3,
    type: 'scheme',
    title: 'Property tax early-payment rebate open',
    body: 'Pay your annual property tax before 31 July to receive a 5% early-payment rebate.',
    date: '2026-07-10',
    read: true,
  },
  {
    id: 4,
    type: 'status',
    title: 'Your water supply complaint was resolved',
    body: 'CP-2026-01799 has been marked resolved. Please rate your experience.',
    date: '2026-06-15',
    read: true,
  },
  {
    id: 5,
    type: 'event',
    title: 'Ward 12 public grievance meeting — 20 July',
    body: 'Councillor office hours at the Ward 12 community hall, 10 AM–1 PM. Walk-ins welcome.',
    date: '2026-07-09',
    read: true,
  },
]

export const profile = {
  name: 'Arjun Subramaniam',
  citizenId: 'TN-CIV-04471290',
  email: 'arjun.subramaniam@example.com',
  phone: '+91 98765 43210',
  address: '14, Kamaraj Street, Ward 12, Chennai, Tamil Nadu 600040',
  joined: '2024-03-11',
  ward: 'Ward 12',
}

export const schemes = [
  { name: 'Property Tax Early-Payment Rebate', dept: 'Revenue Dept.', deadline: '2026-07-31' },
  { name: 'Rainwater Harvesting Subsidy', dept: 'Water Board', deadline: '2026-09-15' },
  { name: 'Senior Citizen Utility Bill Concession', dept: 'Electricity Board', deadline: 'Ongoing' },
]
