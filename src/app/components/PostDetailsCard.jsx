import Image from "next/image";
import Link from "next/link";

const PostDetailsCard = ({ post }) => {
  return (
    <article className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm">
        <figure className="relative aspect-[2/1] w-full">
            <Image
            src={post.thumbnail}
            alt={post.thumbnailAlt}
            fill
            priority
            className="object-cover"
            />
        </figure>
        <div className="p-5 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="badge badge-primary badge-outline text-xs font-semibold">
                    {post.category}
                </span>
                <span className="text-xs text-base-content/60">
                    {post.readTime}
                </span>
            </div>
                <h1 className="mt-5 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl md:text-4xl">
                {post.title}
                </h1>

                <p className="mt-4 text-sm leading-7 text-base-content/70 sm:text-base">
                {post.excerpt}
                </p>
            <div className="mt-6 flex items-center gap-3 border-b border-base-200 pb-6">
            <div className="avatar shrink-0">
                <div className="w-10 rounded-full">
                <Image src={post.author.avatar} alt={post.author.name} width={40} height={40} className="h-10 w-10 rounded-full" />
                </div>
            </div>
            <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-700">
                {post.author.name}
                </p>
                <p className="text-xs text-base-content/60">
                Published {post.publishedDate}
                </p>
            </div>
        </div>
        <div className="prose prose-sm mt-8 max-w-none text-base-content sm:prose-base">
            {post.content}
        </div>
            <div className="mt-10 border-t border-base-200 pt-6">
                <Link
                    href="/blogs"
                    className="btn btn-outline btn-sm">
                    ← Back to Articles
                </Link>
            </div>
        </div>
    </article>
    );
};

export default PostDetailsCard;