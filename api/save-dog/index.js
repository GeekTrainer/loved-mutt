module.exports = async function (context, req) {
    const { MongoClient } = require("mongodb");
    const uri = process.env.MONGO_CONNECTION_STRING;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect();
        const database = client.db('loved-mutt');
        const favorites = database.collection('favorites');
        const doc = {
            imageUrl: req.body.imageUrl
        };
        const result = await favorites.insertOne(doc);
        context.res = {
            body: result
        };
    } catch (ex) {
        context.res = {
            body: ex
        };
    } finally {
        client.close();
    }
}