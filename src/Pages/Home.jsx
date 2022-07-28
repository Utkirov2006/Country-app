import React from 'react';
import ItemCountry from '../components/ItemCountry';


const Home = ({ data }) => {

    console.log(data);
    return (
        <>


            {data.map(item => (
                <ItemCountry key={item.alpha2Code} item={item} />
            ))}





        </>
    );
};

export default Home;