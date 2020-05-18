import React, {Component} from "react";
import Api from "../api/Api";
import {Link} from "react-router-dom";
import { MoviesData } from "./MoviesData";

class ShowsCrud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: (this.props.id) ? this.props.id.toLowerCase() : `null`,
        };
    }
}

export class ShowsCreate extends ShowsCrud {
    constructor (props) {
        super(props);

        this.state = {
            movies: null,
            loaded: false
        };
    }
    movieList = () => {
        Api(`/movie/`)
            .then(res => (this.setState(
                    {
                        movies: res,
                        loaded: true,
                    }
                )
            ));
    };

    componentDidMount() {
        this.movieList();
    }

    render = () => {

        let {movies, loaded} = this.state;
        let body;

        if (loaded) {
            body = (
                <main>
                    <Link to={`/admin/`}>{`<<<`} Go back</Link>
                    <h2>Create show</h2>
                    <form>
                        <section>
                            <p>
                                <label>
                                    date: 
                                </label>
                                <input type={`date`} name={`date`} noValidate/>
                            </p>
                            <p>
                                <label>
                                    movie: 
                                </label>
                                <select name={`movie`}>
                                    {movies.map((movie) => (
                                        <option value={movie.id}>{movie.title}</option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <label>
                                    Start time: 
                                </label>
                                <input type={`time`} name={`start_time`} noValidate/>
                            </p>
                        </section>
                        <p>
                            <label>
                                end time: 
                            </label>
                            <input type={`time`} name={`end_time`} noValidate/>
                        </p>
                        <p>
                            <input type={`submit`} name={`submit`} onClick={this.submit} value={'Verstuur'}/>
                        </p>
                    </form>
                </main>
            );
        } else {
            body = (<main>
                <h2>Loading...</h2>
            </main>);
        }


        return (body);
    };
}

export default ShowsCrud;