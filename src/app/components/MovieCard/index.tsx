import { useState } from 'react';
import { Movie } from '@/types/movie';
import StarRating from '../StarRating';
import './index.scss';

interface Props {
    movie: Movie;
}

export default function MovieCard({ movie }: Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <li className={`movie-card ${isExpanded ? 'expanded' : ''}`}>
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-infos">
                <p className="movie-title">{movie.title}</p>
                <StarRating rating={movie.vote_average} />
                <p className={`movie-description ${isExpanded ? 'expanded' : ''}`}>
                    {isExpanded ? movie.overview : `${movie.overview.slice(0, 100)}...`}
                </p>
                <button className="btn-default" onClick={toggleExpand}>
                    {isExpanded ? 'Ver Menos' : 'Ver Mais'}
                </button>
            </div>
        </li>
    );
}
