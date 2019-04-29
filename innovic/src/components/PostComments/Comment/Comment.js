import React from 'react';

const Comment  = ({email, name, body}) => {
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>{email}</b></li>
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{body}</li>
            </ul>
        );
}

export default Comment;