import React from 'react';
import {getHeaders} from './utils.js';

class LikeButton extends React.Component { 

    constructor(props) {
        super(props);

        this.likeUnlike = this.likeUnlike.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
    }

    likeUnlike (ev) {
        console.log('likeUnlike');
        if(this.props.likeId) {
            this.unlike();
        } else {
            this.like();
        }
    }

    like () {
        console.log('like');
        const postId = this.props.postId;
        fetch('/api/posts/' + postId + '/likes', {
            headers: getHeaders(),
            body: JSON.stringify({}),
            method: "POST"
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            // calling the parent Component (Post's) function.
            this.props.requeryPost();
        })
    }

    unlike () {
        console.log('unlike');
        const likeId = this.props.likeId;
        const postId = this.props.postId;
        fetch(`/api/posts/${postId}/likes/${likeId}`, {
                method: "DELETE",
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.props.requeryPost();
            });
    }

    render () {
        const likeId = this.props.likeId;
        return (
            <button 
                onClick={this.likeUnlike }
                aria-checked={ likeId ? true : false}>
                <i className={ likeId ? 'fas fa-heart fa-2x' : 'far fa-heart fa-2x'}></i>
            </button>
        ); 
    }
}

export default LikeButton;