const SpotifyController = require('../controllers/spotifyController');
const router = require("express").Router();

  
  var SpotifyWebApi = require('spotify-web-api-node');
  
  // This file is copied from: https://github.com/thelinmichael/spotify-web-api-node/blob/master/examples/tutorial/00-get-access-token.js
  
  const scopes = [
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-email',
    ];
    
  // credentials are optional
  var spotifyApi = new SpotifyWebApi({
      clientId: process.env.SPOTIFY_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      redirectUri: 'http://localhost:3000/spotify/callback'
    });
  
    
    router.get('/login', (req, res) => {
      res.redirect(spotifyApi.createAuthorizeURL(scopes));
    });
    
    router.get('/callback', (req, res) => {
      const error = req.query.error;
      const code = req.query.code;
      const state = req.query.state;
    
      if (error) {
        console.error('Callback Error:', error);
        res.send(`Callback Error: ${error}`);
        return;
      }
    
      spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
          console.log(data);
          const access_token = `Bearer ${data.body['access_token']}`;
          const refresh_token = data.body['refresh_token'];
          const expires_in = data.body['expires_in'];
          
          spotifyApi.setAccessToken(access_token);
          spotifyApi.setRefreshToken(refresh_token);
    
          console.log('access_token:', access_token);
          console.log('refresh_token:', refresh_token);
    
          console.log(
            `Sucessfully retreived access token. Expires in ${expires_in} s.`
          );
          res.send('Success! You can now close the window.');
    
          setInterval(async () => {
            const data = await spotifyApi.refreshAccessToken();
            const access_token = `Bearer ${data.body['access_token']}`;
    
            console.log('The access token has been refreshed!');
            console.log('access_token:', access_token);
            spotifyApi.setAccessToken(access_token);
          }, expires_in / 2 * 1000);
        })
        .catch(error => {
          console.error('Error getting Tokens:', error);
          res.send(`Error getting Tokens: ${error}`);
        });
    });

    router.get('/playlist', spotifyApi,SpotifyController.getPlaylist)


  module.exports = router