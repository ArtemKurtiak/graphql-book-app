const { GraphQLInt, GraphQLObjectType, GraphQLString } = require('graphql');

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        _id: {
            type: GraphQLString
        },
        user: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        year: {
            type: GraphQLInt
        }
    })
});

module.exports = BookType;
