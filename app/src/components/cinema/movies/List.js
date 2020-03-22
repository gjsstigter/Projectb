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
            <div key={movie.id}>
                <h2>{movie.title} - {movie.genre}</h2>
            </div>
        ));
        return movieList;
    };

    render() {
        let {loaded} = this.state;

        if(loaded) {
            return (
                <section>
                    {this.movieList()}
                    {/*{movies.stringify()}*/}
                </section>
            );
        } else {
            return (
                <section>
                    <h2>Data is getting loaded</h2>
                </section>
            )
        }
    }
}

export default List;