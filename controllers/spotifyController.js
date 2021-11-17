const SpotifyWebApi = require("spotify-web-api-node");


class SpotifyController {
  static async callback(req, res, next) {
    try {
        
    } catch (err) {
        res.status(500).json(err.message)
    }
  }
}

module.exports = SpotifyController;
