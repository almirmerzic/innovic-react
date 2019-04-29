import React from 'react';
import axios from 'axios';
import Comments from './Comments/Comments';

export default class LatestComments extends React.Component {
    state = {
        comments: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => {
                const comments = res.data;
                this.setState({ comments });
            })
    }

    render() {
        return (
            <div className="card mt-5">
                <h5 className="card-header">Comments</h5>
                <div className="card-body">
                    {this.state.comments.map((comment, i) =>
                        <Comments key={i}
                            email={comment.email}
                            name={comment.name}
                            body={comment.body}
                        />)}
                </div>
            </div>
        );
    }
}