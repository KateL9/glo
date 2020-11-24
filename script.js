let money = 2000,
    income = 'freelance',
    addExpenses = 'HealTH, Taxes, Courses, gYm, English',
    deposit = false,
    mission = 40000,
    period = 2;
//Вывести в консоль тип данных значений переменных money, income, deposit;
console.log('money - ' + typeof(money) + ', ' + 'income - ' + typeof(income) + ', ' + 'deposit - ' + typeof(deposit));
//Вывести в консоль длину строки addExpenses
console.log(addExpenses.length);
//Вывести в консоль“ Период равен(period) месяцев” и“ Цель заработать(mission) рублей / долларов / гривен / юани” ;
console.log(`Period is equal to ${period} months and Goal is to earn ${mission}$`);
//Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль;
console.log(addExpenses.toLocaleLowerCase().split());
//Объявить переменную budgetDay и присвоить дневной бюджет(доход за месяц / 30). Вывести в консоль budgetDay;
let budgetMonth = 2000;
let budgetDay = Math.round(budgetMonth / 30);
console.log(budgetDay);

//Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
money = prompt('What is your month income?', '');
/*Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” 
сохранить в переменную addExpenses*/
addExpenses = prompt('Enter your possible expenses for the calculated period, separated by comma', '');
console.log(addExpenses);
//Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)
deposit = confirm('Do you have any deposits?', false);
/* Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
1.“Введите обязательную статью расходов?” (например expenses1, expenses2)
2.“Во сколько это обойдется?” (например amount1, amount2)
в итоге 4 вопроса и 4 разные переменных*/
let expenses1 = prompt('Enter required expense item1 (string)', ''),
    expenses2 = prompt('Enter required expense item2 (string)', ''),
    amount1 = +prompt('How much does expense item1 cost? (number)', '0'),
    amount2 = +prompt('How much does expense item2 cost? (number)', '0');
//Вычислить бюджет на месяц, учитывая обязательные расходы, сохранить в новую переменную budgetMonth и вывести результат в консоль
let budgetMonth1 = money - amount1 - amount2;
console.log(`Month budget ${budgetMonth1}`);
/*Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, 
вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)*/
let periodOfmission = Math.ceil(mission / budgetMonth1);
console.log(`The goal will be achieved after ${periodOfmission}`);
//Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону
budgetDay = Math.floor(budgetMonth1 / 30);
console.log(`budgetDay ${budgetDay}`);
/*Написать конструкцию условий (расчеты приведены в рублях)	
Если budgetDay больше 1200, то “У вас высокий уровень дохода”
Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
Если отрицательное значение то вывести “Что то пошло не так”
Учесть варианты 0, 600 и 1200 (к какому уровню не важно)*/
if (budgetDay < 600 && budgetDay >= 0) {
    alert('Unfortunately your income is below average');
} else if (budgetDay >= 600 && budgetDay <= 1200) {
    alert('Your income is avarage');
} else if (budgetDay > 1200) {
    alert('Your income is high');
} else {
    alert('Something goes wrong!');
}