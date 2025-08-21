'use client'

import { useState } from 'react'
import { ChatInterface } from '@/components/ChatInterface'
import { Header } from '@/components/Header'
import { ModeToggle } from '@/components/ModeToggle'
import { InterviewModeToggle } from '@/components/InterviewModeToggle'

export default function Home() {
  const [isReverseMode, setIsReverseMode] = useState(false)

  return (
    <main className="min-h-screen relative">
      {/* Header */}
      <Header />
      
      {/* Controls */}
      <div className="fixed top-6 right-6 z-50 flex gap-4">
        <InterviewModeToggle 
          isReverse={isReverseMode} 
          onToggle={() => setIsReverseMode(!isReverseMode)} 
        />
        <ModeToggle />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gradient mb-6">
              {isReverseMode ? '让我来了解你的公司' : '你好，我是AI版的我'}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {isReverseMode 
                ? '我是一个智能面试官，想了解你们公司的需求，然后为你匹配最适合的候选人特质。让我们开始对话吧！'
                : '我了解关于我本人的所有信息：项目经历、技能栈、工作经验、思维方式... 有什么想了解的，尽管问我！'
              }
            </p>
          </div>

          {/* Chat Interface */}
          <ChatInterface isReverseMode={isReverseMode} />
        </div>
      </div>
    </main>
  )
}
