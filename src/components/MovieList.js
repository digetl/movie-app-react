import React, {Component} from 'react';
import Movie from "./Movie";

class MovieList extends Component {
    render() {
        const movieNodes = this.props.movies.map(movie => {
          return (
            <Movie name={movie.name} url={movie.url} key={movie.id}>
            </Movie>
         );
        });
    
        return (
        <div className="movie-list">{movieNodes}</div>
        )
    }
}

export default MovieList;