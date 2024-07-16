import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// get data


export const loadPostComments = createAsyncThunk(
    'posts/loadPostComments',
    async ({id, subReddit}, { rejectWithValue }) => {
        try {
            console.log(subReddit);
            const response = await fetch(`https://www.reddit.com/r/${subReddit}/comments/${id}/.json?raw_json=1`);
            console.log("Limit Used: " + response.headers.get("x-ratelimit-used"));
            console.log(response);

            if (!response.ok) {
                console.log("Error: " + response.status);
                return rejectWithValue(`Error: ${response.status} ${response.statusText}`);
            } else {
                console.log("run")
                const json = await response.json();
                return json;
            }

        } catch (err) {
            console.log(err);
            return rejectWithValue(err.message);
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
                const postID = action.meta.arg.id;
                const container = state.commentsContainer.find(container => container.id === postID);

                container.isLoadingComments = true;
                container.failedToLoadComments = false;
            })
            .addCase(loadPostComments.fulfilled, (state, action) => {
                const postID = action.meta.arg.id;
                const container = state.commentsContainer.find(container => container.id === postID);

                container.isLoadingComments = false;
                container.failedToLoadComments = false;
                console.log(action.payload);

                const data = action.payload[1].data.children;

                data.map(value => {
                    if (value.kind === "t1") {
                        container.comments.push({
                            id: value.data.id,
                            author: value.data.author,
                            content: value.data.body_html,
                            timePosted: value.data.created,
                            likes: value.data.ups - value.data.downs,
                        })
                    }
                })

                console.log("Fetch Comments")
            })
            .addCase(loadPostComments.rejected, (state, action) => {
                const postID = action.meta.arg.id;
                const container = state.commentsContainer.find(container => container.id === postID);

                console.log(container);

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
