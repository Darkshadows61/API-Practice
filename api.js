fetch('https://api.waifu.pics/sfw/neko')
.then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.url
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })