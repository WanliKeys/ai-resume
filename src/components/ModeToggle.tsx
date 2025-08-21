'use client'

import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function ModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference, default to 'light' (ignore system preference)
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      // 确保默认是亮色模式
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full glass-effect hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -2 }}
    >
      <motion.div
        initial={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
        animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-yellow-500" />
      </motion.div>
      
      <motion.div
        initial={{ rotate: isDark ? 0 : -180, scale: isDark ? 1 : 0 }}
        animate={{ rotate: isDark ? 0 : -180, scale: isDark ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-blue-400" />
      </motion.div>
      
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  )
}
