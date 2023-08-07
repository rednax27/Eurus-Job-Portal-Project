const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();

app.use(expressLayouts);
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('layout', './layouts/master');

app.get('/', function (req, res) {
  res.render('pages/index');
});

app.get('/about', function (req, res) {
  res.render('pages/about');
});

app.get('/login_freelancer', function (req, res) {
  res.render('pages/login_freelancer', {
    layout: './layouts/authentication',
  });
});

app.get('/login_employer', function (req, res) {
  res.render('pages/login_employer', {
    layout: './layouts/authentication',
  });
});

app.get('/signup_employer', function (req, res) {
  res.render('pages/signup_employer', {
    layout: './layouts/authentication',
  });
});

app.get('/signup_freelancer', function (req, res) {
  res.render('pages/signup_freelancer', {
    layout: './layouts/authentication',
  });
});

app.get('/browse_jobs', function (req, res) {
  res.render('pages/browse_jobs', {
    layout: './layouts/authentication',
  });
});

app.get('/job_details', function (req, res) {
  res.render('pages/job_details', {
    layout: './layouts/authentication',
  });
});

app.listen(3000);
console.log('Server is running');
