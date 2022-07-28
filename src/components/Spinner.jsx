import React from 'react';

const Spinner = () => {
    return (
        <div className='spinner card mx-auto p-5 align-items-center justify-content-center d-flex'>
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
};

export default Spinner;