import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../../Post.js' 
import Me from '../../assets/me.jpg';



export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const singlePost = useSelector((state) =>
    state.posts.find((post) => post.id ===  match.params.id)
  )

  if (!singlePost) {
    console.log(match)
    console.log(match.params.id)
    console.log(postId)
    
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  
  return (
      
    <div>
    < Post 
        displayName= {singlePost.displayName}
        username= {singlePost.username}
        verified= {singlePost.verified}
        title= {singlePost.title}
        avatar= {Me}
        content= {singlePost.content}
        comments = {singlePost.comments}
        shares = {singlePost.shares}
        likes = {singlePost.likes}
        id ={singlePost.id}
        />
    </div>
  )
}