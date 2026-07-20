import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Landmark, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const ROLES = ['Citizen', 'Field Officer', 'Department Admin']

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    role: 'Citizen',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    const result = register({
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      address: form.address,
      role: form.role,
    })

    if (!result.ok) {
      setError(result.error)
      return
    }

    navigate('/login', { state: { registered: true, email: form.email } })
  }

  return (
    <div className="min-h-screen bg-indigo flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl">
        {/* Platform title */}
        <div className="text-center mb-7">
          <div className="w-12 h-12 rounded-full border-2 border-sandstone flex items-center justify-center mx-auto mb-4">
            <Landmark size={22} className="text-sandstone" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-snug">
            Infosys_CivicPulse Smart Governance Management Platform
          </h1>
          <p className="text-white/60 text-sm mt-2">Create your account to get started</p>
        </div>

        <div className="bg-panel rounded-xl shadow-card p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink mb-5">Register</h2>

          {error && (
            <div className="mb-4 bg-brick-light border border-brick/20 text-brick text-sm rounded-lg px-4 py-2.5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Full name</label>
              <input
                value={form.name}
                onChange={update('name')}
                required
                placeholder="Your full name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  required
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Address</label>
              <input
                value={form.address}
                onChange={update('address')}
                required
                placeholder="Street, area, ward, city"
                className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Role</label>
              <select
                value={form.role}
                onChange={update('role')}
                className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm bg-panel focus:outline-none focus:ring-2 focus:ring-indigo/40"
              >
                {ROLES.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
              {form.role !== 'Citizen' && (
                <p className="text-xs text-ink/40 mt-1.5">
                  This portal currently supports the Citizen workspace. Other roles will land here in demo mode too.
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={update('password')}
                    required
                    minLength={6}
                    placeholder="At least 6 characters"
                    className="w-full px-3.5 py-2.5 pr-10 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink/70"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-1.5">Confirm password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.confirmPassword}
                  onChange={update('confirmPassword')}
                  required
                  placeholder="Re-enter password"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo text-white font-medium py-3 rounded-lg hover:bg-indigo-dark transition-colors mt-2"
            >
              Create account
            </button>
          </form>

          <p className="text-center text-sm text-ink/50 mt-5">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo font-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
