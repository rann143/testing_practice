const capitalize = require('./capitalize');
const calculator = require("./calculator");

const title = document.createElement("h1");
title.textContent = "Hello There!";
title.classList.add("blur-back");

document.body.appendChild(title);


console.log(capitalize.capitalize("daniel"));