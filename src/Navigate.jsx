import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const MovieDetail = ({ movies }) => {
  // const { Titel, Discription, trailerLink } = Navigate;
  const {id} = useParams();
  const findMovie = movies.find((movie)=>movie.id == id)  
  //console.log(findMovie)

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    }}
    const onReady = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  

  return (
    <div>
      <h3><strong>Discription</strong></h3>
      <p>{findMovie.Discription}</p>
      <h3><strong>Trailer</strong></h3>
      <YouTube 
      videoId={findMovie.trailer_ID}  
      opts={opts} 
      onReady={onReady} />
    </div>
  );
};

export default MovieDetail;