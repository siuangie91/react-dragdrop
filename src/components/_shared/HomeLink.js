import React from 'react';
import { Link } from '@reach/router';

const HomeLink = () => (
  <Link className="home-link" to={`${process.env.PUBLIC_URL}/`}>Return Home</Link>
);

export default HomeLink;