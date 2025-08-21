'use client'

import { Brain, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-white/20"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="relative">
            <Brain className="w-8 h-8 text-primary-600" />
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-4 h-4 text-accent-500" />
            </motion.div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AI Resume</h1>
            <p className="text-xs text-gray-600">下一代互动简历</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="hidden md:flex items-center gap-6 text-sm text-gray-600"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>AI在线</span>
          </div>
          <div className="h-4 w-px bg-gray-300" />
          <span>支持语音对话</span>
          <div className="h-4 w-px bg-gray-300" />
          <span>智能反向面试</span>
        </motion.div>
      </div>
    </motion.header>
  )
}
