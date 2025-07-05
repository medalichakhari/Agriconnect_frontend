import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            About This Project
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Built with modern best practices and developer experience in mind
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
            <CardDescription>
              This project showcases modern web development practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• React 19 with TypeScript</li>
                  <li>• Vite for fast development</li>
                  <li>• TailwindCSS for styling</li>
                  <li>• shadcn/ui components</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Libraries</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• React Router for navigation</li>
                  <li>• TanStack Query for data fetching</li>
                  <li>• React Hook Form with Zod</li>
                  <li>• ESLint + Prettier</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>What makes this project special</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
              <li>✅ Modern React patterns with hooks and functional components</li>
              <li>✅ Full TypeScript support with strict type checking</li>
              <li>✅ Responsive design with TailwindCSS utilities</li>
              <li>✅ Accessible components from shadcn/ui</li>
              <li>✅ Optimized development experience with Vite</li>
              <li>✅ Code quality tools (ESLint, Prettier)</li>
              <li>✅ Path aliases for clean imports</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
