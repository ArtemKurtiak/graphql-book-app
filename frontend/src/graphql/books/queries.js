import {gql} from "@apollo/client";

export const GET_BOOKS = gql`
    query {
        getAllBooks {
            name
            _id
            user {
              _id
              name
              email
            }
            year
        }
    }
`