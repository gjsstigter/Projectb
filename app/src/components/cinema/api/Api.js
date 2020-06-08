import axios from "axios";

require('dotenv').config();

const Api = (api, method = 'GET', form_data = {}) => {
    if (method === 'GET') {
        let url = (process.env.REACT_APP_API_URL) ? process.env.REACT_APP_API_URL + api : 'http://proxy.projectb.vdmi/http://172.20.0.6/api' + api;
        return axios.get(url, form_data, {
        })
        .then(res => {
            return res;
        })
        .catch(err => console.log(err));
    } else {
        let url = (process.env.REACT_APP_API_URL) ? process.env.REACT_APP_API_URL + api : 'http://proxy.projectb.vdmi/http://172.20.0.6/api' + api;
        return axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }
};

export default Api;
