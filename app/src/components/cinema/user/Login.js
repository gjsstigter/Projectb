import React, { Component } from 'react';
import Api from "../api/Api";

class Login extends Component {

    state = {
        uname: null,
        upass: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('uname', this.state.uname);
        form_data.append('upass', this.state.upass);

        Api(`/login`, `POST`, form_data)
            .then(res => (console.log(res)));
      };

    render = () => {
        return (
        <main>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
                <section>
                    <p>
                    <label>
                    Username:
                    </label>
                    <input type={`text`} name={`uname`} value={this.state.uname} onChange={this.handleChange} required/>
                    </p>
                    <p>
                    <label>
                    Password:
                    </label>
                    <input type={`password`} name={`upass`} value={this.state.upass}  onChange={this.handleChange} required/>
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

export default Login