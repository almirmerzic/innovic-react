import React from 'react';
import axios from 'axios';

export default class EditPost extends React.Component {

    state = {
        title: '',
        description: ''
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/` + this.props.id)
            .then(res => {
                console.log(res);
                this.setState({ title: res.data.title, description: res.data.body });
            })
    }

    updateTitle = (e) => {
        this.setState({ title: e.target.value });
    };

    updateDescription = (e) => {
        this.setState({ description: e.target.value });
    };

    editPost = () => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/` + this.props.id, {
            title: this.state.title,
            body:this.state.description
        });
    };

    render() {
        return (
            <div>
                <div className="card mt-5">
                    <h5 className="card-header">Edit Post</h5>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" value={this.state.title || ''} onChange={this.updateTitle} />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" value={this.state.description || ''} onChange={this.updateDescription} />
                            </div>
                            <button type="button" className="btn btn-outline-secondary btn-block" onClick={this.editPost}><i className="fas fa-save"></i> Update</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
