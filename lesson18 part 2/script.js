/*Вывести текущий день и время  на страницу в таком формате
Добрый день (утро, вечер, ночь в зависимости от времени суток)
Сегодня: Понедельник
Текущее время:12:05:15 PM
До нового года осталось 175 дней*/
let greeting;
let hours = new Date().getHours();
if (hours >= 5 && hours < 12) greeting = "Доброе утро!";
if (hours >= 12 && hours < 18) greeting = "Добрый день!";
if (hours >= 18 && hours < 24) greeting = "Добрый вечер!";
if (hours >= 0 && hours < 5) greeting = "Доброй ночи!";

//greeting
let div1 = document.querySelector('#div');
let div = document.createElement('div');
div.innerHTML = greeting;
div1.prepend(div);

//Week day
let date = new Date();
let options = { weekday: 'long' };
let weekDay = date.toLocaleDateString('ru', options);
console.log(weekDay);

let weekdayDiv = document.createElement('div');
weekdayDiv.innerHTML = `Сегодня: ${weekDay}`;
div.append(weekdayDiv);

// Текущее время:12:05:15 PM
options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
time = date.toLocaleString('en', options);
let timeDiv = document.createElement('div');
timeDiv.innerHTML = `Текущее время: ${time}`;
weekdayDiv.append(timeDiv);

// До нового года осталось

function diffSubtract(date1, date2) {
    return date2 - date1;
}

// Массив данных о времени
let end_date = {
    "full_year": "1970", // Год
    "month": "01", // Номер месяца
    "day": "01", // День
    "hours": "00", // Час
    "minutes": "00", // Минуты
    "seconds": "00" // Секунды
}

// Строка для вывода времени