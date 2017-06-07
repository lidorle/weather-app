// Adding the required Modules
var axios = require('axios');



module.exports = {
   fetchWeather: function (lat,lon){
     lat = parseFloat(lat).toFixed(0);
     lon = parseFloat(lat).toFixed(0);
     var encodedURI = encodeURI(`https://api.weatherunlocked.com/api/current/${lat},${lon}?app_id=8f454b23&app_key=32e2f0707008d6166232bfc834c9fdd1`);
    //  console.log(i);
     return axios.get(encodedURI)
        .then(function(response){
            return response.data;
        },error=>{
          // alert('api error function');
          console.log('api error');
        });
   }
}
