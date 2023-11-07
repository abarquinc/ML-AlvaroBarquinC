const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(3001, () => console.log('Servidor corriendo'));

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})
*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
})