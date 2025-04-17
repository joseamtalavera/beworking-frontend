This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

- `pages/` — Next.js routing directory.
  - `main/` — Public pages (e.g., about, contact, home, services).
  - `dashboard/` — Protected pages for authenticated users/admins.
  - `api/` — API routes (serverless functions).
  - `_app.js`, `_document.js` — Custom Next.js app/document (must remain at root).
- `src/` — Source code for logic and UI.
  - `components/` — Reusable React components.
  - `hooks/` — Custom React hooks.
  - `services/` — API service functions (e.g., backend communication).
  - `utils/` — Utility/helper functions.
  - `styles/` — CSS and style modules.

## Backend Integration

This project is a frontend tenant for a multitenant system. It connects to a Java backend (API) and uses POST/GET requests for data.

- **API Base URL:** Set the backend URL in an environment variable (e.g., `.env.local`):
  ```env
  NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.com/api
  ```
- **Making Requests:** Use `fetch` or a helper in `src/services/` to communicate with the backend. Example:
  ```js
  // src/services/api.js
  export async function postData(endpoint, data) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  }
  ```

## Development Guidelines

- To add a public page: create a file in `pages/main/`.
- To add a dashboard page: create a file in `pages/dashboard/` (use subfolders for admin/user separation).
- Use `src/components/` for reusable UI.
- Use `src/services/` for backend/API logic.
- Use `src/hooks/` for custom React hooks.
- Use `src/utils/` for helpers.
- Protect dashboard routes with authentication logic (middleware or HOC).

## Onboarding for New Developers

Welcome to the BeWorking frontend! This project uses Next.js and Material UI. Here are some tips to help you get started quickly:

### Project Overview
- **Home Page:** The main public home page is at `pages/main/index.js`.
- **Public Pages:** Add or edit public-facing pages in `pages/main/` (e.g., `about.js`, `contact.js`, `services.js`).
- **Dashboard Pages:** For authenticated user/admin pages, use `pages/dashboard/` (with subfolders for `admin/` and `user/`).
- **API Routes:** Serverless API endpoints live in `pages/api/`.
- **UI Components:** Reusable UI lives in `src/components/`.
- **Hooks:** Custom React hooks go in `src/hooks/`.
- **Backend/API Logic:** Use `src/services/` for API calls and backend communication.
- **Utilities:** Place helper functions in `src/utils/`.
- **Styling:** Use `src/styles/` for global and modular CSS.

### How to Start
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Visit the app:**
   Open [http://localhost:3000/main](http://localhost:3000/main) to see the home page.

### Adding Features
- To add a new public page, create a file in `pages/main/`.
- To add a dashboard page, use `pages/dashboard/` and the appropriate subfolder.
- For new UI, add a component in `src/components/` and import it where needed.
- For backend calls, add a function in `src/services/`.

### Code Style & Best Practices
- Use Material UI components for consistency.
- Keep logic and UI separated (use hooks and services).
- Document new features and endpoints in this README.
- Protect dashboard routes with authentication logic.

### Example: Adding a New Public Page
1. Create `pages/main/newpage.js`:
   ```js
   export default function NewPage() {
     return <div>My new public page!</div>;
   }
   ```
2. Visit [http://localhost:3000/main/newpage](http://localhost:3000/main/newpage)

### Questions?
- Check the comments in the code for guidance.
- Ask the team if you’re unsure where something belongs.

## Running & Building

- Start dev server: `npm run dev`
- Build: `npm run build`
- Start production: `npm start`

## Environment Variables

- `NEXT_PUBLIC_API_BASE_URL` — Backend API base URL

## Contributing

- Document new endpoints and features in this README.
- Follow the folder structure and guidelines above.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
