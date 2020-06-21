import React, {Component} from 'react';

class Contact extends Component {

    render = () => {
        return (
            <main className="contact-main">
                <div className="container">
                    <div className="wrapper">
                        <div style={{backgroundColor: "#fe7900"}} className="contactform-title">
                            <span className="hoofdtitel">Neem contact met ons op</span>
                            <span className="subtitel">Stuur ons gerust een berichtje hieronder!</span>
                        </div>
                        <form className="contactform">
                            <div className="wrap-input valideren-input" data-validate="Naam is vereist">
                                <span className="label-input">Volledige naam:</span>
                                <input className="input" type="text" name="name" placeholder="Vul uw naam in"/>
                                <span className="focus-input"></span>
                            </div>

                            <div className="wrap-input valideren-input" data-validate="Geldig e-mailadres is vereist: voorbeeld@gmail.com">
                                <span className="label-input">E-mailadres:</span>
                                <input className="input" type="text" name="email" placeholder="Vul uw e-mailadres in"/>
                                <span className="focus-input"></span>
                            </div>

                            <div className="wrap-input valideren-input" data-validate="Telefoonnummer is verplicht">
                                <span className="label-input">Telefoon nummer:</span>
                                <input className="input" type="text" name="phone" placeholder="Voer uw telefoonnummer in"/>
                                <span className="focus-input"></span>
                            </div>

                            <div className="wrap-input valideren-input" data-validate="Bericht is verplicht">
                                <span className="label-input">Bericht:</span>
                                <textarea className="input-textarea" name="message" placeholder="Beschrijf uw bericht/opmerkingen"/>
                                <span className="focus-input"></span>
                            </div>

                            <div className="container-contactformulier-knop">
                                <button className="contactformulier-knop">
                                    <span>Verzenden</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}

export default Contact;