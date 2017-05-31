import { Promise } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

import movie_store from './model/movie';
import seat_area from './model/seat';

const sequelize = new Sequelize({
    name: 'MovieStore',
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'web',
    password: '',
    modelPaths: [__dirname + '/model']
});

export default function init() {
    sequelize
        .sync({ force: false })
    seat_area.getSeats()
            .then(seats => 
                  console.log(`${seats}`)
            )
}
