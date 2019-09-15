import axios from 'axios';

const HOST = 'http://personio-fe-test.herokuapp.com/api/v1/';
const CONTENT_TYPE = {json: 'application/json', multipart: 'multipart/form-data'};

//Wrapper for sending HTTP queries
export default class Api {

    static headers(contentType = 'json') {
        return {
            headers: {
                'Content-Type': CONTENT_TYPE[contentType],
                'Access-Control-Allow-Origin': '*'
            }
        };
    }

    static get(route) {
        let url = `${HOST}${route}`;
        return Api.getRequest(url);
    }

    static getRequest(url) {
        return new Promise((resolve, reject) => {
            axios.get(url, this.headers()).then((response) => {
                if (response.data.hasOwnProperty('error')) {
                    reject(response.data.error)
                }
                resolve(response.data)
            }).catch((error) => {
                reject(error);
            });
        })
    }
}