import { motion } from 'framer-motion'

const features = [
  {
    icon: '🔒',
    title: 'Smart Guardrails',
    description: 'AI-powered content filtering and safe browsing to protect students from harmful content online.',
    color: 'primary',
  },
  {
    icon: '📊',
    title: 'Learning Tracking',
    description: 'Monitor progress, streaks, and achievements to keep students motivated and on track.',
    color: 'accent',
  },
  {
    icon: '👥',
    title: 'POD Management',
    description: 'Manage students, track attendance, assign tasks, and organize your learning center efficiently.',
    color: 'primary',
  },
  {
    icon: '🛡️',
    title: 'Safety Alerts',
    description: 'Real-time notifications for parents and admins about student safety and activity.',
    color: 'accent',
  },
  {
    icon: '📈',
    title: 'Analytics Dashboard',
    description: 'Visualize learning patterns, engagement metrics, and performance insights in one place.',
    color: 'primary',
  },
  {
    icon: '📱',
    title: 'Parent App',
    description: 'Keep parents informed with real-time updates on their child\'s learning journey.',
    color: 'accent',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete solution to run a safe and effective learning environment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className={`w-14 h-14 ${
                feature.color === 'primary' ? 'bg-primary-100' : 'bg-accent-100'
              } rounded-xl flex items-center justify-center mb-6`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
