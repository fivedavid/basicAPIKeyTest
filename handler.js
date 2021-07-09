const { create, jsonMiddleware } = require('slspress');

const handler = create();

handler.on('handle')
    .middleware(jsonMiddleware)
    .get('/hello', (req, res) => {
        return res.ok('hello-world');
    });

module.exports = handler.export();
