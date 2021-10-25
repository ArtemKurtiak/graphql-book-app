const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const { BookType } = require('../../typedefs');
const { Book } = require('../../../database');

module.exports = new GraphQLObjectType({
    name: 'BookMutation',
    fields: {
        createBook: {
            type: BookType,
            args: {
                user: { type: GraphQLString },
                name: { type: GraphQLString },
                year: { type: GraphQLInt }
            },
            resolve: async (_, args) => {
                const book = await Book.create({
                    ...args
                });

                return book;
            }
        },
        updateBookById: {
            type: BookType,
            args: {
                id: { type: GraphQLString },
                name: { type: GraphQLString },
                year: { type: GraphQLInt }
            },
            resolve: async (_, args) => {
                const { id, name, year } = args;

                const book = await Book.findByIdAndUpdate(id, { name, year }, { new: true });

                return book;
            }
        },
        deleteBook: {
            type: GraphQLString,
            args: {
                id: { type: GraphQLString }
            },
            resolve: async (_, args) => {
                const { id } = args;

                await Book.findByIdAndDelete(id);

                return 'success';
            }
        }
    }
});
