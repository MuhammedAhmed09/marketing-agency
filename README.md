# Agency System (Frontend)

A scalable **Frontend SaaS dashboard** built with **Next.js (App Router)** for managing marketing agencies workflows including clients, campaigns, tasks, reports, finance, and team management.

---

## 🧠 Overview

This project is based on a **feature-driven architecture** designed for large-scale applications.

It provides a clean separation between:
- Routing (Next.js App Router)
- Business Logic (Features)
- Reusable UI (Shared Components)

---

## 🏗️ Project Structure
src/
│
├── app/ # Routing layer (Next.js App Router)
│ ├── (dashboard)/ # Protected dashboard routes
│ ├── auth/ # Authentication صفحات
│ └── layout.tsx
│
├── features/ # Business logic لكل module
│ ├── dashboard/
│ ├── clients/
│ ├── campaigns/
│ ├── tasks/
│ ├── content-approval/
│ ├── reports/
│ ├── finance/
│ └── team/
│
├── shared/ # Reusable components & utilities
│ ├── components/
│ │ ├── ui/ # Design system
│ │ ├── layout/ # Navbar, Sidebar
│ │ └── charts/
│ ├── hooks/
│ ├── utils/
│ └── types/
│
├── store/ # Global state (Zustand / Redux)
├── lib/ # API clients
└── config/ # App configuration

---

## 🧩 Core Features

- 📊 Dashboard (KPIs & Activity)
- 👥 Clients Management (Profiles, Campaigns, Billing)
- 📣 Campaigns Tracking (Goals, Budget, Performance)
- ✅ Tasks System (Kanban, Assignments, Deadlines)
- 📝 Content Approval Workflow (Uploads, Feedback, Versions)
- 📈 Reports & Analytics
- 💰 Finance (Invoices & Payments)
- 👨‍💼 Team Management (Roles & Performance)

---

## ⚙️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand (or Redux)
- **Data Fetching:** Server Components + Fetch API
- **UI Architecture:** Feature-Based Structure

---

## 💡 Author

Muhammad Ahmad Ragab
Frontend Developer (React / Next.js)

---
