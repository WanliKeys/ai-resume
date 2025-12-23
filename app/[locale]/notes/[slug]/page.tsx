import Link from "next/link"
import { getDictionary, type Locale } from "@/lib/i18n"

export default function NoteDetailPage({
  params,
}: {
  params: {
    locale: Locale
    slug: string
  }
}) {
  const { locale, slug } = params
  const t = getDictionary(locale)
  const note = t.notesData[slug]
  const nextLocale = locale === "zh" ? "en" : "zh"

  if (!note) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_55%),_linear-gradient(to_bottom,_#f8fafc,_#ffffff)] text-foreground">
        <header className="border-b border-border/60 bg-white/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <Link className="text-sm font-semibold text-foreground" href={`/${locale}/notes`}>
              {t.noteDetail.back}
            </Link>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>{t.noteDetail.notFoundHeader}</span>
              <Link className="text-xs font-semibold text-foreground" href={`/${nextLocale}/notes/${slug}`}>
                {nextLocale === "zh" ? "中文" : "EN"}
              </Link>
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl px-6 py-12">
          <section className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-semibold">{t.noteDetail.notFoundTitle}</h1>
            <p className="mt-2 text-muted-foreground">{t.noteDetail.notFoundSubtitle}</p>
            <Link
              className="mt-6 inline-flex rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              href={`/${locale}/notes`}
            >
              {t.noteDetail.backToNotes}
            </Link>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),_transparent_55%),_linear-gradient(to_bottom,_#f8fafc,_#ffffff)] text-foreground">
      <header className="border-b border-border/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <Link className="text-sm font-semibold text-foreground" href={`/${locale}/notes`}>
            {t.noteDetail.back}
          </Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{note.tag}</span>
            <Link className="text-xs font-semibold text-foreground" href={`/${nextLocale}/notes/${slug}`}>
              {nextLocale === "zh" ? "中文" : "EN"}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <article className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{note.date}</p>
          <h1 className="mt-3 text-3xl font-semibold">{note.title}</h1>
          <p className="mt-4 text-muted-foreground">{note.summary}</p>

          <div className="mt-8 space-y-6">
            {note.sections.map((section) => (
              <section key={section.heading} className="rounded-2xl border border-border/70 bg-white p-6">
                <h2 className="text-lg font-semibold">{section.heading}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
