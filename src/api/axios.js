import React from 'react';
import axios from "axios"
import {KEY} from '../helper'

export const axiosMain = axios.create({
    baseURL: `https://api.themoviedb.org/3`
})
// export const axiosImage = axios.create({
//     baseURL: 'https://image.tmdb.org/t/p/w500'
// })

export const getMoviesPage = async (pageParam = 1) => {
    const response = await axiosMain.get(`/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=${pageParam}`)
    return response.data
}
