const SpotifyWebApi = require("spotify-web-api-node");
const axios = require("axios");
var client_id = "CLIENT_ID";
var redirect_uri = "http://localhost:8888/callback";
class SpotifyController {
  static async login(req, res, next) {
    try {
      var state = generateRandomString(16);
      var scope = "user-read-private user-read-email";
      res.redirect(
        "https://accounts.spotify.com/authorize?" +
          querystring.stringify({
            response_type: "code",
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state,
          })
      );
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getPlaylist(req, res, next) {
    try {
      const response = await axios ({
        method: "GET",
        url: "	https://api.spotify.com/v1/playlists/0tT47hAmA5LwIM9wssuNUG",
        Authorization: req.headers.access_token
      })
      console.log(response);
    } catch (err) {}
  }
}

module.exports = SpotifyController;
