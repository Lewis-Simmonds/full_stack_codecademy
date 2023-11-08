/*import { clientSecret } from "./ClientSecret.js";*/

const clientSecret = "410bc8b430b74c8e8a6445fc40367711"
const clientId = "b3bea91bf49d4df69bc92dc2c40697ac";
const redirectUri = 'http://localhost:3000/';
let accessToken;
let expiryTime;

const Spotify = {
    /*NEED TO ADD FUNCTIONALITY TO CHECK EXPIRY TIME ON ACCESS TOKEN*/
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        };

        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json())
        .then(response => {
            accessToken = response.access_token;
            let timeNow = new Date().getTime();
            expiryTime = new Date(timeNow + response.expires_in * 1000);
        });
    }
};

Spotify.getAccessToken();
setTimeout(() => {console.log(accessToken)}, 2000);
setTimeout(() => {console.log(expiryTime)}, 2500);

let now = new Date();
console.log(now);


