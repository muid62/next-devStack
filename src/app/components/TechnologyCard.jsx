import React from 'react';
import { FaStar } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";

const TechnologyCard = ({tech, isAdded, handleAddToStack}) => {
    return (
        <div className="card h-full w-full rounded-xl border border-base-200 bg-base-100 shadow-sm">
            <div className="card-body gap-0 p-5">
                <div className="flex items-start justify-between">
                <Image src={tech.icon} alt="" width={36} height={36} className="h-9 w-9 object-contain" />

                <span className={`badge badge-xs ${
                    tech.badge === "Popular"
                    ? "badge-info"
                    : tech.badge === "Essential"
                        ? "badge-warning"
                        : tech.badge === "Fast"
                        ? "badge-success"
                        :tech.badge === "Top SQL"
                        ? "badge-neutral"
                        : "badge-accent"
                }`}>
                    {tech.badge}
                </span>
                </div>
                    <h2 className="mt-4 text-base font-bold text-slate-900">
                    {tech.name}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-500">
                    {tech.description}
                    </p>
                <div className="mt-4 flex items-center justify-between gap-2 text-[10px]">
                    <div className="flex items-center gap-1">
                        <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                        {tech.category}
                        </span>
                        <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                        {tech.difficulty}
                        </span>
                    </div>
                    <span className="flex justify-center text-sm font-medium items-center gap-1 text-slate-700 pr-2">
                        <FaStar className="text-xs text-amber-500" />
                        {tech.rating}
                    </span>
                </div>
                <div className="mt-4">
                    <button onClick={() => handleAddToStack(tech.id)}
                    disabled={isAdded}
                    className={`btn mt-4 min-h-8 h-8 w-full rounded-lg border-0 text-xs 
                    ${isAdded
                    ? "bg-pink-100-100 text-pink-700"
                    : "bg-slate-950 text-white hover:bg-slate-800"
                        }`}>
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                    <Link href={`/technologies/${tech.id}`}>
                    <button
                        className="btn mt-2 min-h-8 h-8 w-full rounded-lg border-0 text-xs bg-slate-950 text-white hover:bg-slate-800">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;