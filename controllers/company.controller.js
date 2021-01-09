module.exports = {

    async create(ctx){

        try {
            ctx.body = await ctx.db.Company.create({
                name: ctx.request.body.name,
                city: ctx.request.body.city,
                address: ctx.request.body.address
            });

        }
        catch (err) {
            ctx.throw(500, err);
        }

    }
};
