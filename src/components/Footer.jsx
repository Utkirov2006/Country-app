import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="col-12 p-4 bg-danger text-center align-items-center d-flex justify-content-center">

                {new Date().getFullYear()}
            </div>
        </>
    );
};

export default Footer;