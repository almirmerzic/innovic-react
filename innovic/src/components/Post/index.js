import React from 'react';
import axios from 'axios';
import Posts from './Posts/Posts';

export default class Post extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            const posts = res.data;
            this.setState({ posts });
          })
      }

    render() {
        return (
            <div className="card mt-5">
                <h5 className="card-header">Posts</h5>
                <div className="card-body">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.posts.map((post, i) =>
                                <Posts key={i}
                                    id = {post.id}
                                    title={post.title}
                                    description={post.body}
                                />)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}