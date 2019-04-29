import React from 'react';

export default class Comments extends React.Component {
    render() {
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>{this.props.email}</b></li>
                <li className="list-group-item">{this.props.name}</li>
                <li className="list-group-item">{this.props.body}</li>
            </ul>
        );
    }
}