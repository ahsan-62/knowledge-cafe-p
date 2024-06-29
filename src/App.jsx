
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {

  const[bookmarks, setBookmarks] = useState([]);

  const bookmarked = (blog) => {
   setBookmarks([...bookmarks, blog]);
   
  };


  return (
    <>
 
     <Header></Header>
     <main className='mx-auto mt-5 md:flex max-w-7xl '>
     <Blogs bookmarked={bookmarked}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </main>
     
    </>
  )
}

export default App
