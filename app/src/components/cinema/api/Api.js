
const Api = (api) => {
    return fetch('http://proxy.projectb.vdmi/http://172.23.0.5/api' + api, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            },
        })
        .then(res => res.json())
        .catch(e => console.log(e));
};

export default Api;