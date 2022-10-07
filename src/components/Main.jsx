import { useQuery } from 'react-query'
import { getMoviesPage } from '../api/axios.js'
import { useState } from 'react'
import PageButton from './PageButton'
import Movie from './Movie'
import { Grid } from '@mui/material'

const Main = () => {
    const [page, setPage] = useState(1)

    const {
        isLoading,
        isError,
        error,
        data: movies,
        isFetching,
        isPreviousData,
    } = useQuery(['/discover/movie', page], () => getMoviesPage(page), {
        keepPreviousData: true
    })

    if (isLoading) return <div className="ldBar"></div>

    if (isError) return <p>Error: {error.message}</p>
    // movies.results.map(movie => console.log(movie))
    
    const content = movies.results.map(movie => <Movie key={movie.id} movie={movie} />)

    const lastPage = () => setPage(page+1)

    const firstPage = () => setPage(page-1)

    const pagesArray = Array(movies.total_pages).fill().map((_, index) => index + 1)

    const nav = (
        <nav className="nav-ex2">
            <button onClick={firstPage} disabled={isPreviousData || page === 1}>&lt;&lt;</button>
            {/* Removed isPreviousData from PageButton to keep button focus color instead */}
            {/* {pagesArray.map(pg => <PageButton key={pg} pg={pg} setPage={setPage} />)} */}
            <button onClick={lastPage} disabled={isPreviousData || page === movies.total_pages}>&gt;&gt;</button>
        </nav>
    )

    return (
        <>
            {nav}
            {isFetching && <div class="ldBar"></div>}
            <Grid container>
            {content}
            </Grid>
        </>
    )
}
export default Main