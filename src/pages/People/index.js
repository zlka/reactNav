import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function People () {
  return (
    <>
    <h1>List of people</h1>

    <br />
    <Link to ="Mike">Mike</Link>
    <br />
    <Link to ="Romeo">Romeo</Link>
    <br />
    <Link to ="Shaw">Shaw</Link>

    <Outlet />
    </>
  );
}

export default People ;
