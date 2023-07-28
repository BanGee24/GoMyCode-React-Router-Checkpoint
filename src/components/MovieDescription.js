import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const MovieDescription = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const videoLink = searchParams.get('videoLink');

  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <Container>
        <h1>Movie Trailer</h1>
        <div className="ratio ratio-16x9">
          <iframe src={videoLink} title="YouTube video" allowFullScreen></iframe>
        </div>
      </Container>
    </div>
  );
};

export default MovieDescription;