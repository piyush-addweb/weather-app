let request = require('request')

const forecast = (latitude,longitude,callback)=>{
    let api_key='d2b2c2ccfe0fa2726147392fc5162851';
    let base_url ='http://api.weatherstack.com/';
    let url =`${base_url}current?access_key=${api_key}&query=${latitude},${longitude}`
    request({
        url:url,json:true
    },(error,response)=>{
       if(error){
        callback('Unable to connect to weather service!', undefined)
    } else if (response.body.error) {
        callback('Unable to find location', undefined)
    }else{
        let {current,location}  = response.body
        
        let msg = `Today weather at is ${current.weather_descriptions[0]} .It is currently ${current.temperature} degree and it is feel like a ${current.feelslike} `
            callback(undefined,msg)
    }
    })
}

module.exports = forecast