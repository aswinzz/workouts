# Aswin's Workouts

This is a personal workout plan web application built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/). It displays my current workout split and details for my lean bulk phase.

## ✨ Features

- **Detailed Workout Plan**: View daily workout routines, including compound and accessory exercises.
- **Dynamic Day Highlighting**: Automatically selects the current day of the week.
- **Light & Dark Mode**: Switch between light and dark themes.
- **Responsive Design**: Looks great on all devices.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Font:** [Outfit](https://fonts.google.com/specimen/Outfit)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

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

## 🔧 Customization

The workout data is stored in `lib/workout-data.ts`. You can modify this file to update the workout plan details. The main page component is located at `app/page.tsx`.
