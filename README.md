# 🌟 Social App

A modern, full-stack social media application built with Next.js, featuring real-time interactions, user authentication, and a sleek UI.


## 🚀 Live Preview

**Demo URL:** [https://social-app-eight-jet.vercel.app/](https://social-app-eight-jet.vercel.app/)


## ✨ Features

- 🔐 **Secure Authentication** - User registration and login with Clerk
- 👤 **User Profiles** - Customizable user profiles with avatars
- 📝 **Post Creation** - Create and share posts with rich content
- 🖼️ **Image Upload** - Upload and share images with UploadThing
- 💬 **Real-time Interactions** - Like, comment, and share posts
- 🌙 **Dark/Light Mode** - Toggle between themes
- 📱 **Responsive Design** - Optimized for all devices
- 🔍 **Search & Discovery** - Find users and content
- 📊 **Activity Feed** - Stay updated with latest activities
- 🎨 **Modern UI** - Clean and intuitive interface

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Theme:** Next Themes

### Backend & Database
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** Clerk
- **File Upload:** UploadThing
- **API:** Next.js API Routes

### Development Tools
- **Package Manager:** npm
- **Linting:** ESLint
- **Type Checking:** TypeScript
- **Build Tool:** Next.js

## 📸 Screenshots


![Screenshot 1](/screenshots/s1.png)
![Screenshot 2](/screenshots/s3.png)
![Screenshot 3](/screenshots/s3.png)
![Screenshot 4](/screenshots/s4.png)


## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn
- PostgreSQL database
- Clerk account
- UploadThing account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/social-app.git
   cd social-app/my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables (see Environment Variables section below)

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/social_app_db"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
CLERK_SECRET_KEY="sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
UPLOADTHING_TOKEN="xxxxxxxxxxx"
UPLOADTHING_SECRET="sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
UPLOADTHING_APP_ID="xxxxxxxxxxxxxxxxx"
```

## 📁 Project Structure

```
my-app/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utility libraries and configurations
│   ├── actions/             # Server actions
│   ├── utils/               # Helper functions
│   └── middleware.ts        # Next.js middleware
├── prisma/
│   └── schema.prisma        # Database schema
├── public/                  # Static assets
└── package.json             # Dependencies and scripts
```
