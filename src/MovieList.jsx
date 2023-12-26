import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';


const MovieList = ({Movies, searchTitel , searchRating}) => {
  return (
    <div className='List'>
        {Movies
        .filter(el=>el.Titel.toLowerCase().includes(searchTitel.toLowerCase().trim()) && el.rating >= searchRating)
        .map(obj=> <Link key={obj.id} to={`/Navigate/${obj.id}`}> <MovieCard el={obj} />
        </Link>)}
        
    </div>
  )
}

export default MovieList