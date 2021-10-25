import { useState} from "react";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useMutation} from "@apollo/client";

import {ADD_BOOK} from "../../graphql/books";

const CreateBookForm = ({ users }) => {

    const [addBook] = useMutation(ADD_BOOK);

    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [user, setUser] = useState('');

    const createBookHandler = () => {
        addBook({
            variables: {
                year: Number(year),
                name,
                user
            }
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
            label="Year"
            color="secondary"
            focused onChange={(e) => {
            setYear(e.target.value);
        }}
        />
        <FormControl sx={{maxWidth: 200, width: 200, ml: 1}}>
            <InputLabel id="demo-simple-select-label">User</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user}
                label="Age"
                onChange={(e) => {
                    setUser(e.target.value)
                }}
            >
                {users.map((el) => {
                    return <MenuItem value={el._id}>
                        {el.name}
                    </MenuItem>
                })}
            </Select>
        </FormControl>
        <Button
            variant="contained"
            color="success"
            sx={{marginLeft: '10px'}}
            onClick={createBookHandler}
        >
            Add
        </Button>
    </Box>
}

export default CreateBookForm;