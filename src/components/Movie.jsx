// import { useQuery } from 'react-query'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import { getMoviesImage } from '../api/axios.js'



const Movie = ({ movie }) => {

    // let imagen=getMoviesImage(movie.backdrop_path)



    return (
        <>
        { 
        <Card sx={{ maxWidth: "100%",height:"320px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.original_title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.original_title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {movie.overview.substring(0,250)+(movie.overview.length>250 ? "...":"")}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        }
        </>
    )
}
export default Movie