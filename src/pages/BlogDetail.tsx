// BlogDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BlogDetail.css';

const blogs = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    content: 'React Hooks are functions that let you use state and other React features without writing a class...',
  },
  {
    id: 2,
    title: 'A Guide to CSS Flexbox',
    content: 'Flexbox is a layout model that allows elements to align and distribute space within a container...',
  },
  {
    id: 3,
    title: 'Introduction to Node.js',
    content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, designed to build scalable network applications...',
  },
  // Add more blog entries here
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>(); 
  const blog = blogs.find((blog) => blog.id === Number(id));
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
