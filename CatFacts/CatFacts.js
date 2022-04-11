//Cat Facts
fetch('https://cat-fact.herokuapp.com/facts')
.then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#fact1').innerHTML = data[0].text
        document.querySelector('#fact2').innerHTML = data[1].text
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })