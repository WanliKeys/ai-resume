import { PersonalData } from '@/types/chat'

// 🔥 这里是你的个人数据，需要根据实际情况修改
export function getPersonalData(): PersonalData {
  return {
    name: "李万里",
    title: "资深Java开发工程师 / AI编程专家",
    summary: "拥有11年Java开发经验，专注于微服务分布式架构和高并发系统开发。参与过ERP、金融信贷系统开发，熟练掌握AI编程和AI智能体技术，主导AI代码生成/审查插件项目从0到1落地。持有PMP项目管理认证，具备英语四级、计算机二级等资格证书。",
    
    skills: [
      "后端：Java, Spring Boot, Spring Cloud, MyBatis, JPA",
      "架构：微服务分布式架构, 多线程开发, 高并发处理",
      "数据库：MySQL, Redis, Oracle",
      "AI技术：AI编程, AI智能体, 代码生成工具",
      "工具：Linux, Maven, Git, Jenkins, Docker",
      "其他：敏捷开发, PMP项目管理, ERP系统, 金融信贷系统"
    ],
    
    experience: [
      {
        company: "鼎捷数智股份有限公司江苏分公司",
        position: "资深开发",
        duration: "2023.06-2025.08",
        description: "作为业务中台资深开发，负责对接上下游系统业务，保障系统性能稳定性",
        achievements: [
          "牵头主导AI代码生成/审查插件项目从0-1落地",
          "项目迭代2个版本供100人使用",
          "保障业务中台系统性能稳定性",
          "负责上下游系统业务对接"
        ],
        technologies: ["Java", "Spring Boot", "微服务", "AI代码生成", "插件开发"]
      },
      {
        company: "ATOS",
        position: "高级Java开发工程师",
        duration: "2022.02-2023.06",
        description: "负责POS系统需求开发，参与代码审查，优化系统性能",
        achievements: [
          "负责POS需求开发，保障系统稳定运行",
          "参与代码CodeReview，提升代码质量",
          "对业务需求提出建设性技术建议",
          "优化系统代码，提高代码性能和可读性"
        ],
        technologies: ["Java", "Spring", "POS系统", "代码优化"]
      },
      {
        company: "蜂泰科技",
        position: "高级Java开发工程师",
        duration: "2018.10-2021.12",
        description: "参与金融信贷系统架构设计，负责放款申请、放款通知模块开发",
        achievements: [
          "参与产品需求与可行性讨论，提出技术可行方案",
          "负责放款申请、放款通知模块功能开发",
          "牵头重写资金路由系统，采用设计模式优化流程",
          "重构放款和结算模块，采用策略+抽象工厂+单例+责任链模式"
        ],
        technologies: ["Java", "Spring", "金融信贷", "设计模式", "系统重构"]
      },
      {
        company: "苏宁易购",
        position: "Java开发工程师",
        duration: "2014.10-2018.08",
        description: "负责调度系统功能开发，与用户沟通需求，系统监控维护",
        achievements: [
          "负责调度系统功能开发，满足不同作业类型需求",
          "与用户沟通需求，整理需求文档，需求分析评审",
          "与不同平台接口对接，业务对接，功能对接",
          "负责功能拆分、任务分配，日常系统监控维护"
        ],
        technologies: ["Java", "调度系统", "接口对接", "系统监控"]
      }
    ],
    
    projects: [
      {
        name: "AI代码生成/审查插件",
        description: "主导开发的AI代码生成和审查插件，从0到1落地的企业级工具",
        technologies: ["Java", "AI代码生成", "插件开发", "Spring Boot"],
        highlights: [
          "牵头主导项目从0-1落地",
          "迭代2个版本供100人使用",
          "提升开发效率和代码质量",
          "集成AI智能体技术"
        ],
        duration: "2023.06-2025.08"
      },
      {
        name: "资金路由系统重写",
        description: "采用设计模式重写资金路由系统，优化业务流程",
        technologies: ["Java", "Spring", "设计模式", "金融系统"],
        highlights: [
          "采用设计模式按固定流程执行",
          "记录每个节点的操作日志",
          "提升系统稳定性和可维护性",
          "优化资金路由算法"
        ],
        duration: "2020年"
      },
      {
        name: "放款和结算模块重构",
        description: "重构金融信贷系统核心模块，采用多种设计模式优化架构",
        technologies: ["Java", "Spring", "策略模式", "抽象工厂模式", "责任链模式"],
        highlights: [
          "采用策略模式+抽象工厂模式优化业务逻辑",
          "使用单例模式+责任链模式提升性能",
          "提高代码复用率和可扩展性",
          "优化放款和结算业务流程"
        ],
        duration: "2019-2020年"
      },
      {
        name: "调度系统开发",
        description: "负责调度系统功能开发，满足不同作业类型的调度需求",
        technologies: ["Java", "调度算法", "接口对接", "系统监控"],
        highlights: [
          "支持多种作业类型的调度功能",
          "与不同平台接口对接",
          "系统监控和维护功能",
          "功能拆分和任务分配优化"
        ],
        duration: "2014-2018年"
      }
    ],
    
    education: [
      {
        school: "南京理工大学",
        degree: "本科",
        major: "计算机科学与技术",
        duration: "2020-2022",
        achievements: [
          "计算机科学与技术专业",
          "系统学习Java编程和软件工程",
          "掌握计算机基础理论知识"
        ]
      },
      {
        school: "南京信息职业技术学院",
        degree: "大专",
        major: "软件技术",
        duration: "2011-2014",
        achievements: [
          "软件技术专业毕业",
          "获得计算机二级证书",
          "为Java开发career奠定基础"
        ]
      }
    ],
    
    contact: {
      email: "liwanli_6@163.com",
      phone: "+86 187-5188-9124",
      location: "南京",
      github: "https://github.com/liwanli",
      linkedin: "https://linkedin.com/in/liwanli",
      website: "https://liwanli.dev"
    },
    
    personality: [
      "11年Java开发经验，技术功底扎实，追求代码质量",
      "主导AI项目从0到1落地，具备创新思维和执行力",
      "熟悉金融、ERP等复杂业务场景，业务理解能力强",
      "善于沟通协作，能够与产品、测试等多角色配合",
      "持续学习新技术，特别是AI编程和智能体技术"
    ],
    
    values: [
      "技术服务业务，代码要解决实际问题",
      "持续学习新技术，跟上技术发展趋势",
      "代码质量重于开发速度，可维护性是关键",
      "团队协作胜过个人英雄主义",
      "项目管理和技术开发同样重要"
    ],
    
    workStyle: [
      "熟悉敏捷开发流程，擅长需求分析和评审",
      "重视代码Review，通过CodeReview提升团队代码质量",
      "善于系统重构，使用设计模式优化系统架构",
      "主动与业务方沟通，深入理解业务需求",
      "具备项目管理思维，能够进行功能拆分和任务分配"
    ]
  }
}
