import React, { Component } from 'react'

class Tally extends Component {
// setting the state for likes to be 0

    state = {
        likesCount: 0,
    };
    render () {
        return(
            <div>
                Likes: {this.state.likesCount}
            </div>
        );
    }
}

export default Tally;
