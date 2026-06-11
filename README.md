<div align="center">
  <img src="./public/favicon.svg" width="80" alt="Eduverse Logo" />
  <h1 align="center">Eduverse</h1>
  <p align="center">
    <strong>Learn free. Actually free.</strong>
  </p>
  <p align="center">
    A modern, open-source learning platform built with Next.js — featuring interactive courses, gamification, certificates, and a full-featured user experience.
  </p>
  <p align="center">
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#project-structure">Structure</a> •
    <a href="#deployment">Deployment</a>
  </p>
</div>

---

## Features

<details open>
<summary><strong>🎓 Course Platform</strong></summary>

- **24 full courses** across Web Development, Data Science, AI/ML, Cybersecurity, Design, Mobile, Marketing, and Business
- **Video lessons** with YouTube integration and auto-advancing playlists
- **Reading materials** with key takeaways per lesson
- **Quizzes** per course (timed, 60% pass threshold)
- **Progress tracking** per lesson and per course
- **Certificate generation** on course completion (PDF download)
- **Certificate verification** by public code
- **Notes & bookmarks** per lesson
- **Comments & discussions** per lesson
- **Course reviews & ratings** (1–5 stars)
- **Course recommendations** based on category and keywords
- **Learning paths** — curated course collections (Frontend, Backend, Data Science, Mobile, Design)
- **Search** with filters (category, level, duration, rating, sort), autocomplete, and recent searches

</details>

<details open>
<summary><strong>👤 User System</strong></summary>

- **Email/password** registration with validation
- **Google OAuth 2.0** sign-in
- **User profiles** with avatar (Google or initial-based)
- **Dashboard** with XP, streak, level, and activity heatmap
- **Gamification** — 10 levels (Beginner → Grandmaster), XP rewards, streak tracking
- **Badges** — 7 types (First Steps, Quiz Whiz, Streak Master, Course Graduate, Knowledge Seeker, Centurion, Bookworm)
- **Notifications** — activity feed with filters
- **Wishlist** — save courses for later
- **Study planner** — daily goal setting with time targets
- **Leaderboard** — global rankings and personal stats

</details>

<details open>
<summary><strong>🎨 UI/UX</strong></summary>

- **Dark/light theme** with smooth toggle
- **Responsive design** — mobile bottom nav, desktop header
- **Animated starfield** hero scene (Three.js canvas)
- **Typewriter** headline effect
- **Scroll reveal**, parallax, magnetic buttons, custom cursor
- **Loading skeletons** for every page
- **Toast notifications** with auto-dismiss
- **Celebration modals** for new badges
- **Bottom sheets** for mobile interactions

</details>

<details open>
<summary><strong>🔐 Security & Infrastructure</strong></summary>

- **Firebase Firestore** — cloud sync for all user data
- **Firebase App Check** — ReCaptcha v3 protection (optional)
- **Content Security Policy** headers
- **Input sanitization** — XSS prevention
- **Rate limiting** — brute force protection
- **Service worker** cache management
- **Admin panel** — user and course management

</details>

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (Pages Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | CSS Custom Properties (dark/light themes) |
| **Backend** | [Firebase](https://firebase.google.com/) (Firestore, Auth, Analytics) |
| **Authentication** | Custom OAuth 2.0 (Google) + Email/Password |
| **PDF Generation** | [jsPDF](https://github.com/parallax/jsPDF) + [html2canvas](https://html2canvas.hertzen.com/) |
| **Internationalization** | [i18next](https://www.i18next.com/) (planned) |
| **Email** | [EmailJS](https://www.emailjs.com/) (password reset) |
| **Animations** | Custom (scroll reveal, parallax, Three.js starfield) |
| **Linting** | [ESLint](https://eslint.org/) + `eslint-config-next` |
| **Fonts** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20 LTS)
- **npm**, **yarn**, or **pnpm**
- A **Firebase** project (for cloud sync)
- A **Google Cloud Console** OAuth 2.0 Client ID (for Google sign-in)
- An **EmailJS** account (for password reset emails — optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/oduyemofiyin-stack/Eduverse.git
cd eduverse

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the project root:

```env
# ── Firebase ───────────────────────────────────────────
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project-default-rtdb.region.firebasedatabase.app
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
NEXT_PUBLIC_FIREBASE_APP_CHECK_KEY=your_recaptcha_key          # Optional

# ── Google OAuth ───────────────────────────────────────
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com

# ── EmailJS (Password Reset) ──────────────────────────
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id                  # Optional
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id                # Optional
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key                  # Optional

# ── Admin Credentials (Optional — has defaults) ────────
NEXT_PUBLIC_ADMIN_USER=admin                                    # Optional
NEXT_PUBLIC_ADMIN_PASS=your_admin_password                      # Optional
```

<details>
<summary><strong>How to get Firebase credentials</strong></summary>

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or select existing)
3. Go to **Project Settings** → **General** → **Your apps**
4. Click **Add app** → **Web**
5. Copy the `firebaseConfig` values into your `.env.local`
6. Enable **Authentication** → **Sign-in method** → **Email/Password**
7. (Optional) Enable **App Check** → **ReCaptcha v3**
8. Create a **Firestore Database** in your preferred region
</details>

<details>
<summary><strong>How to set up Google OAuth</strong></summary>

1. Go to the [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create an OAuth 2.0 Client ID (Web application)
3. Add authorized redirect URIs:
   - `http://localhost:3000/auth/callback` (development)
   - `https://your-domain.com/auth/callback` (production)
4. Copy the Client ID into `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
</details>

---

## Project Structure

```
eduverse/
├── components/              # Reusable UI components
│   ├── Header.js            # Sticky nav with theme toggle & user menu
│   ├── Footer.js            # Site footer with links
│   ├── BottomNav.js         # Mobile bottom tab navigation
│   ├── HeroScene.js         # Three.js animated starfield
│   ├── Accordion.js         # Expandable accordion
│   ├── StarRating.js        # 1–5 star rating
│   ├── Skeleton.js          # Loading skeletons (6 variants)
│   ├── Toast.js             # Toast notification system
│   ├── CelebrationModal.js  # Badge celebration modal
│   ├── BottomSheet.js       # Slide-up mobile sheet
│   ├── CourseRecommendations.js  # Related course suggestions
│   └── ScrollToTop.js       # Floating scroll-to-top button
│
├── context/
│   └── AppContext.js         # Global state (user, progress, XP, badges, etc.)
│
├── data/                    # Static data files
│   ├── courses.js           # 151 courses with lessons, quizzes, readings
│   ├── blog.js              # Blog articles
│   ├── instructors.js       # Instructor profiles
│   ├── paths.js             # Learning paths
│   └── resources.js         # External resource links
│
├── lib/                     # Utilities & configuration
│   ├── firebase.js          # Firebase initialization
│   ├── firestore.js         # Firestore CRUD operations
│   ├── animations.js        # Scroll reveal, parallax, magnetic, etc.
│   └── sanitize.js          # Input sanitization & rate limiting
│
├── pages/                   # Next.js Pages Router
│   ├── index.js             # Home page
│   ├── login.js             # Sign in / Sign up
│   ├── dashboard.js         # User dashboard
│   ├── profile.js           # User profile
│   ├── search.js            # Course search
│   ├── wishlist.js          # Saved courses
│   ├── enrolled.js          # My Learning
│   ├── certificates.js      # Earned certificates
│   ├── verify.js            # Certificate verification
│   ├── planner.js           # Study planner
│   ├── leaderboard.js       # Rankings & badges
│   ├── notifications.js     # Activity feed
│   ├── admin.js             # Admin panel
│   ├── about.js             # About page
│   ├── contact.js           # Contact page
│   ├── terms.js             # Terms of use
│   ├── privacy.js           # Privacy policy
│   ├── auth/
│   │   └── callback.js      # Google OAuth callback handler
│   ├── blog/
│   │   ├── index.js         # Blog listing
│   │   └── [id].js          # Blog article
│   ├── courses/
│   │   └── [id].js          # Course detail (981 lines)
│   ├── instructors/
│   │   ├── index.js         # Instructor listing
│   │   └── [id].js          # Instructor detail
│   └── paths/
│       ├── index.js         # Learning paths
│       └── [id].js          # Path detail
│
├── public/
│   └── favicon.svg          # Favicon
│
├── scripts/                 # Data generation utilities
│   ├── generate-courses.mjs
│   ├── map-images.mjs
│   ├── replace-bad-images.mjs
│   └── ...
│
├── styles/
│   └── globals.css          # Global styles & theme variables
│
├── .env.local               # Environment variables (gitignored)
├── next.config.mjs          # Next.js configuration
├── eslint.config.mjs        # ESLint configuration
├── package.json
└── README.md
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Set all environment variables in the Vercel dashboard under **Project Settings** → **Environment Variables**.

### Other Platforms

The app is a standard Next.js application. Deploy to any platform that supports Node.js:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Docker](https://www.docker.com/) (build your own image)

---

## Authentication Architecture

Eduverse uses a **hybrid authentication** approach:

1. **Email/Password** — Users are stored in `localStorage` (client-side). No backend database is required for basic functionality.
2. **Google OAuth 2.0** — Uses the implicit grant flow. The access token is exchanged for user info via the Google UserInfo API.
3. **Firebase Firestore** — All user data (progress, XP, badges, certificates, etc.) is optionally synced to Firestore for cross-device persistence.

All state is managed through React Context (`context/AppContext.js`), which persists to `localStorage` on every change.

---

## Gamification System

| Mechanic | Details |
|----------|---------|
| **XP** | Earned for enrollments (+20), lessons (+10), quizzes (+20), course completion (+50) |
| **Levels** | 10 levels from Beginner (0 XP) to Grandmaster (5000+ XP) |
| **Streak** | Consecutive daily activity tracking |
| **Badges** | 7 types: First Steps, Quiz Whiz, Streak Master, Course Graduate, Knowledge Seeker, Centurion, Bookworm |
| **Leaderboard** | Global ranking by XP |

---

## Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Built with ❤️ by <a href="https://github.com/oduyemofiyin-stack">Oduye Emmanuel</a>
</div>
