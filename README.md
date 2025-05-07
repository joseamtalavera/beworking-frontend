# BeWorking Frontend

This is the frontend for the BeWorking multi-tenant platform, built with [Next.js](https://nextjs.org/) and [Material UI](https://mui.com/). It provides public pages, user dashboards, and integrates with a Java backend API.

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:3000/](http://localhost:3000/) to see the home page.

## 🗂️ Project Structure

- `pages/` — Next.js routing directory.
  - `index.js` — Home page (landing page)
  - `main/` — Public pages (about, contact, login, register, etc.)
  - `dashboard/` — Protected pages for authenticated users/admins.
  - `api/` — API routes (serverless functions).
  - `_app.js`, `_document.js` — Custom Next.js app/document.
- `src/` — Source code for logic and UI.
  - `components/` — Reusable React components (home, login, register, etc.)
  - `hooks/` — Custom React hooks.
  - `services/` — API service functions (backend communication).
  - `utils/` — Utility/helper functions.
  - `styles/` — CSS and style modules.
- `public/` — Static assets (images, icons, etc.)

## 🌐 Backend Integration

- **API Base URL:** Set the backend URL in `.env.local`:
  ```env
  NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.com/api
  ```
- **Making Requests:** Use `fetch` or helpers in `src/services/` to communicate with the backend.

## 🧑‍💻 Development Guidelines

- Add public pages in `pages/main/`.
- Add dashboard pages in `pages/dashboard/` (use subfolders for admin/user).
- Use `src/components/` for reusable UI.
- Use `src/services/` for backend/API logic.
- Use `src/hooks/` for custom React hooks.
- Use `src/utils/` for helpers.
- Protect dashboard routes with authentication logic.

## 👩‍💻 Onboarding for New Developers

- **Home Page:** `pages/index.js`
- **Public Pages:** `pages/main/`
- **Dashboard Pages:** `pages/dashboard/`
- **API Routes:** `pages/api/`
- **UI Components:** `src/components/`
- **Hooks:** `src/hooks/`
- **Backend/API Logic:** `src/services/`
- **Utilities:** `src/utils/`
- **Styling:** `src/styles/`

### Example: Adding a New Public Page
```js
// pages/main/newpage.js
export default function NewPage() {
  return <div>My new public page!</div>;
}
```
Visit [http://localhost:3000/main/newpage](http://localhost:3000/main/newpage)

## 🏗️ Running & Building

- Start dev server: `npm run dev`
- Build: `npm run build`
- Start production: `npm start`

## 🔑 Environment Variables

- `NEXT_PUBLIC_API_BASE_URL` — Backend API base URL

## 🤝 Contributing

- Document new endpoints and features in this README.
- Follow the folder structure and guidelines above.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Material UI Documentation](https://mui.com/)
- [Learn Next.js](https://nextjs.org/learn-pages-router)

## ☁️ Deploy

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) or your preferred platform.

---

*Last updated: 6 May 2025*
