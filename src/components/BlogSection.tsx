// BlogSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BlogSection.css';

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
];

const BlogSection = () => {
  const navigate = useNavigate();

  const handleViewAllBlogs = () => {
    navigate('/blogs');
  };

  const handleBlogClick = (id:number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <section className="blog-section">
      <h2>Our Latest Blogs</h2>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id} onClick={() => handleBlogClick(blog.id)}>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-excerpt">{blog.excerpt}</p>
          </div>
        ))}
      </div>
      <button className="view-all-button" onClick={handleViewAllBlogs}>View All Blogs</button>
    </section>
  );
};

export default BlogSection;
