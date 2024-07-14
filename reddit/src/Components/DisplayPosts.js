import { useEffect } from 'react';
import Post from './Post.js';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubRedditPosts, selectPost, isLoading, failedToLoad} from '../Slices/postSlice.js';



function DisplayPosts({subReddit}) {

    const dispatch = useDispatch();
    const isLoadingPosts = useSelector(isLoading);
    const failedToLoadPosts = useSelector(failedToLoad);
    const posts = useSelector(selectPost);
    

    useEffect(() => {
        if (subReddit) {
            dispatch(loadSubRedditPosts(subReddit));
        }
    }, [dispatch, subReddit]);

    if (failedToLoadPosts) {
        return (
            <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
                {/* Post Info */}
                <h1 className="text-white text-xl">Failed To Load</h1>
                
                {/* Under Content */}
                <div className='mt-2 text-slate-300'>
                    <button className='p-2 border rounded' onClick={() => dispatch(loadSubRedditPosts(subReddit))}>Try Again</button>
                </div>
                {console.log("run")}
            </div>
        )
    } else if (isLoadingPosts) {
        return (
            <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
                {/* Post Info */}
                <h1 className="text-white text-xl">Loading...</h1>
            </div>
        )
    } else {
        return (
            <div>
                {posts.map(post => <Post post={post} key={post.id}/>)}
            </div>
        )
    }
}

export default DisplayPosts;