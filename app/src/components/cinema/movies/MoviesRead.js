import Api from "../api/Api";
import {Link} from "react-router-dom";
import React, {Component} from "react";

class MoviesRead extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        movies: {},
        loaded: false,
        id: this.props.id,
    };

    movieList = (id) => {
        Api(`/movie/${id}`, `GET`)
            // .then(res => console.log(res))
            .then(res => (this.setState(
                    {
                        movies: res.data,
                        loaded: true,
                    }
                )
            ));
    };

    componentDidMount() {
        this.movieList(this.state.id);
    }

    render() {
        let {movies, loaded} = this.state;
        let body;

        if (loaded) {
            body = (
                <main>
                    <Link to={`/admin/movies/readall`}>{`<<<`} Go back</Link>
                    <h2>All movies</h2>
                    <section>
                        <h3>{movies.title} - <i>{movies.genre}</i></h3>
                        <img alt={movies.title} src={movies.photo}/>
                        <p>{movies.description}</p>
                        <table>
                            <tbody>
                            <tr>
                                <td>Stars</td>
                                <td>{movies.stars}</td>
                            </tr>
                            <tr>
                                <td>Release date</td>
                                <td>{movies.release_date}</td>
                            </tr>
                            <tr>
                                <td>Studio</td>
                                <td>{movies.studio}</td>
                            </tr>
                            <tr>
                                <td>Actors</td>
                                <td>
                                    <ul>{movies.actors.map((actor) => (
                                        <li>{actor}</li>
                                    ))}</ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Keywords</td>
                                <td>
                                    <ul>{movies.keywords.map((keyword) => (
                                        <li>{keyword}</li>
                                    ))}</ul>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
            );
        } else {
            body = (<main>
                <h2>Loading...</h2>
            </main>);
        }


        return (body);
    }
}

export default MoviesRead;