const ul = document.querySelector('ul')
const details = document.querySelector('.details')

const getCharacterDetails = (id) => {
  fetch(`http://localhost:3000/characters/${id}`).then(res => res.json()).then(data => {
    const template = `
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
      <img src="${data.image}" alt="">
    `
    details.innerHTML = template
  })
}

fetch('http://localhost:3000/characters').then(res => res.json()).then(data => {
  data.forEach((character) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = character.name
    li.appendChild(a)
    ul.appendChild(li)
    a.addEventListener('click', () => {
      getCharacterDetails(character.id)
    })
  })
})
