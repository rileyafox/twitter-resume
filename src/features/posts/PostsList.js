import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../../Post.js' 
import TweetBox from '../../TweetBox.js' 
import "../../Feed.css";
import Me from '../../assets/me.jpg';



export const PostsList = () => {

  

  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
      

    < Post 
        displayName= {post.displayName}
        username= {post.username}
        verified= {post.verified}
        title= {post.title}
        avatar= {Me}
        content= {post.content}
        comments = {post.comments}
        shares = {post.shares}
        likes = {post.likes}
        id ={post.id}
        />
  ))



    return ( 
      <div className= "feed">
          {/* Header */}
          <div className= "feed__header">
              <h2>Welcome to my resume</h2>
          </div>

          {/* TweetBox */}
          <TweetBox />
          
          <div className= "feed__footer">
              <h2>Relevant Experience</h2>
          </div>
          
          
          {renderedPosts} 
          
      </div>
    )
}