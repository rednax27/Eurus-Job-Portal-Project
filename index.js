const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(expressLayouts);
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('layout', './layouts/master');

app.get('/', function (req, res) {
  res.render('pages/index', {
    layout: './layouts/authentication',
  });
});

app.get('/about', function (req, res) {
  res.render('pages/about');
});

app.get('/login-freelancer', function (req, res) {
  res.render('pages/login_freelancer', {
    layout: './layouts/authentication',
  });
});

app.get('/login_employer', function (req, res) {
  res.render('pages/login_employer', {
    layout: './layouts/authentication',
  });
});

app.get('/signup-employer', function (req, res) {
  res.render('pages/signup_employer', {
    layout: './layouts/authentication',
  });
});

app.get('/signup-freelancer', function (req, res) {
  res.render('pages/signup_freelancer', {
    layout: './layouts/authentication',
  });
});

app.get('/browse-jobs', function (req, res) {
  res.render('pages/browse_jobs', {
    layout: './layouts/authentication',
  });
});

app.get('/job-details', function (req, res) {
  res.render('pages/job_details', {
    layout: './layouts/authentication',
  });
});

app.get('/browse-candidate', function (req, res) {
  res.render('pages/browse_candidate', {
    layout: './layouts/authentication',
  });
});

app.get('/candidate-details', function (req, res) {
  res.render('pages/candidate_details', {
    layout: './layouts/authentication',
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
