import React from 'react';
import './App.css';
import { useState ,useEffect } from 'react';
import buscadorIcono from './buscador.svg';
import TarjetaPelicula from './TarjetaPelicula';

const API_URL = 'http://www.omdbapi.com?apikey=991d53a'

const App = () => {
    const [movies, setMovies]= useState([])
    const [busquedaParam, setBusquedaParam] = useState('')
    const buscadorCine = async (titulo) => {
        const response = await fetch(`${API_URL}&s=${titulo}`)
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        buscadorCine('Blue Beetle');
    },[])
    return (
        <div className='app'>
           <h1>Joder, en efecto es Cine</h1> 
           <div className='busqueda'>
                <input placeholder='Buscar pelicula . . .'
                value={busquedaParam}
                onChange = {(e) => setBusquedaParam(e.target.value)}
                />
                <img
                src={buscadorIcono}
                alt = 'Buscador'
                onClick={() => buscadorCine(busquedaParam)}
                />
           </div>
           {movies?.length >0?(
            <div className='contenedor'>
                {
                    movies.map((movie)=>(
                        <TarjetaPelicula movie1={movie}/>
                    ))
                }
                </div>
           ): (
                <div className='empty'>
                    <h2>No hay sistema para esta pelicula</h2>
                </div>
           )
           }
            
               
                

            </div>
        
    )
}

export default App