'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Movie } from '@/types/movie';
import MovieCard from '../MovieCard';
import './index.scss';

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/discover/movie', {
                params: { api_key: 'a9ade7349bb6332be3da799406ba0a10', language: 'pt-BR' },
            })
            .then((response) => setMovies(response.data.results));
    }, []);

    return (
        <div>
            <h1 className="page-title">Filmes</h1>
            <ul className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    );
}
