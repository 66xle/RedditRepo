import { createSlice } from '@reduxjs/toolkit'

// get data

const initialState = [
    {
        id: 1,
        author: "Jack",
        title: "TITLE",
        content: 'Insert post here',
        likes: 20000,
        timePosted: 2,
        isCommentToggled: false,
        comments: [
            {
                content: "hello",
                author: 'David',
                likes: 10,
                timePosted: 1,
            }
        ]
    },    
]

const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        toggleComment: (state, action) => {
            const postToBeToggled = state.find(post => post.id === action.payload.id);
            if (postToBeToggled) {
                postToBeToggled.isCommentToggled = !postToBeToggled.isCommentToggled;
            }
        }
    }
})

export const selectPost = (state) => state.post;

export const {toggleComment} = postSlice.actions;
export default postSlice.reducer;
