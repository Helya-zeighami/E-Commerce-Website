import React from 'react';
import Hero from '../assets/pizza.jpeg'

const Home = () => {
    return (
        <div>
            <img src={Hero} className="img-fluid position-relative" alt="Bootstrap Themes"/>

            <div className="container col-xxl-8 ">
                <div className="row flex-lg-row-reverse align-items-center ">

                    <div className="col-lg-6 position-absolute top-50  translate-middle">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Pedro's Pizerria</h1>
                        <p className="lead">Pizza to fit any taste</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
