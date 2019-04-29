import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="jumbotron jumbotron-fluid mt-5">
                <div className="container">
                    <h1 className="display-4">Innovic Test app</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
