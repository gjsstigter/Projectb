import React, {Component} from "react";
import Api from "../api/Api";
import {Link} from "react-router-dom";

class MoviesCrud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: (this.props.id) ? this.props.id.toLowerCase() : `null`,
            movies: [{
                "title": "Kaas het vervolg",
                "description": "Lang en zo met hoop tekst in de meuk bla bla",
                "release_date": "2020-04-20",
                "stars": 4.2,
                "genre": "Horror",
                "studio": "Marvel",
                "keywords": ["Kaas", "Eng", "Hounted house"],
                "actors": ["Gordon", "Gerard"]
            }],
            formProgress: 0.00,
            valid: false,
            inputs: {
                title: '',
                stars: '0',
                description: '',
                release_date: '',
                genre: '',
                studio: '',
                keywords: [],
                actors: [],
            },
            errors: {
                title: '',
                stars: '',
                description: '',
                release_date: '',
                genre: '',
                studio: '',
                keywords: '',
                actors: '',
            },
        };
    }
}

export class MoviesCreate extends MoviesCrud {

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let {errors, inputs} = this.state;

        switch (name) {
            case 'title':
                inputs.title = value;
                errors.title =
                    value < 0
                        ? 'Vul de titel in'
                        : '';
                break;
            case 'stars':
                inputs.stars = value;
                errors.stars =
                    value < 0
                        ? 'Kies het aantal sterren'
                        : '';
                break;
            case 'description':
                inputs.description = value;
                errors.description =
                    value < 0
                        ? 'Vul de description aan'
                        : '';
                break;
            case 'release_date':
                inputs.release_date = value;
                errors.release_date =
                    value < 0
                        ? 'Vul een geldige datum in'
                        : '';
                break;
            case 'genre':
                inputs.genre = value;
                errors.genre =
                    value < 0
                        ? 'Vul de genre aan'
                        : '';
                break;
            case 'studio':
                inputs.studio = value;
                errors.studio =
                    value < 0
                        ? 'Vul de studio aan'
                        : '';
                break;
            case 'keywords':
                inputs.keywords[0] = value;
                errors.keywords =
                    value < 0
                        ? 'Vul de keywords aan'
                        : '';
                break;
            case 'actors':
                inputs.actors[0] = value;
                errors.actors =
                    value < 0
                        ? 'Vul de acteurs aan'
                        : '';
        }

        this.setState({errors, [name]: value}, () => {
            console.log(errors)
        });

        this.state.valid = (this.validateForm(errors, inputs));
        this.slider();
    };

    validateForm = (errors, inputs) => {
        let valid = true;
        Object.values(errors).forEach(
            // if we have an error string set valid to false
            (val) => val.length > 0 && (valid = false)
        );

        return valid;
    };

    slider = () => {
        let {inputs} = this.state;
        let inputsLength = Object.keys(inputs).length;
        let filled = 0;

        Object.values(inputs).forEach(
            (val) => val.length > 0 && (filled += 1)
        );

        let progress = filled / inputsLength * 100;
        this.setState({formProgress: progress});
    };

    submit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state.inputs));
        Api(`movie/create/`, `POST`, this.state.inputs)
            .then(res => {
                console.log(res)
            });
    };

    render() {
        let {formProgress, valid} = this.state;
        return (
            <main>
                <Link to={`/admin/`}>{`<<<`} Go back</Link>
                <h2>Create a new movie</h2>
                <progress value={formProgress} max={100}/>
                <form>
                    <section>
                        <p>
                            <label>
                                Title:
                            </label>
                            <input type={`text`} name={`title`} onChange={this.handleChange} noValidate/>
                        </p>
                        <p>
                            <label>
                                Description:
                            </label>
                            <textarea name={`description`} onChange={this.handleChange} noValidate/>
                        </p>
                        <p>
                            <label>
                                Release date:
                            </label>
                            <input type={`date`} name={`release_date`} onChange={this.handleChange} noValidate/>
                        </p>
                    </section>
                    <section>
                        <p>
                            <label>
                                Genre:
                            </label>
                            <input type={`text`} name={`genre`} onChange={this.handleChange} noValidate/>
                        </p>
                        <p>
                            <label>
                                Studio:
                            </label>
                            <input type={`text`} name={`studio`} onChange={this.handleChange} noValidate/>
                        </p>
                        <p>
                            <label>
                                Actors:
                            </label>
                            <input type={`text`} name={`actors`} onChange={this.handleChange} noValidate/>
                        </p>
                    </section>
                    <section>
                        <p>
                            <label>
                                Keywords:
                            </label>
                            <input type={`text`} name={`keywords`} onChange={this.handleChange} noValidate/>
                        </p>
                        <p>
                            <input type={`submit`} name={`submit`} onClick={this.submit} disabled={!valid}
                                   value={(valid) ? 'Verstuur' : 'Controleer de velden'}/>
                        </p>
                    </section>
                </form>
            </main>
        )
    }
}

export class MoviesRead extends MoviesCrud {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            id: (this.props.id) ? this.props.id.toLowerCase() : `null`,
        };
        // console.log(`super` + JSON.stringify());
        // this.setState({id: (this.props.id) ? this.props.id.toLowerCase() : `null`,});
    }

    movieList = () => {
        Api(`/movie/${this.state.id}`)
            // .then(res => console.log(res))
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

export class MoviesUpdate extends MoviesCrud {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            id: (this.props.id) ? this.props.id.toLowerCase() : `null`,
            formProgress: 100.00,
            valid: false,
            inputs: {
                title: '',
                stars: '0',
                description: '',
                release_date: '',
                genre: '',
                studio: '',
                keywords: [],
                actors: [],
            },
            errors: {
                title: '',
                stars: '',
                description: '',
                release_date: '',
                genre: '',
                studio: '',
                keywords: '',
                actors: '',
            },
        };
        // console.log(`super` + JSON.stringify());
        // this.setState({id: (this.props.id) ? this.props.id.toLowerCase() : `null`,});
    }

    movieList = () => {
        Api(`/movie/${this.state.id}`)
            // .then(res => console.log(res))
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

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let {errors, inputs} = this.state;

        switch (name) {
            case 'title':
                inputs.title = value;
                errors.title =
                    value < 0
                        ? 'Vul de titel in'
                        : '';
                break;
            case 'stars':
                inputs.stars = value;
                errors.stars =
                    value < 0
                        ? 'Kies het aantal sterren'
                        : '';
                break;
            case 'description':
                inputs.description = value;
                errors.description =
                    value < 0
                        ? 'Vul de description aan'
                        : '';
                break;
            case 'release_date':
                inputs.release_date = value;
                errors.release_date =
                    value < 0
                        ? 'Vul een geldige datum in'
                        : '';
                break;
            case 'genre':
                inputs.genre = value;
                errors.genre =
                    value < 0
                        ? 'Vul de genre aan'
                        : '';
                break;
            case 'studio':
                inputs.studio = value;
                errors.studio =
                    value < 0
                        ? 'Vul de studio aan'
                        : '';
                break;
            case 'keywords':
                inputs.keywords[0] = value;
                errors.keywords =
                    value < 0
                        ? 'Vul de keywords aan'
                        : '';
                break;
            case 'actors':
                inputs.actors[0] = value;
                errors.actors =
                    value < 0
                        ? 'Vul de acteurs aan'
                        : '';
        }

        this.setState({errors, [name]: value}, () => {
            console.log(errors)
        });

        this.state.valid = (this.validateForm(errors, inputs));
        this.slider();
    };

    validateForm = (errors, inputs) => {
        let valid = true;
        Object.values(errors).forEach(
            // if we have an error string set valid to false
            (val) => val.length > 0 && (valid = false)
        );

        return valid;
    };

    slider = () => {
        let {inputs} = this.state;
        let inputsLength = Object.keys(inputs).length;
        let filled = 0;

        Object.values(inputs).forEach(
            (val) => val.length > 0 && (filled += 1)
        );

        let progress = filled / inputsLength * 100;
        this.setState({formProgress: progress});
    };

    submit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state.inputs));
        Api(`movie/create/`, `POST`, this.state.inputs)
            .then(res => {
                console.log(res)
            });
    };

    render() {
        let {formProgress, valid} = this.state;
        let {movies, loaded} = this.state;
        let body;

        if (loaded) {
            body = (<main>
                <Link to={`/admin/`}>{`<<<`} Go back</Link>
                <h2>Edit the movie: {movies.title}</h2>
                <progress value={formProgress} max={100}/>
                <form>
                    <section>
                        <p>
                            <label>
                                Title:
                            </label>
                            <input type={`text`} name={`title`} onChange={this.handleChange} value={movies.title} noValidate/>
                        </p>
                        <p>
                            <label>
                                Description:
                            </label>
                            <textarea name={`description`} onChange={this.handleChange} noValidate>{movies.description}</textarea>
                        </p>
                        <p>
                            <label>
                                Release date:
                            </label>
                            <input type={`date`} name={`release_date`} onChange={this.handleChange} value={movies.release_date} noValidate/>
                        </p>
                    </section>
                    <section>
                        <p>
                            <label>
                                Genre:
                            </label>
                            <input type={`text`} name={`genre`} onChange={this.handleChange} value={movies.genre[0]} noValidate/>
                        </p>
                        <p>
                            <label>
                                Studio:
                            </label>
                            <input type={`text`} name={`studio`} onChange={this.handleChange} value={movies.studio} noValidate/>
                        </p>
                        <p>
                            <label>
                                Actors:
                            </label>
                            <input type={`text`} name={`actors`} onChange={this.handleChange} value={movies.actors[0]} noValidate/>
                        </p>
                    </section>
                    <section>
                        <p>
                            <label>
                                Keywords:
                            </label>
                            <input type={`text`} name={`keywords`} onChange={this.handleChange} value={movies.keywords[0]} noValidate/>
                        </p>
                        <p>
                            <input type={`submit`} name={`submit`} onClick={this.submit} disabled={!valid}
                                   value={(valid) ? 'Verstuur' : 'Controleer de velden'}/>
                        </p>
                    </section>
                </form>
            </main>);
        } else {
            body = (<main>
                <h2>Loading...</h2>
            </main>);
        }

        return body;
    }
}

export class MoviesReadAll extends MoviesCrud {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
        console.log(`super` + JSON.stringify(props));
        this.setState({});
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

    render() {
        let {movies, loaded} = this.state;
        let body;

        if (loaded) {
            body = (
                <main>
                    <Link to={`/admin/`}>{`<<<`} Go back</Link>
                    <h2>All movies</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {movies.map((movie) => {
                            return (<tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td><Link to={`/admin/movies/read/${movie.id}`}>Read movie</Link></td>
                                <td><Link to={`/admin/movies/update/${movie.id}`}>Edit movie</Link></td>
                                <td><Link to={`/admin/movies/read/${movie.id}`}>Delete movie</Link></td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
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

export default MoviesCreate;
