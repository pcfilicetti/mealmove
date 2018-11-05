const typeDefs = `
  type Query {
    #Get the users in the company, must be an admin
    users: [User] 
  }

  type User {
    id: Int!
    name: String!
    email: String!
  }
`;

const resolvers = {
  Query: {
    users: require('./queries/users'),
  },
};

module.exports = { typeDefs, resolvers };