import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import ProtectedRoute from './components/ProtectedRoute'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Complaints from './pages/Complaints'
import NewComplaint from './pages/NewComplaint'
import ComplaintDetail from './pages/ComplaintDetail'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import { initialComplaints } from './data/mockData'

function AppShell({ children, sidebarOpen, setSidebarOpen }) {
  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [complaints, setComplaints] = useState(initialComplaints)

  const addComplaint = (complaint) => setComplaints((prev) => [complaint, ...prev])
  const rateComplaint = (id, rating) =>
    setComplaints((prev) => prev.map((c) => (c.id === id ? { ...c, rating } : c)))
  const addComment = (id, note) =>
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              timeline: [
                ...c.timeline,
                { date: new Date().toISOString().slice(0, 10), label: 'Citizen comment', note },
              ],
            }
          : c,
      ),
    )

  const menuProps = { onMenuClick: () => setSidebarOpen(true) }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppShell sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <Dashboard complaints={complaints} {...menuProps} />
            </AppShell>
          </ProtectedRoute>
        }
      />
      <Route
        path="/complaints"
        element={
          <ProtectedRoute>
            <AppShell sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <Complaints complaints={complaints} {...menuProps} />
            </AppShell>
          </ProtectedRoute>
        }
      />
      <Route
        path="/complaints/new"
        element={
          <ProtectedRoute>
            <AppShell sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <NewComplaint onSubmit={addComplaint} {...menuProps} />
            </AppShell>
          </ProtectedRoute>
        }
      />
      <Route
        path="/complaints/:id"
        element={
          <ProtectedRoute>
            <AppShell sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <ComplaintDetail
                complaints={complaints}
                onRate={rateComplaint}
                onComment={addComment}
                {...menuProps}
              />
            </AppShell>
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <AppShell sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <Notifications {...menuProps} />
            </AppShell>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <AppShell sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
              <Profile complaints={complaints} {...menuProps} />
            </AppShell>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
