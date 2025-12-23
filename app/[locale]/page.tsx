import Link from "next/link"
import { getDictionary, type Locale } from "@/lib/i18n"

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const t = getDictionary(locale)
  const nextLocale = locale === "zh" ? "en" : "zh"
  const localizePath = (path: string) => (path.startsWith("/") ? `/${locale}${path}` : path)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_55%),_linear-gradient(to_bottom,_#f8fafc,_#ffffff)] text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-semibold">
              C
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">{t.brand.title}</p>
              <p className="text-xs text-muted-foreground">{t.brand.subtitle}</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a className="hover:text-foreground transition-colors" href="#tools">
              {t.nav.tools}
            </a>
            <Link className="hover:text-foreground transition-colors" href={localizePath("/prompts")}>
              {t.nav.prompts}
            </Link>
            <a className="hover:text-foreground transition-colors" href="#notes">
              {t.nav.notes}
            </a>
            <a className="hover:text-foreground transition-colors" href="#about">
              {t.nav.about}
            </a>
            <a className="hover:text-foreground transition-colors" href="#contact">
              {t.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors md:inline-flex"
              href="#notes"
            >
              {t.nav.latestNotes}
            </Link>
            <Link
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              href={localizePath("/tools/pdf-watermark")}
            >
              {t.nav.tryPdf}
            </Link>
            <Link
              className="rounded-full border border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
              href={`/${nextLocale}`}
            >
              {nextLocale === "zh" ? "中文" : "EN"}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6">
        <section className="py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.hero.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{t.hero.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{t.hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  href={localizePath("/tools/pdf-watermark")}
                >
                  {t.hero.primaryCta}
                </Link>
                <Link
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                  href="#tools"
                >
                  {t.hero.secondaryCta}
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                {t.hero.badges.map((badge, index) => (
                  <div key={badge} className="flex items-center gap-2">
                    {index === 0 ? <span className="h-2 w-2 rounded-full bg-green-500"></span> : null}
                    {badge}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {t.hero.frequentTitle}
              </p>
              <div className="mt-6 space-y-4">
                {t.hero.frequentItems.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-white p-4">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className="py-16">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{t.tools.title}</h2>
              <p className="mt-2 text-muted-foreground">{t.tools.subtitle}</p>
            </div>
            <span className="rounded-full border border-border px-4 py-1 text-xs text-muted-foreground">
              {t.tools.badge}
            </span>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.tools.items.map((tool) => (
              <div key={tool.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{tool.title}</p>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{tool.badge}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{tool.desc}</p>
                <div className="mt-6">
                  <Link
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    href={localizePath(tool.href)}
                  >
                    {t.tools.open}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="notes" className="py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">{t.notes.title}</h2>
              <p className="mt-3 text-muted-foreground">{t.notes.subtitle}</p>
              <div className="mt-6 space-y-4">
                {t.notes.list.map((item) => (
                  <Link
                    key={item.title}
                    href={localizePath(item.href)}
                    className="flex items-center justify-between border-b border-border/70 pb-3 transition hover:text-foreground"
                  >
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.tag}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{t.notes.open}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-white/70 p-8 shadow-sm">
              <h3 className="text-xl font-semibold">{t.notes.sideTitle}</h3>
              <p className="mt-3 text-muted-foreground">{t.notes.sideBody}</p>
              <div className="mt-6 rounded-2xl border border-border bg-white p-5 text-sm text-muted-foreground">
                {t.notes.sideCallout}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">{t.about.title}</h2>
              <p className="mt-3 text-muted-foreground">{t.about.subtitle}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {t.about.items.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-white p-4">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div id="contact" className="rounded-3xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">{t.contact.title}</h3>
              <p className="mt-3 text-muted-foreground">{t.contact.subtitle}</p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl border border-border px-4 py-3">
                  <span>{t.contact.emailLabel}</span>
                  <span className="text-muted-foreground">{t.contact.emailValue}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border px-4 py-3">
                  <span>{t.contact.wechatLabel}</span>
                  <span className="text-muted-foreground">{t.contact.wechatValue}</span>
                </div>
              </div>
              <button className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                {t.contact.cta}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 bg-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-foreground transition-colors" href="#tools">
              {t.footer.tools}
            </a>
            <Link className="hover:text-foreground transition-colors" href={localizePath("/prompts")}>
              {t.footer.prompts}
            </Link>
            <a className="hover:text-foreground transition-colors" href="#notes">
              {t.footer.notes}
            </a>
            <a className="hover:text-foreground transition-colors" href="#about">
              {t.footer.about}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
