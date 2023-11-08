const clientId = "b3bea91bf49d4df69bc92dc2c40697ac";
const clientSecret = "c32f9a9161e24dd7a4ef68a9e3a80150";
const redirectUri = 'http://localhost:3000/';
let accessToken;
let expiryTime;

const Spotify = {
    /*NEED TO ADD FUNCTIONALITY TO CHECK EXPIRY TIME ON ACCESS TOKEN*/
    getAccessToken() {
        let now = new Date();

        if (expiryTime > now && accessToken) {
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
        .then(jsonResponse => {
            accessToken = jsonResponse.access_token;
            let timeNow = new Date().getTime();
            expiryTime = new Date(timeNow + jsonResponse.expires_in * 1000);
        });
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
    }
};

export default Spotify;





