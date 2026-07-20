import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

// Seeded demo account so the login page can be tested immediately
const seedUsers = [
  {
    name: 'Arjun Subramaniam',
    email: 'arjun.subramaniam@example.com',
    phone: '+91 98765 43210',
    password: 'citizen123',
    address: '14, Kamaraj Street, Ward 12, Chennai, Tamil Nadu 600040',
    role: 'Citizen',
  },
]

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(seedUsers)
  const [currentUser, setCurrentUser] = useState(null)

  const register = ({ name, email, phone, password, address, role }) => {
    const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase())
    if (exists) {
      return { ok: false, error: 'An account with this email already exists. Please log in instead.' }
    }
    const newUser = { name, email, phone, password, address, role }
    setUsers((prev) => [...prev, newUser])
    return { ok: true }
  }

  const login = ({ email, password }) => {
    const match = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
    )
    if (!match) {
      return { ok: false, error: 'Incorrect email or password. Please try again.' }
    }
    setCurrentUser(match)
    return { ok: true }
  }

  const logout = () => setCurrentUser(null)

  const updateProfile = (updates) => setCurrentUser((u) => ({ ...u, ...updates }))

  return (
    <AuthContext.Provider
      value={{ currentUser, isAuthenticated: !!currentUser, register, login, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
