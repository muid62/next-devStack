import Image from "next/image";
import React from "react";
import Link from 'next/link'


const Post = ({ post }) => {
    const { id } = post;
    return (
        <div className="card w-full overflow-hidden border border-base-100 bg-base-100 shadow-sm rounded-md transition-all duration-300 hover:shadow-xl"> 
            <figure className="aspect-[2/1] w-full">
                <Image
                src={post.thumbnail}
                alt={post.thumbnailAlt}
                width={400}
                height={200}
                className="h-full w-full object-cover"
                />
            </figure>
        <div className="card-body gap-0 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
                <span className="badge badge-primary badge-outline shrink-0 text-[10px] font-semibold sm:text-xs">
                    {post.category}
                </span>
                <span className="shrink-0 text-[10px] text-base-content/60 sm:text-xs">
                    {post.readTime}
                </span>
            </div>
            <h2 className="mt-3 line-clamp-2 text-base font-bold leading-snug text-slate-950 transition-colors hover:text-primary sm:text-xl">
            {post.title}
            </h2>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-base-content/70 sm:text-sm">
            {post.excerpt}
            </p>
            <div className="mt-5 flex flex-col gap-4 border-t border-base-200 pt-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <div className="avatar shrink-0">
                    <div className="w-8 rounded-full sm:w-9">
                        <Image src={post.author.avatar} alt={post.author.name} width={32} height={32} className="h-8 w-8 rounded-full" />
                    </div>
                </div>
                <div className="min-w-0">
                    <p className="truncate text-[10px] font-semibold text-slate-600 sm:text-xs">
                        {post.author.name}
                    </p>
                    <p className="text-[9px] text-base-content/60 sm:text-[10px]">
                        {post.publishedDate}
                    </p>
                </div>
            </div>
                <Link href={`/blogs/${id}`}
                    className="btn btn-primary btn-sm w-full text-xs sm:w-auto">Read Article
                </Link>
            </div>
        </div>
    </div>
);
};

export default Post;
