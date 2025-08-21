'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mic, MicOff, Volume2, VolumeX } from 'lucide-react'
import { ChatMessage } from './ChatMessage'
import { TypingIndicator } from './TypingIndicator'
import { VoiceControls } from './VoiceControls'
import { Message } from '@/types/chat'

interface ChatInterfaceProps {
  isReverseMode: boolean
}

export function ChatInterface({ isReverseMode }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Initialize conversation based on mode
  useEffect(() => {
    const initialMessage: Message = {
      id: Date.now().toString(),
      content: isReverseMode 
        ? "你好！我是AI面试官，想了解一下你们公司的情况。请问你们公司主要从事什么业务？目前团队规模如何？我想为你们推荐最合适的候选人。"
        : "你好！我是AI版的本人，了解我所有的项目经历、技能和想法。有什么想了解的尽管问我，我会如实回答。你也可以问我一些具体的技术问题或者项目细节。",
      sender: 'ai',
      timestamp: new Date(),
    }
    setMessages([initialMessage])
  }, [isReverseMode])

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          isReverseMode,
          conversationHistory: messages,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get AI response')
      }

      const data = await response.json()
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        sender: 'ai',
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, aiMessage])

      // Auto-speak AI response if enabled
      if (data.response && 'speechSynthesis' in window) {
        speakText(data.response)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '抱歉，我现在无法回应。请稍后再试或检查网络连接。',
        sender: 'ai',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'zh-CN'
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)
      speechSynthesis.speak(utterance)
    }
  }

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const handleVoiceInput = (transcript: string) => {
    setInput(transcript)
    setIsListening(false)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Chat Messages */}
      <motion.div 
        className="glass-effect rounded-2xl p-6 mb-6 h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence>
          {messages.map((message) => (
            <ChatMessage 
              key={message.id} 
              message={message}
              onSpeak={() => speakText(message.content)}
              isSpeaking={isSpeaking}
            />
          ))}
        </AnimatePresence>
        
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </motion.div>

      {/* Input Area */}
      <motion.div 
        className="glass-effect rounded-2xl p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex gap-4 items-end">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isReverseMode 
                ? "告诉我你们公司的需求..." 
                : "问我任何问题..."
              }
              className="w-full p-3 pr-12 border border-gray-200 dark:border-gray-500 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white/90 dark:bg-white/15 backdrop-blur-sm text-gray-900 dark:text-gray-900 placeholder-gray-500 dark:placeholder-gray-600"
              rows={3}
              disabled={isLoading}
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400">
              {input.length}/500
            </div>
          </div>
          
          {/* Voice Controls */}
          <VoiceControls
            isListening={isListening}
            isSpeaking={isSpeaking}
            onStartListening={() => setIsListening(true)}
            onStopListening={() => setIsListening(false)}
            onStopSpeaking={stopSpeaking}
            onVoiceInput={handleVoiceInput}
          />
          
          {/* Send Button */}
          <motion.button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isLoading}
            className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl hover:from-primary-600 hover:to-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
        
        {/* Quick Actions */}
        {messages.length === 1 && (
          <motion.div 
            className="mt-4 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {isReverseMode ? (
              <>
                <QuickAction onClick={() => sendMessage("我们是一家互联网公司，主要做电商平台")}>
                  🛒 电商公司
                </QuickAction>
                <QuickAction onClick={() => sendMessage("我们是一家金融科技公司，需要前端开发")}>
                  💰 金融科技
                </QuickAction>
                <QuickAction onClick={() => sendMessage("我们是创业公司，团队20人左右")}>
                  🚀 创业公司
                </QuickAction>
              </>
            ) : (
              <>
                <QuickAction onClick={() => sendMessage("介绍一下你的技术栈")}>
                  💻 技术栈
                </QuickAction>
                <QuickAction onClick={() => sendMessage("有什么项目经历？")}>
                  🚀 项目经历
                </QuickAction>
                <QuickAction onClick={() => sendMessage("你的优势是什么？")}>
                  ⭐ 个人优势
                </QuickAction>
                <QuickAction onClick={() => sendMessage("为什么选择我们公司？")}>
                  🤔 求职动机
                </QuickAction>
              </>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

function QuickAction({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.button
      onClick={onClick}
      className="px-3 py-2 text-sm bg-white/80 dark:bg-white/15 hover:bg-white dark:hover:bg-white/25 rounded-lg border border-gray-200 dark:border-gray-500 hover:border-primary-300 dark:hover:border-primary-400 transition-all duration-200 text-gray-700 dark:text-gray-900"
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
