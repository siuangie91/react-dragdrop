import React from 'react';
import HomeLink from '../components/_shared/HomeLink';

const NotFound = () => (
  <section id="not-found">
    <h1><i className="far fa-flushed"></i></h1>
    <h2>Oh no! This page doesn't exist!</h2>
    <HomeLink />
  </section>
);

export default NotFound;