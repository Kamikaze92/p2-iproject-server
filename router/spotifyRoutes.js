const SpotifyController = require('../controllers/spotifyController');
const router = require("express").Router();


router.get('/login', SpotifyController);

// const scopes = [
//     'user-modify-playback-state',
//     'user-read-currently-playing',
//     'user-read-email',
//   ];
  
  // const spotifyApi = new SpotifyWebApi({
  //   redirectUri: 'http://localhost:3000/spotify/callback',
  //   clientId: process.env.SPOTIFY_ID,
  //   clientSecret: process.env.SPOTIFY_SECRET
  // });
  

  
  module.exports = router