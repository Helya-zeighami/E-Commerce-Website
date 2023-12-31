import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className=" bg-black w-100">
                <footer className="py-3">
                    <ul className="nav justify-content-center pb-3  mb-3 ">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-light">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-light">About</a></li>
                    </ul>
                    <p className="text-center text-light">&copy; 2022 Company, Inc</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
