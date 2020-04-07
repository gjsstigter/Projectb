import React, {Component} from "react";

class MoviesCrud extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id: (this.props.id) ? this.props.id.toLowerCase() : `null`,
      movies: [{
        "title": "Kaas het vervolg",
        "description": "Lang en zo met hoop tekst in de meuk bla bla",
        "release_date": "2020-04-20",
        "stars": 4.2,
        "genre": "Horror",
        "studio": "Marvel",
        "keywords": ["Kaas", "Eng", "Hounted house"],
        "actors": ["Gordon", "Gerard"]
      }],
    };
  }

  sendData = () => {

  }

}

export class MoviesCreate extends MoviesCrud{
  render() {
    return(
      <main>
        <h2>Create a new movie</h2>
        <progress value={1} max={100}/>
        <form>
          <section>
            <p>
              <label>
                Title:
              </label>
              <input type={`text`} required/>
            </p>
          </section>
        </form>
      </main>
    )
  }
}

export class MoviesRead extends MoviesCrud{
  render() {
    let {id, movies}  = this.state;
    let body;

    movies.map((movie) => {
      body = (<main>
        <h2>Read {id}</h2>
      </main>)
    });

    return(body);
  }
}

export default MoviesCreate;
