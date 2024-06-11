import { react, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComment } from '../Slices/postSlice';


function Post({post}) {

    const dispatch = useDispatch();

    const handleComment = () => {
        dispatch(toggleComment(post));
        console.log(post);
    };

    return (
        <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
            <h1 className='text-left text-white text-xl'>{post.title}</h1>
            <div id="content" className='text-left'>
                <p className='text-slate-400'>{post.content}</p>
            </div>
            <div className='flex flex-row text-slate-300'>
                <p className='mr-10'>{post.likes} 👍</p>
                <p>{post.comments.length} </p><button onClick={handleComment}>💬</button>
                <p className='ml-auto'>{post.timePosted} hours ago</p>
            </div>
        </div>
    )
}

export default Post;