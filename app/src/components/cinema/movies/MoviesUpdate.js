import React, { Component } from "react";
import {Link} from "react-router-dom";
import Api from "../api/Api";

class MoviesUpdate extends Component {

    state = {
        title: '',
        photo: null,
        description: '',
        release_date: '',
        genre: '',
        studio: '',
        actors: '',
        keywords: '',
        id: this.props.id,
        updated: false,
    };

    handleChange = (e) => {
        if (typeof this.state[e.target.name] === 'object') {
            let value = [''];
            value[0] = e.target.value;
            this.setState({
                [e.target.name]: value
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    };

    handleImageChange = (e) => {
        console.log(e.target.files[0])
        this.setState({
            photo: e.target.files[0]
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('photo', this.state.photo);
        form_data.append('title', this.state.title);
        form_data.append('description', this.state.description);
        form_data.append('release_date', this.state.release_date);
        form_data.append('genre', this.state.genre);
        form_data.append('studio', this.state.studio);
        form_data.append('actors', this.state.actors);
        form_data.append('keywords', this.state.keywords);

        Api(`/movie/${this.state.id}/update/`, `PATCH`, form_data)
            .then(res => {
                if (res.status === 200) {
                    this.setState({updated: true});
                }
            });
    };

    movieList = () => {
        Api(`/movie/`, `GET`)
            // .then(res => console.log(res))
            .then(res => (this.setState(
                    {
                        title: res.data[0].title,
                        photo_old: res.data[0].photo_id,
                        description: res.data[0].description,
                        release_date: res.data[0].release_date,
                        genre: res.data[0].genre,
                        studio: res.data[0].studio,
                        actors: res.data[0].actors,
                        keywords: res.data[0].keywords,
                        loaded: true,
                    }
                )
            ));
    };

    componentDidMount() {
        this.movieList();
    }

    render() {

        if (!this.state.updated) {
            return (
                <main>
                    <Link to={`/admin/`}>{`<<<`} Ga terug</Link>
                    <h2>Update de film</h2>
                    <form onSubmit={this.handleSubmit}>
                        <section>
                            <p>
                                <label>
                                    Title:
                                </label>
                                <input type={`text`} name={`title`} value={this.state.title}
                                       onChange={this.handleChange} required/>
                            </p>
                            <p>
                                <img src={`http://backend.projectb.vdmi/api/files/${this.state.photo_old}/`}
                                     alt={this.state.photo_old}/>
                                <label>
                                    Photo:
                                </label>
                                <input type={`file`} name={`photo`} accept={`image/png, image/jpeg"`}
                                       onChange={this.handleImageChange} required/>
                            </p>
                            <p>
                                <label>
                                    Description:
                                </label>
                                <textarea name={`description`} onChange={this.handleChange}
                                          value={this.state.description} required>{this.state.description}</textarea>
                            </p>
                            <p>
                                <label>
                                    Release date:
                                </label>
                                <input type={`date`} name={`release_date`} value={this.state.release_date}
                                       onChange={this.handleChange} required/>
                            </p>
                        </section>
                        <section>
                            <p>
                                <label>
                                    Genre:
                                </label>
                                <input type={`text`} name={`genre`} value={this.state.genre}
                                       onChange={this.handleChange} required/>
                            </p>
                            <p>
                                <label>
                                    Studio:
                                </label>
                                <input type={`text`} name={`studio`} value={this.state.studio}
                                       onChange={this.handleChange} required/>
                            </p>
                            <p>
                                <label>
                                    Actors:
                                </label>
                                <input type={`text`} name={`actors`} value={this.state.actors}
                                       onChange={this.handleChange} required/>
                            </p>
                        </section>
                        <section>
                            <p>
                                <label>
                                    Keywords:
                                </label>
                                <input type={`text`} name={`keywords`} value={this.state.keywords}
                                       onChange={this.handleChange} required/>
                            </p>
                            <p>
                                <input type={`submit`} name={`submit`}/>
                            </p>
                        </section>
                    </form>
                </main>
            );
        } else {
            return (
                <main>
                    <Link to={`/admin/`}>{`<<<`} Ga terug</Link>
                    <h2>Update de film</h2>
                    <p>De film is succesvol geupdate</p>
                </main>
            );
        }
    }
}

export default MoviesUpdate;