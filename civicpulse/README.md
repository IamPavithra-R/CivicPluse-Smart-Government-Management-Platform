# CivicPulse — Citizen Portal (Frontend Only)

A React + Tailwind CSS frontend for the Citizen role of the CivicPulse Smart Governance Management Platform. No backend — all data is mocked in `src/data/mockData.js` and held in memory (state resets on page refresh).

## Features (MVP)
- **Register** — Name, Email, Phone, Password, Address, Role. Shows the platform title "Infosys_CivicPulse Smart Governance Management Platform".
- **Login** — email + password against registered accounts (in-memory, no backend). Demo account: `arjun.subramaniam@example.com` / `citizen123`.
- **Dashboard** — status summary, quick actions, recent complaints, latest announcements
- **Complaints** — file a new complaint (with photo upload UI), search & filter, detail view with timeline, officer contact, comments, and star rating for resolved complaints
- **Notifications** — complaint updates, announcements, schemes, events
- **Profile** — editable personal details, complaint history, and a **Log out** action that returns to the Register page
- **Logout** — available from both the sidebar and the Profile page; ends the session and redirects to `/register`

## Auth flow
```
/register  →  /login  →  /  (Dashboard, protected)
                              ├─ Complaints, Notifications, Profile (all protected)
                              └─ Log out (sidebar or Profile) → back to /register
```
All routes except `/register` and `/login` require an active session (`ProtectedRoute` in `src/components/ProtectedRoute.jsx`) — visiting them while logged out redirects to Register. Auth state lives in `src/context/AuthContext.jsx` (in-memory only, resets on refresh).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

## Tech stack
- React 18 + React Router
- Tailwind CSS (custom theme in `tailwind.config.js`)
- lucide-react icons
- Fonts: Fraunces (display), Inter (body), IBM Plex Mono (data/reference numbers)

## Project structure
```
src/
  context/      AuthContext.jsx — register/login/logout state (in-memory)
  components/   Sidebar, Header, StatusSeal, ProtectedRoute
  pages/        Register, Login, Dashboard, Complaints, NewComplaint, ComplaintDetail, Notifications, Profile
  data/         mockData.js — all mock complaints, notifications, profile, schemes
```

## Notes
- This is intentionally frontend-only per project scope — hook up the API calls in `App.jsx` (where complaint state is managed) when a backend is ready.
- Design intent: a civic/institutional palette (indigo + sandstone) with a stamp/seal motif for complaint status, distinct from a generic admin dashboard look.
