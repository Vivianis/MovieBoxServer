import { Table, Column, Model } from 'sequelize-typescript';
import Movie from './movie'

@Table
export default class Genre extends Model<Genre> {
    @Column
    caption: string;
}