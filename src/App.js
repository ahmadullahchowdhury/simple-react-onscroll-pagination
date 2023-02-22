import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from "./post.json"

function App() {

  const rows = 20

  const [post, setPost] = useState([])
  const [comment, setComment] = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((response) => {
      setComment(response.data);
      console.log(comment)
      setPost([...comment.slice(0,page*rows)])
    });
  },[comment, page])
 console.log(post)
  const handlescroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      setPage(prev=>prev+1)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handlescroll)
  },[])

  return (
    <>
      <section>
        {
          post.map((val,index)=>{
            return (
              <section className='center' key={index}>
                <h1>{val.name} {index}</h1>
                {/* <img src={val.dp} alt={val.name} />
                <p>{val.description}</p> */}
              </section>
            )
          })
        }
      </section>
    </>
  )
}

export default App