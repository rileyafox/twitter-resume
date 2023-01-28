import React, { useState } from 'react';
import "./TweetBox.css";
import Me from './assets/me.jpg';
import { Avatar, Button} from "@material-ui/core";
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './features/posts/postsSlice'


function uniqueTweetId() {
    return Math.floor(Math.random() * Date.now())
  }

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function TweetBox() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onTweetClicked = () => {
        if (title && content) {
          dispatch(
            postAdded({
              displayName: "Riley Fox",
              username: "rileyfox134",
              verified: true,
              twitterId: uniqueTweetId(),
              title,
              content,
              avatar: {Me},
              comments: getRandomArbitrary(0,500),
              shares: getRandomArbitrary(0,500),
              likes: getRandomArbitrary(0,500),
              id: nanoid()
            })
          )
    
          setTitle('')
          setContent('')
        }
      }
    return(
        <div className= "tweetBox" >
            <form>
                <div className= "tweetBox__input">
                    <Avatar
                        src = {Me}
                    />
                    
                    <input placeholder="What's Happening" type= "text"  value={title} onChange={onTitleChanged}/>
                    
                </div>
                <input className="tweetBox__imageInput" placeholder= "Enter image URL" type= "text" value={content} onChange={onContentChanged}/>
                <Button className= "tweetBox__tweetButton" onClick={onTweetClicked}>Tweet</Button>
            </form>

        </div>
    );
}

export default TweetBox;