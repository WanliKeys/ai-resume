'use client'

import { MessageCircle, Users } from 'lucide-react'
import { motion } from 'framer-motion'

interface InterviewModeToggleProps {
  isReverse: boolean
  onToggle: () => void
}

export function InterviewModeToggle({ isReverse, onToggle }: InterviewModeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full glass-effect hover:scale-105 transition-all duration-300 group"
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -2 }}
    >
      <motion.div
        animate={{ 
          x: isReverse ? 20 : 0,
          rotate: isReverse ? 180 : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative z-10"
      >
        {isReverse ? (
          <Users className="w-5 h-5 text-accent-600" />
        ) : (
          <MessageCircle className="w-5 h-5 text-primary-600" />
        )}
      </motion.div>
      
      <span className="text-sm font-medium text-gray-700 relative z-10">
        {isReverse ? '反向面试' : '正常对话'}
      </span>
      
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      
      {/* Mode indicator */}
      <motion.div
        className="absolute right-1 top-1 w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-500"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  )
}
