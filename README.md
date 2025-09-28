# 🚀 Upgradify

**Level Up Your Future with Personalized AI Recommendations**

Upgradify is a modern web application designed to help students and young professionals discover their ideal career paths through AI-powered insights, personalized action plans, and gamified learning experiences.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Pages & Components](#-pages--components)
- [Configuration](#-configuration)
- [Available Scripts](#-available-scripts)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🤖 AI-Powered Career Recommendations

- Personalized career suggestions based on user interests, skills, and goals
- Daily recommendation limits to encourage thoughtful decision-making
- Smart matching algorithm that considers multiple factors

### 📋 Action Plan Tracker

- Step-by-step action plans to achieve career goals
- Progress tracking with visual indicators
- Clear milestones and completion status
- Customizable plans for different career paths

### 🎮 Gamification System

- Points-based reward system
- Achievement badges for milestones
- Leaderboard for friendly competition
- Daily challenges and goals

### 👤 User Profile Management

- Comprehensive onboarding process
- Interest tagging system
- Career goal setting
- Educational background tracking

### 🔐 Secure Authentication

- Email/password registration and login
- Google OAuth integration
- Firebase-powered authentication
- Secure user data management

## 🛠 Tech Stack

### Frontend

- **React 19.1.1** - Modern UI library
- **React Router DOM 7.9.3** - Client-side routing
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Vite 7.1.7** - Fast build tool and dev server

### Backend & Services

- **Firebase 12.3.0** - Backend-as-a-Service
  - Authentication
  - Firestore Database
  - Storage
  - Analytics

### Form Management

- **Formik 2.4.6** - Form state management
- **Yup 1.7.1** - Schema validation
- **React Hook Form 7.63.0** - Additional form handling

### Data Visualization

- **Chart.js 4.5.0** - Charting library
- **React Chart.js 2 5.3.0** - React wrapper for Chart.js
- **Recharts 3.2.1** - Composable charting library

### Development Tools

- **ESLint 9.36.0** - Code linting
- **TypeScript** - Type checking (for some components)
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Firebase project setup

### Installation

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd Upgradify
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
Upgradify/
├── public/
├── src/
│   ├── assets/
│   ├── pages/
│   │   ├── Dashboard.jsx            # Main dashboard page
│   │   ├── Home.tsx                 # Home page component
│   │   ├── Landing.jsx              # Landing page
│   │   └── Onboarding.jsx           # User onboarding flow
│   ├── App.css                      # Global styles
│   ├── App.jsx                      # Main app component
│   ├── index.css                    # Base styles
│   └── main.jsx                     # Application entry point
├── .env.example                     # Environment variables template
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── vite.config.js                  # Vite configuration
```

## 🔐 Authentication

The application uses Firebase Authentication with the following features:

### Available Auth Methods

- **Email/Password**: Traditional registration and login
- **Google OAuth**: One-click sign-in with Google account

### User Profile Management

- Automatic profile creation on first sign-up
- User data stored in Firestore
- Profile updates and management
- Session persistence across browser sessions

### Security Features

- Password validation (minimum 6 characters)
- Email verification support
- Secure token-based authentication
- Protected routes and components

## 📄 Pages & Components

### Landing Page (`/`)

- Hero section with value proposition
- Feature highlights
- Call-to-action buttons
- Footer with additional information

### Onboarding Flow (`/onboarding`)

- **Step 1**: Account creation (name, email, password)
- **Step 2**: Profile setup (age, grade, interests, career goals)
- **Step 3**: Welcome and completion

### Dashboard (`/dashboard`)

- Personalized welcome message
- AI recommendations panel
- Action plan tracker
- Progress metrics and badges
- Navigation sidebar
- User profile menu

### Navigation Menu

- Dashboard
- Recommendations
- Action Plans
- Templates
- Leaderboard
- Profile

## ⚙️ Configuration

### Firebase Setup

1. Create a new Firebase project
2. Enable Authentication (Email/Password and Google)
3. Create a Firestore database
4. Add your web app to the project
5. Copy configuration to environment variables

### Tailwind CSS

- Configured for modern utility-first styling
- Custom color scheme (blue-900, teal-500, orange-500)
- Responsive design utilities
- Component-based styling approach

### Vite Configuration

- React plugin for JSX support
- Tailwind CSS integration
- Hot module replacement
- Optimized build process

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build

# Building
npm install
npm run dev        # Create production build
```

## 🎯 Key Features in Detail

### AI Recommendations System

- Personalized career suggestions based on user profile
- Daily limit system (3 recommendations per day)
- Tag-based categorization
- Recent recommendations history

### Action Plan Management

- Visual progress tracking
- Step-by-step milestone system
- Multiple concurrent plans support
- Completion percentage calculation

### Gamification Elements

- Points system for user engagement
- Badge collection system
- Leaderboard for community competition
- Achievement tracking

### Responsive Design

- Mobile-first approach
- Tablet and desktop optimization
- Collapsible navigation for mobile
- Touch-friendly interface

## 🚀 Deployment

### Build for Production

```bash
npm run dev
```

### Deploy to Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

### Alternative Deployment Options

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@upgradify.com or join our community Discord server.

## 🔮 Future Roadmap

- [ ] Advanced AI recommendation algorithms
- [ ] Video interview practice sessions
- [ ] Resume builder integration
- [ ] Job application tracking
- [ ] Mentorship matching system
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Integration with job boards

---

**Made with ❤️ for the next generation of professionals**
