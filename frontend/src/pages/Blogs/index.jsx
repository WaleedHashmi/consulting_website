import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import BlogCard from './BlogCard';
import Button from './Button';
import SearchBar from './SearchBar';

const Blogs = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Blog Post 1', description: 'Short description of blog post 1', content: 'Full content of blog post 1.' },
        { id: 2, title: 'Blog Post 2', description: 'Short description of blog post 2', content: 'Full content of blog post 2.' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPost, setSelectedPost] = useState(null);

    const filteredPosts = searchTerm.length > 0
        ? posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : posts;

    return (
        <div>
            <div className="bg-brand-800 text-white text-2xl font-bold p-5">
                Blog Section
            </div>
            <SearchBar onSearch={setSearchTerm} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {selectedPost ? (
                    <div className="col-span-3 p-6 shadow-lg rounded-lg bg-white">
                        <h2 className="font-semibold text-brand-900 text-2xl">{selectedPost.title}</h2>
                        <p className="text-brand-700 text-base">{selectedPost.content}</p>
                        <div className="flex justify-between items-center mt-4">
                            <Button onClick={() => setSelectedPost(null)}>
                                <FaArrowLeft className="mr-2" /> Back to Posts
                            </Button>
                        </div>
                    </div>
                ) : (
                    filteredPosts.map(post => (
                        <BlogCard
                            key={post.id}
                            title={post.title}
                            description={post.description}
                            onClick={() => setSelectedPost(post)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Blogs;