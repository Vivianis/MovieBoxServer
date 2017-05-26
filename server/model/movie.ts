import { Table, Column, Model, BelongsTo, BelongsToMany, ForeignKey, HasOne, HasMany } from 'sequelize-typescript';

@Table
export default class movie_store extends Model<movie_store> {
    @Column
    movie_name: string;

    @Column
    movie_director: string;

    @Column
    movie_actor1: string;

    @Column
    movie_actor2: string;

    @Column
    movie_actor3: string;

    @Column
    movie_style: string;

    @Column
    show_time: Date;

    @Column
    imge_url: string;

    static async getAll() {
        return await movie_store.findAll<movie_store>()
    }

    static async getById(id: number) {
        return await movie_store.findById<movie_store>()
    }
}