//Local on the 8's
fetch('https://api.weather.gov/')
.then(res => res.json())
    .then(data => {
        console.log(data)
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })