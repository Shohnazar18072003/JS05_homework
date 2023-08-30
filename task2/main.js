"use strict";

let loginBlock = document.getElementById("login");
let homeBlock = document.getElementById("home");
let username = document.getElementById("username");
let login = false;
let home = false;

let user = "admin";

if (!login) {
  loginBlock.style.display = "none";
} else {
  loginBlock.style.display = "block";
}

if (!home) {
  homeBlock.style.display = "none";
} else {
  homeBlock.style.display = "block";
}

function loginf() {
  login = true;
  loginBlock.style.display = "block";
}

function loginUser() {
  if (username.value == user) {
    home = true;
    homeBlock.style.display = "block";
    loginBlock.style.display = "none";
  } else {
    console.log('You are not logged in');
  }
}