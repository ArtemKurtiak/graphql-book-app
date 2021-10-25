const {
    GraphQLInt, GraphQLObjectType, GraphQLString
} = require('graphql');

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        _id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        year: {
            type: GraphQLInt
        },
        user: {
            type: new GraphQLObjectType({
                name: 'User',
                fields: () => ({
                    _id: {
                        type: GraphQLString
                    },
                    name: {
                        type: GraphQLString
                    },
                    email: {
                        type: GraphQLString
                    }
                })
            })
        }
    })
});

module.exports = BookType;
