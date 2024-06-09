import { react } from 'react';

function DisplayPosts() {

    return (
        <div id="post" className='p-3 m-5 shadow-inner rounded-md bg-slate-700'>
            <h1 className='text-left text-white text-xl'>Title</h1>
            <div id="content" className='text-left'>
                <p className='text-slate-400'>Insert post here</p>
            </div>
            <div id="underContent" className='flex justify-around text-slate-300'>
                <p>Likes</p>
                <button>Comments</button>
                <p>Time Posted</p>
            </div>
        </div>
    )
}

export default DisplayPosts;