import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Layout } from '../components/layout/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-slate-200 dark:text-slate-700">404</h1>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-4">
              Page Not Found
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved,
              deleted, or you entered the wrong URL.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
