const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');

dotenv.config();

const { PORT, MONGO_URL } = require('./constants');
const { bookSchema, userSchema } = require('./graphql/resolvers');

const app = express();

mongoose.connect(MONGO_URL);

app.use('/users', graphqlHTTP({
    graphiql: true,
    schema: userSchema
}));

app.use('/books',
    graphqlHTTP({
        graphiql: true,
        schema: bookSchema
    }));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
