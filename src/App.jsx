import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { URL } from './API/api';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import HomeItem from './Pages/HomeItem';

const App = () => {


  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  useEffect(() => {
    getData();


  }, [])
  console.log(data);

  async function getData() {

    const request = await fetch(URL)
    const response = await request.json();

    setData(response)

  }

  async function getValue(){
    const req=await fetch("https://restcountries.com/v3.1/name/sweden")
    const res = await request.json();
    setName(res)
  }

  return (
    <>

      <div className="container-fluid">
        <div className="row">

          <BrowserRouter>
            <Navbar />

            <div className="main-container">

              <Routes>

                <Route path="/" element={<Home data={data} />} />
                <Route path="/home" element={<Home data={data} />} />
                <Route path="/home/:id" element={<HomeItem />} />

              </Routes>




            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </>

  );
};

export default App;