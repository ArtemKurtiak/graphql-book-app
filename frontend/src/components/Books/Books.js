import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_BOOKS} from "../../graphql/books";
import {Card, CardContent, IconButton, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import UpdateBookModal from "./components/UpdateBookModal/UpdateBookModal";

const Books = () => {
    const { data } = useQuery(GET_BOOKS);

    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(data?.getAllBooks ? data.getAllBooks : [])
    }, [data])

    return <div style={{ display: 'flex', justifyContent: 'flex-start' }} >
        <UpdateBookModal open={updateModalOpen} setOpen={setUpdateModalOpen} data={modalData} />
        {books.map((el) => {
            return <>
                <Card sx={{ maxWidth: 300, ml: 2 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20, textDecoration: 'underline' }} color="text.primary" gutterBottom>
                            {el.name}
                        </Typography>
                        <Typography variant="h5" component="div">
                            Year: {el.year}
                        </Typography>
                        <Typography variant="h5" component="div">
                            Author: {el.user.name}
                        </Typography>
                    </CardContent>
                    <IconButton onClick={() => {
                        setUpdateModalOpen(true);
                        setModalData(el);
                    }} >
                        <EditIcon />
                    </IconButton>
                </Card>
            </>
    })}
    </div>
}

export default Books;