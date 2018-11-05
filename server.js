const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const app = express();
const jwt = require('express-jwt');
const bodyParser = require ('body-parser');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
// const routes = require('./src/routes');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pickups');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.json());
//in a routes file:
app.get('/data', async(req,res)=> {
  let data = await DataCue.query()
    .limit(15);

    res.send(data);
});

var schema = buildSchema (`type Query
{ 
  message: String
}
`);

//root resolver
var root = {
  message: () => 'Hello World!'
};

// var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.use(routes);

app.listen(PORT, () => {
  console.log('Express GraphQL Server Now Running On localhost:3000/graphql')
});
