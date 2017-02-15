const Wine = require('../models/wine');

module.exports = (server) => {

    server.post('/wines', (request, response, next) => {
        const wine = new Wine(request.body);

        wine.save().then((saved) => {
            response.send(201, saved);
            return next();
        }).catch((error) => {
            return next(error);
        });
    });

    server.get('/wines', (request, response, next) => {
        Wine.find().then((result) => {
            response.send(200, result);
            return next();
        });
    });
};