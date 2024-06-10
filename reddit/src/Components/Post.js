import { react } from 'react';

function Post() {

    return (
        <div id="post" className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
            <h1 className='text-left text-white text-xl'>Title</h1>
            <div id="content" className='text-left'>
                <p className='text-slate-400'>Insert post here</p>
            </div>
            <div id="underContent" className='flex flex-row text-slate-300'>
                <p className='mr-10'>20.5k 👍</p>
                <button>208 💬</button>
                <p className='ml-auto'>2 hours ago</p>
            </div>
        </div>
    )
}

export default Post;