import React from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts.json';



const AuthorPosts = () => {
  const { id } = useParams();

  const filteredPosts = posts.filter(
    post => {})

  const authorInfo = filteredPosts[0]?.author;
  console.log(authorInfo)

  return (
    <div className="container mt-4">
      {authorInfo ? (
        <>
          <div className="d-flex align-items-center mb-4">
            <img
              src={authorInfo.profilePicture}
              alt={authorInfo.name}
              width="100"
              height="100"
              className="rounded-circle me-3"
            />
            <div>
              <h4>{authorInfo.name}</h4>
              <p>{authorInfo.email}</p>
            </div>
          </div>

          <h5>Posts by {authorInfo.name}</h5>
          <div>
            {filteredPosts.map(post => (
              <div className='mb-3' key={post.id}>
                <div className="m-3 p-3">
                  <p>{console.log(post.title)}</p>
                  <h6>{post.title}</h6>
                  <p>{post.body.slice(0, 100)}...</p>
                  <div>
                    <small>Views: {post.views} | Likes: {post.reactions.likes}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/" className="btn btn-outline-secondary mt-3">← Back to Home</Link>
        </>
      ) : (
        <p>No author found.</p>
      )}
    </div>
  );
};

export default AuthorPosts;
