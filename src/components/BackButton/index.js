import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackButton() {

  const navigate = useNavigate()
  return (
    <>
    <button onClick={() => navigate(-1) }>Go Back</button>
    </>
  );
}

// navigate('/') go Home
export default BackButton;
