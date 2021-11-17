const SpotifyWebApi = require("spotify-web-api-node");
const scopes = [
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-email",
];

const spotifyApi = new SpotifyWebApi({
  redirectUri: "http://localhost:3000/spotify/callback",
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
});

const SpotifyStrategy = require('passport-spotify').Strategy;

passport.use(
  new SpotifyStrategy(
    {
      clientId: process.env.SPOTIFY_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      callbackURL: 'http://localhost:8888/auth/spotify/callback',
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({spotifyId: profile.id}, function (err, user) {
        return done(err, user);
      });
    }
  )
);
