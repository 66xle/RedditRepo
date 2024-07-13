import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComment } from '../Slices/postSlice';
// import Comment from './Comment';
import {loadPostComments, selectComment, failedToLoad, addCommentObject} from '../Slices/commentSlice.js';
import DisplayComments from './DisplayComments.js';

import snuownd from '../packages/snuownd-master/snuownd';


function showImage(image)
{
    // Check if url is an image
    if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(image)) {
        return <img src={image} alt="image"/>
    }
}

function showMedia(media)
{
    if (media !== null) {
        
        // Check if youtube video or reddit video
        if (media.type){
            return <video controls><source src={media.oembed.thumbnail_url} /></video>
        } else {
            return <video controls><source src={media.reddit_video.fallback_url} /></video>
        }
    }
}

function Post({post}) {

    const dispatch = useDispatch();
    
    const commentContainerArr = useSelector(selectComment);
    const commentContainer = commentContainerArr.find(container => container.id === post.id);

    useEffect(() => {
        dispatch(addCommentObject(post.id));
    }, [dispatch, post.id]);

    const handleComment = () => {
        // Load comment here
        dispatch(toggleComment(post));
        
        if (commentContainer.comments.length === 0) {
            dispatch(loadPostComments(post.id));
        }
    };


    var markdown = post.content;
    var html = snuownd.getParser().render(markdown);

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
                <button onClick={handleComment}>💬</button>
                <p className='ml-auto'>{post.timePosted} hours ago</p>
            </div>
            <DisplayComments post={post} commentContainer={commentContainer} />
        </div>
    )
}

export default Post;