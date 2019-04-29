import React from 'react';
import axios from 'axios';

export default class Userinfo extends React.Component {
    
    state = {
        posts: [],
        users: [],
        name: '',
        email: '',

    }

    componentDidMount() {

        axios.get(`https://jsonplaceholder.typicode.com/posts/` + this.props.id)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })

        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then(res => {
                const users = res.data;
                this.setState({ users });

                users.map((user) => {
                    if (user.id === this.state.posts.userId) {
                        this.setState({ name: user.name, email: user.email });
                    }
                    return users;
                });
            })
    }

    render() {
        return (
            <div className="card mt-5">
                <h5 className="card-header">User info</h5>
                <div className="card-body">
                    <p className="card-text"><b>Name: </b> {this.state.name}</p>
                    <p className="card-text"><b>Email: </b> {this.state.email}</p>
                </div>
            </div>
        );
    }
}