import { Users, Leaf, Truck, Shield } from 'lucide-react'
import { Layout } from '../components/layout/Layout'

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            About AgriConnect
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We're revolutionizing agriculture by connecting farmers directly with suppliers,
            creating a more efficient, transparent, and sustainable food supply chain.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              To empower farmers and suppliers with technology that makes agricultural commerce more
              efficient, profitable, and sustainable for everyone involved.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Community First
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Building strong relationships between farmers and suppliers in local communities.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Sustainability
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Promoting environmentally responsible farming practices and reducing food waste.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Efficiency
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Streamlining the supply chain to get fresh produce from farm to table faster.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Trust & Quality
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Ensuring transparency and quality assurance throughout the entire process.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                AgriConnect was born from a simple observation: there was a disconnect between
                farmers who grow amazing produce and suppliers who need fresh, quality ingredients.
              </p>
              <p>
                Traditional supply chains often involve multiple middlemen, leading to higher costs,
                longer transit times, and less transparency. We saw an opportunity to use technology
                to bridge this gap.
              </p>
              <p>
                Our platform enables direct relationships between farmers and suppliers, resulting
                in better prices for farmers, fresher produce for suppliers, and a more sustainable
                agricultural ecosystem for everyone.
              </p>
            </div>
          </div>
          <div className="bg-slate-200 dark:bg-slate-700 rounded-lg h-64 flex items-center justify-center">
            <span className="text-slate-500">Team Photo Placeholder</span>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Since launching, we've made a meaningful difference in agricultural communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-slate-600 dark:text-slate-300">Farmers Connected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-slate-600 dark:text-slate-300">Suppliers Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
              <div className="text-slate-600 dark:text-slate-300">Revenue Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50%</div>
              <div className="text-slate-600 dark:text-slate-300">Waste Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
