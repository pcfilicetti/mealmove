const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const app = express();
const bodyParser = require ('body-parser');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

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
  console.log('Server on localhost:' + PORT)
});
