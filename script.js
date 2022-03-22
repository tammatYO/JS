let title = prompt("Как назывется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
let rollback = 80;
let service1;
let service2;
let servicePrice1;
let servicePrice2;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice;
let allServicePrices;

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}
const asking = function() {
    title = prompt('Как называется ваш проект?', "Название проекта");
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
do {
    screenPrice = prompt('Сколько будет стоить данная работа?')
} while (!isNumber(screenPrice))

adaptive = confirm('Нужен ли адаптив на сайте?');
}
const getAllServicePrices = function() {
    let sum = 0;
    let n = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            let service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            let service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        do {
            n = +prompt('Сколько это будет стоить?');
        } while(!isNumber(n))
        
        sum += n;
    }
    return sum
    // return servicePrice1 + servicePrice2;
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}
if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%")
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice <= 15000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
    console.log("Что-то пошло не так");
}
const getAllServicePrice = function(servicePrice1, servicePrice2) {
    return (servicePrice1 + servicePrice2)
}


function getFullPrice(screenPrice, allServicePrices) {
    return (screenPrice + allServicePrices)
}


const getTitle = function() {
    return title.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}


function getServicePercentPrice(fullPrice, rollback) {
    return (fullPrice - rollback)
}

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrice();

showTypeOf(title)
showTypeOf(allServicePrices)
showTypeOf(adaptive)
showTypeOf(servicePercentPrice)

//console.log(allServicePrices);
//console.log(title);
/*
console.log(adaptive);
console.log(screens.length);
console.log(screenPrice + " " + "рублей");
*/
console.log(screens.toLowerCase().split(", "));
//console.log(fullPrice * (rollback/100));
//console.log(fullPrice + " " + "рублей");
//console.log(servicePercentPrice);


/*alert ("Hello world!");
console.log("Hello world!");*/