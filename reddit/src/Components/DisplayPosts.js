import { react } from 'react';
import Post from './Post.js';
import { useSelector } from 'react-redux';
import { selectPost } from '../Slices/postSlice.js';

function DisplayPosts() {

    const posts = useSelector(selectPost);

    return (
        <div>
            {
                posts.map(post => <Post post={post} key={post.id}/>)
            }
        </div>
        
    )
}

export default DisplayPosts;