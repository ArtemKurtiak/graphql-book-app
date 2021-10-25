import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import {useMutation} from "@apollo/client";
import {ADD_USER} from "../../graphql/users";


const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [addUser] = useMutation(ADD_USER);

    const createUserHandler = () => {
        addUser({
            variables: { name, email }
        })
    }

    return <Box sx={{p: 3, display: 'flex', alignItems: 'center'}}>
        <TextField
            sx={{marginRight: '10px'}}
            label="Name"
            color="secondary"
            focused onChange={(e) => {
            setName(e.target.value);
        }}
        />
        <TextField
            label="Email"
            color="secondary"
            focused onChange={(e) => {
            setEmail(e.target.value);
        }}
        />
        <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: '10px' }}
            onClick={createUserHandler}
        >
            Register
        </Button>
    </Box>
}

export default RegisterForm;