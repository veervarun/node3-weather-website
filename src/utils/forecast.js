const request = require('request')

const geocode = ( latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1348886174a0e42e3bb48d3a623ba54a&query='+ latitude + ","+ longtitude
    
    request({url:url, json:true} ,(error,{body})=>{
        if(error){
            callback("Unable to connect to weather service",undefined)
        }
        else if(body.error){
            callback("Unable to find location",undefined)
        }
        else
        {           
            callback(undefined,{
                stat:"It is currently "+ body.current.temperature +" degrees out. There is a "+ body.current.precip +"% chance of rain.",
                location:body.location
            })
        }
    })
}

module.exports = geocode