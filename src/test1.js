//distance search

const request=require('request')


// const url="https://api.mapbox.com/directions-matrix/v1/mapbox/driving/"+longs+","+lats+";"+longd+","+latd+"?sources=1&destinations=0&annotations=distance&access_token=pk.eyJ1IjoiYXJwLWFzaHUiLCJhIjoiY2thOWxmZzN6MG80dTJ5bzMzemczcDYxdyJ9.Dq2m43fudR7LpMYDZEGDjw"

const distance = (longs="72.96071",lats="19.21360",longd="72.86958",latd="19.02155", callback) =>{
    const url="https://api.mapbox.com/directions-matrix/v1/mapbox/driving/"+longs+","+lats+";"+longd+","+latd+"?sources=1&destinations=0&annotations=distance&access_token=pk.eyJ1IjoiYXJwLWFzaHUiLCJhIjoiY2thOWxmZzN6MG80dTJ5bzMzemczcDYxdyJ9.Dq2m43fudR7LpMYDZEGDjw"

    request({url, json: true},(error,{body}) => {
        if(error){
            callback('Unable to connect to net',undefined)
        }else if(body.error){
            callback('unable to find distance',undefined)
        }else {
            console.log(undefined,body.distances[0][0])
            callback(undefined,body.distances[0][0])
        }
    })
}

module.exports =distance