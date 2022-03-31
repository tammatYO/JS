'use strict';

let book = document.querySelectorAll('.book')
let title = document.querySelectorAll('.book > h2')
let bg = document.querySelector('body')
let adv = document.querySelector('.adv')

book[1].after(book[0])
book[4].after(book[3])
book[4].after(book[2])
book[3].after(book[2])
book[2].before(book[5])

bg.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

title[4].textContent = "Книга 3. this и Прототипы Объектов"
title[4].style.color = "darkkhaki"

document.querySelector('.adv').remove()

let chapter = document.querySelectorAll('.book > ul')
console.dir(chapter)

let chapter2 = chapter[1].querySelectorAll('li')
console.log(chapter2);

chapter2[8].after(chapter2[2])
chapter2[6].after(chapter2[4])
chapter2[6].after(chapter2[5])
chapter2[5].before(chapter2[8])
chapter2[5].before(chapter2[4])
chapter2[6].after(chapter2[4])
chapter2[2].before(chapter2[9])

let chapter5 = chapter[4].querySelectorAll('li')
console.log(chapter5);

chapter5[2].before(chapter5[9])
chapter5[2].before(chapter5[3])
chapter5[2].before(chapter5[4])
chapter5[5].before(chapter5[6])
chapter5[5].before(chapter5[7])

let li = document.createElement('li')
li.innerHTML = '<li>Глава 8: За пределами ES6</li>';
chapter[5].appendChild(li)
let chapter6 = chapter[5].querySelectorAll('li')
console.log(chapter6);
chapter6[10].after(chapter6[9])

// https://codepen.io/goslyan/pen/ExoXXbe