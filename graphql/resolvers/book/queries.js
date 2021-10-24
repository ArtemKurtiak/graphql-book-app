const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const { BookType } = require('../../typedefs');
const { Book } = require('../../../database');

module.exports = new GraphQLObjectType({
    name: 'BookQuery',
    fields: {
        getAllBooks: {
            type: GraphQLList(BookType),
            args: {},
            resolve: async () => {
                const books = await Book.find();

                return books;
            }
        },
        getBookById: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve: async (_, args) => {
                const { id } = args;

                const book = await Book.findById(id);

                return book;
            }
        },
        getAllUserBooks: {
            type: GraphQLList(BookType),
            args: {
                user: { type: GraphQLString }
            },
            resolve: async (_, args) => {
                const { user } = args;

                const books = await Book.find({ user });

                return books;
            }
        }
    }
});
