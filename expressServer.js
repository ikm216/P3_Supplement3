/**
 * @file Express server implementation.
 * @description A simple Express server with a root endpoint that responds with "hello world".
 */

const express = require('express')
const app = express();

/**
 * Root endpoint that responds with "hello world".
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object
 * @returns {void}
 */
app.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = app;

if(require.main === module){
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log('Server is running with hello word');
    });
}