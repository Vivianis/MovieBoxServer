import { Table, Column, Model, BelongsTo, BelongsToMany, ForeignKey } from 'sequelize-typescript';
import Movie from './movie'
import Person from './person'

@Table
export default class MovieActor extends Model<MovieActor> {

    @ForeignKey(() => Movie)
    @Column
    movieId: number;

    @ForeignKey(() => Person)
    @Column
    personId: number;
}