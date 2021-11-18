const SpotifyWebApi = require("spotify-web-api-node");
const fs = require('fs')
const token = "BQC1v0p1oSmV6sIhtXYbRdBbrWLa-1nbhCoonBl4r-c3jwlwl2hgvgmeNU61ZCQh89WmnUAJkuZRD5P2PqIxrqqgCdmIflL63zCBFCu6wEjS3B_wGlVX4NLkCNTQ71wNiduQFj9s2aedK_Bs8vWRZ32aO1FfemdjV-INPZVH5lInzR8";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    console.log(me.body);
    getPlaylist();
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

function getDevices(){
  spotifyApi.getMyDevices()
    .then(function(data) {
      let availableDevices = data.body.devices;
      console.log(availableDevices);
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
getDevices()

