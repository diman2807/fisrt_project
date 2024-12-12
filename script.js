

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильомв вы уже посмотрели?");
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильомв вы уже посмотрели?");
    }
} 

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    private: false
};

function rememberMyFilms() {
    let a = null, b = null;
    for(let i = 0; i < 2; i++) {
    
        a = prompt("Один из последних просмотренных фильмов?");
        while(a === "" || a === null || a.length > 50) {
            a = prompt("Один из последних просмотренных фильмов?");
        }
    
        b = +prompt("На сколько оцените его?");
        while(b === "" || b === 0) {
            b = +prompt("На сколько оцените его?");
        }
        personalMovieDB.movies[a] = b;
    }
}
rememberMyFilms();


function detectMyPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if(personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}
detectMyPersonalLevel();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}
writeYourGenres();

function showMyDb() {
    if(!personalMovieDB.private) {
        console.log(personalMovieDB);
    }
}
showMyDb();




