import React, {Component} from 'react';
import MoviesCreate, {MoviesRead} from "../cinema/movies/MoviesCrud";
import {Link, NavLink} from "react-router-dom";

class Admin extends Component{
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
    let {page, crud} = this.props.match.params;
    if(prevProps !== this.props) {
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
    switch(page) {
      case `movies`:
        switch (crud) {
          case `create`:
            body = <MoviesCreate/>;
            break;
          case `read`:
            body = <MoviesRead id={id}/>;
            break;
          case `readAll`:
            body = (
              <main>
                <h1>readAll</h1>
              </main>
            );
            break;
          case `update`:
            body = (
              <main>
                <h1>update {id}</h1>
              </main>
            );
            break;
          default:
            body = (
              <main>
                <h3>Kies 1 van de volgende opties</h3>
                <ul>
                  <li><NavLink to={`/admin/movies/1/read/`}>Read</NavLink></li>
                  <li>Create</li>
                  <li>Update</li>
                </ul>
              </main>
            );
            break;
        }
        break;
      default:
        return (
          <main>
            <h1>Welke stappen wilt u graag doen...</h1>
          </main>
        );
    }

    return(body);
  }
}

export default Admin;
