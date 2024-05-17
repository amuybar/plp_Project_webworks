// BlogsPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BlogsPage.css';

const blogs = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    excerpt: 'React Hooks are functions that let you use state and other React features without writing a class...',
  },
  {
    id: 2,
    title: 'A Guide to CSS Flexbox',
    excerpt: 'Flexbox is a layout model that allows elements to align and distribute space within a container...',
  },
  {
    id: 3,
    title: 'Introduction to Node.js',
    excerpt: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, designed to build scalable network applications...',
  },
  // Add more blog entries here
];

const BlogsPage = () => {
  const navigate = useNavigate();

  const handleBlogClick = (id:number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blogs-page">
      <h2>All Blogs</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id} onClick={() => handleBlogClick(blog.id)}>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-excerpt">{blog.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
