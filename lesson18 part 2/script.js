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

//До нового года осталось
let newYear = document.createElement('div');

function daysLeftNewYear() {
    targeDay = new Date("December 31, 2020");
    daysRemaining = Math.round((targeDay.getTime() - date.getTime()) / (24 * 60 * 60 * 1000));
    dayname = "";
    str = "" + daysRemaining;
    lastDigit = parseInt(str.slice(1, str.length - 1));

    if (daysRemaining > 4 && daysRemaining < 21) dayname = " дней";
    if (lastDigit == 1) dayname = " день";
    if (lastDigit == 2 || lastDigit == 3 || lastDigit == 4) dayname = " дня";
    else dayname = " дней";

    if (daysRemaining < 0) return ("С новым годом!!!");
    if (daysRemaining == 0) return ("Завтра новый год!");
    else {
        return ("До нового года осталось " + daysRemaining + dayname + "!");
    }
}
newYear.innerHTML = daysLeftNewYear();
timeDiv.append(newYear);
