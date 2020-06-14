import React, { Component } from "react";
import { MoviesData } from "../cinema/movies/MoviesData";
import Film from "../body/Film";

class Films extends Component {
  state = {
    movies: {},
    loaded: false,
  };

  movieList = () => {
    MoviesData().then((res) =>
      this.setState({
        movies: res.data,
        loaded: true,
      })
    );
  };

  componentDidMount() {
    this.movieList();
  }

  renderFilms = () => {
    let { movies, loaded } = this.state;

    if (loaded) {
      // console.log(movies);

      movies.map((movie) => {
        console.log(movie);
      });
    }
  };

  render = () => {
    let { movies, loaded } = this.state;
    let rendered;

    if (loaded) {
      rendered = movies.map((movie) => {
        return (
          <Film
            title={movie.title}
            description={movie.description}
            actors={movie.actors}
            releaseDate={movie.release_date}
            stars={movie.stars}
            photo={movie.photo}
            genre={movie.genre}
            studio={movie.studio}
            keywords={movie.keywords}
            id={movie.id}
            key={movie.id}
          />
        );
      });
    } else {
      rendered = <h1>Loading...</h1>;
    }

    return <main className="film-list-wrapper">{rendered}</main>;
  };
}

export default Films;
