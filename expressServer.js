const express = require('express')
const app = express();

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