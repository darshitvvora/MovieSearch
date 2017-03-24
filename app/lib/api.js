/**
 * Created by darshitvora on 15/03/17.
 */
class Api {
    static headers() {
        return {
            'X-Mashape-Key' : 'bAbzxg6251mshue0QRpSsyml1zh4p1m7mY5jsn41JaHTgqQhfi',
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'X-Requested-With' : 'XMLHttpRequest',
        }
    }

    static get(route){
        return this.xhr(route, null, 'GET');
    }

    static put(route, params) {
        return this.xhr(route, params, 'PUT');
    }

    static post(route, params) {
        return this.xhr(route, params, 'POST');
    }

    static delete(route, params) {
        return this.xhr(route, params, 'DELETE');
    }

    static xhr(route, params, verb) {
        const host = 'https://community-netflix-roulette.p.mashape.com/api.php';
        const url = `${host}${route}`;
        let options = Object.assign({ method: verb}, params ? {body: JSON.stringify(params)} : null);
        options.headers = Api.headers()
        return fetch(url, options).then( resp => {
            let json = resp.json();
            if(resp.ok){
                return json;
            }
            return json.then(err => {throw err});
        })
    }

}
export default Api
