import { motion } from 'framer-motion';

export default function ExperienceItem({ title, company, period, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute -left-3 top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></div>
      <h3 className="text-lg font-bold ml-2.5">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
      <p className="italic text-gray-600 dark:text-gray-300 mb-2">{company}</p>
      <ul className="text-sm text-gray-700 dark:text-gray-400 list-disc ml-5 space-y-1">
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
