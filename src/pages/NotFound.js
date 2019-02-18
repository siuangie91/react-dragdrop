import React from 'react';
import { Link } from '@reach/router';

const NotFound = () => (
  <section id="not-found">
    <h1><i className="far fa-flushed"></i></h1>
    <h2>Oh no! This page doesn't exist!</h2>
    <Link to="/">Return Home</Link>
  </section>
);

export default NotFound;