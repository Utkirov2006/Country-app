import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const HomeItem = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [count, setCount] = useState([])

    useEffect(() => {
        getCount()
    }, [id])

    async function getCount() {

        const request = await fetch(`https://restcountries.com/v3.1/name/${id}`)
        const result = await request.json();

        setCount(result)

    }

    const obj = count[0];
    console.log(obj);


    return (
        <>
            {
                (count.length > 0) ?



                    <>
                        <div className="card w-75 p-3 mx-auto bg-light" >
                            <div className="row">
                                <div className="col-7 d-flex ">
                                    <img style={{width:"100%"}} src={obj.flags.png} className="flag mx-auto" />
                                </div>

                                <div className="col">
                                    <p style={{ color: "blue", fontWeight: "bold" }}>Ismi:{obj.name.common}</p>
                                    <p>Mintaqa:{obj.region}</p>
                                    <p>Mintaqa joyi:{obj.subregion}</p>
                                    <p>Aholisi:  {obj.population}</p>
                                    <p>Maydoni:  {obj.area}</p>
                                    <p>Joylashuv koordinatasi:  {obj.latlng}</p>
                                    <p>Vaqt zonalari:  {obj.timezones}</p>
                                    <p>Tel raqam:  {obj.idd.root}</p>
                                    <p>Poytaxti:  {obj.capital}</p>
                                    <p>Poytaxt mintaqasi:{obj.capitalInfo.latlng}</p>
                                    <p>Haftaning boshlanishi:  {obj.startOfWeek}</p>

                                    <div className="btn btn-danger" onClick={() => navigate(-1)}>Orqaga qaytish</div>
                                </div>
                            </div>
                        </div>
                    </>
                    :

                    <>
                        <Spinner />
                    </>
            }
        </>

    );
};

export default HomeItem;