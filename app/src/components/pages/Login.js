import React, { Component } from "react";
//import List from "../";

class Home extends Component {
  render() {
    return (
      <main className="login login-main">
        <div className="pgssl-login-inner">
          <div id="login">
            <h1>
              <a href="/">Movie Euhh</a>
            </h1>
            <form name="loginform" id="loginform" action="#" method="post">
              <p>
                <label htmlFor="user_login">Gebruikersnaam of e-mailadres</label>
                <input type="text" name="log" id="user_login" className="input" value="" size="20" autoCapitalize="off" />
              </p>
              <div className="user-pass-wrap">
                <label htmlFor="user_pass">Wachtwoord</label>
                <div className="wp-pwd">
                  <input type="password" name="pwd" id="user_pass" className="input password-input" value="" size="20" />
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
    );
  }
}

export default Home;
