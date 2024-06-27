import { useEffect } from 'react';
import Comment from './Comment.js';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostComments, selectComment, isLoadingComments} from '../Slices/commentSlice.js';

function DisplayComments({postID}) {

    const dispatch = useDispatch();


    const comments = useSelector(selectComment);
    
    useEffect(() => {
        dispatch(loadPostComments(postID));
    }, [dispatch]);

    return (
        <div>
            {
                comments.map(comment => <Comment comment={comment}/>)
            }
        </div>
    )
}

export default DisplayComments;