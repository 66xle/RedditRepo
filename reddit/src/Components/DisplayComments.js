import { useEffect } from 'react';
import Comment from './Comment.js';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostComments, selectComment, isLoadingComments} from '../Slices/commentSlice.js';

function DisplayComments({comments}) {

    return (
        <div>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    )
}

export default DisplayComments;