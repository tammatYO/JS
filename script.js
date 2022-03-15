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
let servicePercentPrice = Number(fullPrice) - Number(rollback);

if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%")
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice <= 15000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
    console.log("Что-то пошло не так");
}


/*console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log(screenPrice + " " + "рублей");
console.log(fullPrice + " " + "рублей");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback/100));*/
console.log(servicePercentPrice)

/*alert ("Hello world!");
console.log("Hello world!");*/