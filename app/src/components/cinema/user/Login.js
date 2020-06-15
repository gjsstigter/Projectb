import React, { Component } from 'react';
import Api from "../api/Api";

class Login extends Component {

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
        <main className="login login-main">
            <div className="pgssl-login-inner">
                <div id="login">
                    <h1>
                        <a href="/">Movie Euhh</a>
                    </h1>
                    <form name="loginform" id="loginform">
                        <p>
                            <label htmlFor="user_login">Gebruikersnaam of e-mailadres</label>
                            <input type="text" name={`email`} value={this.state.email}  onChange={this.handleChange} id="user_login" className="input" value="" size="20" autoCapitalize="off" />
                        </p>
                        <div className="user-pass-wrap">
                            <label htmlFor="user_pass">Wachtwoord</label>
                            <div className="wp-pwd">
                                <input type="password" name={`password`} value={this.state.password}  onChange={this.handleChange} id="user_pass" className="input password-input" value="" size="20" />
                            </div>
                        </div>
                        <p className="forgetmenot">
                            <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                            <label htmlFor="rememberme">Onthoud mij</label>
                        </p>
                        <p className="submit">
                            <input type="submit" name="wp-submit" id="wp-submit" className="button button-primary button-large" value="Inloggen" />
                            <input type="hidden" name="redirect_to" value="/" />
                        </p>
                    </form>
                    <p id="nav">
                        <a href="/Register">Account registreren</a>
                    </p>
                    <p id="backtohome">
                        <a href="/">Terug naar de homepagina</a>
                    </p>
                </div>
            </div>
            {/* <List/> */}
        </main>
        )
    }
}

export default Login