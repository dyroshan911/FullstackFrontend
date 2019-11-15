module.exports = (options, app) => {
    return async function(ctx, next) {
        const start = new Date();
        await next();
        console.log(options.prefix, new Date() - start);
    }
}