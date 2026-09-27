"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <main className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="mx-auto max-w-lg">
            <div className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content/70 shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                Error 404
            </div>

                <h1 className="mt-6 text-7xl font-extrabold tracking-tight text-slate-900 sm:text-9xl">
                4<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">0</span>4
                </h1>

                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Page not found
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-base-content/70 sm:text-base">
                Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or never existed in the first place.
                </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button onClick={() => router.back()}
                type="button"
                className="btn btn-outline min-h-11 h-11 w-full rounded-xl text-xs font-semibold sm:w-auto sm:px-6">
                ← Go Back
            </button>

            <Link href="/"
                className="btn min-h-11 h-11 w-full rounded-xl bg-slate-950 text-xs font-semibold text-white hover:bg-slate-800 sm:w-auto sm:px-6">
                Back to Home
            </Link>
            </div>

            <div className="mt-12 border-t border-base-200 pt-8">
                <p className="text-xs font-medium text-base-content/50 uppercase tracking-wider">
                    Popular destinations
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-base-content/70">
                    <Link href="/technologies" className="hover:text-blue-600 transition-colors">
                    Technologies
                    </Link>
                    <span>•</span>
                    <Link href="/posts" className="hover:text-blue-600 transition-colors">
                    Blog Posts
                    </Link>
                </div>
            </div>
        </div>
    </main>
    );
}