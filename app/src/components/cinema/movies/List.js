import React, {Component} from "react";
import Api from "../api/Api";

class List extends Component{
    constructor() {
        super();
        this.state = {
            movies: null,
            loaded: false,
        }
    }

    componentDidMount() {
        let result = Api('/movies/');
        result.then(
            movies => this.setState({
                movies: movies,
                loaded: true,
            })
        );
    }

    movieList = () => {
        let {movies} = this.state;
        let movieList = movies.map((movie) => (
            <fieldset key={movie.id} style={{backgroundImage: `url(${movie.photo})`}}>
                <legend>{movie.title} - {movie.genre}</legend>
                <p>{movie.description}</p>
                <p>{movie.release_date}</p>
            </fieldset>
        ));
        return movieList;
    };

    render() {
        let {loaded} = this.state;

        if(loaded) {
            return (
                <section>
                    {this.movieList()}
                </section>
            );
        } else {
            return (
                <section>
                    <h2>Loading...</h2>
                </section>
            )
        }
    }
}

export default List;