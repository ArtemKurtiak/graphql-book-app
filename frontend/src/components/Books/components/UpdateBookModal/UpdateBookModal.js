import styled from "@emotion/styled";
import {Box, Button, IconButton, ModalUnstyled, TextField, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import {useMutation} from "@apollo/client";
import {UPDATE_BOOK} from "../../../../graphql/books";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
};

const UpdateBookModal = ({ open, setOpen, data }) => {
    const [updateBook] = useMutation(UPDATE_BOOK);

    const [name, setName] = useState('');
    const [year, setYear] = useState('');

    const updateBookHandler = () => {
        updateBook({
            variables: {
                name, year: Number(year),
                id: data._id
            }
        })
    }

    return <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        BackdropComponent={Backdrop}
    >
        <Box sx={style}>
            <Box>
                <Typography variant={'h6'} >
                    Name: {data.name}
                    <br/>
                    Year: {data.year}
                </Typography>
                <Box>
                    <TextField
                        sx={{marginRight: '10px'}}
                        label="Name"
                        color="secondary"
                        focused onChange={(e) => {
                        setName(e.target.value);
                    }}
                    />
                    <br/>
                    <br/>
                    <TextField
                        label="Year"
                        color="secondary"
                        focused onChange={(e) => {
                        setYear(e.target.value);
                    }}
                    />
                </Box>
                <Button onClick={updateBookHandler} variant={'contained'} sx={{ mt: 1 }} >Update</Button>
            </Box>
            <IconButton onClick={() => {
                setOpen(false);
            }} >
                <CloseIcon />
            </IconButton>
        </Box>
    </StyledModal>
}

export default UpdateBookModal;