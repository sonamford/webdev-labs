import React from 'react';
import {getHeaders} from './utils.js';

class BookmarkButton extends React.Component { 

    constructor(props) {
        super(props);

        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.addBookmark = this.addBookmark.bind(this);
        this.removeBookmark = this.removeBookmark.bind(this);
    }

    toggleBookmark (ev) {
        console.log('toggleBookmark');
        if(this.props.bookmarkId) {
            this.removeBookmark();
        } else {
            this.addBookmark();
        }
    }

    addBookmark () {
        console.log('add bookmark');
        const postId = this.props.postId;
        const postData = {
            "post_id": postId
        };
        fetch('/api/bookmarks', {
            headers: getHeaders(),
            body: JSON.stringify(postData),
            method: "POST"
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            // calling the parent Component (Post's) function.
            this.props.requeryPost();
        })
    }

    removeBookmark () {
        console.log('remove bookmark');
        const bookmarkId = this.props.bookmarkId;
        fetch(`/api/bookmarks/${bookmarkId}`, {
                method: "DELETE",
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.props.requeryPost();
            });
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        return (
            <button 
                onClick={this.toggleBookmark }
                aria-checked={ bookmarkId ? true : false}>
                <i className={ bookmarkId ? 'fas fa-bookmark fa-2x' : 'far fa-bookmark fa-2x'}></i>
            </button>
        ); 
    }
}

export default BookmarkButton;