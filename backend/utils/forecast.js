const request=require("postman-request")

const forecast=(longitude,latitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=e63b8e30856781d78a0456c8db57743e&query='+encodeURIComponent(longitude)+','+encodeURIComponent(latitude)+'&units=f'
    request({url ,json:true},(error,{body})=>{
        if(error)
        callback('Check your network connection', undefined)
        else if(body.error)
        callback('Please check the location you have entered', undefined)
        else
        {
        callback(undefined,"The temperature right now is "+body.current.temperature+" and precipitation is "+(body.current.precip)*100+"%")
        }
    })
}

module.exports=forecast;