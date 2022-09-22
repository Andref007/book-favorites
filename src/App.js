import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Books from './pages/Books'
import BooksNav from './pages/BooksNav'


function App() {
  return (
<BrowserRouter>
<h1>Book Favorites</h1>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login />}/>
  <Route path="/Books" element={<Books/>}/>
</Routes>
</BrowserRouter> 
     

  )
}

export default App;


