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
                <main className="contact-main">
                    <div className="container">
                        <div className="wrapper">
                            <div style={{backgroundColor: "#fe7900"}} className="contactform-title">
                                <span className="hoofdtitel">{movies.title}</span>
                                <span className="subtitel">{movies.genre}</span>
                                <span className="subtitel">{movies.description}</span>
                                <Link to={`/admin/`}>{`<<<`} Ga terug</Link>
                            </div>
                            <div>
                                <table style={{width: "100%"}}>
                                    <tbody>
                                    <tr>
                                        <td>Stars</td>
                                        <td>{movies.stars}</td>
                                        <td rowSpan={5}><img alt={movies.title} src={`http://backend.projectb.vdmi/api/files/` + movies.photo}/></td>
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
                                        <td>{movies.actors}</td>
                                    </tr>
                                    <tr>
                                        <td>Keywords</td>
                                        <td>{movies.keywords}</td>
                                    </tr>
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

export default MoviesRead;