import {useState} from "react";
import {ApolloProvider} from "@apollo/client";

import Users from "./components/Users/Users";
import {usersClient, booksClient} from "./apollo-clients";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Books from "./components/Books/Books";
import CreateBookForm from "./components/CreateBookForm/CreateBookForm";


const App = () => {
    const [users, setUsers] = useState([]);

    return <>
        <ApolloProvider client={usersClient}>
            <Users users={users} setUsers={setUsers} />
            <RegisterForm/>
            <ApolloProvider client={booksClient}>
                <Books />
                <CreateBookForm users={users} />
            </ApolloProvider>
        </ApolloProvider>
    </>
}

export default App;