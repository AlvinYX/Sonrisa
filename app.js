'use strict'
// Get's the button reference
const switcher = document.querySelector('.btn');
// Listens for 'click' event
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    // Labels the button name, using var for simpler name 
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    // Will only show up in dev. tools
    console.log('current class name: ' + className);
});
