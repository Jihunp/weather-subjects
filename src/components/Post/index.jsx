import React from 'react';
import Likes from '../Likes';

function Post(props) {
    return(
        <div>
            <h1>Title: {props.title}</h1>
            <p>By: {props.author}</p>
            <div>
                <p>{props.body}</p>
            </div>
            <div>
                <Likes />
            </div>
        </div>
    )
}

export default Post;