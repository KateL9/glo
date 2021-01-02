'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import hoverEffect from './modules/hoverEffect';
import calc from './modules/calc';
import validation from './modules/validation';
import isValid from './modules/isValid';
import sendForm from './modules/sendForm';

countTimer('26 january 2021');

toggleMenu();

togglePopUp();

tabs();

slider();

hoverEffect();

calc(100);

//send ajax-form

validation();

isValid();

sendForm("form1");
sendForm("form2");
sendForm("form3");