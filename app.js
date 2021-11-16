const express = require("express");
const cors = require('cors');
const router = require('./router');
const app = express();
const port = 3000
// const SpotifyWebApi = require("spotify-web-api-ndoe");

app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// app.post("/login", (req, res, next) => {
//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: "http://localhost:3000",
//     clientId: "1e051c2c83f949cb94ed85e731af6b38",
//     clientSecret: "bec125094c3247e1bba18d5ca7e39c5a",
//   });
//   spotifyApi
//     .authorizationCodeGrant(code)
//     .then((data) => {
//       res.json({
//         access_token: data.body.access_token,
//         refresh_token: data.body.access_token,
//         expires_in: data.body.expires_in,
//       });
//     })
//     .catch(() => {
//       res.sendStatus(400);
//     });
// });
