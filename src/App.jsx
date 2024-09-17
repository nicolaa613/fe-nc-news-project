//ygtimport { useState } from 'react'
import "./App.css"
import Header from "./components/Header"
import Articles from "./components/Articles"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  )
}

export default App
