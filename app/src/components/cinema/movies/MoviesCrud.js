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
      formProgress: 0.00,
      valid: false,
      inputs: {
        title: '',
        stars: '0',
        description: '',
        release_date: '',
        genre: '',
        studio: '',
        keywords: '',
        actors: '',
      },
      errors: {
        title: '',
        stars: '',
        description: '',
        release_date: '',
        genre: '',
        studio: '',
        keywords: '',
        actors: '',
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let {errors, inputs} = this.state;

    switch (name) {
      case 'title':
        inputs.title = value;
        errors.title =
          value < 0
            ? 'Vul de titel in'
            : '';
        break;
      case 'stars':
        inputs.stars = value;
        errors.stars =
          value < 0
            ? 'Kies het aantal sterren'
            : '';
        break;
      case 'description':
        inputs.description = value;
        errors.description =
          value < 0
            ? 'Vul de description aan'
            : '';
        break;
      case 'release_date':
        inputs.release_date = value;
        errors.release_date =
          value < 0
            ? 'Vul een geldige datum in'
            : '';
        break;
      case 'genre':
        inputs.genre = value;
        errors.genre =
          value < 0
            ? 'Vul de genre aan'
            : '';
        break;
      case 'studio':
        inputs.studio = value;
        errors.studio =
          value < 0
            ? 'Vul de studio aan'
            : '';
        break;
      case 'keywords':
        inputs.keywords = value;
        errors.keywords =
          value < 0
            ? 'Vul de keywords aan'
            : '';
        break;
      case 'actors':
        inputs.actors = value;
        errors.actors =
          value < 0
            ? 'Vul de acteurs aan'
            : '';
    }

    this.setState({errors, [name]: value}, ()=> {
      console.log(errors)
    });

    this.state.valid = (this.validateForm(errors, inputs));
    this.slider();
  };

  validateForm = (errors, inputs) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );

    return valid;
  };

  slider = () => {
    let {inputs} = this.state;
    let inputsLength = Object.keys(inputs).length;
    let filled = 0;

    Object.values(inputs).forEach(
      (val) => val.length > 0 && (filled += 1)
    );

    let progress = filled / inputsLength * 100;
    this.setState({formProgress: progress});
  }
}

export class MoviesCreate extends MoviesCrud{

  render() {
    let {formProgress, valid} = this.state;
    return(
      <main>
        <h2>Create a new movie</h2>
        <progress value={formProgress} max={100}/>
        <form>
          <section>
            <p>
              <label>
                Title:
              </label>
              <input type={`text`} name={`title`} onChange={this.handleChange} noValidate/>
            </p>
            <p>
              <label>
                Description:
              </label>
              <textarea name={`description`} onChange={this.handleChange} noValidate/>
            </p>
            <p>
              <label>
                Release date:
              </label>
              <input type={`date`} name={`release_date`} onChange={this.handleChange} noValidate/>
            </p>
          </section>
          <section>
            <p>
              <label>
                Genre:
              </label>
              <input type={`text`} name={`genre`} onChange={this.handleChange} noValidate/>
            </p>
            <p>
              <label>
                Studio:
              </label>
              <input type={`text`} name={`studio`} onChange={this.handleChange} noValidate/>
            </p>
            <p>
              <label>
                Actors:
              </label>
              <input type={`text`} name={`actors`} onChange={this.handleChange} noValidate/>
            </p>
          </section>
          <section>
            <p>
              <label>
                Keywords:
              </label>
              <input type={`text`} name={`keywords`} onChange={this.handleChange} noValidate/>
            </p>
            <p>
              <input type={`submit`} name={`submit`} disabled={!valid} value={(valid) ? 'Verstuur' : 'Controleer de velden'}/>
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
