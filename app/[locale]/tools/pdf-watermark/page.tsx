import Link from "next/link"
import { getDictionary, type Locale } from "@/lib/i18n"

export default function PdfWatermarkPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const t = getDictionary(locale)
  const nextLocale = locale === "zh" ? "en" : "zh"

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_55%),_linear-gradient(to_bottom,_#f8fafc,_#ffffff)] text-foreground">
      <header className="border-b border-border/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <Link className="text-sm font-semibold text-foreground" href={`/${locale}`}>
            {t.pdf.back}
          </Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{t.pdf.header}</span>
            <Link className="text-xs font-semibold text-foreground" href={`/${nextLocale}/tools/pdf-watermark`}>
              {nextLocale === "zh" ? "中文" : "EN"}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <section className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold">{t.pdf.title}</h1>
              <p className="mt-3 text-muted-foreground">{t.pdf.subtitle}</p>
            </div>
            <span className="rounded-full bg-muted px-4 py-2 text-xs text-muted-foreground">{t.pdf.badge}</span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-dashed border-border bg-muted/40 p-8 text-center">
                <p className="text-sm font-semibold">{t.pdf.dropTitle}</p>
                <p className="mt-2 text-xs text-muted-foreground">{t.pdf.dropHint}</p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6">
                <h2 className="text-sm font-semibold">{t.pdf.settings}</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">{t.pdf.textLabel}</label>
                    <div className="rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground">
                      {t.pdf.textValue}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">{t.pdf.opacityLabel}</label>
                    <div className="rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground">
                      {t.pdf.opacityValue}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">{t.pdf.positionLabel}</label>
                    <div className="rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground">
                      {t.pdf.positionValue}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground">{t.pdf.colorLabel}</label>
                    <div className="rounded-xl border border-border px-3 py-2 text-sm text-muted-foreground">
                      {t.pdf.colorValue}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                  {t.pdf.apply}
                </button>
                <button className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors">
                  {t.pdf.reset}
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-6">
              <h2 className="text-sm font-semibold">{t.pdf.preview}</h2>
              <div className="mt-4 rounded-xl border border-border bg-muted/40 p-6 text-center text-xs text-muted-foreground">
                {t.pdf.previewHint}
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-white p-4 text-xs text-muted-foreground">
                {t.pdf.privacy}
              </div>
              <button className="mt-6 w-full rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors">
                {t.pdf.download}
              </button>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {t.pdf.perks.map((item) => (
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
