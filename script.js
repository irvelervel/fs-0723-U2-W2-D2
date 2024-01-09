// METODO 1

// prima cosa: andiamo a selezionare le 4 checkboxes
// const checkbox1 = document.getElementById('btncheck1')
// const checkbox2 = document.getElementById('btncheck2')
// const checkbox3 = document.getElementById('btncheck3')
// const checkbox4 = document.getElementById('btncheck4')

// // poi seleziono le prime 4 cards con gli orsi
// const bearCard1 = document.querySelector('.col-12:nth-of-type(1) .card')
// const bearCard2 = document.querySelector('.col-12:nth-of-type(2) .card')
// const bearCard3 = document.querySelector('.col-12:nth-of-type(3) .card')
// const bearCard4 = document.querySelector('.col-12:nth-of-type(4) .card')

// // ora collego alla checkbox un listener che ascolta il click e aggiunge/rimuove la classe "d-none" al primo orso
// checkbox1.addEventListener('click', function () {
//   bearCard1.classList.toggle('d-none')
// })
// checkbox2.addEventListener('click', function () {
//   bearCard2.classList.toggle('d-none')
// })
// checkbox3.addEventListener('click', function () {
//   bearCard3.classList.toggle('d-none')
// })
// checkbox4.addEventListener('click', function () {
//   bearCard4.classList.toggle('d-none')
// })

// METODO 2
// prima cosa: andiamo a selezionare le 4 checkboxes
const fourCheckboxes = document.querySelectorAll('.btn-group input')

// poi seleziono le prime 4 cards con gli orsi
let allTheBearCards = document.getElementsByClassName('card') // 12 cards, come NodeList

// querySelectorAll non torna un vero e proprio "array", ma una "NodeList"!
// soluzione moderna: TRASFORMO allTheBearCards in un vero e proprio array, così posso usare slice!
allTheBearCards = Array.from(allTheBearCards) // riassegno a allTheBearCards il suo valore ma trasformato in un vero array!
// ora allTheBearCards è un array al 100%! posso usare su di lui tutti i metodi degli array
const justTheFirstFourBears = allTheBearCards.slice(0, 4) // ora posso farlo perchè allTheBearCards è un vero e proprio array
console.log(justTheFirstFourBears) // 4 cards

// const justTheFirstFourBears = []
// for (let i = 0; i < 4; i++) {
//   justTheFirstFourBears.push(allTheBearCards[i])
// }

for (let i = 0; i < fourCheckboxes.length; i++) {
  fourCheckboxes[i].addEventListener('click', function () {
    justTheFirstFourBears[i].classList.toggle('d-none')
    // ad ogni checkbox assegniamo il proprio orso
    // alla prima checkbox il primo orso, alla seconda il secondo e via così...
  })
}

// alternativo
// fourCheckboxes.forEach((checkbox, i) => {
//   checkbox.addEventListener('click', function () {
//     justTheFirstFourBears[i].classList.toggle('d-none')
//   })
// })
