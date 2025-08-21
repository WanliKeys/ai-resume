'use client'

import { motion } from 'framer-motion'
import { Volume2, Bot, User } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Message } from '@/types/chat'

interface ChatMessageProps {
  message: Message
  onSpeak: () => void
  isSpeaking: boolean
}

export function ChatMessage({ message, onSpeak, isSpeaking }: ChatMessageProps) {
  const isUser = message.sender === 'user'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex gap-3 mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {/* Avatar */}
      {!isUser && (
        <motion.div 
          className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"
          animate={{ 
            scale: isSpeaking ? [1, 1.1, 1] : 1,
            rotate: isSpeaking ? [0, 5, -5, 0] : 0
          }}
          transition={{ 
            duration: 0.5,
            repeat: isSpeaking ? Infinity : 0
          }}
        >
          <Bot className="w-5 h-5 text-white" />
        </motion.div>
      )}
      
      {/* Message Content */}
      <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-md`}>
        <motion.div
          className={`relative p-4 rounded-2xl ${
            isUser 
              ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white' 
              : 'bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-200'
          }`}
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* Message bubble tail */}
          <div 
            className={`absolute w-3 h-3 transform rotate-45 ${
              isUser 
                ? 'bg-primary-500 -bottom-1 right-4' 
                : 'bg-white -bottom-1 left-4 border-r border-b border-gray-200'
            }`} 
          />
          
          {/* Message text */}
          <div className="relative z-10">
            {isUser ? (
              <p className="leading-relaxed">{message.content}</p>
            ) : (
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                className="prose prose-sm max-w-none text-gray-800 leading-relaxed
                  prose-headings:text-gray-900 prose-headings:font-semibold
                  prose-p:my-2 prose-ul:my-2 prose-li:my-1
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded
                  prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200"
              >
                {message.content}
              </ReactMarkdown>
            )}
          </div>
          
          {/* Voice button for AI messages */}
          {!isUser && (
            <motion.button
              onClick={onSpeak}
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-500 hover:bg-accent-600 rounded-full flex items-center justify-center text-white shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                scale: isSpeaking ? [1, 1.2, 1] : 1,
              }}
              transition={{ 
                duration: 0.3,
                repeat: isSpeaking ? Infinity : 0
              }}
            >
              <Volume2 className="w-4 h-4" />
            </motion.button>
          )}
        </motion.div>
        
        {/* Timestamp */}
        <motion.span 
          className="text-xs text-gray-500 mt-1 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {message.timestamp.toLocaleTimeString('zh-CN', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </motion.span>
      </div>
      
      {/* User Avatar */}
      {isUser && (
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </motion.div>
  )
}
