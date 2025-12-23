import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n-config"

export { defaultLocale, isLocale, locales }
export type { Locale }

type Note = {
  slug: string
  title: string
  tag: string
  date: string
  summary: string
  sections: Array<{ heading: string; body: string }>
}

type PromptSet = {
  slug: string
  title: string
  tag: string
  description: string
  count: number
}

type Dictionary = {
  brand: {
    title: string
    subtitle: string
  }
  nav: {
    tools: string
    prompts: string
    notes: string
    about: string
    contact: string
    latestNotes: string
    tryPdf: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    badges: string[]
    frequentTitle: string
    frequentItems: Array<{ title: string; desc: string }>
  }
  tools: {
    title: string
    subtitle: string
    badge: string
    items: Array<{ title: string; desc: string; href: string; badge: string }>
    open: string
  }
  notes: {
    title: string
    subtitle: string
    list: Array<{ title: string; tag: string; href: string }>
    open: string
    pageTitle: string
    pageSubtitle: string
    updated: string
    back: string
    header: string
    sideTitle: string
    sideBody: string
    sideCallout: string
  }
  about: {
    title: string
    subtitle: string
    items: Array<{ title: string; desc: string }>
  }
  contact: {
    title: string
    subtitle: string
    emailLabel: string
    emailValue: string
    wechatLabel: string
    wechatValue: string
    cta: string
  }
  footer: {
    copyright: string
    tools: string
    prompts: string
    notes: string
    about: string
  }
  prompts: {
    title: string
    subtitle: string
    badge: string
    sets: PromptSet[]
    view: string
    countSuffix: string
    features: Array<{ title: string; desc: string }>
    back: string
    header: string
  }
  pdf: {
    back: string
    header: string
    title: string
    subtitle: string
    badge: string
    dropTitle: string
    dropHint: string
    settings: string
    textLabel: string
    textValue: string
    opacityLabel: string
    opacityValue: string
    positionLabel: string
    positionValue: string
    colorLabel: string
    colorValue: string
    apply: string
    reset: string
    preview: string
    previewHint: string
    privacy: string
    download: string
    perks: Array<{ title: string; desc: string }>
  }
  noteDetail: {
    back: string
    notFoundHeader: string
    notFoundTitle: string
    notFoundSubtitle: string
    backToNotes: string
  }
  notesData: Record<string, Note>
}

const dictionaries: Record<Locale, Dictionary> = {
  zh: {
    brand: {
      title: "Cliste Tools",
      subtitle: "日常工具与笔记",
    },
    nav: {
      tools: "工具",
      prompts: "提示词",
      notes: "笔记",
      about: "关于",
      contact: "联系",
      latestNotes: "最新笔记",
      tryPdf: "PDF 水印",
    },
    hero: {
      eyebrow: "个人工具集",
      title: "自己常用的工具，做成一个站。",
      subtitle: "一站式的日常工具与学习笔记，快速、轻量、随时可用。",
      primaryCta: "打开 PDF 水印",
      secondaryCta: "查看全部工具",
      badges: ["优先本地处理", "无需注册", "手机可用"],
      frequentTitle: "常用工具",
      frequentItems: [
        { title: "PDF 水印", desc: "快速添加文字或 Logo 水印。" },
        { title: "图片压缩", desc: "降低体积，清晰不糊。" },
        { title: "JSON 格式化", desc: "清理并校验数据结构。" },
      ],
    },
    tools: {
      title: "工具",
      subtitle: "面向日常工作的轻量工具。",
      badge: "持续更新",
      items: [
        {
          title: "PDF 水印",
          desc: "添加文字或 Logo 水印，支持常用布局。",
          href: "/tools/pdf-watermark",
          badge: "可用",
        },
        {
          title: "图片压缩",
          desc: "压缩 PNG/JPG，保持清晰度。",
          href: "#",
          badge: "计划中",
        },
        {
          title: "Docx 转 PDF",
          desc: "输出排版干净的 PDF 文件。",
          href: "#",
          badge: "计划中",
        },
      ],
      open: "打开工具",
    },
    notes: {
      title: "笔记与教程",
      subtitle: "记录日常工作中的方法、经验与整理。",
      list: [
        {
          title: "稳定的 PDF 工作流",
          tag: "流程",
          href: "/notes/pdf-workflow",
        },
        {
          title: "网页性能的核心思路",
          tag: "Web",
          href: "/notes/web-performance-basics",
        },
        {
          title: "我的 2024 学习地图",
          tag: "记录",
          href: "/notes/learning-map-2024",
        },
      ],
      open: "打开",
      pageTitle: "笔记与教程",
      pageSubtitle: "面向日常工作的实用总结与复盘。",
      updated: "每周更新",
      back: "<- 返回工具",
      header: "笔记",
      sideTitle: "为什么要做这个站",
      sideBody: "总是重复搜索同一类工具，所以决定把常用的集中起来。",
      sideCallout: "后续会逐步添加更多工具与内容。",
    },
    about: {
      title: "关于这个工具集",
      subtitle: "为自己而做，也希望帮到更多人。快速、可靠、尊重隐私。",
      items: [
        { title: "隐私优先", desc: "尽可能本地处理，减少上传。" },
        { title: "核心免费", desc: "关键工具长期开放。" },
        { title: "全球可用", desc: "中英文双语支持。" },
        { title: "可持续", desc: "流量稳定后再考虑广告。" },
      ],
    },
    contact: {
      title: "保持联系",
      subtitle: "欢迎建议新的工具或功能。",
      emailLabel: "邮箱",
      emailValue: "hello@example.com",
      wechatLabel: "微信",
      wechatValue: "cliste-tools",
      cta: "建议一个工具",
    },
    footer: {
      copyright: "(c) 2024 Cliste Tools. Built for daily work.",
      tools: "工具",
      prompts: "提示词",
      notes: "笔记",
      about: "关于",
    },
    prompts: {
      title: "提示词",
      subtitle: "按任务整理的提示词集合，复制即可用。",
      badge: "精选合集",
      sets: [
        {
          slug: "pdf-clarity",
          title: "PDF 清晰化",
          tag: "文档",
          description: "总结 PDF、提取重点、重写表达。",
          count: 6,
        },
        {
          slug: "marketing-brief",
          title: "营销简报",
          tag: "增长",
          description: "快速生成简报、定位与文案。",
          count: 8,
        },
        {
          slug: "research-sprint",
          title: "研究冲刺",
          tag: "分析",
          description: "把想法拆成结构化研究任务。",
          count: 5,
        },
        {
          slug: "product-writing",
          title: "产品写作",
          tag: "产品",
          description: "写更新日志、上线说明与引导文案。",
          count: 7,
        },
      ],
      view: "查看提示词",
      countSuffix: "条提示词",
      features: [
        { title: "可复用", desc: "重复工作直接套用。" },
        { title: "可编辑", desc: "包含变量与可替换字段。" },
        { title: "易分享", desc: "一键复制给协作者。" },
      ],
      back: "<- 返回工具",
      header: "提示词库",
    },
    pdf: {
      back: "<- 返回工具",
      header: "PDF 水印",
      title: "为 PDF 添加水印",
      subtitle: "上传 PDF，设置水印样式，导出处理后的文件。",
      badge: "本地优先",
      dropTitle: "拖拽 PDF 到此处",
      dropHint: "或点击上传（最大 50MB）",
      settings: "水印设置",
      textLabel: "文字",
      textValue: "机密",
      opacityLabel: "透明度",
      opacityValue: "30%",
      positionLabel: "位置",
      positionValue: "中心斜向",
      colorLabel: "颜色",
      colorValue: "深蓝",
      apply: "应用水印",
      reset: "重置",
      preview: "预览",
      previewHint: "PDF 预览将显示在这里。",
      privacy: "尽量本地处理，不保存你的文件。",
      download: "下载 PDF",
      perks: [
        { title: "快速", desc: "几秒内完成处理。" },
        { title: "灵活", desc: "文字、Logo 或组合。" },
        { title: "私密", desc: "无需账号与存储。" },
      ],
    },
    noteDetail: {
      back: "<- 返回笔记",
      notFoundHeader: "未找到",
      notFoundTitle: "笔记不存在",
      notFoundSubtitle: "请从列表选择其他内容。",
      backToNotes: "返回笔记列表",
    },
    notesData: {
      "pdf-workflow": {
        slug: "pdf-workflow",
        title: "稳定的 PDF 工作流",
        tag: "流程",
        date: "2024-01-10",
        summary: "一份简洁的检查清单，保证 PDF 处理稳定可靠。",
        sections: [
          {
            heading: "为什么重要",
            body: "PDF 来自不同来源，格式不一。稳定流程能减少返工。",
          },
          {
            heading: "核心检查清单",
            body: "统一命名、保留原文件、最后一步再加水印，并在多端校验。",
          },
          {
            heading: "推荐默认值",
            body: "固定导出参数，避免反复压缩，保留可编辑的母版。",
          },
        ],
      },
      "web-performance-basics": {
        slug: "web-performance-basics",
        title: "网页性能的核心思路",
        tag: "Web",
        date: "2024-01-06",
        summary: "让页面更快的关键点，避免过度优化。",
        sections: [
          {
            heading: "先看用户感受",
            body: "用户更关注首次响应与可用内容的出现时间。",
          },
          {
            heading: "关注少数关键因素",
            body: "图片尺寸、缓存与脚本阻塞往往占大头。",
          },
          {
            heading: "轻量度量",
            body: "在有稳定流量之后再做真实用户监控。",
          },
        ],
      },
      "learning-map-2024": {
        slug: "learning-map-2024",
        title: "我的 2024 学习地图",
        tag: "记录",
        date: "2024-01-02",
        summary: "对学习方向做一个更可执行的规划。",
        sections: [
          {
            heading: "关注领域",
            body: "实用 AI 工具、流程自动化、写作习惯。",
          },
          {
            heading: "规则",
            body: "同时只推进两件事，每月输出一份总结。",
          },
          {
            heading: "暂时不做",
            body: "不直接提升日常效率的框架与热点。",
          },
        ],
      },
    },
  },
  en: {
    brand: {
      title: "Cliste Tools",
      subtitle: "Daily utilities and notes",
    },
    nav: {
      tools: "Tools",
      prompts: "Prompts",
      notes: "Notes",
      about: "About",
      contact: "Contact",
      latestNotes: "Latest Notes",
      tryPdf: "Try PDF Watermark",
    },
    hero: {
      eyebrow: "Personal toolbox",
      title: "Build once. Use daily. Share when it helps.",
      subtitle: "A growing collection of practical tools plus notes and tutorials from daily work.",
      primaryCta: "Open PDF Watermark",
      secondaryCta: "Browse all tools",
      badges: ["Local processing first", "No account required", "Works on mobile"],
      frequentTitle: "What I use most",
      frequentItems: [
        { title: "PDF watermark", desc: "Add text or logo watermark fast." },
        { title: "Image compressor", desc: "Shrink images without quality loss." },
        { title: "JSON formatter", desc: "Clean and validate data." },
      ],
    },
    tools: {
      title: "Tools",
      subtitle: "Quick, focused utilities for daily workflows.",
      badge: "Growing set",
      items: [
        {
          title: "PDF watermark",
          desc: "Add text or logo watermarks with layout presets.",
          href: "/tools/pdf-watermark",
          badge: "Available",
        },
        {
          title: "Image compressor",
          desc: "Compress PNG/JPG while keeping clarity.",
          href: "#",
          badge: "Planned",
        },
        {
          title: "Docx to PDF",
          desc: "Convert docs with clean typography.",
          href: "#",
          badge: "Planned",
        },
      ],
      open: "Open tool",
    },
    notes: {
      title: "Notes and tutorials",
      subtitle: "Curated guides, reading notes, and practical summaries from daily work.",
      list: [
        {
          title: "Building a reliable PDF workflow",
          tag: "Workflow",
          href: "/notes/pdf-workflow",
        },
        {
          title: "A concise guide to web performance",
          tag: "Web",
          href: "/notes/web-performance-basics",
        },
        {
          title: "My learning map for 2024",
          tag: "Notes",
          href: "/notes/learning-map-2024",
        },
      ],
      open: "Open",
      pageTitle: "Notes and tutorials",
      pageSubtitle: "Practical write-ups, summaries, and learnings from daily work.",
      updated: "Updated weekly",
      back: "<- Back to tools",
      header: "Notes",
      sideTitle: "Why this site exists",
      sideBody: "I kept searching for the same utilities again and again, so I built one place for them.",
      sideCallout: "Expect more tools, multilingual support, and a curated archive as it grows.",
    },
    about: {
      title: "About this toolbox",
      subtitle: "Built for daily work, shared for anyone who needs it.",
      items: [
        { title: "Privacy-first", desc: "Local processing whenever possible." },
        { title: "Always free core", desc: "Key tools stay open for everyone." },
        { title: "Global-ready", desc: "English and Chinese friendly UI." },
        { title: "Sustainable", desc: "Ads only when traffic justifies it." },
      ],
    },
    contact: {
      title: "Stay in the loop",
      subtitle: "Want updates? Suggest a new tool or feature.",
      emailLabel: "Email",
      emailValue: "hello@example.com",
      wechatLabel: "WeChat",
      wechatValue: "cliste-tools",
      cta: "Suggest a tool",
    },
    footer: {
      copyright: "(c) 2024 Cliste Tools. Built for daily work.",
      tools: "Tools",
      prompts: "Prompts",
      notes: "Notes",
      about: "About",
    },
    prompts: {
      title: "Prompts",
      subtitle: "Reusable prompts grouped by task. Copy, customize, and run fast.",
      badge: "Curated sets",
      sets: [
        {
          slug: "pdf-clarity",
          title: "PDF clarity",
          tag: "Docs",
          description: "Summarize dense PDFs, extract key tables, and rewrite with clarity.",
          count: 6,
        },
        {
          slug: "marketing-brief",
          title: "Marketing brief",
          tag: "Growth",
          description: "Build concise briefs, positioning, and ad copy variations.",
          count: 8,
        },
        {
          slug: "research-sprint",
          title: "Research sprint",
          tag: "Analysis",
          description: "Turn raw ideas into structured research tasks and outputs.",
          count: 5,
        },
        {
          slug: "product-writing",
          title: "Product writing",
          tag: "Product",
          description: "Write changelogs, release notes, and onboarding copy.",
          count: 7,
        },
      ],
      view: "View prompts",
      countSuffix: "prompts",
      features: [
        { title: "Consistent", desc: "Reusable prompts for repeated work." },
        { title: "Editable", desc: "Each prompt includes editable variables." },
        { title: "Shareable", desc: "Easy to copy and send to collaborators." },
      ],
      back: "<- Back to tools",
      header: "Prompt library",
    },
    pdf: {
      back: "<- Back to tools",
      header: "PDF Watermark",
      title: "Add watermark to PDF",
      subtitle: "Upload a PDF, configure the watermark style, and download the protected file.",
      badge: "Local first",
      dropTitle: "Drop PDF here",
      dropHint: "or click to upload (max 50MB)",
      settings: "Watermark settings",
      textLabel: "Text",
      textValue: "Confidential",
      opacityLabel: "Opacity",
      opacityValue: "30%",
      positionLabel: "Position",
      positionValue: "Center diagonal",
      colorLabel: "Color",
      colorValue: "Navy",
      apply: "Apply watermark",
      reset: "Reset",
      preview: "Preview",
      previewHint: "PDF preview will appear here.",
      privacy: "Files are processed locally whenever possible. Your uploads are not stored.",
      download: "Download PDF",
      perks: [
        { title: "Fast", desc: "Watermark a file in seconds." },
        { title: "Flexible", desc: "Text, logo, or both." },
        { title: "Private", desc: "No account, no storage." },
      ],
    },
    noteDetail: {
      back: "<- Back to notes",
      notFoundHeader: "Not found",
      notFoundTitle: "Note not found",
      notFoundSubtitle: "Try another note from the list.",
      backToNotes: "Go to notes",
    },
    notesData: {
      "pdf-workflow": {
        slug: "pdf-workflow",
        title: "Building a reliable PDF workflow",
        tag: "Workflow",
        date: "2024-01-10",
        summary: "A practical checklist to keep PDF handling predictable and fast.",
        sections: [
          {
            heading: "Why this matters",
            body:
              "PDF tasks often fail because of inconsistent sources. The goal is a simple pipeline that keeps files readable and editable across tools.",
          },
          {
            heading: "Core checklist",
            body:
              "Normalize file names, keep originals intact, apply watermarking last, and verify output on mobile and desktop.",
          },
          {
            heading: "Recommended defaults",
            body:
              "Use consistent export settings, avoid re-compressing multiple times, and keep a master file for future edits.",
          },
        ],
      },
      "web-performance-basics": {
        slug: "web-performance-basics",
        title: "A concise guide to web performance",
        tag: "Web",
        date: "2024-01-06",
        summary: "Core ideas that make sites feel fast without over-optimizing.",
        sections: [
          {
            heading: "Start with perceived speed",
            body: "Users care about first response and first useful content more than raw metrics.",
          },
          {
            heading: "Focus on a few levers",
            body: "Image sizes, caching, and avoiding blocking scripts usually cover most wins.",
          },
          {
            heading: "Measure lightly",
            body: "Track real user metrics only when you have a stable baseline and real traffic.",
          },
        ],
      },
      "learning-map-2024": {
        slug: "learning-map-2024",
        title: "My learning map for 2024",
        tag: "Notes",
        date: "2024-01-02",
        summary: "A simple roadmap for what I plan to study and why.",
        sections: [
          {
            heading: "Focus areas",
            body: "Practical AI tooling, workflow automation, and better writing habits.",
          },
          {
            heading: "Rules",
            body: "No more than two active topics at once. Ship small summaries each month.",
          },
          {
            heading: "What stays out",
            body: "Shiny frameworks that do not improve my day-to-day work.",
          },
        ],
      },
    },
  },
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}
