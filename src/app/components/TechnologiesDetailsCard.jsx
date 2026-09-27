import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const TechnologiesDetailsCard = ({ tech }) => {
    return (
    <div className="card mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm">
        <div className="card-body gap-0 p-5 sm:p-8 md:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-base-200 bg-base-200/40 p-3">
                        <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={64}
                            height={64}
                            className="h-full w-full object-contain"/>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                            {tech.name}
                        </h1>
                        <p className="mt-1 text-sm text-base-content/60">
                            {tech.category}
                        </p>
                    </div>
                </div>

            <span className={`badge badge-sm self-start ${
                tech.badge === "Popular"
                    ? "badge-info"
                    : tech.badge === "Essential"
                    ? "badge-warning"
                    : tech.badge === "Fast"
                        ? "badge-success"
                        : tech.badge === "Top SQL"
                        ? "badge-neutral"
                        : "badge-accent"
                }`}>
                {tech.badge}
            </span>
        </div>

        <div className="my-6 border-t border-base-200" />
            <div>
                <h2 className="text-lg font-bold text-slate-900">
                About {tech.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-base-content/70 sm:text-base">
                {tech.description}
                </p>
                <p className="mt-3 text-xs md:text-sm text-center md:text-left leading-7 text-base-content/90 sm:text-base">
                {tech.details}
                </p>
            </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-base-content/50">Category</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                    {tech.category}
                </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-base-content/50">Difficulty</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                {tech.difficulty}
                </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-base-content/50">Rating</p>
                <div className="mt-1 flex items-center gap-1.5">
                <FaStar className="text-sm text-amber-500" />
                <span className="text-sm font-semibold text-slate-700">
                    {tech.rating}
                </span>
                </div>
            </div>
        </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {tech.documentation && (
                <a href={tech.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn min-h-10 h-10 w-full rounded-lg bg-slate-950 text-xs text-white hover:bg-slate-800 sm:flex-1">
                    Learn More ↗
                </a>
                )}
                <Link href="/technologies"
                    className="btn btn-outline min-h-10 h-10 w-full rounded-lg text-xs sm:flex-1">
                    ← Back to Technologies
                </Link>
            </div>
        </div>
    </div>
    );
};

export default TechnologiesDetailsCard;
