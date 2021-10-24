const { GraphQLObjectType, GraphQLString } = require('graphql');
const { UserType } = require('../../typedefs');
const { User } = require('../../../database');

module.exports = new GraphQLObjectType({
    name: 'UserMutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: {
                    type: GraphQLString
                },
                email: {
                    type: GraphQLString
                }
            },
            resolve: async (_, args) => {
                const user = await User.create({ ...args });

                return user;
            }
        }
    }
});
