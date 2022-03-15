const beaches = [
  {
    img: './public/images/flamingo.webp',
    title: 'Flamingo Beach',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima dolore aut possimus eligendi voluptates delectus similique facere nulla quod nisi blanditiis fugit enim dicta sit neque error perspiciatis dolor, pariatur unde necessitatibus repellat rerum voluptas cumque. Perferendis placeat repellendus beatae maxime fugit odio sequi ex ipsam nisi, voluptate quis.'
  },
  {
    img: './public/images/night.jpg',
    title: 'Galaxy Atoll',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima dolore aut possimus eligendi voluptates delectus similique facere nulla quod nisi blanditiis fugit enim dicta sit neque error perspiciatis dolor, pariatur unde necessitatibus repellat rerum voluptas cumque. Perferendis placeat repellendus beatae maxime fugit odio sequi ex ipsam nisi, voluptate quis.'
  },
  {
    img: './public/images/cliffs.jpg',
    title: 'Mossy Heights',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima dolore aut possimus eligendi voluptates delectus similique facere nulla quod nisi blanditiis fugit enim dicta sit neque error perspiciatis dolor, pariatur unde necessitatibus repellat rerum voluptas cumque. Perferendis placeat repellendus beatae maxime fugit odio sequi ex ipsam nisi, voluptate quis.'
  },
  {
    img: './public/images/palmtree.jpg',
    title: 'Pastel Reef',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima dolore aut possimus eligendi voluptates delectus similique facere nulla quod nisi blanditiis fugit enim dicta sit neque error perspiciatis dolor, pariatur unde necessitatibus repellat rerum voluptas cumque. Perferendis placeat repellendus beatae maxime fugit odio sequi ex ipsam nisi, voluptate quis.'
  },
  {
    img: './public/images/umbrella.jpg',
    title: 'Tiki Cove',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima dolore aut possimus eligendi voluptates delectus similique facere nulla quod nisi blanditiis fugit enim dicta sit neque error perspiciatis dolor, pariatur unde necessitatibus repellat rerum voluptas cumque. Perferendis placeat repellendus beatae maxime fugit odio sequi ex ipsam nisi, voluptate quis.'
  },
  {
    img: './public/images/sandnsea.jpg',
    title: 'White Sand Lagoon',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minima dolore aut possimus eligendi voluptates delectus similique facere nulla quod nisi blanditiis fugit enim dicta sit neque error perspiciatis dolor, pariatur unde necessitatibus repellat rerum voluptas cumque. Perferendis placeat repellendus beatae maxime fugit odio sequi ex ipsam nisi, voluptate quis.'
  },
]


// mock fetching from database
setTimeout(_=>{
  const grid = document.querySelector('.grid')
  const spinner = document.querySelector('.spinner')
  beaches.forEach(e=>{
    grid.innerHTML += `
      <div class='card'>
        <img src='${e.img}' alt='${e.title}'>
        <h2>${e.title}</h2>
        <p>${e.text}</p>
      </div>
    `
  })
  spinner.classList.add('hide')
}, 2000)