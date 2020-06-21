import Api from "../api/Api";
import {Link} from "react-router-dom";
import React, {Component} from "react";
import Moment from "moment";

class ShowsRead extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        show: {},
        loaded: false,
        id: this.props.id,
    };

    movieList = (id) => {
        Api(`/shows/${id}`, `GET`)
            // .then(res => console.log(res))
            .then(res => (this.setState(
                    {
                        show: res.data,
                        loaded: true,
                    }
                )
            ));
    };

    componentDidMount() {
        this.movieList(this.state.id);
    }

    render() {
        let {show, loaded} = this.state;
        let body;

        if (loaded) {
            body = (
                <main className="contact-main">
                    <div className="container">
                        <div className="wrapper">
                            <div style={{backgroundColor: "#fe7900"}} className="contactform-title">
                                <span className="hoofdtitel">{show.movie}</span>
                                <span className="subtitel">Zaal: {show.room}</span>
                                <span className="subtitel">Tijden: {Moment(show.time).format('d MMM - H:m')}</span>
                                <span className="subtitel">Stoelen: {show.seats.length}</span>
                                <Link to={`/admin/`}>{`<<<`} Ga terug</Link>
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

export default ShowsRead;