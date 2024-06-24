import React from 'react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// get data


// Create loadSubRedditPosts here.
export const loadSubRedditPosts = createAsyncThunk(
    'posts/loadSubRedditPosts',
    async () => {
      const response = await fetch(`https://www.reddit.com/r/HonkaiStarRail.json`);
      const json = await response.json();
      return json.data.children;
    }
)

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
            },
            {
                content: "hello",
                author: 'David',
                likes: 10,
                timePosted: 1,
            }
        ]
    },
    {
        id: 2,
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
            },
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
    initialState: {
        posts: [],
        isLoadingPosts: false,
        failedToLoadPosts: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadSubRedditPosts.pending, (state) => {
                state.isLoadingPosts = true;
                state.failedToLoadPosts = false;
            })
            .addCase(loadSubRedditPosts.fulfilled, (state, action) => {
                state.isLoadingPosts = false;
                state.failedToLoadPosts = false;
                console.log(action.payload);
                const data = action.payload;

                data.map(value => {
                    state.posts.push({
                        id: value.data.id,
                        author: value.data.author,
                        title: value.data.title,
                        content: value.data.selftext,
                        image: value.data.thumbnail,
                        likes: value.data.ups,
                    })
                })
                
                
            })
            .addCase(loadSubRedditPosts.rejected, (state) => {
                state.isLoadingPosts = false;
                state.failedToLoadPosts = true;
                state.posts = [];
            })
    },
    reducers: {
        toggleComment: (state, action) => {
            const postToBeToggled = state.find(post => post.id === action.payload.id);
            if (postToBeToggled) {
                postToBeToggled.isCommentToggled = !postToBeToggled.isCommentToggled;
            }
        }
    }
})

export const selectPost = (state) => state.post.posts;
export const isLoading = (state) => state.post.isLoadingPosts;

export const {toggleComment} = postSlice.actions;
export default postSlice.reducer;
