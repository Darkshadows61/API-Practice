//Pokemon
document.querySelector('button').addEventListener('click', getFetch)

function getFetch () {
    const choice = document.querySelector('input').value
    const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#pokeNum').innerText = data.id
        document.querySelector('#pokeName').innerText = data.name
        document.querySelector('#pokeImgFront').src = data.sprites.front_default
        document.querySelector('#pokeImgBack').src = data.sprites.back_default
        document.querySelector('#pokeTypes').innerText = `${data.types[0].type.name} ${data.types[1].type.name}`
        document.querySelector('#pokeAbilities').innerText = data.abilities[0].ability.name
        document.querySelector('#pokeMoves').innerText = data.moves[0].move.name
      })
    }

  