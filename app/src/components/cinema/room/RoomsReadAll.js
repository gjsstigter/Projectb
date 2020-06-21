import Api from "../api/Api";
import {Link} from "react-router-dom";
import React, {Component} from "react";

class RoomsReadAll extends Component {
    state = {
        movies: {},
        loaded: false,
    };

    movieList = () => {
        Api(`/rooms/`, `GET`)
            .then(res => (this.setState(
                    {
                        movies: res.data,
                        loaded: true,
                    }
                )
            ));
    };

    componentDidMount() {
        this.movieList();
    }

    render() {
        let {movies, loaded} = this.state;
        let body;

        if (loaded) {
            body = (
                <main className="contact-main">
                    <div className="container">
                        <div className="wrapper">
                            <div style={{backgroundColor: "#fe7900"}} className="contactform-title">
                                <span className="hoofdtitel">Alle films</span>
                                <span className="subtitel">Hieronder alle films</span>
                                <Link to={`/admin/`}>{`<<<`} Ga terug</Link>
                            </div>
                            <div>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Naam</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {movies.map((movie) => {
                                        return (<tr key={movie.id}>
                                            <td>{movie.id}</td>
                                            <td>{movie.name}</td>
                                        </tr>)
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
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

export default RoomsReadAll;