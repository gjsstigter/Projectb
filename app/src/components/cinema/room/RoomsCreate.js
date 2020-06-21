import React, {Component} from "react";
import Api from "../api/Api";
import {Link} from "react-router-dom";


class RoomsCreate extends Component{

    state = {
        seats: null,
        rows: null,
        name: '',
        created: false,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        let form_data = {
            rows: this.state.rows,
            name: this.state.name,
            seats: this.state.seats
        };
        await Api(`/rooms/create/`, `RES`, form_data)
            .then(res => {
                if (res.status === 201) {
                    this.setState({created: true});
                }
            });
    };

    render = () => {

        let {created} = this.state;
        let body;

        if (!created) {
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
                                    <span className="label-input">Naam:</span>
                                    <input className="input" type={`text`} name={`name`} value={this.state.name} onChange={this.handleChange} required/>
                                    <span className="focus-input"></span>
                                </div>
                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Stoelen per rij:</span>
                                    <input className="input" type={`number`} name={`seats`} value={this.state.seats} onChange={this.handleChange} required/>
                                    <span className="focus-input"></span>
                                </div>
                                <div className="wrap-input valideren-input" data-validate="Vereist">
                                    <span className="label-input">Aantal rijen:</span>
                                    <input className="input" type={`number`} name={`rows`} value={this.state.rows} onChange={this.handleChange} required/>
                                    <span className="focus-input"></span>
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
            body = (<main className="contact-main">
                <div className="container">
                    <div className="wrapper">
                        <div style={{backgroundColor: "#fe7900"}} className="contactform-title">
                            <span className="hoofdtitel">Zaal is aangemaakt</span>
                            <span className="subtitel">Via deze formulier kunnen er zalen toegevoegd worden</span>
                            <Link to={`/admin/`}>{`<<<`} Ga terug</Link>
                        </div>
                    </div>
                </div>
            </main>);
        }


        return (body);
    };
}
export default RoomsCreate;