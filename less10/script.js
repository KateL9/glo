//Удалить рекламу со страницы
let advertice = document.querySelector('.adv');
advertice.remove();

//Заменить картинку заднего фона на другую из папки image
// let backgraund = document.getElementsByTagName('body');
document.body.style.background = 'url(image/adv.jpg)';

//Восстановить порядок книг.
let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');
books.append(book[1]);
books.append(book[0]);
books.append(book[4]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
let titleOfBook3 = document.querySelector('body > aside > div:nth-child(3) > h2 > a');
titleOfBook3.innerHTML = 'Книга 3. this и Прототипы Объектов.';

//Восстановить порядок глав во второй и пятой книге 

let book2 = document.querySelector('body > aside > div:nth-child(2) > ul');
let chapter = document.querySelectorAll('body > aside > div:nth-child(2) > ul > li');

book2.append(chapter[3]);
book2.append(chapter[6]);
book2.append(chapter[8]);
book2.append(chapter[4]);
book2.append(chapter[5]);
book2.append(chapter[7]);
book2.append(chapter[9]);
book2.append(chapter[2]);
book2.append(chapter[10]);

let book5 = document.querySelector('body > aside > div:nth-child(5) > ul');
let chapter5 = document.querySelectorAll('body > aside > div:nth-child(5) > ul > li');

book5.append(chapter5[0]);
book5.append(chapter5[1]);
book5.append(chapter5[9]);
book5.append(chapter5[3]);
book5.append(chapter5[4]);
book5.append(chapter5[2]);
book5.append(chapter5[6]);
book5.append(chapter5[7]);
book5.append(chapter5[5]);
book5.append(chapter5[8]);
book5.append(chapter5[10]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

let last = document.querySelector('body > aside > div:nth-child(6) > ul > li:nth-child(10)');
let newLi = document.createElement('li');
newLi.textContent = 'Глава 8: За пределами ES6';
last.before(newLi);