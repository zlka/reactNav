import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header, Footer } from './layout'
import { Home, About, People, Person, NotFound } from './pages'

function App() {
  return (
    <>
      <Header />

      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="people" element={<People />}>
          <Route path=":person" element={<Person />}></Route>
        </Route>
        <Route path="about" element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>

      </Routes>

      <Footer />
    </>
  );
}

export default App;
