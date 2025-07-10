import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Package, Truck, Star } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Layout } from '../components/layout/Layout'

const LandingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-950/20 dark:via-slate-900 dark:to-blue-950/20 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                From Farm to Table <br />
                <span className="gradient-text">Without the Hassle</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                Skip the middleman. Connect directly with verified farmers and premium suppliers.
                Get fresher produce, better prices, and build lasting partnerships that grow your
                business.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button asChild size="lg">
                <Link to="/register">
                  Start Trading Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">See How It Works</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Why Thousands Choose AgriConnect
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Real benefits that make a difference to your bottom line and peace of mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Verified Partners Only',
                description:
                  "Every farmer and supplier goes through our rigorous verification process. Trade with confidence knowing you're working with legitimate, quality-focused partners.",
                color: 'green',
                benefit: 'Trust & Safety',
              },
              {
                icon: Package,
                title: 'Smart Inventory Matching',
                description:
                  'Our AI-powered system matches your specific needs with available inventory in real-time. No more calling dozens of suppliers or settling for second-best.',
                color: 'blue',
                benefit: 'Save Time',
              },
              {
                icon: Truck,
                title: 'Transparent Logistics',
                description:
                  'Track every shipment from harvest to delivery. Get real-time updates, temperature monitoring, and guaranteed delivery windows.',
                color: 'purple',
                benefit: 'Peace of Mind',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {feature.benefit}
                </div>
                <div
                  className={`bg-${feature.color}-100 dark:bg-${feature.color}-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                >
                  <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Trading Made Simple in 3 Steps
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Skip the complicated processes. Start trading quality produce in minutes, not days.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Create Your Profile',
                description:
                  "Quick 5-minute setup. Upload your certifications, specify your products or needs, and you're ready to trade.",
                icon: '🌱',
              },
              {
                step: '02',
                title: 'Smart Matching',
                description:
                  'Our AI instantly connects you with the best matches based on location, quality standards, and pricing preferences.',
                icon: '🎯',
              },
              {
                step: '03',
                title: 'Trade & Track',
                description:
                  'Negotiate, finalize deals, and track every shipment in real-time. Payment protection included on every transaction.',
                icon: '🚚',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-300 transform translate-x-1/2 z-0"></div>
                )}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 relative z-10">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-sm font-bold text-green-600 mb-2">STEP {step.step}</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
            >
              <Link to="/register">
                Get Started Now - It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-slate-500 mt-2">
              No credit card required • Start trading in minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: '2,847',
                label: 'Verified Farmers',
                icon: Users,
                subtext: 'Across 12 states',
              },
              {
                number: '1,234',
                label: 'Premium Suppliers',
                icon: Package,
                subtext: 'Restaurant & retail grade',
              },
              { number: '127K', label: 'Tons Traded', icon: Truck, subtext: 'This year alone' },
              {
                number: '4.9★',
                label: 'Average Rating',
                icon: Star,
                subtext: 'From 10,000+ reviews',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-300 flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="h-4 w-4" />
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{stat.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Trusted by Industry Leaders
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Join these companies who've already made the switch
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
            {[
              { name: 'Whole Foods Market', logo: '🥬' },
              { name: 'Farm Fresh Co.', logo: '🌾' },
              { name: 'Green Valley Farms', logo: '🥕' },
              { name: 'Organic Plus', logo: '🌿' },
            ].map((company, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <div className="text-4xl mb-2">{company.logo}</div>
                <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {company.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Success Stories That Speak Volumes
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Real results from real people who've transformed their agricultural business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Before AgriConnect, I was selling tomatoes for $2/lb to distributors. Now I sell directly to restaurants for $4.50/lb. That's an extra $75,000 in revenue this season alone!",
                author: 'Maria Santos',
                role: 'Organic Tomato Farmer',
                location: 'Fresno, CA',
                savings: '$75K+ Extra Revenue',
                rating: 5,
              },
              {
                quote:
                  "We used to spend 3 hours daily calling suppliers for quotes. AgriConnect's smart matching gets us 5 competitive quotes in under 10 minutes. Our procurement costs dropped 23%.",
                author: 'James Chen',
                role: 'Procurement Manager',
                location: 'Green Valley Restaurant Group',
                savings: '23% Cost Reduction',
                rating: 5,
              },
              {
                quote:
                  "The delivery tracking is game-changing. We know exactly when our organic lettuce arrives, and it's always 2-3 days fresher than what we got from traditional suppliers.",
                author: 'Amanda Rodriguez',
                role: 'Store Manager',
                location: 'Fresh Market Chain',
                savings: '3x Longer Shelf Life',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {testimonial.savings}
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Unlock Your Agricultural Success?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join over 4,000 farmers and suppliers who've already increased their profits by an
              average of 34% in their first year
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" variant="secondary">
                <Link to="/register">
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/login">I'm Already a Member</Link>
              </Button>
            </div>
            <p className="text-sm text-green-200 opacity-90">
              🎯 Free to join • 📱 Takes 2 minutes • 🚀 Start trading immediately
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default LandingPage
