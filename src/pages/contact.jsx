import React from 'react';
import contactImg from '../assets/pizzaLeft.jpg'

const Contact = () => {
    return (
        <div>
            <section >

                    <div className="row d-flex align-items-center">
                        <div className="col-md-9 col-lg-6 col-xl-5 ">
                            <img src={contactImg}
                                 className="img-fluid" alt="Sample image" width='100%' />
                        </div>
                        <div className="col-md-8 col-lg-7 col-xl-4 offset-xl-1  ">
                            <h1 className="display-5 fw-bold mb-4">Contact US</h1>
                            <form>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                           placeholder="Enter a valid email address"/>
                                    <label className="form-label m-2" htmlFor="form3Example3">Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                           placeholder="Enter password"/>
                                    <label className="form-label m-2" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value=""
                                               id="form2Example3"/>
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-dark btn-lg">Login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                                                                                          className="link-danger">Register</a>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>


            </section>
        </div>
    );
};

export default Contact;
