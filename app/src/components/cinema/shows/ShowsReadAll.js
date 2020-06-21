import Api from "../api/Api";
import {Link} from "react-router-dom";
import React, {Component} from "react";

class showsReadAll extends Component{
    state = {
        show: {},
        loaded: false,
    };

    showList = () => {
        Api(`/shows/` , `GET`)
            .then(res => (this.setState(
                    {
                        show: res.data,
                        loaded: true,
                    }
                )
            ));
    };

    componentDidMount() {
        this.showList();
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
                                <span className="hoofdtitel">Alle Shows</span>
                                <span className="subtitel">Hieronder alle shows</span>
                                <Link to={`/admin/`}>{`<<<`} Ga terug</Link>
                            </div>
                            <table>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>show</th>
                                    <th>Bekijk Show</th>
                                </tr>
                                </thead>
                                <tbody>
                                {show.map((sho) => {
                                    return (<tr key={sho.id}>
                                        <td>{sho.id}</td>
                                        <td>{sho.movie}</td>
                                        <td><Link to={`/admin/show/read/${show.id}`}>Bekijk show</Link></td>
                                    </tr>)
                                })}
                                </tbody>
                            </table>
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

export default showsReadAll;