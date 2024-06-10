import { react } from 'react';
import Post from './Post.js';




function DisplayPosts() {

    let posts = [];

    for (let i = 0; i < 100; i++) {
        posts.push(<Post />);
    }

    return (
        <div>
            {
                posts.map((post, index) => {
                    return (post)
                })
            }
        </div>
        
    )
}

export default DisplayPosts;