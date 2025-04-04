import React from "react";

//create your first component
const Card = () => {
    return (
            <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-12 p-0 my-4">
                <img src="/src/img/paisaje.jpg"></img>
                <div className="card-body">
                    <h4 className="text-center">Card Tittle</h4>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio quia minima ut doloremque officiis aliquam alias sequi! Assumenda non excepturi eius, necessitatibus voluptate harum quasi deleniti temporibus in vero.</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="bg-primary text-white p-2 rounded border-0 m-2">Find Out More!</button>
                </div>
            </div>
    );
};

export default Card;