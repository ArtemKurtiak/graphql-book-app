import {gql} from "@apollo/client";

export const ADD_USER = gql`
    mutation addUser($email: String! $name: String!) {
        addUser(email: $email name: $name) {
            name
            email
          }
    }
`;