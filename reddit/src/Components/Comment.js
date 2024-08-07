import timeAgo from "../Functions/Extension";


function Comment({comment}) {
    return (
        <div className="p-2 rounded-md border border-slate-600 ">
            <div className='text-left'>
                <p className='text-white text-xs'>{comment.author}</p>
                <div className="text-slate-400 text-base pl-3" dangerouslySetInnerHTML={{ __html: comment.content }} />
            </div>
            <div className='mt-1 flex flex-row text-slate-300'>
                <p className='mr-10'>{comment.likes} 👍</p>
                <p className='ml-auto'>{timeAgo(comment.timePosted)}</p>
            </div>
        </div>
    )
}

export default Comment;