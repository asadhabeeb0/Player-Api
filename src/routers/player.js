const Router = require("koa-router");
const router = new Router();
const PlayersRanking = require("../model/player");

router.post("/player", async (ctx) => {
    try {
        const addingPlayer = new PlayersRanking(ctx.request.body);
        const insertPlayer = await addingPlayer.save();
        ctx.status = 201;
        ctx.body = insertPlayer;
    } catch (e) {
        ctx.status = 400;
        ctx.body = e;
    }
});

router.get("/players", async (ctx) => {
    try {
        const getPlayers = await PlayersRanking.find({}).sort({ ranking: 1 });
        ctx.status = 200;
        ctx.body = getPlayers;
    } catch (e) {
        ctx.status = 400;
        ctx.body = e;
    }
});

router.get("/player/:id", async (ctx) => {
    try {
        const _id = ctx.params.id;
        const getPlayer = await PlayersRanking.findById(_id);
        if (!getPlayer) {
            ctx.status = 404;
            ctx.body = { message: "Player not found" };
        } else {
            ctx.status = 200;
            ctx.body = getPlayer;
        }
    } catch (e) {
        ctx.status = 400;
        ctx.body = e;
    }
});

router.patch("/player/:id", async (ctx) => {
    try {
        const _id = ctx.params.id;
        const updatePlayer = await PlayersRanking.findByIdAndUpdate(_id, ctx.request.body, {
            new: true,
        });
        if (!updatePlayer) {
            ctx.status = 404;
            ctx.body = { message: "Player not found" };
        } else {
            ctx.status = 200;
            ctx.body = updatePlayer;
        }
    } catch (e) {
        ctx.status = 500;
        ctx.body = e;
    }
});

router.delete("/player/:id", async (ctx) => {
    try {
        const _id = ctx.params.id;
        const deletePlayer = await PlayersRanking.findByIdAndDelete(_id);
        if (!deletePlayer) {
            ctx.status = 404;
            ctx.body = { message: "Player not found" };
        } else {
            ctx.status = 200;
            ctx.body = deletePlayer;
        }
    } catch (e) {
        ctx.status = 500;
        ctx.body = e;
    }
});

module.exports = router;