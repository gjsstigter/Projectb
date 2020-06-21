import React, { Component } from "react";
import HarryPotterPoster from "../../assets/images/filmitem/harry-potter-poster.jpg";
import { MovieData } from "../cinema/movies/MoviesData";
import videobanner5 from "../../assets/images/home/filmbanner4.jpg";
import {ShowsData , ShowData} from "../cinema/shows/ShowsData";
import Moment from "moment";
import Api from "../cinema/api/Api";

class Filmitem extends Component {
  constructor(props) {
    super(props);

    this.loadRoom = this.loadRoom.bind(this);
    this.pickChair = this.pickChair.bind(this);
    this.printpage = this.printpage.bind(this);
  }

  state = {
    id: this.props.match.params.id,
    created: null,
    movie: null,
    shows: null,
    room: null,
    loaded: false,
    chosenPlaces: [],
    chosenTime: null,
    naam: '',
    email: '',
    selectedChairs: [],
    fullDataChairs: [],
    boughtChairs: null,
  };

  GetDetails = async () => {
    let movieId = this.state.id;

    await MovieData(movieId).then((res) => {
      this.setState({
        movie: res.data,
        id: movieId,
      })
      return true}
    );

    await ShowsData().then((res) => {
        this.setState({
          shows: res.data,
          loaded: true,
          id: movieId,
        })
      return true}
    );

    let show = this.state.shows.filter((value, index, arr) => value.movie === this.state.movie.title);
    this.setState({shows: show});
  };

  loadRoom = async (id) => {
    await ShowData(id).then(
        (res) => {
          this.setState({room: res.data});
        }
    )

    let available = await this.state.room.seats.filter((value, index, arr) => !value.available);
    this.setState({ boughtChairs: available });
  }

  printpage = () => {
    window.print();
  }

  seats = () => {
    if(!this.state.shows.length){
      return (
        <p>Er zijn helaas geen shows meer beschikbaar</p>
      );
    } else if (!this.state.room) {
      return (
          <p>Selecteer 1 van de tijden hierboven</p>
      );
    } else {
      let {seats} = this.state.room;
      let body;
      let form;
      if(!this.state.room.seats.length === 0) {
        body = (<p>Helaas zijn er geen stoelen meer beschikbaar!</p>);
      } else {
        body = (seats.map((seat) => (<div key={seat.id} className={`place ${(seat.available)? ` available` : ` chosen-place`} ${(this.state.selectedChairs.includes(seat.id) ? ` chosen-place` : ` available`)}`} style={{gridColumn : `${seat.number} / ${seat.number}`, gridRow: `${seat.row} / ${seat.row}`}} onClick={(e) => this.pickChair(this, seat.id)}>{seat.row} - {seat.number}</div>)));
        form = (<div>
            <div className="wrap-input valideren-input" data-validate="Vereist">
                <span className="label-input">Naam:</span>
                <input className="input" type={`naam`} name={`naam`}
                       value={this.state.naam} onChange={this.handleChange} required/>
            </div>
              <div className="wrap-input valideren-input" data-validate="Vereist">
                  <span className="label-input">Email:</span>
                  <input className="input" type={`email`} name={`email`}
                         value={this.state.email} onChange={this.handleChange} required/>
              </div>
        </div>)
      }
        return(<div><div className={`stoelen-wrapper`}>{body}</div>{form}<div className="container-contactformulier-knop"><input type={`submit`}  className="contactformulier-knop" onClick={(e) => this.reserv()}/></div></div>);
    }
  }

  pickChair = (e ,id) => {
    let { selectedChairs, boughtChairs } = this.state;
    if(!selectedChairs.includes(id) && boughtChairs.filter((value, index, arr) => value.id === id)) {
      selectedChairs.push(id);
    }
    else {
      selectedChairs.map((chair, index) => {
        if (chair === id) {
          selectedChairs = selectedChairs.filter((value, index, arr) => value !== id);
        }
      })
    }
    let chairs = this.state.fullDataChairs;
    chairs.push(this.state.room.seats.filter((value, index, arr) => value.id === id));
    this.setState({selectedChairs: selectedChairs, fullDataChairs: chairs});
  }

  reserv = (e) => {
    let form_data = {
      'seats': this.state.selectedChairs,
    }
    if (this.state.selectedChairs !== 0) {
        Api(`/shows/${this.state.room.id}/reserve/`, `RES`, form_data).then((res) => {
                if (res.status === 200) {
                    this.setState({created: true});
                }
            }
        )
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  componentDidMount() {
    this.GetDetails();
  }

  render() {
    let { movie, loaded, shows, created} = this.state;
    let body;

    let movieImage;

    if (loaded) {
      if (movie.photo) {
        movieImage = `http://backend.projectb.vdmi/api/files/${movie.photo}/`;
      } else {
        movieImage = videobanner5;
      }

      body = (
        <main className="filmitem-main">
          <div className="row">
            <div className="container">
              <div className="entry-showtime single-cinema">
                <div className="clearfix">
                  <h3 className="info-name amy-title">Filmbeschrijving</h3>
                </div>
              </div>
              <div className="movie-box">
                <div className="poster">
                  <img
                    alt="harry-potter-poster"
                    width="370"
                    height="548"
                    src={movieImage}
                  />
                </div>
                <div className="detail">
                  <div className="detail-heading">
                    <div className="genre">{movie.genre}</div>
                    <div className="name">{movie.title}</div>
                    <div className="detail-list">
                      <div className="detail-row">
                        <div className="detail-title">
                          <i className="icon" aria-hidden="true"/>
                          <span>Productie</span>
                        </div>
                        <div className="detail-content">
                          {movie.release_date}
                        </div>
                      </div>
                      <div className="detail-row">
                        <div className="detail-title">
                          <i className="icon" aria-hidden="true"/>
                          <span>Tags</span>
                        </div>
                        <div className="detail-content">{movie.keywords}</div>
                      </div>

                      <div className="detail-row">
                        <div className="detail-title">
                          <i className="icon" aria-hidden="true"/>
                          <span>Rating</span>
                        </div>
                        <div className="detail-content">
                          {movie.stars} sterren
                        </div>
                      </div>
                      <div className="summary">
                        <p>{movie.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <main className={`time-stamps-wrapper`}>
                <p>Deze film draait op op de volgende momenten:</p>
                <section>
                  <ul className={`play-moments`}>
                    {shows.map((show) => (
                      <li key={show.id} onClick={(e) => this.loadRoom(show.id)} className={`item`}></li>
                    ))}
                  </ul>
                </section>
                <section>
                  { (created) ? (<div>
                    <table>
                      <tbody><tr>
                        <td>Naam:</td>
                        <td>{this.state.naam}</td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td>{this.state.email}</td>
                      </tr>
                      <tr>
                        <td>Gereserveerd:</td>
                        <td>{this.state.fullDataChairs.sort().map((chair) => (
                          <p key={chair[0].id}>{chair[0].row} - {chair[0].number}</p>
                        ))}</td>
                      </tr>
                      <tr>Print nu je kaartje uit <input type={`submit`} value={`Print`} onClick={this.printpage}/></tr>
                      </tbody>
                    </table>
                  </div>) : this.seats() }
                </section>
              </main>
            </div>
          </div>
        </main>
      );
    } else {
      body = <h1>Loading...</h1>;
    }

    return body;
  }
}

export default Filmitem;
