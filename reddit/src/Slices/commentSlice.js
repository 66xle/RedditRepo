import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// get data


export const loadPostComments = createAsyncThunk(
    'posts/loadPostComments',
    async (id) => {
        try {
            const response = await fetch(`/api/r/WutheringWaves/comments/${id}/.json`);
            console.log(response.headers.get("x-ratelimit-used"));

            const json = await response.json();

            return json;

        } catch (err) {
            console.log(err);
        }
    }
)

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        commentsContainer: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPostComments.pending, (state, action) => {
                const postID = action.meta.arg;
                const container = state.commentsContainer.find(container => container.id === postID);

                container.isLoadingComments = true;
                container.failedToLoadComments = false;
            })
            .addCase(loadPostComments.fulfilled, (state, action) => {
                const postID = action.meta.arg;
                const container = state.commentsContainer.find(container => container.id === postID);

                container.isLoadingComments = false;
                container.failedToLoadComments = false;

                const data = action.payload[1].data.children;

                data.map(value => {
                    container.comments.push({
                        id: value.data.id,
                        author: value.data.author,
                        content: value.data.body,
                        timePosted: value.data.created,
                        likes: value.data.ups - value.data.downs,
                    })
                })

                console.log("Fetch Comments")
            })
            .addCase(loadPostComments.rejected, (state, action) => {
                const postID = action.meta.arg;
                const container = state.commentsContainer.find(container => container.id === postID);

                container.isLoadingComments = false;
                container.failedToLoadComments = true;
                container.comments = [];
            })
    },
    reducers: {
        addCommentObject: (state, action) => {
            state.commentsContainer.push({
                id: action.payload,
                comments: [],
                isLoadingComment: false,
                failedToLoadComments: false,
            })
        }
    }
})

export const selectComment = (state) => state.comment.commentsContainer;

export const {addCommentObject} = commentSlice.actions;

export default commentSlice.reducer;
