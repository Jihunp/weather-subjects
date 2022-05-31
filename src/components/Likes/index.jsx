import React, { Component } from 'react'

class Likes extends Component {
// setting the state for likes to be 0

    state = {
        likesCount: 0,
    };

    increaseLikes = () => {
        let moreLike = this.state.likesCount + 1;
        this.setState({
            likesCount: moreLike,
        });
    };

    render () {
        return(
            <div>
                <button onClick={this.increaseLikes}>
                    Likes: {this.state.likesCount}
                </button>
            </div>
        );
    }
}

export default Likes;
