import React from 'react';
import axios from 'axios';
import Comment from './Comment/Comment';

export default class PostComments extends React.Component{

    state = {
        comments: []
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=`+ this.props.id)
            .then(res => {
                const comments = res.data;
                this.setState({ comments });
            })
    }

    render(){
        return(
            <div className="card mt-5">
            <h5 className="card-header">Post Comments</h5>
            <div className="card-body">
                {this.state.comments.map((comment, i) =>
                    <Comment key={i}
                        email={comment.email}
                        name={comment.name}
                        body={comment.body}
                    />)}
            </div>
        </div>
        );
    }
}