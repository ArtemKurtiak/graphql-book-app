const { GraphQLSchema } = require('graphql');

const userQuery = require('./queries');
const userMutation = require('./mutations');

module.exports = new GraphQLSchema({
    query: userQuery,
    mutation: userMutation
});
