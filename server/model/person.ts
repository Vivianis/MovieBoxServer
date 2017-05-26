import { Table, Column, Model, BelongsToMany, ForeignKey, HasMany } from 'sequelize-typescript';
import Movie from './movie'
import MovieActor from './movieActor'

@Table
export default class Person extends Model<Person> {
    @Column
    name: string;

    @ForeignKey(() => Movie)
    @Column
    directMovieId: number;

    @BelongsToMany(() => Movie, () => MovieActor)
    movies: Movie[];
}