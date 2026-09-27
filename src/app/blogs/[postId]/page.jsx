import React from 'react';
import getPost from '../../../lib/getPost';
import PostDetailsCard from '@/app/components/PostDetailsCard';

const PostDetailsPage = async ({ params }) => {
    const { postId } = await params;
    const blogsPost = await getPost();
    const post = blogsPost.find(post => post.id === postId)

    if (!post) {
        return (
        <main className="mx-auto max-w-7xl px-4 py-16">
            <div className="rounded-xl border border-base-200 bg-base-100 p-10 text-center">
            <h1 className="text-xl font-bold">
                Post not found
            </h1>

            <p className="mt-2 text-sm text-base-content/60">
                The article you&aposre looking for doesn&apost exist.
            </p>
            </div>
        </main>
        );
    }

    return (
        <main className="min-h-screen bg-base-200/30 px-4 py-8 sm:py-12">
        <PostDetailsCard post={post} />
        </main>
    );
    };

export default PostDetailsPage