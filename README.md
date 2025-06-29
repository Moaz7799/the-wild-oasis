# 🌴 The Wild Oasis

A modern hotel booking dashboard built with **React**, **styled-components**, and **Vite**.

This application provides a clean, responsive, and feature-rich interface for managing guests, cabins, bookings, and more. Designed as an internal admin panel for a fictional hotel business, **The Wild Oasis** demonstrates best practices in modern frontend development.

---

## 🚀 Features

- **Dashboard Overview**: Visualize key stats, recent bookings, and activity at a glance.
- **Cabin Management**: Add, edit, duplicate, and delete cabins with image uploads.
- **Booking Management**: View, filter, and manage bookings with detailed data and check-in/out flows.
- **Guest Management**: Track guest details and booking history.
- **User Authentication**: Secure login and user account management.
- **Settings Panel**: Configure app-wide settings.
- **Dark Mode**: Seamless light/dark theme toggle with context API.
- **Responsive Design**: Fully optimized for desktop and mobile.
- **Search, Filter & Pagination**: Quickly find and organize data.
- **Notifications**: Real-time feedback with toast notifications.
- **Error Boundaries**: Friendly error handling for a robust experience.
- **Developer Experience**: Fast development with Vite, React Query Devtools, and modular code structure.

---

## 🗂️ Project Structure & File/Folder Purpose

```
src/
  App.jsx                # Main app component, sets up routes and providers
  main.jsx               # Entry point, renders App and error boundary
  context/
    DarkModeContext.jsx  # Context for dark mode state and provider
  data/
    data-bookings.js     # Sample bookings data
    data-cabins.js       # Sample cabins data
    data-guests.js       # Sample guests data
    Uploader.jsx         # Utility to upload/reset sample data to backend
    cabins/              # (Reserved for cabin-related data assets)
  features/
    authentication/      # User authentication, signup, login, logout, user avatar, update user
    bookings/            # Booking list, detail, row, data box, hooks for bookings
    cabins/              # Cabin table, row, form, hooks for cabins (CRUD)
    check-in-out/        # Check-in/out flows, today's activity, related hooks
    dashboard/           # Dashboard layout, stats, charts, filters
    settings/            # Settings panel, update form, and related hooks
  hooks/
    useLocalStorageState.js # Custom hook for localStorage state
    useMoveBack.js          # Custom hook for navigation/back
  pages/
    Account.jsx         # User account page (update info/password)
    Booking.jsx         # Single booking detail page
    Bookings.jsx        # Bookings list page
    Cabins.jsx          # Cabins list and management page
    Checkin.jsx         # Check-in page for a booking
    Dashboard.jsx       # Dashboard overview page
    Login.jsx           # Login page
    PageNotFound.jsx    # 404 fallback page
    Settings.jsx        # Hotel settings page
    Users.jsx           # User management (signup) page
  services/
    apiAuth.js          # API calls for authentication and user management
    apiBookings.js      # API calls for bookings CRUD
    apiCabins.js        # API calls for cabins CRUD
    apiSettings.js      # API calls for settings CRUD
    supabase.js         # Supabase client and config
  styles/
    GlobalStyles.js     # Global CSS styles and theme variables
  ui/
    (Many files)        # Reusable UI components: Button, Modal, Table, Input, Heading, Sidebar, Header, Logo, Tag, Spinner, etc.
  utils/
    constants.js        # App-wide constants (e.g., page size)
    helpers.js          # Utility/helper functions
public/
  ...                   # Static assets (images, icons)
```

---

## ✨ Pros & Highlights

- **Modern Stack**: Built with React 18+, styled-components, Vite, and React Query.
- **Component-Driven**: Highly modular, reusable, and maintainable codebase.
- **State Management**: Uses React Query for data fetching/caching and Context API for global state.
- **Custom Hooks**: Clean separation of logic with custom hooks.
- **Type-Safe Styling**: All styles handled with styled-components for scoped, maintainable CSS.
- **API Ready**: Easily switch between mock data and real APIs (e.g., Supabase, JSON server).
- **Developer Friendly**: Includes ESLint, Prettier, and VSCode settings for consistent code quality.
- **Accessible**: Focus on keyboard navigation and accessible UI patterns.
- **Extensible**: Easy to add new features or adapt for real-world hotel management.

---

## 📸 Demo

[Live Preview](https://the-wild-oasis-sand-beta.vercel.app/)

---

## 🛠️ Tech Stack

- **React** — UI and components
- **React Router** — Routing and navigation
- **Styled-components** — Styling
- **Vite** — Fast dev server and build tool
- **React Query / Context API** — Data/state management
- **Supabase / JSON server** — (Optional) for backend API

---

## 🏁 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```

---

## 📂 File Structure

See the [src/](src/) directory for all source code. Key files and folders:

- [App.jsx](src/App.jsx): Main app and routing
- [main.jsx](src/main.jsx): Entry point and error boundary
- [context/](src/context/): Context providers (e.g., dark mode)
- [data/](src/data/): Static data and uploader
- [features/](src/features/): All business logic and feature modules
- [hooks/](src/hooks/): Custom React hooks
- [pages/](src/pages/): Route pages (Dashboard, Bookings, Cabins, etc.)
- [services/](src/services/): API and data fetching logic
- [styles/](src/styles/): Global and component styles
- [ui/](src/ui/): Shared UI components
- [utils/](src/utils/): Utility functions and constants

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

---

## 📝 License

This project is for educational/demo purposes.

---

**The Wild Oasis** — A modern, beautiful, and extensible hotel
