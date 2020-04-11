require('dotenv').config();

const Api = (api, method = 'GET', body = {}) => {
    return fetch(`${process.env.REACT_APP_API_URL}${api}`, {
        method: method,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(body),
        })
        .then(res => res.json())
        .catch(e => console.log(e));
};

export default Api;
