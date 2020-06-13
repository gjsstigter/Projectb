import React, { Component } from 'react';
import Api from "../api/Api";

class Registreren extends Component {

    state = {
        email: null,
        password: null
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                email: this.userData.email,
                password: this.userData.password,
            })
        } else {
            this.setState({
                email: '',
            })
        }
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('username', this.state.username);
        form_data.append('password', this.state.email);

        if (this.state.username === `admin@admin.nl`) {
        } else {
            Api(`/login`, `POST`, form_data)
                .then(res => (console.log(res)));
        }
    };

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.userData = JSON.parse(localStorage.getItem('user'));

            if (localStorage.getItem('user')) {
                this.setState({
                    email: this.userData.email,
                    password: this.userData.password,
                })
            } else {
                this.setState({
                    email: '',
                })
            }
        }
    }

    render = () => {
        return (
            <main>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <section>
                        <p>
                            <label>
                                Email:
                            </label>
                            <input type={`email`} name={`email`} value={this.state.email} onChange={this.handleChange} required/>
                        </p>
                        <p>
                            <label>
                                Wachtwoord:
                            </label>
                            <input type={`password`} name={`password`} value={this.state.password}  onChange={this.handleChange} required/>
                        </p>
                    </section>
                    <p>
                        <input type={`submit`} name={`submit`} value={`Login`}/>
                    </p>
                </form>
            </main>
        )
    }
}

export default Registreren;