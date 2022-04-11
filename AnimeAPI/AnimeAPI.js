//AnimeAPI
fetch('https://kitsu.io/api/edge')
.then(res => res.json())
    .then(data => {
        console.log(data)
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })