'use client'

import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex gap-3 mb-6"
    >
      {/* Avatar */}
      <motion.div 
        className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Bot className="w-5 h-5 text-white" />
      </motion.div>
      
      {/* Typing bubble */}
      <div className="flex flex-col items-start max-w-md">
        <motion.div
          className="relative p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200"
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Message bubble tail */}
          <div className="absolute w-3 h-3 transform rotate-45 bg-white -bottom-1 left-4 border-r border-b border-gray-200" />
          
          {/* Typing dots */}
          <div className="flex gap-1 items-center">
            <span className="text-gray-500 text-sm mr-2">AI正在思考</span>
            <motion.div
              className="flex gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
