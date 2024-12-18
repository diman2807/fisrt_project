/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


"use strict";


const personalMovieDB = {
    count: 0,
    movies: {

    },
    actors: {

    },
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильомв вы уже посмотрели?");
        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильомв вы уже посмотрели?");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectMyPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if(personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
            if(personalMovieDB.genres == "" || personalMovieDB.genres == null) {
                i--;
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр под номером ${i + 1} это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(!personalMovieDB.private) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    },
    showMyDb: function() {
        if(!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectMyPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDb();
personalMovieDB.writeYourGenres();