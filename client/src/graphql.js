const schema = require('./resolvers');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');


module.exports = app => {
  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress(request => ({ schema, context: request.user }))
  );
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
};