const express = require('express');

const app = express();
app.use(express.json())

const path = require('path');
const { env } = require('process');
const port = process.env.PORT || 3001;

require('dotenv').config()
const appPassword = process.env.APP_PASSWORD;

const { Sequelize, Model, DataTypes } = require("sequelize");
const config = require('./config/config.json');
const { sequelize } = require('./models/index.js');
const db = require('./models/index.js');
const projects = require('./models/projects');

app.get('/', function (req, res) {
   res.status(200)

   res.sendFile(path.join(__dirname + '/index.html'))
})

/***
 * Projects
 * 
 */

app.get('/projects', function (req, res) {
   req.accepts('application/json')
   res.type('application/json')

   db.Projects
      .findAll()
      .then(
         (items) => {
            res.status(200)
            res.send(JSON.stringify(items))
         },
         (e) => {
            res.status(500)
            res.send(e)
         })
})

app.get('/projects/:url', function (req, res) {
   req.accepts('application/json')
   res.type('application/json')

   db.Projects
      .findAll({
         where: {
            id: req.params.url
         }
      }).then(
         (item) => {
            res.status(200)
            res.json(item)
         }, (e) => {
            res.status(500)
            res.send(e)

         })
})

app.post('/projects', function (req, res) {
   req.accepts('application/json')

   const password = req.headers.password

   if (password !== appPassword) {
      res.status(401)
      res.send('<h1>Solicitação Rejeitada</h1>')
   } else {
      res.type('application/json')
      db.Projects
         .create(req.body)
         .then(
            (item) => {
               res.status(201)
               res.json(item)
            },
            (fail) => {
               res.status(500)
               res.send(fail)
            })
   }
})

app.put('/projects/:id', function (req, res) {
   req.accepts('application/json')

   const password = req.headers.password

   if (password !== appPassword) {
      res.status(401)
      res.send('<h1>Solicitação Rejeitada</h1>')
   } else {
      db.Projects
         .update(
            req.body, {
            where: {
               id: req.params.id
            }
         })
         .then(
            (item) => {
               res.status(200)
               res.json(item)
            },
            (fail) => {
               res.status(500)
               res.send(fail)
            })
   }
})

app.delete('/projects/:id', function (req, res) {
   const password = req.headers.password

   if (password !== appPassword) {
      res.status(401)
      res.send('<h1>Solicitação Rejeitada</h1>')
   } else {
      db.Projects
         .destroy({
            where: {
               id: req.params.id
            }
         })
         .then(
            (item) => {
               res.status(200)
               console.log(item)
               res.send("Item deletado id: " + req.params.id)
            })
         .catch((e) => {
            res.status(500)
            res.send(e)
         })
   }
})


/**
 * Contents
 */

app.get('/contents', function (req, res) {
   req.accepts('application/json')
   res.type('application/json')

   db.Contents
      .findAll()
      .then(
         (items) => {
            res.status(200)
            res.send(JSON.stringify(items))
         },
         (e) => {
            res.status(500)
            res.send(e)
         })
})

app.get('/contents/:url', function (req, res) {
   req.accepts('application/json')
   res.type('application/json')

   db.Contents
      .findAll({
         where: {
            url: req.params.url
         }
      }).then(
         (item) => {
            res.status(200)
            res.json(item)
         }, (e) => {
            res.status(500)
            res.send(e)

         })
})

app.post('/contents', function (req, res) {
   req.accepts('application/json')
   res.type('application/json')

   const password = req.headers.password

   if (password !== appPassword) {
      res.status(401)
      res.send('<h1>Solicitação Rejeitada</h1>')
   } else {
      db.Contents
         .create(req.body)
         .then(
            (item) => {
               res.status(200)
               res.json(item)
            },
            (fail) => {
               res.status(500)
               res.send(fail)
            })
   }
})

app.put('/contents/:id', function (req, res) {
   const password = req.headers.password

   if (password !== appPassword) {
      res.status(401)
      res.send('<h1>Solicitação Rejeitada</h1>')
   } else {
      db.Contents
         .update(req.body, {
            where: {
               id: req.params.id
            }
         })
         .then(
            (item) => {
               res.status(200)
               res.json(item)
            },
            (fail) => {
               res.status(500)
               res.send(fail)
            })
   }
})

app.delete('/contents/:id', function (req, res) {
   const password = req.headers.password

   if (password !== appPassword) {
      res.status(401)
      res.send('<h1>Solicitação Rejeitada</h1>')
   } else {
      db.Contents
         .destroy({
            where: {
               id: req.params.id
            }
         })
         .then(
            (item) => {
               res.status(200)
               console.log(item)
               res.send("Item deletado id: " + req.params.id)
            })
         .catch((e) => {
            res.status(500)
            res.send(e)
         })
   }
})



app.listen(port, () => console.log(`App listening port ${port}`))