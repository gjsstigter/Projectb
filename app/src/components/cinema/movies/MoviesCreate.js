import React, { Component } from "react";
import {Link} from "react-router-dom";
import Api from "../api/Api";

class MoviesCreate extends Component {

    state = {
        title: '',
        photo: null,
        photo_name: null,
        description: '',
        release_date: '',
        stars: 2.5,
        genre: '',
        studio: '',
        actors: '',
        keywords: '',
        created: false,
    };

    handleChange = (e) => {
        if(typeof this.state[e.target.name] === 'object') {
            let value = this.state[e.target.name];
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
        console.log(e.target.files)
        this.setState({
            photo: e.target.files[0],
            photo_name: e.target.files[0].name.replace(' ', '-'),
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('photo', this.state.photo, this.state.photo_name);
        form_data.append('title', this.state.title);
        form_data.append('description', this.state.description);
        form_data.append('release_date', this.state.release_date);
        form_data.append('genre', this.state.genre);
        form_data.append('stars', this.state.stars);
        form_data.append('studio', this.state.studio);
        form_data.append('actors', JSON.stringify(this.state.actors));
        form_data.append('keywords', JSON.stringify(this.state.keywords));

        Api(`/movie/create/`, `POST`, form_data)
            .then(res => {
                if (res.status === 201) {
                    this.setState({created: true});
                }
            });
      };

    render() {
        if (!this.state.created) {
            return (
                <main className="contact-main">
                    <div className="container">
                        <div className="wrapper">
                            <div style={{backgroundColor: "#fe7900"}} className="contactform-title">
                                <span className="hoofdtitel">Creeër een nieuwe Film</span>
                                <span className="subtitel">Via deze formulier kunnen er films toegevoegd worden</span>
                                <Link to={`/admin/`}>{`<<<`} Ga terug</Link>
                            </div>
                            <form className="contactform" onSubmit={this.handleSubmit}>
                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Film titel:</span>
                                    <input className="input" type={`text`} name={`title`} value={this.state.title} onChange={this.handleChange} required/>
                                    <span className="focus-input"></span>
                                </div>

                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Film foto:</span>
                                    <input className="file-input" type={`file`} name={`photo`}  accept={`image/png, image/jpeg"`} onChange={this.handleImageChange} required/>
                                    <span className="focus-input"></span>
                                </div>

                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Beschrijving:</span>
                                    <textarea className="input-textarea" name={`description`} onChange={this.handleChange} required>{this.state.description}</textarea>
                                    <span className="focus-input"></span>
                                </div>

                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Datum van uitkomst:</span>
                                    <input className="input" type={`date`} name={`release_date`} value={this.state.release_date} onChange={this.handleChange} required/>
                                    <span className="focus-input"></span>
                                </div>

                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Genre:</span>
                                    <input className="input" type={`text`} name={`genre`} value={this.state.genre} onChange={this.handleChange} required/>
                                    <span className="focus-input"></span>
                                </div>

                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Studio:</span>
                                    <input className="input" type={`text`} name={`studio`} value={this.state.studio} onChange={this.handleChange} required/>
                                    <span className="focus-input"></span>
                                </div>

                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Acteurs:</span>
                                    <input className="input" type={`text`} name={`actors`} value={this.state.actors} onChange={this.handleChange} required/>
                                    <span className="focus-input"></span>
                                </div>

                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Zoekwoorden:</span>
                                    <input className="input" type={`text`} name={`keywords`} value={this.state.keywords} onChange={this.handleChange} required/>
                                    <span className="focus-input"></span>
                                </div>


                                <div className="container-contactformulier-knop">
                                    <input className="contactformulier-knop" type={`submit`} name={`submit`} />
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            );
        } else {

            return (<main className="contact-main">
                <div className="container">
                    <div className="wrapper">
                        <div style={{backgroundColor: "#fe7900"}} className="contactform-title">
                            <span className="hoofdtitel">Film is aangemaakt</span>
                            <span className="subtitel">Via deze formulier kunnen er films toegevoegd worden</span>
                            <Link to={`/admin/`}>{`<<<`} Ga terug</Link>
                        </div>
                    </div>
                </div>
            </main>);
        }
    }
}

export default MoviesCreate;