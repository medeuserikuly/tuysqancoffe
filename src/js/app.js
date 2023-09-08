import navMenu from "./modules/navMenu.js";
import isWebp from "./modules/webp.js";
import forms from "./modules/forms.js";
import mask from "./modules/mask.js";
import accordion from "./modules/accordion.js";
import scrolling from "./modules/scrolling.js";

window.addEventListener("DOMContentLoaded", () => {
    'use strict';

    isWebp();
    navMenu();
    forms();
    mask('[name="phone"]');
    accordion('.accordion__heading');
    scrolling();

    const whatsapp = document.querySelector('.pulse-button');
    whatsapp.addEventListener('click', () => {
        open("https://wa.me/77777777777");
    });

    
});