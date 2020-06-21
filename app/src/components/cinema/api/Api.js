import axios from "axios";

require('dotenv').config();

const Api = (api, method = 'GET', form_data = {}, config = null) => {
    if (method === 'GET') {
        let url = (process.env.REACT_APP_API_URL) ? process.env.REACT_APP_API_URL + api : 'http://proxy.projectb.vdmi/http://172.20.0.6/api' + api;
        return axios.get(url, form_data, {
        })
        .then(res => {
            return res;
        })
        .catch(err => console.log(err));
    } else if (method === 'PATCH') {
        let url = (process.env.REACT_APP_API_URL) ? process.env.REACT_APP_API_URL + api : 'http://proxy.projectb.vdmi/http://172.20.0.6/api' + api;
        return axios.patch(url, form_data, {
        })
            .then(res => {
                return res;
            })
            .catch(err => console.log(err));
    } else if (method === 'DELETE') {
        let url = (process.env.REACT_APP_API_URL) ? process.env.REACT_APP_API_URL + api : 'http://proxy.projectb.vdmi/http://172.20.0.6/api' + api;
        return axios.delete(url, form_data, {
        })
            .then(res => {
                return res;
            })
            .catch(err => console.log(err));
    } else if (method === 'RES') {
        let url = (process.env.REACT_APP_API_URL) ? process.env.REACT_APP_API_URL + api : 'http://proxy.projectb.vdmi/http://172.20.0.6/api' + api;
        return fetch(url,{
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form_data),
        })
    } else {
        let url = (process.env.REACT_APP_API_URL) ? process.env.REACT_APP_API_URL + api : 'http://proxy.projectb.vdmi/http://172.20.0.6/api' + api;
        return axios.post(url, form_data, { headers: {config}})
            .then(res => {
                return res;
            })
            .catch(err => console.log(err));
    }
};

export default Api;
