require('dotenv').config();

const Api = (api) => {
    return fetch(`${process.env.REACT_APP_API_URL}${api}`, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            },
        })
        .then(res => res.json())
        .catch(e => console.log(e));
};

export default Api;