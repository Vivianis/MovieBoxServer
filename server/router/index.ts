import * as Router from "koa-router";
import * as Sequelize from "sequelize";

import movie_store from '../model/movie'

export let router = new Router();

router.get("/movies", async (ctx) => {
    ctx.body = await movie_store.getAll();
});
router.get("/movies/:id", async (ctx) => {
    ctx.body = await movie_store.getById(ctx.params.id);
})

