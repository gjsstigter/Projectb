import React, {Component} from 'react';
import MoviesCreate, {MoviesRead, MoviesReadAll, MoviesUpdate} from "../cinema/movies/MoviesCrud";
import {Link, NavLink} from "react-router-dom";
import ShowsCrud, { ShowsCreate } from '../cinema/movies/ShowsCrud';

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
        case 'shows':
        switch (crud) {
          case 'create':
            body = <ShowsCreate/>;
            break;
        }
        break;
      default:
        return (
          <main>
            <h1>Choose one of the following links..</h1>
            <ul>
              <li><Link to={`/admin/movies/`}>Movies</Link></li>
              <ul>
                <li><Link to={`/admin/movies/create`}>Create</Link></li>
                <li><Link to={`/admin/movies/readall`}>Read all movies</Link></li>
              </ul>
              <li><Link to={`/admin/shows/`}>Shows</Link></li>
              <ul>
                <li><Link to={`/admin/shows/create`}>Create</Link></li>
                <li><Link to={`/admin/shows/readall`}>Read all shows</Link></li>
              </ul>
            </ul>
          </main>
        );
    }

    return(body);
  }
}

export default Admin;
