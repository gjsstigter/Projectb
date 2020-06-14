import React, { Component } from "react";
import HarryPotterPoster from "../../assets/images/filmitem/harry-potter-poster.jpg";

class Filmitem extends Component {
  render() {
    return (
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
                <img alt="harry-potter-poster" width="370" height="548" src={HarryPotterPoster}/>
              </div>
              <div className="detail">
                <div className="detail-heading">
                  <div className="genre">Fantasie, Geschiedenis, Magie</div>
                  <div className="name">Harry Potter and the Deathly Hallows - Part II</div>
                  <div className="detail-list">
                    <div className="detail-row">
                      <div className="detail-title">
                        <i className="icon" aria-hidden="true"></i>
                        <span>Productie</span>
                      </div>
                      <div className="detail-content">7 July 2011 - America</div>
                    </div>
                    <div className="detail-row">
                      <div className="detail-title">
                        <i className="icon" aria-hidden="true"></i>
                        <span>Tijdsduur</span>
                      </div>
                      <div className="detail-content">2 uur, 10 minuten</div>
                    </div>
                    <div className="detail-row">
                      <div className="detail-title">
                        <i className="icon" aria-hidden="true"></i>
                        <span>Talen</span>
                      </div>
                      <div className="detail-content">Nederlands, Engels</div>
                    </div>
                    <div className="detail-row">
                      <div className="detail-title">
                        <i className="icon" aria-hidden="true"></i>
                        <span>Leeftijd</span>
                      </div>
                      <div className="detail-content">16 +</div>
                    </div>
                    <div className="summary">
                      <p>After burying Dobby, Harry Potter asks the goblin Griphook to help Ron Weasley, Hermione Granger and him break into Bellatrix Lestrange's vault at Gringotts bank, suspecting a Horcrux may be there. Griphook agrees in exchange for the Sword of Gryffindor. Wandmaker Ollivander tells Harry that two wands taken from Malfoy Manor belonged to Bellatrix and Draco Malfoy, though Malfoy's has changed its allegiance to Harry.</p>
                      <p>In the vault, Harry discovers the Horcrux is Helga Hufflepuff's cup. He retrieves it, but Griphook snatches the sword and abandons the trio, leaving them cornered by security. The three release the dragon guardian and flee on its back. Harry sees a vision of Lord Voldemort killing goblins including Griphook, and learns Voldemort is aware of the theft. Harry also realises there is a Horcrux at Hogwarts somehow connected to Rowena Ravenclaw. The trio apparate into Hogsmeade, where Aberforth Dumbledore reluctantly instructs the portrait of his deceased younger sister Ariana to fetch Neville Longbottom, who leads the trio through a secret passageway into Hogwarts.</p>
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
                      <a href="/login" className="buy-ticket" target="_blank">Koop ticket</a>
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
                      <a href="/login" className="buy-ticket" target="_blank">Koop ticket</a>
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
                      <a href="/login" className="buy-ticket" target="_blank">Koop ticket</a>
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
                      <a href="/login" className="buy-ticket" target="_blank">Koop ticket</a>
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
                      <a href="/login" className="buy-ticket" target="_blank">Koop ticket</a>
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
  }
}

export default Filmitem;
