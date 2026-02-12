import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { BookOpen, Stethoscope, Projector, ShieldCheck } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-blue-900">
            <ShieldCheck className="h-6 w-6 text-blue-600" />
            <span>IGMH / FPA</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/findings" className="hover:text-blue-600 transition-colors">Findings</Link>
            <Link href="/notes" className="hover:text-blue-600 transition-colors">Protocols</Link>
            <Link href="/presentation" className="hover:text-blue-600 transition-colors">Slides</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-blue-600 px-6 py-24 text-center sm:px-12 sm:py-32 lg:px-16">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="relative mx-auto max-w-3xl space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl font-serif">
              Responding to Gender-Based Violence with Care & Precision
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-blue-100">
              A comprehensive clinical resource for Maldives healthcare professionals.
            </p>

          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/findings" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-slate-200">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Research Findings</CardTitle>
                  <CardDescription>Evidence-based guidelines & regional analysis.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">
                    Comprehensive documentation of MLC orientation, PEP protocols, and legal frameworks referencing WHO & Maldives DVPA.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/notes" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-slate-200">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Clinical Protocols</CardTitle>
                  <CardDescription>Step-by-step care via proper documentation.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">
                    Detailed checklists for history taking, examination, forensic sampling, and Chain of Custody management.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/presentation/index.html" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-slate-200">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Projector className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">Presentation Slides</CardTitle>
                  <CardDescription>Interactive training materials.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">
                    Full slide deck covering Objectives, LIVES Framework, Clinical Management, and Privacy rights for training sessions.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row text-center md:text-left">
          <p className="text-sm text-slate-500">
            Dr. Aminath Zahra | IGMH | 2026
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
