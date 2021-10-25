import {ApolloClient, from, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const errorLink = onError((errors) => {
    console.log(errors);
})

const usersLink = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:5000/users' })
])

const booksLink = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:5000/books' })
])

export const usersClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: usersLink
})

export const booksClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: booksLink
})