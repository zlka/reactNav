import React from 'react'
import { useLocation,Link } from 'react-router-dom'

function NotFound () {

  const location = useLocation()

  return (
    <>
    <h1>Sorry! { location.pathname } couldn't be found.</h1>
    <Link to="/">Go back Homepage</Link>
    </>
  );
}

export default NotFound;
