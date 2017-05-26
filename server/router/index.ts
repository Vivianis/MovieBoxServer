import * as Router from "koa-router";
import * as Sequelize from "sequelize";

import Genre from '../model/genre'
import Person from '../model/person'
import Movie from '../model/movie'
import MovieActor from '../model/movieActor'

export let router = new Router();

router.get("/movies", async (ctx) => {
    ctx.body = await Movie.getAll();
});
router.get("/movies/:id", async (ctx) => {
    ctx.body = await Movie.getById(ctx.params.id);
})

