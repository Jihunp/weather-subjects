import React from 'react';

function Post(props) {
    return(
        <div>
            <h1>Title: {props.title}</h1>
            <p>By: {props.author}</p>
            <div>
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default Post;