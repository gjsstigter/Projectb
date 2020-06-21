import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import MoviesCreate from "../cinema/movies/MoviesCreate";
import MoviesReadAll from "../cinema/movies/MoviesReadAll";
import MoviesUpdate from "../cinema/movies/MoviesUpdate";
import MoviesRead from "../cinema/movies/MoviesRead";
import Login from "../cinema/user/Login";
import Registreren from "../cinema/user/Registreren";
import MoviesDelete from "../cinema/movies/MoviesDelete";
import ShowsCreate from '../cinema/shows/ShowsCreate';
import ShowReadAll from '../cinema/shows/ShowsReadAll';

class Admin extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match);
        this.state = {
            page: (this.props.match.params.page) ? this.props.match.params.page.toLowerCase() : `null`,
            id: (this.props.match.params.id) ? this.props.match.params.id.toLowerCase() : `null`,
            crud: (this.props.match.params.crud) ? this.props.match.params.crud.toLowerCase() : `null`
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.setState({
                page: (this.props.match.params.page) ? this.props.match.params.page.toLowerCase() : `null`,
                id: (this.props.match.params.id) ? this.props.match.params.id.toLowerCase() : `null`,
                crud: (this.props.match.params.crud) ? this.props.match.params.crud.toLowerCase() : `null`
            });
            console.log(this.props.match);
        }
    }

    render() {
        let {page, id, crud} = this.state;

        let body;
        console.log(this.state);
        switch (page) {
            case `user` :
                switch (crud) {
                    case `inloggen`:
                        body = <Login/>;
                        break;
                    case `registreren`:
                        body = <Registreren/>;
                        break;
                    default:
                        body = <Login/>
                        break;
                }
                break;
            case `movies` :
                switch (crud) {
                    case `create`:
                        body = <MoviesCreate/>;
                        break;
                    case `read`:
                        body = <MoviesRead id={id}/>;
                        break;
                    case `readall`:
                        body = (
                            <main>
                                <MoviesReadAll/>
                            </main>
                        );
                        break;
                    case `update`:
                        body = <MoviesUpdate id={id}/>;
                        break;
                    case `delete`:
                        body = <MoviesDelete id={id}/>
                        break;
                    default:
                        body = (
                            <main className="contact-main">
                                <div className="container">
                                    <div className="wrapper">
                                        <div style={{backgroundColor: "#fe7900"}} className="contactform-title">
                                            <span className="hoofdtitel">Films</span>
                                            <span className="subtitel">Hieronder alle links</span>
                                        </div>
                                        <div>
                                            <h3>Kies 1 van de volgende opties</h3>
                                            <ul>
                                                <li><NavLink to={`/admin/movies/readall/`}>Alle films</NavLink></li>
                                                <li><NavLink to={`/admin/movies/create/`}>Create</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        );
                        break;
                }
                break;
            case 'shows':
                switch (crud) {
                    case 'create':
                        body = <ShowsCreate/>;
                        break;
                    case 'readall':
                        body = <ShowReadAll/>
                        break;
                    default:
                        body = (
                            <main className="contact-main">
                                <div className="container">
                                    <div className="wrapper">
                                        <div style={{backgroundColor: "#fe7900"}} className="contactform-title">
                                            <span className="hoofdtitel">Shows</span>
                                            <span className="subtitel">Hieronder alle links</span>
                                        </div>
                                        <div>
                                            <h3>Kies 1 van de volgende opties</h3>
                                            <ul>
                                                <li><NavLink to={`/admin/shows/readall/`}>Alle shows</NavLink></li>
                                                <li><NavLink to={`/admin/shows/create/`}>Create</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        );
                        break;
                }
                break;
            default:
                return (
                    <main className="contact-main">
                        <div className="container">
                            <div className="wrapper">
                                <div style={{backgroundColor: "#fe7900"}} className="contactform-title">
                                    <span className="hoofdtitel">Admin</span>
                                    <span className="subtitel">Hieronder alle links</span>
                                </div>
                                <div>
                                    <ul>
                                        <li><Link to={`/admin/movies/`}>Movies</Link></li>
                                        <ul>
                                            <li><Link to={`/admin/movies/create`}>Maak nieuwe film</Link></li>
                                            <li><Link to={`/admin/movies/readall`}>Lees alle films</Link></li>
                                        </ul>

                                        <li><Link to={`/admin/shows/`}>Shows</Link></li>
                                        <ul>
                                            <li><Link to={`/admin/shows/create`}>Maak nieuwe show</Link></li>
                                            <li><Link to={`/admin/shows/readall`}>Lees alle shows</Link></li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </main>
                );
        }

        return (body);
    }
}

export default Admin;
