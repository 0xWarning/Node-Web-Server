/*
 
 Author - 0xWarning
 Github - @0xWarning / https://github.com/0xWarning
 Project - Node Server
 Summary - Node Server with PUG for html

 */


 
const express = require('express');
const app = express();

const port = 3000;

app.set('views', './front');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('tes');
    console.log('visit');
});

app.listen(3000, () => console.log(`Listening on port ${port}`));