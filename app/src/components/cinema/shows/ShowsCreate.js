import React, {Component} from "react";
import Api from "../api/Api";
import {Link} from "react-router-dom";


class ShowsCreate extends Component{

    dataList = async () => {
        await Api(`/movie/`, `GET`)
            .then(res => (this.setState(
                    {
                        movies: res.data,
                    }
                )
            ));
        await Api(`/rooms/`, `GET`)
            .then(res => (this.setState(
                    {
                        rooms: res.data,
                        loaded: true,
                    }
                )
            ));
    };

    state = {
        movies: null,
        loaded: false,
        movie: null,
        end_time: null,
        start_time: null,
        date: null,
        rooms: null,
        room: null,
    };

    componentDidMount() {
        this.dataList();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('time', `${this.state.date} ${this.state.start_time}`);
        form_data.append('movie', this.state.movie);
        form_data.append('room', this.state.room);
        Api(`/shows/create/`, `POST`, form_data)
            .then(res => {
                if (res.status === 201) {
                    this.setState({created: true});
                }
            });
    };

    render = () => {

        let {movies, rooms, loaded} = this.state;
        let body;

        if (loaded) {
            body = (
                <main className="contact-main">
                    <div className="container">
                        <div className="wrapper">
                            <div style={{backgroundColor: "#fe7900"}} className="contactform-title">
                                <span className="hoofdtitel">Creeër een nieuwe Show</span>
                                <span className="subtitel">Via dit formulier kunnen er shows toegevoegd worden</span>
                                <Link to={`/admin/`}>{`<<<`} Ga terug</Link>
                            </div>
                            <form className="contactform" onSubmit={this.handleSubmit}>
                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Datum:</span>
                                    <input className="input" type={`date`} name={`date`} value={this.state.date} onChange={this.handleChange} required/>
                                    <span className="focus-input"></span>
                                </div>
                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Tijdstip:</span>
                                    <input className="input" type={`time`} name={`start_time`} value={this.state.start_time} onChange={this.handleChange} required/>
                                    <span className="focus-input"></span>
                                </div>
                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Film:</span>
                                    {movies.map((movie) => (
                                        <label><input key={movie.id} type={`radio`}
                                                      value={movie.id} name={`movie`}
                                                      onChange={this.handleChange}/>{movie.title}</label>
                                    ))}
                                </div>
                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Film:</span>
                                    {rooms.map((room) => (
                                        <label><input key={room.id} type={`radio`}
                                                      value={room.id} name={`room`}
                                                      onChange={this.handleChange}/>{room.name}</label>
                                    ))}
                                </div>
                                <div className="container-contactformulier-knop">
                                    <input className="contactformulier-knop" type={`submit`} name={`+`} value={`+`}/>
                                </div>
                            </form>
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
    };
}

export default ShowsCreate;