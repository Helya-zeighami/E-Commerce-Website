import React from 'react';
import {MenuList} from "../MenuList";

const Menu = () => {
    return (
        <div className="container text-center mt-3 mb-5">
            <h1 className="display-5 fw-bold mt-5">Menu</h1>
            <div className="row row-cols-3 justify-content-md-center" >
                {MenuList.map((menuList => <div className="col p-0 m-5" >
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded  d-flex flex-column p-0 mb-4" >
                        <div className="card-body d-flex flex-column align-items-center justify-content-center "
                             style={{ height: 360, cursor: "pointer"}}>
                            <img src={menuList.image} style={{maxWidth: 350}}/>
                            <h5 className="card-title mt-2 fw-bold border-bottom pb-3">{menuList.name}</h5>
                            <div className="d-flex flex-column " >
                                <p className="card-text  text-danger fw-bold ">{menuList.price}$</p>

                            </div>
                        </div>
                    </div>
                </div>))}

            </div>
        </div>
    );
};

export default Menu;
