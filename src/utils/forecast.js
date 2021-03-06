const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=848dd3884a6167984128ca27995b41f7&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees celcius but feels like ' + 
            body.current.feelslike + ' degrees out there. The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast