import {gql} from "@apollo/client";

export const ADD_BOOK = gql`
    mutation createBook($name: String! $year: Int! $user: String!) {
        createBook(name: $name year: $year user: $user) {
            name
            year
            user {
                name
                _id
                email
            }
        }
    }
`

export const UPDATE_BOOK = gql`
    mutation updateBookById($name: String! $year: Int! $id: String!) {
        updateBookById(name: $name year: $year id: $id) {
            name
            year
            user {
                name
                _id
                email
            }
        }
    }
`