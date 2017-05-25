import { Promise } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

import Genre from './model/genre'
import Person from './model/person'
import Movie from './model/movie'
import MovieActor from './model/movieActor'

const sequelize = new Sequelize({
    name: 'movies',
    dialect: 'mysql',
    host: 'localhost',
    username: 'web',
    password: '',
    modelPaths: [__dirname + '/model']
});

export default function init() {
    sequelize
        .sync({ force: true })
        .then(() => Promise.all([
            Genre.create<Genre>({ caption: 'history' }),
            Genre.create<Genre>({ caption: 'love' }),
        ]))
        .then(() => Promise.all([
            Movie.create<Movie>({ name: '夜宴', genreId: 1 }),
            Movie.create<Movie>({ name: '不见不散', genreId: 2 }),

            Person.create<Person>({ name: '张艺谋', directMovieId: 1 }),
            Person.create<Person>({ name: '冯小刚', directMovieId: 2 })
        ]))
        .then(() => Promise.all([
            MovieActor.create<MovieActor>({ movieId: 1, personId: 1 }),
            MovieActor.create<MovieActor>({ movieId: 1, personId: 2 }),
            MovieActor.create<MovieActor>({ movieId: 2, personId: 1 })
        ]))
        .then(() => Movie
            .findAll<Movie>({
                include: [{
                    model: Genre
                }, {
                    model: Person,
                    as: 'director'
                }, {
                    model: Person,
                    as: 'actors'
                }]
            })
            .then(movies => {
                console.log(movies[0]);
            })
        ).then(() => Person
            .findAll<Person>({
                include: [{
                    model: Movie
                }]
            })
            .then(persons => {
                console.log(persons);
            })
        );
}
