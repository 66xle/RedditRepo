import { react, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComment } from '../Slices/postSlice';
import Comment from './Comment';

function Post({post}) {

    const dispatch = useDispatch();

    const handleComment = () => {
        dispatch(toggleComment(post));
    };

    return (
        <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
            {/* Post Info */}
            <h1 className="text-left text-white text-xs">{post.author}</h1>
            <h1 className='text-left text-white text-xl'>{post.title}</h1>
            <div className='text-left'> 
                <p className='text-slate-400'>{post.content}</p>
            </div>
            {/* Under Content */}
            <div className='mt-2 flex flex-row text-slate-300'>
                <p className='mr-10'>{post.likes} 👍</p>
                {/* <p>{post.comments.length} </p><button onClick={handleComment}>💬</button> */}
                <p className='ml-auto'>{post.timePosted} hours ago</p>
            </div>
        </div>
    )

    // if (post.isCommentToggled) {
    //     return (
    //         <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
    //             {/* Post Info */}
    //             <h1 className="text-left text-white text-xs">{post.author}</h1>
    //             <h1 className='text-left text-white text-xl'>{post.title}</h1>
    //             <div className='text-left'> 
    //                 <p className='text-slate-400'>{post.content}</p>
    //             </div>
    //             {/* Under Content */}
    //             <div className='mt-2 flex flex-row text-slate-300'>
    //                 <p className='mr-10'>{post.likes} 👍</p>
    //                 <p>{post.comments.length} </p><button onClick={handleComment}>💬</button>
    //                 <p className='ml-auto'>{post.timePosted} hours ago</p>
    //             </div>

    //             {/* Comments Container */}
    //             <div className='mt-3 bg-slate-700'>
    //                 <h1 className='text-left text-white text-s'>Comments</h1>
    //                 {/* List of comments here */}
    //                 {post.comments.map(comment => <Comment comment={comment}></Comment>)}
    //             </div>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
    //             {/* Post Info */}
    //             <h1 className="text-left text-white text-xs">{post.author}</h1>
    //             <h1 className='text-left text-white text-xl'>{post.title}</h1>
    //             <div className='text-left'> 
    //                 <p className='text-slate-400'>{post.content}</p>
    //             </div>
    //             {/* Under Content */}
    //             <div className='mt-2 flex flex-row text-slate-300'>
    //                 <p className='mr-10'>{post.likes} 👍</p>
    //                 <p>{post.comments.length} </p><button onClick={handleComment}>💬</button>
    //                 <p className='ml-auto'>{post.timePosted} hours ago</p>
    //             </div>
    //         </div>
    //     )
    // }
    
}

export default Post;