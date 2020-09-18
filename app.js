// const { query } = require('express');
/* eslint linebreak-style: ["error", "windows"] */

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
const db = mongoose.connect('mongodb://localhost/ComProjects', mongoOptions);
const port = process.env.PORT || 3000;
const projectRouter = express.Router();
const Project = require('./models/projModel');

projectRouter.route('/projects')
  .get((req, res) => {
    const { query } = req;
    // http://localhost:4000/projects?System%20Name=ADANABM1 gives me all adana system infos
    Project.find(query, (err, projects) => {
      if (err) {
        return res.send(err);
      }
      return res.json(projects);
    });
  });

app.use(projectRouter);

app.get('/', (req, res) => {
  res.send('welcome to my Nodemon api');
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
