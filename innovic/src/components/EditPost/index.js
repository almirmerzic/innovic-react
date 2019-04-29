import React from 'react';
import axios from 'axios';

export default class EditPost extends React.Component {

    state = {
        post: [],
        title: '',
        description: ''
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/` + this.props.id)
            .then(res => {
                const post = res.data;
                this.setState({ post });
            })
    }

    render() {
        return (
            <div>
                <div className="card mt-5">
                    <h5 className="card-header">Edit Post</h5>
                    <div className="card-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Title</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Description</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
