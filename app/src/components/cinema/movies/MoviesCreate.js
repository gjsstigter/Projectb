import React, { Component } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

class MoviesCreate extends Component {

    state = {
        title: '',
        photo: null,
        description: '',
        release_date: '',
        genre: '',
        studio: '',
        actors: [''],
        keywords: ['']
    };

    handleChange = (e) => {
        if(typeof this.state[e.target.name] === 'object') {
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

        let url = 'http://proxy.projectb.vdmi/http://172.28.0.4/api/movie/create/';
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err))
      };

    render() {
        return (
            <main>
                <Link to={`/admin/`}>{`<<<`} Go back</Link>
                <h2>Create a new movie</h2>
                <form onSubmit={this.handleSubmit}>
                    <section>
                        <p>
                            <label>
                                Title:
                            </label>
                            <input type={`text`} name={`title`} value={this.state.title} onChange={this.handleChange} required/>
                        </p>
                        <p>
                            <label>
                                Photo:
                            </label>
                            <input type={`file`} name={`photo`}  accept={`image/png, image/jpeg"`} onChange={this.handleImageChange} required/>
                        </p>
                        <p>
                            <label>
                                Description:
                            </label>
                            <textarea name={`description`} onChange={this.handleChange} required>{this.state.description}</textarea>
                        </p>
                        <p>
                            <label>
                                Release date:
                            </label>
                            <input type={`date`} name={`release_date`} value={this.state.release_date} onChange={this.handleChange} required/>
                        </p>
                    </section>
                    <section>
                        <p>
                            <label>
                                Genre:
                            </label>
                            <input type={`text`} name={`genre`} value={this.state.genre} onChange={this.handleChange} required/>
                        </p>
                        <p>
                            <label>
                                Studio:
                            </label>
                            <input type={`text`} name={`studio`} value={this.state.studio} onChange={this.handleChange} required/>
                        </p>
                        <p>
                            <label>
                                Actors:
                            </label>
                            <input type={`text`} name={`actors`} value={this.state.actors[0]} onChange={this.handleChange} required/>
                        </p>
                    </section>
                    <section>
                        <p>
                            <label>
                                Keywords:
                            </label>
                            <input type={`text`} name={`keywords`} value={this.state.keywords[0]} onChange={this.handleChange} required/>
                        </p>
                        <p>
                            <input type={`submit`} name={`submit`} />
                        </p>
                    </section>
                </form>
            </main>
        )
    }
}

export default MoviesCreate;