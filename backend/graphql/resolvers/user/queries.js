const { GraphQLObjectType, GraphQLList } = require('graphql');

const { User } = require('../../../database');
const { UserType } = require('../../typedefs');

module.exports = new GraphQLObjectType({
    name: 'UserQuery',
    fields: {
        getAllUsers: {
            type: GraphQLList(UserType),
            args: {},
            resolve: async () => {
                const users = await User.find();

                return users;
            }
        }
    }
});
