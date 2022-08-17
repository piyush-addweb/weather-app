let request = require('request')
const geocode =(address,callback)=>{
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicGl5dXNoMjEwNyIsImEiOiJjbDZ3NW5iZHQwMTFpM2tteXA5bHNmM2R4In0.XH_8Or13PGmN20jwN1fg-A'
    request({ url: geocodeURL, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(response.body.features.length===0){
            callback('Unable to find location. Try another search.', undefined)
        }else{
        callback(undefined, {
            latitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            location: response.body.features[0].place_name
        })
        }
    })

}

module.exports = geocode