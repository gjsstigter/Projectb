import React, { Component } from "react";
import HarryPotterPoster from "../../assets/images/filmitem/harry-potter-poster.jpg";
import { MovieData } from "../cinema/movies/MoviesData";

class Filmitem extends Component {
  state = {
    movie: null,
    loaded: false,
    id: null,
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

  componentDidMount() {
    this.GetDetails();
  }

  render() {
    let { movie, loaded } = this.state;
    let body;

    if (loaded) {
      console.log(movie);

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
                    src={HarryPotterPoster}
                  />
                </div>
                <div className="detail">
                  <div className="detail-heading">
                    <div className="genre">{movie.genre}</div>
                    <div className="name">{movie.title}</div>
                    <div className="detail-list">
                      <div className="detail-row">
                        <div className="detail-title">
                          <i className="icon" aria-hidden="true"></i>
                          <span>Productie</span>
                        </div>
                        <div className="detail-content">
                          {movie.release_date}
                        </div>
                      </div>
                      <div className="detail-row">
                        <div className="detail-title">
                          <i className="icon" aria-hidden="true"></i>
                          <span>Tags</span>
                        </div>
                        <div className="detail-content">{movie.keywords}</div>
                      </div>

                      <div className="detail-row">
                        <div className="detail-title">
                          <i className="icon" aria-hidden="true"></i>
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

              <div className="entry-showtime single-cinema">
                <div className="clearfix">
                  <h3 className="info-name amy-title">Kies uw tijdstip</h3>
                </div>
                <div className="showtime">
                  <div className="showtime-item">
                    <div className="st-item">
                      <div className="st-title">
                        <label>Mei 1, 2020</label>
                        <a href="/login" className="buy-ticket" target="_blank">
                          Koop ticket
                        </a>
                      </div>
                      <ul>
                        <li>14:30</li>
                        <li>16:30</li>
                        <li>18:15</li>
                        <li>21:45</li>
                        <li>23:15</li>
                      </ul>
                    </div>
                  </div>
                  <div className="showtime-item">
                    <div className="st-item">
                      <div className="st-title">
                        <label>Mei 2, 2020</label>
                        <a href="/login" className="buy-ticket" target="_blank">
                          Koop ticket
                        </a>
                      </div>
                      <ul>
                        <li>14:30</li>
                        <li>16:30</li>
                        <li>18:15</li>
                        <li>21:45</li>
                        <li>23:15</li>
                      </ul>
                    </div>
                  </div>
                  <div className="showtime-item">
                    <div className="st-item">
                      <div className="st-title">
                        <label>Mei 3, 2020</label>
                        <a href="/login" className="buy-ticket" target="_blank">
                          Koop ticket
                        </a>
                      </div>
                      <ul>
                        <li>14:30</li>
                        <li>16:30</li>
                        <li>18:15</li>
                        <li>21:45</li>
                        <li>23:15</li>
                      </ul>
                    </div>
                  </div>
                  <div className="showtime-item">
                    <div className="st-item">
                      <div className="st-title">
                        <label>Mei 4, 2020</label>
                        <a href="/login" className="buy-ticket" target="_blank">
                          Koop ticket
                        </a>
                      </div>
                      <ul>
                        <li>14:30</li>
                        <li>16:30</li>
                        <li>18:15</li>
                        <li>21:45</li>
                        <li>23:15</li>
                      </ul>
                    </div>
                  </div>
                  <div className="showtime-item">
                    <div className="st-item">
                      <div className="st-title">
                        <label>Mei 5, 2020</label>
                        <a href="/login" className="buy-ticket" target="_blank">
                          Koop ticket
                        </a>
                      </div>
                      <ul>
                        <li>14:30</li>
                        <li>16:30</li>
                        <li>18:15</li>
                        <li>21:45</li>
                        <li>23:15</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
