import React, { Component } from "react";
import {Link} from "react-router-dom";
import Api from "../api/Api";

class MoviesDelete extends Component {


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

        Api(`/movie/${this.state.id}/delete/`, `DELETE`, form_data)
            .then(res => {
                if (res.status === 200) {
                    this.setState({deleted: true});
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
        if (!this.state.deleted) {
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
                                    <p>{this.state.title}</p>
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
                            <span className="hoofdtitel">Film is verwijderd</span>
                            <span className="subtitel">Via deze formulier kunnen er films toegevoegd worden</span>
                            <Link to={`/admin/`}>{`<<<`} Ga terug</Link>
                        </div>
                    </div>
                </div>
            </main>);
        }
    }
}

export default MoviesDelete;