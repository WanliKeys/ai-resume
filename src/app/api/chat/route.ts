import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { getPersonalData } from '@/data/personal-data'
import { generateSystemPrompt } from '@/lib/prompts'

const openai = new OpenAI({
  apiKey: process.env.ZHIPU_API_KEY,
  baseURL: 'https://open.bigmodel.cn/api/paas/v4/',
})

export async function POST(request: NextRequest) {
  try {
    const { message, isReverseMode, conversationHistory } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    if (!process.env.ZHIPU_API_KEY) {
      return NextResponse.json(
        { error: 'ZhipuAI API key not configured' },
        { status: 500 }
      )
    }

    const personalData = getPersonalData()
    const systemPrompt = generateSystemPrompt(personalData, isReverseMode)

    // Format conversation history for ZhipuAI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map((msg: any) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
      { role: 'user', content: message }
    ]

    const completion = await openai.chat.completions.create({
      model: process.env.ZHIPU_MODEL || 'glm-4.5',
      messages: messages as any,
      max_tokens: 800,
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content

    if (!response) {
      throw new Error('No response from ZhipuAI')
    }

    return NextResponse.json({
      response: response.trim(),
      usage: completion.usage,
    })

  } catch (error) {
    console.error('Chat API error:', error)
    
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          error: 'Failed to generate response',
          details: error.message 
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
