import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Landmark, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState(location.state?.email || '')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    const result = login({ email, password })
    if (!result.ok) {
      setError(result.error)
      return
    }
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-indigo flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-7">
          <div className="w-12 h-12 rounded-full border-2 border-sandstone flex items-center justify-center mx-auto mb-4">
            <Landmark size={22} className="text-sandstone" />
          </div>
          <h1 className="font-display text-2xl font-semibold text-white">CivicPulse</h1>
          <p className="text-white/60 text-sm mt-1.5">Log in to your citizen account</p>
        </div>

        <div className="bg-panel rounded-xl shadow-card p-6 sm:p-8">
          {location.state?.registered && (
            <div className="mb-4 bg-banyan-light border border-banyan/20 text-banyan text-sm rounded-lg px-4 py-2.5">
              Account created. Please log in to continue.
            </div>
          )}
          {error && (
            <div className="mb-4 bg-brick-light border border-brick/20 text-brick text-sm rounded-lg px-4 py-2.5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-ink/10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Your password"
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

            <button
              type="submit"
              className="w-full bg-indigo text-white font-medium py-3 rounded-lg hover:bg-indigo-dark transition-colors mt-2"
            >
              Log in
            </button>
          </form>

          <p className="text-center text-sm text-ink/50 mt-5">
            Don't have an account?{' '}
            <Link to="/register" className="text-indigo font-medium hover:underline">
              Register
            </Link>
          </p>

          <p className="text-center text-xs text-ink/35 mt-4 font-mono">
            Demo login — arjun.subramaniam@example.com / citizen123
          </p>
        </div>
      </div>
    </div>
  )
}
