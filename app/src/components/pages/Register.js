import React, { Component } from "react";
//import List from "../";

class Home extends Component {
    render() {
        return (
            <main className="register-main">
                <div className="modal__wrapper">
                    <div className="modal__card modal__card--has-header">
                        <div className="modal__header modal__header--progress">
                            <div className="modal__header-inner">
                                <span role="presentation" className="app-icon modal__logo">
                                    <p className="top-menu-title">Movie - Euhh</p>
                                </span>
                                <span role="presentation" className="app-icon modal__lock-icon">
                                    <p className="top-menu-title">Registreren</p>
                                </span>
                            </div>
                            <hr className="solid"></hr>
                            <div className="modal__content">
                                <div className="modal__container">
                                    <form>
                                        <h1 className="modal__title modal__group--small">Maak een account aan</h1>
                                        <p className="modal__body modal__group--large">Door middel van het registreren van
                                        een account heeft u de mogelijkheid om een film te boeken.</p>
                                        <div className="modal__group--large">
                                            <div className="input-field">
                                                <input id="voornaam" name="voornaam" value="" type="text" required="required" className="input-field__input inner-input"/>
                                                <label htmlFor="voornaam" className="input-field__label">Voornaam</label>
                                            </div>
                                            <div className="input-field">
                                                <input id="achternaam" name="achternaam" value="" type="text" required="required" className="input-field__input inner-input"/>
                                                <label htmlFor="achternaam" className="input-field__label">Achternaam</label>
                                            </div>
                                            <div className="input-field">
                                                <input id="email" name="email" value="" type="email" required="required" className="input-field__input inner-input"/>
                                                <label htmlFor="email" className="input-field__label">E-mail</label>
                                            </div>
                                            <div className="input-field modal__group">
                                                <input id="password" name="password" value="" type="password" required="required" minLength="5" className="input-field__input input-field__input--is-password-field inner-input"/>
                                                <button type="button" tabIndex="-1"
                                                        className="input-field__see-password"><span
                                                    className="visually-hidden">Toon wachtwoord</span>
                                                </button>
                                                <label htmlFor="password" className="input-field__label">Wachtwoord</label>

                                            </div>
                                            <div className="checkbox">
                                                <input type="checkbox" id="newsletter" className="checkbox__input visually-hidden" />
                                                <label htmlFor="newsletter" className="checkbox__replacement"></label>
                                                <label htmlFor="newsletter" className="checkbox__text-label">Door je aan te melden ga je akkoord met de voorwaarden en het privacy statement.</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="app-button modal__group--large">
                                            <div className="app-button__content">
                                                <span className="app-button__text font-bold">Aanmelden</span>
                                            </div>
                                        </button>
                                    </form>
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
