import { useQuery } from 'react-query'
import { getMoviesPage } from '../api/axios.js'
import { useState } from 'react'
// import PageButton from './PageButton'
import Movie from './Movie'
import { CircularProgress, Grid, IconButton, Typography } from '@mui/material'
// import '../Css/Main.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Main = () => {
    const [page, setPage] = useState(1)

    const {
        isLoading,
        isError,
        error,
        data: movies,
        isFetching,
    } = useQuery(['/discover/movie', page], () => getMoviesPage(page), {
        keepPreviousData: true
    })

    if (isLoading) return <div className="ldBar"></div>

    if (isError) return <p>Error: {error.message}</p>
    // movies.results.map(movie => console.log(movie))
    
    const content = movies.results.map(movie => <Grid item xs={3}> <Movie key={movie.id} movie={movie} /></Grid>)

    const previuspage = () => setPage(page-1)

    const nextpage = () => setPage(page+1)

    // const pagesArray = Array(movies.total_pages).fill().map((_, index) => index + 1)

    const nav = (
        <Grid container justifyContent="center">
            <Grid>
                {/* <button onClick={nextpage} center disabled={isPreviousData || page === 1}>&lt;&lt;</button> */}
                <IconButton  onClick={nextpage}  color='info' aria-label="add an alarm">
                    <ArrowForwardIcon  fontSize="large" />
                </IconButton>
                {/* Removed isPreviousData from PageButton to keep button focus color instead */}
                {/* {pagesArray.map(pg => <PageButton key={pg} pg={pg} setPage={setPage} />)} */}
                {/* <button onClick={previuspage} disabled={isPreviousData || page === movies.total_pages}>&gt;&gt;</button> */}
                <IconButton onClick={previuspage} disabled={page===1} color='info' aria-label="previus">
                    <ArrowBackIcon  fontSize="large"/>
                </IconButton>
            </Grid>
        </Grid>
    )

    return (
        <>
            <Grid container justifyContent="center"style={{"color":"#00FFFF"}}>
            <Typography variant='h2' >MOVIE LIST</Typography>
            </Grid>
            
            {nav}
            {
            isFetching ? <Grid center> <CircularProgress /></Grid>:
                <>
            <Grid container spacing={1}>
            {content}
            </Grid>
            </>
            }

        </>
    )
}
export default Main