import Link from "next/link"
import { getDictionary, type Locale } from "@/lib/i18n"

export default function NotesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params
  const t = getDictionary(locale)
  const nextLocale = locale === "zh" ? "en" : "zh"

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_55%),_linear-gradient(to_bottom,_#f8fafc,_#ffffff)] text-foreground">
      <header className="border-b border-border/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <Link className="text-sm font-semibold text-foreground" href={`/${locale}`}>
            {t.notes.back}
          </Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{t.notes.header}</span>
            <Link className="text-xs font-semibold text-foreground" href={`/${nextLocale}/notes`}>
              {nextLocale === "zh" ? "中文" : "EN"}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <section className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold">{t.notes.pageTitle}</h1>
              <p className="mt-2 text-muted-foreground">{t.notes.pageSubtitle}</p>
            </div>
            <span className="rounded-full bg-muted px-4 py-2 text-xs text-muted-foreground">{t.notes.updated}</span>
          </div>

          <div className="mt-8 space-y-4">
            {t.notes.list.map((note) => (
              <Link
                key={note.href}
                href={`/${locale}${note.href}`}
                className="block rounded-2xl border border-border bg-white p-5 transition hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-lg font-semibold">{note.title}</p>
                  <span className="text-xs text-muted-foreground">{note.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
