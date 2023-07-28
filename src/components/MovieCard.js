import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating, videoLink } = movie;

  return (
    <div style={{background: 'linear-gradient(to left, #22d3ee, #9ca3af)'}} className="movie-card">
      <img src={posterURL} alt={title} style={{ width: '20rem', height: '20rem' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <Link to={`/MovieDescription?videoLink=${encodeURIComponent(videoLink)}`}>Trailer</Link>
    </div>
  );
};

export default MovieCard;