

function Comment({comment}) {

    const container = comment;

    return (
        <div className="p-2 rounded-md border border-slate-600 ">
            <div className='text-left'>
                <p className='text-white text-xs'>{container.comment.author}</p>
                <p className='text-slate-400 text-base pl-3'>{container.comment.content}</p>
            </div>
            <div className='mt-1 flex flex-row text-slate-300'>
                <p className='mr-10'>{container.comment.likes} 👍</p>
                <p className='ml-auto'>{container.comment.timePosted} hours ago</p>
            </div>
        </div>
    )
}

export default Comment;