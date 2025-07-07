# AgriConnect Frontend

A modern React.js frontend application for the AgriConnect agricultural marketplace that connects farmers and suppliers.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS, Vite
- **Authentication**: JWT-based auth with persistent sessions
- **State Management**: Redux Toolkit for global state
- **API Integration**: Axios with interceptors for API calls
- **Form Validation**: React Hook Form with Zod validation
- **UI Components**: Beautiful, accessible components with shadcn/ui
- **Responsive Design**: Mobile-first responsive layout
- **Role-based Access**: Different interfaces for farmers and suppliers
- **Real-time Notifications**: Toast notifications for user feedback

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ariconnect-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5174` to see the application.

## 📝 Available Scripts

| Script                 | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start development server     |
| `npm run build`        | Build for production         |
| `npm run preview`      | Preview production build     |
| `npm run lint`         | Run ESLint                   |
| `npm run lint:fix`     | Fix ESLint errors            |
| `npm run format`       | Format code with Prettier    |
| `npm run format:check` | Check code formatting        |
| `npm run type-check`   | Run TypeScript type checking |
| `npm run test`         | Run tests in watch mode      |
| `npm run test:run`     | Run tests once               |
| `npm run test:ui`      | Run tests with UI            |

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── README.md       # Component documentation
├── pages/              # Route components
├── lib/                # Utility functions
├── test/               # Test files and setup
└── main.tsx           # Application entry point
```

## 🎨 Styling

This project uses **TailwindCSS v4** with the modern `@import "tailwindcss";` directive. The configuration is in `tailwind.config.ts`.

### Key Features:

- Utility-first CSS approach
- Dark mode support
- Responsive design utilities
- Custom color palette
- Component-based styling with shadcn/ui

## 🧪 Testing

Testing is set up with **Vitest** and **React Testing Library**:

```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

## 🔧 Configuration

### Path Aliases

Import paths are configured for clean code organization:

```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

### ESLint & Prettier

Code quality and formatting are enforced with ESLint and Prettier. Configuration files:

- `.eslintrc.js` - ESLint rules
- `.prettierrc` - Prettier formatting options

## 🏗️ Build & Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The build output is generated in the `dist/` directory, ready for deployment to any static hosting service.

## 📚 Best Practices Implemented

1. **Type Safety**: Full TypeScript integration with strict mode
2. **Code Quality**: ESLint + Prettier for consistent code style
3. **Testing**: Comprehensive test setup with Vitest
4. **Accessibility**: Using Radix UI primitives for accessible components
5. **Performance**: Optimized bundle with Vite and React 19
6. **Developer Experience**: Hot reload, path aliases, and modern tooling
7. **Scalability**: Modular component structure and clean architecture

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using modern React ecosystem tools.
