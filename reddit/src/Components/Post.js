import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComment } from '../Slices/postSlice';
// import Comment from './Comment';
import {loadPostComments, selectComment, failedToLoad, addCommentObject} from '../Slices/commentSlice.js';
import DisplayComments from './DisplayComments.js';

import VideoJS from './Video.js';
import 'videojs-youtube';

import timeAgo from '../Functions/Extension.js';
import snuownd from '../packages/snuownd-master/snuownd';



function showImage(post)
{
    var metaData = post.mediaMetaData;

    if (metaData) {
        return (
            <div>
                {
                    
                    Object.keys(metaData).map(key => {

                        const value = metaData[key];
                        if (value.m) {
                            const type = value.m.replace("image/", "")
                            const src = `https://i.redd.it/${key}.${type}`;

                            return <img src={src} alt="image" key={key}/>
                        }
                        return null;
                    })
                }
            </div>
        )
    }

    const image = post.image;
    // Check if url is an image
    if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(image)) {
        return <img src={image} alt="image"/>
    }
}

function showMedia(post)
{
    const media = post.media;
    if (media !== null) {

        var videoJsOptions = {
        autoplay: false,
        responsive: true,
        controls: true,
        fluid: true,
        sources: [{
            src: media.type ? media.oembed.thumbnail_url : media.reddit_video.fallback_url
        }]}
        
        
        if (media.type === "twitch.tv") {
            return <img src={media.oembed.thumbnail_url} alt="image"/>
        } else if (media.type === "youtube.com") {
            videoJsOptions.sources.src = media.oembed.src;
            videoJsOptions.sources.type = "video/youtube";
        }

        return (
            <div>
                <VideoJS options={videoJsOptions} />
            </div>
        );
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


    var html = snuownd.getParser().render(post.content);

    return (
        <div className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
            {/* Post Info */}
            <h1 className="text-left text-white text-xs">{post.author}</h1>
            <h1 className='text-left text-white text-xl'>{post.title}</h1>
            <div className='text-left overflow-hidden whitespace-pre text-wrap'> 
                {showImage(post)}
                {showMedia(post)}
                <div className="text-slate-400" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            {/* Under Content */}
            <div className='mt-2 flex flex-row text-slate-300'>
                <p className='mr-10'>{post.likes} 👍</p>
                <button onClick={handleComment}>💬</button>
                <p className='ml-auto'>{timeAgo(post.timePosted)}</p>
            </div>
            <DisplayComments post={post} commentContainer={commentContainer} />
        </div>
    )
}

export default Post;