import { clientSecret } from "./ClientSecret.js";

const clientId = "b3bea91bf49d4df69bc92dc2c40697ac";
const redirectUrl = 'http://localhost:3000/';
let accessToken;

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
            return accessToken;
        });
    }
};

Spotify.getAccessToken();
setTimeout(() => {console.log(accessToken)}, 2000);


