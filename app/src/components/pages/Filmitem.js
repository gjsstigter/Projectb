import React, { Component } from "react";
import HarryPotterPoster from "../../assets/images/filmitem/harry-potter-poster.jpg";
import { MovieData } from "../cinema/movies/MoviesData";
import videobanner5 from "../../assets/images/home/filmbanner4.jpg";

class Filmitem extends Component {
  state = {
    movie: null,
    loaded: false,
    id: null,
    chosenPlaces: [],
    chosenTime: null,
  };

  GetDetails = () => {
    let parts = window.location.href.split("/");
    let movieId = parts.pop() || parts.pop();

    MovieData(movieId).then((res) =>
      this.setState({
        movie: res.data,
        loaded: true,
        id: movieId,
      })
    );
  };

  choosePlace = (row, place) => {
    let choosen = `${row}-${place}`;

    if (this.state.chosenPlaces.includes(choosen)) {
      let places = this.state.chosenPlaces;
      var index = places.indexOf(choosen);

      if (index !== -1) places.splice(index, 1);

      var placeElement = document.getElementById(choosen);
      placeElement.classList.remove("chosen-place");
    } else {
      let placesOld = this.state.chosenPlaces;

      placesOld.push(choosen);
      this.setState({
        chosenPlaces: placesOld,
      });

      var placeElement = document.getElementById(choosen);
      placeElement.classList.add("chosen-place");
    }

    console.log(this.state.chosenPlaces);
  };

  addTimeStamp = (time) => {
    this.setState({
      chosenTime: time,
    });
  };

  renderRow = (rowNumber) => {
    let places = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    let row = places.map((place) => {
      let body = (
        <div
          className="place"
          key={`${rowNumber}-${place}`}
          id={`${rowNumber}-${place}`}
          onClick={() => {
            this.choosePlace(rowNumber, place);
          }}>
          <p>
            Plaats: {rowNumber}-{place}
          </p>
        </div>
      );

      return body;
    });

    return row;
  };

  renderColumns = (rowNumber) => {
    let rows = ["A", "B", "C", "D", "E", "F", "G", "H"];

    let row = rows.map((row) => {
      let body = <div className="places-row">{this.renderRow(row)}</div>;

      return body;
    });

    return row;
  };

  componentDidMount() {
    this.GetDetails();
  }

  addChairToState = (e) => {
    e.preventDefault();

  }

  render() {
    let { movie, loaded } = this.state;
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
              <div className="time-stamps-wrapper">
                <p>Deze film draait op op de volgende momenten:</p>
                <ul className="play-moments">
                  <li
                    onClick={() => {
                      this.addTimeStamp("10:00");
                    }}
                    className="item">
                    10:00 uur
                  </li>
                  <li
                    onClick={() => {
                      this.addTimeStamp("11:00");
                    }}
                    className="item">
                    11:00 uur
                  </li>
                  <li
                    onClick={() => {
                      this.addTimeStamp("12:00");
                    }}
                    className="item">
                    12:00 uur
                  </li>
                  <li
                    onClick={() => {
                      this.addTimeStamp("13:00");
                    }}
                    className="item">
                    13:00 uur
                  </li>
                </ul>
              </div>
              <div className="screen"/>
              <div className="stoelen-wrapper">
                <div className="places-view">{this.renderColumns()}</div>
              </div>
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
