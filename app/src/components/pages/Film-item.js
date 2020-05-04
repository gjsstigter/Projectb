import React, { Component } from "react";
//import List from "../";

class Home extends Component {
  render() {
    return (
      <main className="filmitem-main">
        <div className="entry-showtime single-cinema">
          <div className="clearfix">
            <h3 className="info-name amy-title">Kies uw tijdstip</h3>
          </div>
          <div className="showtime">
            <div className="showtime-item">
              <div className="st-item">
                <div className="st-title">
                  <label>Mei 1, 2020</label>
                  <a href="#" className="buy-ticket" target="_blank">Koop ticket</a>
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
                  <a href="#" className="buy-ticket" target="_blank">Koop ticket</a>
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
                  <a href="#" className="buy-ticket" target="_blank">Koop ticket</a>
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
                  <a href="#" className="buy-ticket" target="_blank">Koop ticket</a>
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
                  <a href="#" className="buy-ticket" target="_blank">Koop ticket</a>
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
        {/* <List/> */}
      </main>
    );
  }
}

export default Home;
