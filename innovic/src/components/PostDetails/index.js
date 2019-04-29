import React from 'react';
import axios from 'axios';

export default class PostDetails extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/` + this.props.id)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    render() {
        return (
            <div className="card mt-5">
                <h5 className="card-header">Post details</h5>
                <div className="card-body">
                    <p className="card-text"><b>Title: </b> {this.state.posts.title}</p>
                    <p className="card-text"><b>Description: </b> {this.state.posts.body}</p>
                </div>
            </div>
        );
    }
}