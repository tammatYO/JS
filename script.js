'use strict';

const btn = document.getElementById('btn')
let square = document.getElementById('square')
let input = document.getElementById('text')
let e_btn = document.getElementById('e_btn')
let range = document.getElementById('range')
let circle = document.getElementById('circle')
let span = document.getElementById('range-span')


const color = function () {
        square.style.backgroundColor = input.value  
}

btn.addEventListener('click', () => {
    color()
})

const invisible = function () {
    e_btn.style.display = 'none'
}

e_btn.addEventListener('click', () => {
    invisible()
})

const target = function (event) {
    span.textContent = event.target.value
}

range.addEventListener('change', target)

const hw = function () {
    circle.style.height = range.value + '%'
    circle.style.width = range.value + '%'
}

range.addEventListener('input', hw)

console.dir(circle)
