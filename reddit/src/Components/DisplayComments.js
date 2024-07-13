import Comment from './Comment.js';






function DisplayComments({post, commentContainer}) {

    if (post.isCommentToggled) {
        
        return (
            <div>
                {
                    commentContainer.comments.map(comment => <Comment comment={comment} key={comment.id}/>)
                }
            </div>
        )
    }
}

export default DisplayComments;