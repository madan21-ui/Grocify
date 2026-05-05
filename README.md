# 🛒 Grocify

**Grocify** is a modern, cross-platform grocery list management application built with **React Native and Expo**. It helps users organize, track, and optimize their grocery shopping with powerful features like categorization, priority management, purchase tracking, and insights.

---

## 🚀 Features

* ✅ Create, update, and delete grocery items
* 🗂️ Categorize items (produce, dairy, etc.)
* ⭐ Set priority levels (low, medium, high)
* ✔️ Track purchased items
* 📊 Insights dashboard for shopping analytics
* 🍽️ Meal planner integration
* 🔐 Secure authentication with social login
* ⚡ Optimistic UI updates for smooth UX

---

## 🏗️ Tech Stack

### 📱 Frontend

* React Native (Expo)
* Expo Router (file-based navigation)
* TypeScript

### 🎨 UI & Styling

* NativeWind (Tailwind CSS for React Native)
* Expo Linear Gradient
* Expo Blur
* React Native Reanimated

### 🧠 State Management

* Zustand

### 🔐 Authentication

* Clerk (Google, GitHub, Apple login)
* Expo Secure Store

### 🗄️ Backend & Database

* Neon (Serverless PostgreSQL)
* Drizzle ORM (type-safe queries)
* Drizzle Kit (migrations & schema)

### 📡 API Layer

* Expo Router API Routes (server-side logic)

### 📊 Monitoring

* Sentry (error tracking & performance monitoring)

---

## 🧩 Architecture Overview

Grocify follows a **modern full-stack mobile architecture**:

```
src/
├── app/                # Routes & layouts (Expo Router)
├── components/         # Reusable UI components
├── hooks/              # Custom hooks
├── lib/server/         # Database & server logic
├── store/              # Zustand state management
```

### Key Concepts

* **File-based routing** using Expo Router
* **API routes** for CRUD operations
* **Type-safe database layer** with Drizzle ORM
* **Centralized state management** with Zustand
* **Secure authentication flow** with Clerk

---

## 🔐 Authentication Flow

1. User selects a social login provider
2. Clerk handles OAuth authentication
3. Session is created and securely stored
4. User is redirected to the main app

---

## 🗄️ Database Schema

The app uses a `grocery_items` table:

| Field      | Type      | Description       |
| ---------- | --------- | ----------------- |
| id         | UUID      | Primary key       |
| name       | String    | Item name         |
| category   | String    | Item category     |
| quantity   | Number    | Item quantity     |
| purchased  | Boolean   | Purchase status   |
| priority   | String    | Priority level    |
| updated_at | Timestamp | Last updated time |

---

## 📡 API Endpoints

| Method | Endpoint                     | Description           |
| ------ | ---------------------------- | --------------------- |
| GET    | `/api/items`                 | Fetch all items       |
| POST   | `/api/items`                 | Create new item       |
| PATCH  | `/api/items/:id`             | Update item           |
| DELETE | `/api/items/:id`             | Delete item           |
| POST   | `/api/items/clear-purchased` | Clear purchased items |

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/grocify.git
cd grocify
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file and add:

```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
DATABASE_URL=your_neon_database_url
SENTRY_DSN=your_sentry_dsn
```

---

### 4️⃣ Run the App

```bash
npm start
```

Then open in:

* Android Emulator
* iOS Simulator
* Expo Go

---

## 🛠️ Development Workflow

### Database Changes

```bash
npm run db:push
```

### Seed Database

```bash
npm run seed:grocery
```

### Run on Device

```bash
npm run android
npm run ios
```

---

## 📊 Future Improvements

* 🧾 Smart recommendations using AI
* 📦 Inventory tracking
* 🛍️ Budget management
* 🔔 Notifications & reminders
* 🌐 Offline support

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 💡 Acknowledgements

* Expo team for amazing tooling
* Clerk for authentication
* Neon & Drizzle for backend simplicity

---

## 📬 Contact

If you have feedback or ideas, feel free to reach out!

---

⭐ **If you like this project, don't forget to star the repo!**
