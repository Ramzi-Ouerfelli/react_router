import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';

const MovieCard = ({el}) => {
    const { Titel, Discription, rating, Url } = el ;
  return (
    <Card style={{}} sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
        component="img"
        image={Url}
        style={{width:"21.9rem" , height:"25rem"}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <strong>{Titel}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discription:{Discription}
            <br/>
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  );

};

export default MovieCard;