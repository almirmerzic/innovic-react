import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({id, title, description}) => {
    return (
        <tr>
            <td><Link to={`/posts/${id}`}>{title}</Link></td>
            <td><Link to={`/posts/${id}`}>{description}</Link></td>
        </tr>
    );
}

export default Post;