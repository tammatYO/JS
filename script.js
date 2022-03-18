let title = prompt("Как назывется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
let rollback = 80;
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice1 = prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = prompt("Сколько это будет стоить?");
let fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
let servicePercentPrice;
let allServicePrices;

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
const getAllServicePrices = function(servicePrice1, servicePrice2) {
    return (servicePrice1 + servicePrice2)
}
allServicePrices = getAllServicePrices(+servicePrice1, +servicePrice2);

function getFullPrice(screenPrice, allServicePrices) {
    return (screenPrice + allServicePrices)
}
fullPrice = getFullPrice(+screenPrice, +allServicePrices);

const getTitle = function() {
    return title.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
title = getTitle();

function getServicePercentPrice(fullPrice, rollback) {
    return (fullPrice - rollback)
}
servicePercentPrice = getServicePercentPrice(+fullPrice, +rollback);

showTypeOf(title)
showTypeOf(allServicePrices)

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