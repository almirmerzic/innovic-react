import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Post from '../Post';
import LatestComments from '../LatestComments';

export default function PostList (){
    return(
        <div>
            <Navbar />
            <div className ="">
            <div className="row">
            <div className ="col-6">
            <Post />
            </div>
            <div className ="col-6">
            <LatestComments />
            </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}