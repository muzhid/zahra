"use client"

import * as React from "react"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"
import { Search, BookOpen, Stethoscope, Projector } from "lucide-react"
import { useRouter } from "next/navigation"

export function SearchCommand() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="relative w-full max-w-lg items-center justify-between rounded-full border border-blue-100 bg-white px-5 py-4 text-sm text-slate-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
                <span className="flex items-center gap-3">
                    <Search className="h-5 w-5 text-blue-500" />
                    <span className="text-lg font-medium text-slate-500">Search protocols...</span>
                </span>
                <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-slate-100 px-1.5 font-mono text-[10px] font-medium text-slate-500 opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Quick Access">
                        <CommandItem onSelect={() => runCommand(() => router.push('/findings'))}>
                            <BookOpen className="mr-2 h-4 w-4" />
                            <span>Research Findings</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/notes'))}>
                            <Stethoscope className="mr-2 h-4 w-4" />
                            <span>Clinical Protocols</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => router.push('/presentation'))}>
                            <Projector className="mr-2 h-4 w-4" />
                            <span>Presentation Slides</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
