import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Menu } from './components/Menu'
import { PageNotFound } from './components/PageNotFound'
import { Posts } from './components/Posts'
import { PostNew } from './components/PostNew'
import { Post } from './components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Menu/>
        <div className="page">
          <Routes>
            <Route path="*" element={<PageNotFound/>} />
            <Route path="/" element={<Posts/>}/>
            <Route path="/posts/new" element={<PostNew/>} />
            <Route path="/posts/:id" element={<Post/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
