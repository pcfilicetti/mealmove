const users = require('./users');
const data = require('./data');

const { makeExecutableSchema, mergeSchemas } = require('graphql-tools');

module.exports = mergeSchemas({
  schemas: [
    makeExecutableSchema(users),
    makeExecutableSchema(data)
  ],
});
