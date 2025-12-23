import Link from "next/link"
import { getDictionary, type Locale } from "@/lib/i18n"

export default function PromptsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const t = getDictionary(locale)
  const nextLocale = locale === "zh" ? "en" : "zh"

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_55%),_linear-gradient(to_bottom,_#f8fafc,_#ffffff)] text-foreground">
      <header className="border-b border-border/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <Link className="text-sm font-semibold text-foreground" href={`/${locale}`}>
            {t.prompts.back}
          </Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{t.prompts.header}</span>
            <Link className="text-xs font-semibold text-foreground" href={`/${nextLocale}/prompts`}>
              {nextLocale === "zh" ? "中文" : "EN"}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <section className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold">{t.prompts.title}</h1>
              <p className="mt-2 text-muted-foreground">{t.prompts.subtitle}</p>
            </div>
            <span className="rounded-full bg-muted px-4 py-2 text-xs text-muted-foreground">{t.prompts.badge}</span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {t.prompts.sets.map((set) => {
              const countLabel = locale === "zh" ? `${set.count}${t.prompts.countSuffix}` : `${set.count} ${t.prompts.countSuffix}`

              return (
              <div key={set.slug} className="rounded-2xl border border-border bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{set.title}</p>
                    <p className="text-xs text-muted-foreground">{set.tag}</p>
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {countLabel}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{set.description}</p>
                <button className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                  {t.prompts.view}
                </button>
              </div>
              )
            })}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {t.prompts.features.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
