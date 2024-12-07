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

let film1 = prompt("Один из последних просмотренных фильмов?"), 
    mark1 = +prompt("На сколько оцените его?"),
    film2 = prompt("Один из последних просмотренных фильмов?"), 
    mark2 = +prompt("На сколько оцените его?");

personalMovieDB.movies.film1 = mark1;
personalMovieDB.movies.film2 = mark2;

console.log(personalMovieDB);



