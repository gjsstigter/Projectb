import React, {Component} from 'react';

class Contact extends Component {

    render = () => {
        return (
            <main>
                <h2>Contact</h2>
                <ul>
                    <li>Telefoon: <a href={`tel:+311012348767`}>+31 (0) 10 1234 8767</a></li>
                    <li>Email: <a href={`mailto:info@cinema.nl`}>info@cinema.nl</a></li>
                    <h3>Address</h3>
                    <li>Govertpleijn 2</li>
                    <li>3033 BL, Rotterdam</li>
                </ul>
            </main>
        )
    }
}

export default Contact;