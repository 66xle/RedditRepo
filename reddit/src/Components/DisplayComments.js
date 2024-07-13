import Comment from './Comment.js';






function DisplayComments({post, commentContainer}) {

    if (post.isCommentToggled) {
        if (commentContainer.isLoadingComments) {
            return (
                <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
                    {/* Post Info */}
                    <h1 className="text-white text-xl">Loading...</h1>
                </div>
            )
        } else {
            return (
                <div>
                    {
                        commentContainer.comments.map(comment => <Comment comment={comment} key={comment.id}/>)
                    }
                </div>
            )
        }
    }
}

export default DisplayComments;