import {gql} from "@apollo/client";

export const GET_USERS = gql`
    query {
        getAllUsers {
            email
            name
            _id
        }
    }
`