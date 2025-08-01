# 🌟 Social App

A modern, full-stack social media application built with Next.js, featuring real-time interactions, user authentication, and a sleek UI.

## 📋 Summary

This social app provides users with a comprehensive platform to connect, share content, and interact with others. Built with modern web technologies, it offers a seamless experience across devices with features like user profiles, post creation, real-time updates, and secure authentication.

## 🚀 Live Preview

**Demo URL:** [https://your-social-app-demo.vercel.app](https://your-social-app-demo.vercel.app)

> Replace with your actual deployment URL

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

<!-- Add your screenshots here -->
```
[Screenshot 1: Home Feed]
[Screenshot 2: User Profile]
[Screenshot 3: Post Creation]
[Screenshot 4: Mobile View]
```

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
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/social_app_db"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
CLERK_SECRET_KEY="sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/"
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/"

# UploadThing
UPLOADTHING_SECRET="sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
UPLOADTHING_APP_ID="xxxxxxxxxxxxxxxxx"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Optional: Additional configurations
NODE_ENV="development"
```

### Environment Variables Description

- `DATABASE_URL`: PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk publishable key for client-side
- `CLERK_SECRET_KEY`: Clerk secret key for server-side operations
- `UPLOADTHING_SECRET`: UploadThing secret key for file uploads
- `UPLOADTHING_APP_ID`: UploadThing application ID
- `NEXT_PUBLIC_APP_URL`: Your application URL

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

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Clerk](https://clerk.com/) for authentication services
- [Prisma](https://prisma.io/) for database management
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://radix-ui.com/) for accessible components
- [UploadThing](https://uploadthing.com/) for file upload services

---

Made with ❤️ by [Your Name](https://github.com/yourusername)