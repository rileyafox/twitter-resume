import Me from '../../assets/me.jpg';
import Tesla from '../../assets/Tesla_Clone.jpg';
import MGO from '../../assets/MGO_Final.png';


import { 
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
 } from '@reduxjs/toolkit'

const initialState = [
    {
        displayName: "Riley Fox",
        username: "rileyfox134",
        verified: true,
        title: "Developed this Twitter Resume. Blah blah blah blah blah blah ahjfdahfjdafjdhajfdhakjfhdk ",
        avatar: {Me},
        content: "data:image/jpeg;base64,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", 
        comments: getRandomArbitrary(0,500),
        shares: getRandomArbitrary(0,500),
        likes: getRandomArbitrary(0,500),
        id: "1",          
      },
    {
        displayName: "Riley Fox",
        username: "rileyfox134",
        verified: true,
        title: "Recreated the Tesla Homepage.",
        avatar: {Me},
        content: Tesla, 
        comments: getRandomArbitrary(0,500),
        shares: getRandomArbitrary(0,500),
        likes: getRandomArbitrary(0,500),
        id: "2",          
    },
    {
        displayName: "Riley Fox",
        username: "rileyfox134",
        verified: true,
        title: "Made a fullstack C# website.",
        avatar: {Me},
        content: MGO,
        comments: getRandomArbitrary(0,500),
        shares: getRandomArbitrary(0,500),
        likes: getRandomArbitrary(0,500),
        id: "3",       
      }
    
]

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function uniqueTweetId() {
  return Math.floor(Math.random() * Date.now())
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      postAdded(state, action) {
        state.push(action.payload)
      }
    }
  })

  export const { postAdded } = postsSlice.actions

  export const selectAllPosts = state => state.posts

  export const selectPostById = (state, postId) =>
  state.posts.find(post => post.id === postId)

  
  export default postsSlice.reducer