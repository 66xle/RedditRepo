import timeAgo from "../Functions/Extension";
import snuownd from '../packages/snuownd-master/snuownd';


function Comment({comment}) {


    var html = snuownd.getParser().render(comment.content);


    return (
        <div className="p-2 rounded-md border border-slate-600 ">
            <div className='text-left'>
                <p className='text-white text-xs'>{comment.author}</p>
                <p className='text-slate-400 text-base pl-3'>{comment.content}</p>
                {/* <div className="text-slate-400 text-base pl-3" dangerouslySetInnerHTML={{ __html: html }} /> */}
            </div>
            <div className='mt-1 flex flex-row text-slate-300'>
                <p className='mr-10'>{comment.likes} 👍</p>
                <p className='ml-auto'>{timeAgo(comment.timePosted)}</p>
            </div>
        </div>
    )
}

export default Comment;