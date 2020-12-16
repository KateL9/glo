/*Вывести текущий день и время  на страницу в таком формате
Добрый день (утро, вечер, ночь в зависимости от времени суток)
Сегодня: Понедельник
Текущее время:12:05:15 PM
До нового года осталось 175 дней*/
function update() {
    let greeting;
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) greeting = "Доброе утро!";
    if (hours >= 12 && hours < 18) greeting = "Добрый день!";
    if (hours >= 18 && hours < 24) greeting = "Добрый вечер!";
    if (hours >= 0 && hours < 5) greeting = "Доброй ночи!";

    //greeting
    const div1 = document.querySelector('#div');
    const div = document.createElement('div');
    div.innerHTML = greeting;
    div1.append(div);

    //Week day
    const date = new Date();
    let options = { weekday: 'long' };
    const weekDay = date.toLocaleDateString('ru', options);

    const weekdayDiv = document.createElement('div');
    weekdayDiv.innerHTML = `Сегодня: ${weekDay}`;
    div.append(weekdayDiv);

    //До нового года осталось
    const newYear = document.createElement('div');

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
    weekdayDiv.append(newYear);

    // Текущее время:12:05:15 PM
    const timeDiv = document.createElement('div');
    newYear.append(timeDiv);

    function currentTime() {
        options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        time = new Date().toLocaleString('en', options);
        timeDiv.innerHTML = `Текущее время: ${time}`;
    }
    setInterval(currentTime, 10);
}

update();
