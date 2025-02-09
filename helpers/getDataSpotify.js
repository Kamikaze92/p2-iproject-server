const SpotifyWebApi = require("spotify-web-api-node");
const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(access_token);

function getData() {
  (async () => {
    const me = await spotifyApi.getMe();
    console.log(me);
  })().catch((e) => {
    console.error(e);
  });
}

module.exports = {getData}