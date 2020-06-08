import React, { Component } from "react";
//import List from "../";
import videobanner1 from "../../assets/images/home/filmbanner1.jpg";
import videobanner2 from "../../assets/images/home/filmbanner2.jpg";
import videobanner3 from "../../assets/images/home/filmbanner3.jpg";
import videobanner4 from "../../assets/images/home/filmbanner4.jpg";
import videobanner5 from "../../assets/images/home/filmbanner5.jpg";
import {Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <main className="region-main">
        <ul className="menu-category">
            <li className="menu-item">
                <Link to={`#actueel`}>Actueel</Link>
            </li>
            <li className="menu-item">
                <Link to={`#verwacht`}>Verwacht</Link>
            </li>
            <li className="menu-item">
                <Link to={`#binnekort`}>Binnekort</Link>
            </li>
        </ul>
        <section id="films">
            <div id="actueel">
            <div className="row filmscontent">
                <div className="column-15 grid-item">
                    <article className="film-item" onclick={console.log('hoi')}>
                        <div className="film-thumb">
                            <img alt="videobanner-1" width="204" height="350" src={videobanner1}/>
                            <div className="right-info">
                                <span className="pg">G</span>
                            </div>
                            <span className="rate">4</span>
                            <div className="film-content">
                                <h4 className="film-title">Ghost Rider</h4>
                                <div className="film-date">Release: August 3, 2017</div>
                                <div className="film-knoppen">
                                    <Link to={`https://player.vimeo.com/video/38156752`}><i aria-hidden="true" className="fa"></i>Trailer</Link>
                                    <Link to={`http://demo.amytheme.com/movie/demo/single-cinema/amy_movie/star-trek-beyond/`}><i
                                        aria-hidden="true" className="fa"></i>Detail</Link>
                                </div>
                            </div>
                            <div className="pic-caption left-info">
                                <h4 className="film-title">
                                    <Link to={`#`}>Ghost Rider</Link>
                                </h4>
                                <span className="pg">G</span>
                                <div className="desc-mv"><p><span>Uitgebracht: </span>Augustus 3, 2020</p>
                                    <p>
                                    <span>Genre: </span>
                                    <Link to={`#`}>Kinderen</Link>,
                                    <Link to={`#`}>Drama</Link>,
                                    <Link to={`#`}>Magie</Link>,
                                    <Link to={`#`}>Sci-fi</Link>
                                    </p>
                                    <p><span>Duur: </span>01 uur 20 minuten</p><p><span>Taal: </span>Engels</p>
                                </div>
                                <span className="rate">4</span>
                                <div className="entry-button">
                                    <Link to={`https://player.vimeo.com/video/38156752`} className="fancybox.iframe amy-fancybox"><i
                                    aria-hidden="true" className="fa"></i>Trailer</Link>
                                    <Link to={`http://demo.amytheme.com/movie/demo/single-cinema/amy_movie/star-trek-beyond/`}><i
                                    aria-hidden="true" className="fa"></i>Detail</Link>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="column-15 grid-item">
                    <article className="film-item" onclick={console.log('hoi')}>
                        <div className="film-thumb">
                            <img alt="videobanner-2" width="204" height="350" src={videobanner2}/>
                            <div className="right-info">
                                <span className="pg">G</span>
                            </div>
                            <span className="rate">4</span>
                            <div className="film-content">
                                <h4 className="film-title">Fiddler</h4>
                                <div className="film-date">Release: August 3, 2017</div>
                                <div className="film-knoppen">
                                    <Link to={`https://player.vimeo.com/video/38156752`}><i aria-hidden="true" className="fa"></i>Trailer</Link>
                                    <Link to={`http://demo.amytheme.com/movie/demo/single-cinema/amy_movie/star-trek-beyond/`}><i
                                        aria-hidden="true" className="fa"></i>Detail</Link>
                                </div>
                            </div>
                            <div className="pic-caption left-info">
                                <h4 className="film-title">
                                    <Link to={`#`}>Fiddler</Link>
                                </h4>
                                <span className="pg">G</span>
                                <div className="desc-mv"><p><span>Uitgebracht: </span>Augustus 3, 2020</p>
                                    <p>
                                        <span>Genre: </span>
                                        <Link to={`#`}>Kinderen</Link>,
                                        <Link to={`#`}>Drama</Link>,
                                        <Link to={`#`}>Magie</Link>,
                                        <Link to={`#`}>Sci-fi</Link>
                                    </p>
                                    <p><span>Duur: </span>01 uur 20 minuten</p><p><span>Taal: </span>Engels</p>
                                </div>
                                <span className="rate">4</span>
                                <div className="entry-button">
                                    <Link to={`https://player.vimeo.com/video/38156752" className="fancybox.iframe amy-fancybox`}><i
                                        aria-hidden="true" className="fa"></i>Trailer</Link>
                                    <Link to={`http://demo.amytheme.com/movie/demo/single-cinema/amy_movie/star-trek-beyond/`}><i
                                        aria-hidden="true" className="fa"></i>Detail</Link>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="column-15 grid-item">
                    <article className="film-item" onclick={console.log('hoi')}>
                        <div className="film-thumb">
                            <img alt="videobanner3" width="204" height="350" src={videobanner3}/>
                            <div className="right-info">
                                <span className="pg">G</span>
                            </div>
                            <span className="rate">4</span>
                            <div className="film-content">
                                <h4 className="film-title">Pink Floyd</h4>
                                <div className="film-date">Release: August 3, 2017</div>
                                <div className="film-knoppen">
                                    <Link to={`https://player.vimeo.com/video/38156752`}><i aria-hidden="true" className="fa"></i>Trailer</Link>
                                    <Link to={`http://demo.amytheme.com/movie/demo/single-cinema/amy_movie/star-trek-beyond/`}><i
                                        aria-hidden="true" className="fa"></i>Detail</Link>
                                </div>
                            </div>
                            <div className="pic-caption left-info">
                                <h4 className="film-title">
                                    <Link to={`#`}>Pink Floyd</Link>
                                </h4>
                                <span className="pg">G</span>
                                <div className="desc-mv"><p><span>Uitgebracht: </span>Augustus 3, 2020</p>
                                    <p>
                                        <span>Genre: </span>
                                        <Link to={`#`}>Kinderen</Link>,
                                        <Link to={`#`}>Drama</Link>,
                                        <Link to={`#`}>Magie</Link>,
                                        <Link to={`#`}>Sci-fi</Link>
                                    </p>
                                    <p><span>Duur: </span>01 uur 20 minuten</p><p><span>Taal: </span>Engels</p>
                                </div>
                                <span className="rate">4</span>
                                <div className="entry-button">
                                    <Link to={`https://player.vimeo.com/video/38156752" className="fancybox.iframe amy-fancybox`}><i
                                        aria-hidden="true" className="fa"></i>Trailer</Link>
                                    <Link to={`http://demo.amytheme.com/movie/demo/single-cinema/amy_movie/star-trek-beyond/`}><i
                                        aria-hidden="true" className="fa"></i>Detail</Link>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="column-15 grid-item">
                    <article className="film-item" onclick={console.log('hoi')}>
                        <div className="film-thumb">
                            <img alt="videobanner-4" width="204" height="350" src={videobanner4}/>
                            <div className="right-info">
                                <span className="pg">G</span>
                            </div>
                            <span className="rate">4</span>
                            <div className="film-content">
                                <h4 className="film-title">Guardians of the Galaxy</h4>
                                <div className="film-date">Release: August 3, 2017</div>
                                <div className="film-knoppen">
                                    <Link to={`https://player.vimeo.com/video/38156752`}><i aria-hidden="true" className="fa"></i>Trailer</Link>
                                    <Link to={`http://demo.amytheme.com/movie/demo/single-cinema/amy_movie/star-trek-beyond/`}><i
                                        aria-hidden="true" className="fa"></i>Detail</Link>
                                </div>
                            </div>
                            <div className="pic-caption left-info">
                                <h4 className="film-title">
                                    <Link to={`#`}>Guardians of the Galaxy</Link>
                                </h4>
                                <span className="pg">G</span>
                                <div className="desc-mv"><p><span>Uitgebracht: </span>Augustus 3, 2020</p>
                                    <p>
                                        <span>Genre: </span>
                                        <Link to={`#`}>Kinderen</Link>,
                                        <Link to={`#`}>Drama</Link>,
                                        <Link to={`#`}>Magie</Link>,
                                        <Link to={`#`}>Sci-fi</Link>
                                    </p>
                                    <p><span>Duur: </span>01 uur 20 minuten</p><p><span>Taal: </span>Engels</p>
                                </div>
                                <span className="rate">4</span>
                                <div className="entry-button">
                                    <Link to={`https://player.vimeo.com/video/38156752`} className="fancybox.iframe amy-fancybox"><i
                                        aria-hidden="true" className="fa"></i>Trailer</Link>
                                    <Link to={`http://demo.amytheme.com/movie/demo/single-cinema/amy_movie/star-trek-beyond/`}><i
                                        aria-hidden="true" className="fa"></i>Detail</Link>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="column-15 grid-item">
                    <article className="film-item" onclick={console.log('hoi')}>
                        <div className="film-thumb">
                            <img alt="videobanner-5" width="204" height="350" src={videobanner5}/>
                            <div className="right-info">
                                <span className="pg">G</span>
                            </div>
                            <span className="rate">4</span>
                            <div className="film-content">
                                <h4 className="film-title">H8FULL</h4>
                                <div className="film-date">Release: August 3, 2017</div>
                                <div className="film-knoppen">
                                    <Link to={`https://player.vimeo.com/video/38156752`}><i aria-hidden="true" className="fa"></i>Trailer</Link>
                                    <Link to={`http://demo.amytheme.com/movie/demo/single-cinema/amy_movie/star-trek-beyond/`}><i
                                        aria-hidden="true" className="fa"></i>Detail</Link>
                                </div>
                            </div>
                            <div className="pic-caption left-info">
                                <h4 className="film-title">
                                    <Link to={`#`}>H8FULL</Link>
                                </h4>
                                <span className="pg">G</span>
                                <div className="desc-mv"><p><span>Uitgebracht: </span>Augustus 3, 2020</p>
                                    <p>
                                        <span>Genre: </span>
                                        <Link to={`#`}>Kinderen</Link>,
                                        <Link to={`#`}>Drama</Link>,
                                        <Link to={`#`}>Magie</Link>,
                                        <Link to={`#`}>Sci-fi</Link>
                                    </p>
                                    <p><span>Duur: </span>01 uur 20 minuten</p><p><span>Taal: </span>Engels</p>
                                </div>
                                <span className="rate">4</span>
                                <div className="entry-button">
                                    <Link to={`https://player.vimeo.com/video/38156752`} className="fancybox.iframe amy-fancybox"><i
                                        aria-hidden="true" className="fa"></i>Trailer</Link>
                                    <Link to={`http://demo.amytheme.com/movie/demo/single-cinema/amy_movie/star-trek-beyond/`}><i
                                        aria-hidden="true" className="fa"></i>Detail</Link>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

            </div>
            </div>
        </section>
        <div className="amy-section wpb_row coloredbg">
            <div className="container">
                <div className="vc_row wpb_row vc_row-fluid home-cinema-icon vc_row-has-fill">
                    <div className="no-padding wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                        <ul>
                                            <li><Link to={`#`}>Locaties</Link></li>
                                            <li><Link to={`#`}>Aanbiedingen</Link></li>
                                            <li><Link to={`#`}>Koop tickets</Link></li>
                                            <li><Link to={`#`}>Stel een vraag</Link></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="#amy-copyright" className="amy-copyright">
          <div className="container">
              <div className="amy-inner">
                  <div className="amy-copyright-left pull-left">
                      <div className="amy-copyright-module amy-module-text">
                          © Copyright 2020 Movie Euhh - Alle Rechten Voorbehouden
                      </div>
                  </div>
                  <div className="amy-copyright-right pull-right">
                      <div className="amy-copyright-module amy-module-menu">
                          <div className="amy-menu">
                              <ul className="menu">
                                  <li className="menu-item">
                                      <Link to={`#`}>Home</Link>
                                  </li>
                                  <li className="menu-item">
                                      <Link to={`#`}>Films</Link>
                                  </li>
                                  <li className="menu-item">
                                      <Link to={`#`}>Contact</Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
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
