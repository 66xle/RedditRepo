import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// get data


// Create loadSubRedditPosts here.
export const loadSubRedditPosts = createAsyncThunk(
    'posts/loadSubRedditPosts',
    async (subreddit, { rejectWithValue }) => {
        try {
            const response = await fetch(`r/${subreddit}.json`);
            console.log("Limit Used: " + response.headers.get("x-ratelimit-used"));
            console.log(response);


            if (!response.ok) {
                console.log("Error: " + response.status);
                return rejectWithValue(`Error: ${response.status}`);
            } else {
                console.log("run")
                const json = await response.json();
                console.log(json)
                return json.data.children;
            }

        } catch (err) {
            console.log("caught: " + err);
            return rejectWithValue(err.message);
        }
    }
)


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
                console.log("pending");
            })
            .addCase(loadSubRedditPosts.fulfilled, (state, action) => {
                state.isLoadingPosts = false;
                state.failedToLoadPosts = false;
                state.posts = []
                const data = action.payload;

                data.map((value, index) => {
                    state.posts.push({
                        id: value.data.id,
                        author: value.data.author,
                        title: value.data.title,
                        content: value.data.selftext,
                        image: value.data.url,
                        media: value.data.media,
                        mediaMetaData: value.data.media_metadata,
                        likes: value.data.ups - value.data.downs,
                        timePosted: value.data.created,
                        isCommentToggle: false
                    })
                })
            })
            .addCase(loadSubRedditPosts.rejected, (state) => {
                console.log("Failed to load");
                state.isLoadingPosts = false;
                state.failedToLoadPosts = true;
                state.posts = [];

            })
    },
    reducers: {
        toggleComment: (state, action) => {
            const postToBeToggled = state.posts.find(post => post.id === action.payload.id);
            if (postToBeToggled) {
                postToBeToggled.isCommentToggled = !postToBeToggled.isCommentToggled;
            }
        }
    }
})

export const selectPost = (state) => state.post.posts;
export const isLoading = (state) => state.post.isLoadingPosts;
export const failedToLoad = (state) => state.post.failedToLoadPosts;

export const {toggleComment} = postSlice.actions;

export default postSlice.reducer;
