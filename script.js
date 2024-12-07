"use strict";

const numberOfFilms = +prompt("Сколько фильомв вы уже посмотрели?");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    private: false
};

let a = prompt("Один из последних просмотренных фильмов?"), 
    b = +prompt("На сколько оцените его?"),
    c = prompt("Один из последних просмотренных фильмов?"), 
    d = +prompt("На сколько оцените его?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



