export interface Message {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export interface PersonalData {
  name: string
  title: string
  summary: string
  skills: string[]
  experience: Experience[]
  projects: Project[]
  education: Education[]
  contact: Contact
  personality: string[]
  values: string[]
  workStyle: string[]
}

export interface Experience {
  company: string
  position: string
  duration: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  highlights: string[]
  url?: string
  github?: string
  duration: string
}

export interface Education {
  school: string
  degree: string
  major: string
  duration: string
  gpa?: string
  achievements?: string[]
}

export interface Contact {
  email: string
  phone?: string
  location: string
  github?: string
  linkedin?: string
  website?: string
}

export interface ChatContextProps {
  personalData: PersonalData
  conversationHistory: Message[]
  isReverseMode: boolean
}
