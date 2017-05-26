import { Table, Column, Model, BelongsTo, BelongsToMany, ForeignKey, HasOne, HasMany } from 'sequelize-typescript';
import Genre from './genre'
import Person from './person'
import MovieActor from './movieActor'

@Table
export default class Movie extends Model<Movie> {
    @Column
    name: string;

    @ForeignKey(() => Genre)
    @Column
    genreId: number;

    @BelongsTo(() => Genre)
    genre: Genre;

    @HasOne(() => Person, 'directMovieId')
    director: Person;

    @BelongsToMany(() => Person, () => MovieActor)
    actors: Person[];

    @Column
    showTime: string;

    @Column
    imgUrl: string;

    static async getAll() {
        return await Movie.findAll<Movie>({
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
    }

    static async getById(id: number) {
        return await Movie.findById<Movie>(id, {
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
    }
}