import React,{useState,useEffect} from 'react'
import api from './api/axiosConfig';
import Layout from './components/Layout';
import { Route,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import './App.css';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
const App = () => {
  const [movies,setMovies]=useState([])

  const getMovies=async()=>{
    try{
      const {data}=await api.get("api/v1/movies");
      console.log("Response Data :",data);
      setMovies([...data])
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getMovies();
  },[])
  return (

    <div>
    <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/Reviews/:movieId" element={<Reviews/>}></Route></Route>
      </Routes>
    </div>
  )
}

export default App
