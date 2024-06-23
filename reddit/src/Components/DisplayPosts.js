import { react, useEffect } from 'react';
import Post from './Post.js';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubRedditPosts, selectPost, isLoading} from '../Slices/postSlice.js';

function DisplayPosts() {

    const dispatch = useDispatch();
    // const loadPosts = useSelector(loadSubRedditPosts);
    // const isLoadingPosts = useSelector(isLoading);

    const posts = useSelector(selectPost);
    
    useEffect(() => {
        dispatch(loadSubRedditPosts());
    }, [dispatch]);

    return (
        <div>
            {
                posts.map(post => <Post post={post} key={post.id}/>)
            }
        </div>
        
    )
}

export default DisplayPosts;