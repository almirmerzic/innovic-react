import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LatestComments from '../LatestComments';
import Userinfo from '../User-Info';
import PostDetails from '../PostDetails';
import PostComments from '../PostComments';


export default class PostView extends React.Component {

    render() {
        const { match: { params } } = this.props;
        return (
            <div>
                <Navbar />
                <div className="">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <Userinfo id={params.postId} />
                                    <PostDetails id={params.postId} />
                                </div>
                                <div className="col-6">
                                    <PostComments id={params.postId} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <LatestComments />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
