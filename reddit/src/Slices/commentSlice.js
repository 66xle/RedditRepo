import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// get data


export const loadPostComments = createAsyncThunk(
    'posts/loadPostComments',
    async (id) => {
      const response = await fetch(`r/WutheringWaves/comments/${id}/.json`);
      const json = await response.json();


      return json.data.children;
    }
)

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        comments: [],
        isLoadingComments: false,
        failedToLoadComments: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPostComments.pending, (state) => {
                state.isLoadingComments = true;
                state.failedToLoadComments = false;
            })
            .addCase(loadPostComments.fulfilled, (state, action) => {
                state.isLoadingComments = false;
                state.failedToLoadComments = false;
                console.log(action.payload);
                const data = action.payload;
                
                console.log(data)
                
            })
            .addCase(loadPostComments.rejected, (state) => {
                state.isLoadingComments = false;
                state.failedToLoadComments = true;
                state.comments = [];
            })
    }
})

export const selectComment = (state) => state.comment.comments;
export const isLoadingComment = (state) => state.comment.isLoadingComment;

export default commentSlice.reducer;
