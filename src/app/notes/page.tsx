import fs from "fs/promises"
import path from "path"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Link from "next/link"
import { ShieldCheck, ArrowLeft } from "lucide-react"

export default async function NotesPage() {
    const filePath = path.join(process.cwd(), "content", "notes.md")
    const content = await fs.readFile(filePath, "utf8")

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
                <div className="container flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 font-bold text-blue-900">
                        <ShieldCheck className="h-6 w-6 text-blue-600" />
                        <span>IGMH / FPA</span>
                    </Link>
                    <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 flex items-center gap-1">
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                    </Link>
                </div>
            </header>

            <main className="container py-8 md:py-12">
                <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-12">
                    <article className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-teal-900 prose-a:text-teal-600">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                    </article>
                </div>
            </main>
        </div>
    )
}
