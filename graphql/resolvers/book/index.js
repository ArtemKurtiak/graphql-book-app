const { GraphQLSchema } = require('graphql');

const bookQuery = require('./queries');
const bookMutation = require('./mutations');

module.exports = new GraphQLSchema({
    query: bookQuery,
    mutation: bookMutation
});
