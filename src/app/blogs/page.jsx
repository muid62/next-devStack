import React from "react";
import Post from "../components/PostCard";
import getPost from "../../lib/getPost";

export const metadata = {
    title: 'DevStack | Blogs',
    description: '...',
}

const BlogsPage = async () => {
    const posts = await getPost();
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold md:leading-relaxed text-center p-2">
                Blog <span className="text-gradient-custom">Articles</span>               
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 py-4">
                {posts.map((post) => (
                <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default BlogsPage;
