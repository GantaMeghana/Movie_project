'use client'
import React, { useState } from 'react';
import Header from './header.js';
import './globel.css';
import {movies} from "./data.js";
import Movie_row from './movie_row.js';
export default function App() {
    const [item,setItem]=useState(movies);
    function handleDelete(id){
        const newMovie=item.filter((film)=>id!==film.id);
        setItem(newMovie);
        }

    return (
        <>
            <Header/>
            {item.map((movie)=>
                <Movie_row
                    Name={movie.Name}
                    Description={movie. Description}
                    image={movie.imageurl}
                    gener={movie.genre}
                    year={movie.year}
                    duration={movie.duration}
                    onDelete={()=>handleDelete(movie.id)}
                  />
             )};
        </>
    )
}
