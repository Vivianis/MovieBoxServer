import * as Router from "koa-router";
import * as Sequelize from "sequelize";

import movie_store from '../model/movie';
import seat_area from '../model/seat';

export let router = new Router();

router.get("/movies", async (ctx) => {
    ctx.body = await movie_store.getAll();
});
router.get("/movies/:id", async (ctx) => {
    ctx.body = await movie_store.getById(ctx.params.id);
});
router.post("/movies/:id/degree/:degree", async (ctx) => {
    movie_store.updateDegree(ctx.params.id, ctx.params.degree);
    ctx.body = {};
    ctx.status = 200;
});
router.post("/movies/seat/:id", async (ctx) => {
    seat_area.updateSeat(ctx.params.id);
    ctx.body = {};
    ctx.status = 200;
});
router.get("/seats", async (ctx) => {
    ctx.body = await seat_area.getSeats();
});
