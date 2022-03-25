'use strict'


const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    rollback: 80,
    service1: '',
    service2: '',
    servicePrice1: '',
    servicePrice2: '',
    adaptive: true,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    start: function () {
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrice()
        appData.title = appData.getTitle()
        appData.logger()
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    asking: function() {
        appData.title = prompt('Как называется ваш проект?', "Название проекта");
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
    do {
        appData.screenPrice = prompt('Сколько будет стоить данная работа?', "12000")
    } while (!appData.isNumber(appData.screenPrice))
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    getAllServicePrices: function() {
        let sum = 0;
        let n = 0;
    
        for (let i = 0; i < 2; i++) {
    
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }
    
            do {
                n = +prompt('Сколько это будет стоить?');
            } while(!appData.isNumber(n))
            
            sum += n;
        }
        return sum
        // return servicePrice1 + servicePrice2;
    },
    getAllServicePrice: function() {
        return (+appData.servicePrice1 + +appData.servicePrice2)
    },
    
    getFullPrice: function () {
        return (+appData.screenPrice + +appData.allServicePrices)
    },
    
    getTitle: function() {
        return appData.title.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    },
    
    getServicePercentPrice: function() {
        return (+appData.fullPrice * (+appData.rollback / 100))
    },
    getRollbackMassage: function(price) {
        if (appData.fullPrice >= 30000) {
            console.log("Даем скидку в 10%");
        } else if (appData.fullPrice >= 15000 && appData.fullPrice <= 30000) {
            console.log("Даем скидку в 5%");
        } else if (appData.fullPrice <= 15000 && appData.fullPrice > 0) {
            console.log("Скидка не предусмотрена");
        } else if (appData.fullPrice <= 0) {
            console.log("Что-то пошло не так");
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
    }
}

appData.start()