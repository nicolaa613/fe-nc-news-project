//ygtimport { useState } from 'react'
import "./App.css"
import Header from "./components/Header"
import Articles from "./components/Articles"
import Article from "./components/Article"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />}></Route>
      </Routes>
    </div>
  )
}

export default App
