import express from 'express';

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', { name: 'John', age: 30, address: 'New York'});
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/code', (req, res) => {
    res.status (404).send("hello");
});

app.get('/code1', (req, res) => { 
    res.sendStatus(404);
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});