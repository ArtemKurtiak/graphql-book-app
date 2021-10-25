import {useQuery} from "@apollo/client";

import {GET_USERS} from "../../graphql/users";
import {useEffect} from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

const Users = ({ users, setUsers }) => {
    const { data } = useQuery(GET_USERS);

    useEffect(async () => {
        setUsers(data?.getAllUsers ? data.getAllUsers : []);
        }, [data]);

    return <>
        {users.map((el, index) => {
            const { name, email } = el;

            return <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {email}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">User code: {index + 1}</Button>
                </CardActions>
            </Card>
        })}
    </>
}

export default Users;