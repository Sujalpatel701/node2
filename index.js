import express from 'express';
import path from 'path';
const app = express();


const users=[];
app.set('view engine', 'ejs');

app.use(express.static(path.join(path.resolve(), 'public')));
//use middle ware
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/success', (req, res) => {
    res.render("success");
});

app.post('/', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.phone);
     
    users.push({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    
    });
    res.render('success', { users: users });
    res.redirect('/success');
    res.send('Data received');

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