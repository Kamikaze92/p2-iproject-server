const express = require("express");
const app = express();
const port = 3000
// const SpotifyWebApi = require("spotify-web-api-ndoe");

// sequelize model:generate --name User --attributes username:string,email:string,password:string
// sequelize model:generate --name Post --attributes UserId:Integer,descriiption:text
// sequelize model:generate --name Comment --attributes UserId:Integer,PostId:Integer,descriiption:text




app.get('/', (req, res) => {
  res.send('Hello World!')
})

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
