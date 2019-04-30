import React from 'react';
import axios from 'axios';

export default class EditPost extends React.Component {

    state = {
        post: {}
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/` + this.props.id)
            .then(res => {
                const post = res.data;
                this.setState({ post});
            })
    }

    updateState(e) {
        
        
     }

    render() {
        return (
            <div>
                <div className="card mt-5">
                    <h5 className="card-header">Edit Post</h5>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" value={this.state.post.title || ''} onChange = {this.updateState} />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" value={this.state.post.body || ''} onChange = {this.updateState} />
                            </div>
                            <button type="submit" className="btn btn-outline-secondary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
