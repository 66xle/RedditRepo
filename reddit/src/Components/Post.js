import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComment } from '../Slices/postSlice';
// import Comment from './Comment';
import {loadPostComments, selectComment, failedToLoad} from '../Slices/commentSlice.js';

import snuownd from '../packages/snuownd-master/snuownd';


function showImage(image)
{
    // Check if url is an image
    if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(image)) {
        <img src={image} alt=""/>
    }
}

function showMedia(media)
{
    if (media !== null) {
        
        if (media.type){
            <video controls><source src={media.oembed.thumbnail_url} /></video>
        } else {
            <video controls><source src={media.reddit_video.fallback_url} /></video>
        }
    }
}

function Post({post}) {

    const dispatch = useDispatch();
    
    const comments = useSelector(selectComment);
    const failedToLoadComments = useSelector(failedToLoad);

    useEffect(() => {
        //dispatch(loadPostComments(post.id));
    }, [dispatch]);

    const handleComment = () => {
        dispatch(toggleComment(post));
    };


    var markdown = post.content;
    var html = snuownd.getParser().render(markdown);

    if (failedToLoadComments) {
        <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
                {/* Post Info */}
                <h1 className="text-white text-xl">Failed To Load</h1>
                
                {/* Under Content */}
                <div className='mt-2 text-slate-300'>
                    <button className='p-2 border rounded' onClick={() => dispatch(loadPostComments(post.id))}>Try Again</button>
                </div>
            </div>
    }

    return (
        <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
            {/* Post Info */}
            <h1 className="text-left text-white text-xs">{post.author}</h1>
            <h1 className='text-left text-white text-xl'>{post.title}</h1>
            <div className='text-left overflow-hidden whitespace-pre text-wrap'> 
                {showImage(post.image)}
                {showMedia(post.media)}
                <div className="text-slate-400" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            {/* Under Content */}
            <div className='mt-2 flex flex-row text-slate-300'>
                <p className='mr-10'>{post.likes} 👍</p>
                <p>{comments.length}</p><button onClick={handleComment}>💬</button>
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