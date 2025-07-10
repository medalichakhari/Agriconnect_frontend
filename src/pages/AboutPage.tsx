import { Users, Leaf, Truck, Shield, Heart, Target, Zap, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { Layout } from '../components/layout/Layout'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

export default function About() {
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
                We're Fixing Agriculture's <br />
                <span className="gradient-text">Biggest Problem</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                Every year, farmers lose $47 billion to inefficient supply chains while consumers
                pay more for less fresh produce. We're changing that, one direct connection at a
                time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                The Problem We're Solving
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                    <span className="text-red-600 font-bold">⚠️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Farmers Lose 40% of Their Potential Income
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Multiple middlemen take their cut, leaving farmers with pennies on the dollar
                      for their hard work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                    <span className="text-red-600 font-bold">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Suppliers Waste Hours on Sourcing
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Calling dozens of distributors, getting inconsistent quality, and dealing with
                      unreliable deliveries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                    <span className="text-red-600 font-bold">🗑️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      30% of Fresh Produce Goes to Waste
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Long supply chains mean produce sits in warehouses losing freshness and value.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-8 rounded-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Our Solution
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <span className="text-green-600 font-bold">✅</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Direct Farmer-to-Supplier Trading
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Cut out the middleman. Farmers get fair prices, suppliers get fresh produce.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <span className="text-green-600 font-bold">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      AI-Powered Smart Matching
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Find the perfect trading partner in seconds, not hours. Quality, location, and
                      price all optimized.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <span className="text-green-600 font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      End-to-End Transparency
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Track every shipment, verify quality, and build trust through transparent
                      transactions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-950/50 dark:to-blue-950/50 p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Founded by Farmers, Built for Everyone
                  </h3>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300">
                  <p className="font-medium">
                    "I was losing $50,000 a year to distributors who didn't care about my organic
                    certification."
                  </p>
                  <p>
                    That's what our founder, Sarah Martinez, told her tech entrepreneur friend David
                    Chen in 2023. As a third-generation organic farmer from Salinas Valley, Sarah
                    was frustrated with the broken system.
                  </p>
                  <p>
                    David had just sold his logistics startup and was looking for his next
                    challenge. Together, they spent 6 months visiting farms, talking to restaurant
                    owners, and understanding the real problems.
                  </p>
                  <p className="font-medium text-green-600">
                    The result? A platform built by people who actually understand agriculture.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Our Mission & Values
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Mission: Fair Trade for All
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Every farmer deserves fair compensation for their hard work. Every supplier
                      deserves fresh, quality produce.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Community Over Profit
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      We're not just a marketplace - we're building a community of agricultural
                      partners who support each other.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Innovation with Purpose
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Technology should solve real problems, not create new ones. Every feature we
                      build has a clear purpose.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Real Impact, Real Numbers
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              In just 18 months, we've transformed thousands of agricultural businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '💰',
                number: '$12.4M',
                label: 'Extra Revenue Generated',
                subtext: 'For farmers in 2024',
                color: 'green',
              },
              {
                icon: '⏰',
                number: '47hrs',
                label: 'Average Time Saved',
                subtext: 'Per supplier monthly',
                color: 'blue',
              },
              {
                icon: '🌱',
                number: '89%',
                label: 'Waste Reduction',
                subtext: 'Compared to traditional supply chains',
                color: 'purple',
              },
              {
                icon: '🤝',
                number: '4,081',
                label: 'Active Partnerships',
                subtext: 'Formed through our platform',
                color: 'orange',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{stat.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Meet the Team Behind AgriConnect
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A diverse group of farmers, technologists, and business experts united by one mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Martinez',
                role: 'Co-Founder & CEO',
                background: '3rd Generation Organic Farmer',
                avatar: '👩‍🌾',
                quote: 'Technology should serve farmers, not the other way around.',
              },
              {
                name: 'David Chen',
                role: 'Co-Founder & CTO',
                background: 'Former Logistics Startup Founder',
                avatar: '👨‍💻',
                quote: 'Great technology solves real problems elegantly.',
              },
              {
                name: 'Maria Rodriguez',
                role: 'Head of Partnerships',
                background: 'Former Restaurant Supply Chain Manager',
                avatar: '👩‍💼',
                quote: 'Quality relationships create quality outcomes.',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  {member.background}
                </p>
                <p className="text-slate-600 dark:text-slate-300 italic">"{member.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the Agricultural Revolution?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Whether you're a farmer looking for better prices or a supplier seeking quality
              produce, your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/register">Start Your Journey Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
