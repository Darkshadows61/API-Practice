//Card Game API

fetch('https://api.waifu.pics/sfw/neko')
.then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#p1avatar').src = data.url
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
    fetch('https://api.waifu.pics/sfw/neko')
.then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#p2avatar').src = data.url
        
    })
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')