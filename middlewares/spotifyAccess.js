const SpotifyWebApi = require("spotify-web-api-node");
const fs = require('fs')
const token = "BQDSfKAV20tK60h3SygKt1-WZXZQ7F2AzffIqhDwJ_i4ieeurdvzxdJ_krhupL6EPykvBkMX90O0YjaN9tLHfwPc0qRnq7X3zjQo1msQYHuntOv31HG-ZyMEPnFM2XTsl4wT-b4bxcP8URQIVsfELqVCd3mMScBgwj5aR58vnGiFt1Q";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    console.log(me.body);
    // getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}
function getPlaylist(){
  spotifyApi.getPlaylist('0tT47hAmA5LwIM9wssuNUG')
    .then(function(data) {
      console.log('Some information about this playlist', data.body);
    }, function(err) {
      console.log('Something went wrong!', err);
    });
}



//GET SONGS FROM PLAYLIST
// async function getPlaylistTracks(playlistId, playlistName) {

//   const data = await spotifyApi.getPlaylistTracks(playlistId, {
//     offset: 1,
//     limit: 100,
//     fields: 'items'
//   })

//   // console.log('The playlist contains these tracks', data.body);
//   // console.log('The playlist contains these tracks: ', data.body.items[0].track);
//   // console.log("'" + playlistName + "'" + ' contains these tracks:');
//   let tracks = [];

//   for (let track_obj of data.body.items) {
//     const track = track_obj.track
//     tracks.push(track);
//     console.log(track.name + " : " + track.artists[0].name)
//   }
  
//   console.log("---------------+++++++++++++++++++++++++")
//   return tracks;
// }

getMyData();
getPlaylist()

