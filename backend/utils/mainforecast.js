const request=require("postman-request")

const mainforecast=(location,callback)=>{
    const url='https://api.weatherapi.com/v1/current.json?key=a94ec77788264bc0bc464222210905&q='+encodeURIComponent(location)+'&aqi=yes'
    request({url, json:true},(error,{body})=>{
        if(error)
        callback('Check your network connection', undefined)
        else if(body.error)
        callback('Please check the location you have entered', undefined)
        else
        {
        callback(undefined,{
            location: body.location.region,
            forecast: body.current.condition.text+". The current temperature is "+body.current.temp_f+" F, feels like "+body.current.feelslike_f+" F. Likely rainfall is "+body.current.precip_in+" inches and"+" it is "+body.current.humidity+"% humid.",
            air: body.current.air_quality
        })
        }
    })
}

module.exports=mainforecast
