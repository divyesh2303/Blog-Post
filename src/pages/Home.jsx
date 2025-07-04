import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

const Home = () => {
  const [query, setQuery] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.body.toLowerCase().includes(query.toLowerCase()) ||
    post.author.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-4">
        <div className='sticky-top p-3 bg-black'>

      <input
        className="form-control   mb-4"
        type="text"
        placeholder="Search posts by title, body, or author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        </div>

      <h2 className="mb-4">Blog Posts</h2>

      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <div key={post.id} className="card mb-4">
            <div className="card-header d-flex align-items-center">
              <h5 className="me-3 mb-0">#{post.id}</h5>

   <img
                  src={post.author.profilePicture}
                  
                  alt={post.author.name}
                
                  className="rounded-circle me-2"
                />
              <Link to={`/author/$id`} className="d-flex align-items-center ">
                <div>
                  <h6 className="mb-0">{post.author.name}</h6>
                  <small>{post.author.email}</small>
                </div>
              </Link>
            </div>

            <div className="card-body">
              <h4 className="card-title">{post.title}</h4>
              <p className="card-text">{post.body}</p>

              <div className="mb-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="badge bg-primary me-2">{tag}</span>
                ))}
              </div>

              <div className="d-flex justify-content-between">
                <span> Likes: {post.reactions.likes}</span>
                <span> Dislikes: {post.reactions.dislikes}</span>
                <span> Views: {post.views}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-muted">No matching posts found.</p>
      )}
    </div>
  );
};

export default Home;
