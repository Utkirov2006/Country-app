import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemCountry = ({ item }) => {
    const { id } = useParams();

    return (
        <>

            <Link to={`/home/${item.name}`} className="card count p-4 bg-light mx-auto align-items-center d-flex justify-content-around">


                <img className='rasm' src={item.flags.svg} alt="ok" />
                <span>{item.name}</span>

            </Link>
        </>
    );
};

export default ItemCountry;