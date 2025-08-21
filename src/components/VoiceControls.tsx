'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react'

// Speech Recognition API types imported from global types

interface VoiceControlsProps {
  isListening: boolean
  isSpeaking: boolean
  onStartListening: () => void
  onStopListening: () => void
  onStopSpeaking: () => void
  onVoiceInput: (transcript: string) => void
}

export function VoiceControls({ 
  isListening, 
  isSpeaking, 
  onStartListening, 
  onStopListening, 
  onStopSpeaking,
  onVoiceInput 
}: VoiceControlsProps) {
  const [recognition, setRecognition] = useState<any>(null)
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    // Check if speech recognition is supported
    if (typeof window !== 'undefined' && (window.webkitSpeechRecognition || window.SpeechRecognition)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognitionInstance = new SpeechRecognition()
      
      recognitionInstance.continuous = false
      recognitionInstance.interimResults = false
      recognitionInstance.lang = 'zh-CN'
      
      recognitionInstance.onstart = () => {
        console.log('Voice recognition started')
      }
      
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        onVoiceInput(transcript)
        onStopListening()
      }
      
      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
        onStopListening()
      }
      
      recognitionInstance.onend = () => {
        onStopListening()
      }
      
      setRecognition(recognitionInstance)
      setIsSupported(true)
    } else {
      setIsSupported(false)
    }
  }, [onVoiceInput, onStopListening])

  const startListening = () => {
    if (recognition && !isListening) {
      try {
        recognition.start()
        onStartListening()
      } catch (error) {
        console.error('Error starting speech recognition:', error)
      }
    }
  }

  const stopListening = () => {
    if (recognition && isListening) {
      recognition.stop()
      onStopListening()
    }
  }

  if (!isSupported) {
    return null
  }

  return (
    <div className="flex gap-2">
      {/* Speech Control */}
      {isSpeaking && (
        <motion.button
          onClick={onStopSpeaking}
          className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-all duration-300"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05, y: -2 }}
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 0.5,
            repeat: Infinity
          }}
        >
          <VolumeX className="w-5 h-5" />
        </motion.button>
      )}
      
      {/* Voice Input */}
      <motion.button
        onClick={isListening ? stopListening : startListening}
        className={`p-3 rounded-xl transition-all duration-300 ${
          isListening 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-gray-500 hover:bg-gray-600 text-white'
        }`}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05, y: -2 }}
        animate={isListening ? { 
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 0 0 rgba(239, 68, 68, 0.7)',
            '0 0 0 10px rgba(239, 68, 68, 0)',
            '0 0 0 0 rgba(239, 68, 68, 0)'
          ]
        } : {}}
        transition={{ 
          duration: 1,
          repeat: isListening ? Infinity : 0
        }}
      >
        {isListening ? (
          <MicOff className="w-5 h-5" />
        ) : (
          <Mic className="w-5 h-5" />
        )}
      </motion.button>
      
      {/* Listening indicator */}
      {isListening && (
        <motion.div
          className="flex items-center gap-2 px-3 py-2 bg-red-500/10 text-red-600 rounded-xl border border-red-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <motion.div
            className="w-2 h-2 bg-red-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-sm font-medium">正在听...</span>
        </motion.div>
      )}
    </div>
  )
}
