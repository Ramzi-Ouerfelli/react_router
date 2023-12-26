import {useState} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const style = {

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const BasicModal = ({ob}) => {
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  
  const [Titel , setTitel] = useState("")
  const [Discription , setDiscription] = useState("")
  const [rating , setRating] = useState(0)
  const [Url , setUrl] = useState("")


  const handleAddMovie = () => {
    //e.preventDefault()
    // Create a new movie object using the entered values
    const newMovie = {
      Titel,
      Discription,
      rating:parseFloat(rating), // Convert the rating to a number
      Url,
    };

    // Call the provided callback function to add the new movie
    ob(newMovie)
    setUrl("")
    setRating("")
    setTitel("")
    setDiscription("")
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Box sx={{width: 500,maxWidth: '100%',}} >
                <h2>Add Movie</h2>
                <p>Titel</p>
                <TextField fullWidth label="Titel" id="Titel" value={Titel} onChange={e => setTitel(e.target.value)} />
                <br/>
                <p>Discription</p>
                <TextField fullWidth label="Discription" id="Discription" value={Discription} onChange={e => setDiscription(e.target.value)} />
                <br/>
                <p>rating</p>
                <TextField fullWidth label="rating" id="rating" value={rating} onChange={e => setRating(e.target.value)}/>
                <br/>
                <p>Url</p>
                <TextField fullWidth label="Url" id="Url" value={Url} onChange={e => setUrl(e.target.value)} />
                <br/>
                <Button  variant="outlined" color="error" onClick={()=>{handleAddMovie(); handleClose()}}> ADD  </Button>
            </Box>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};


export default BasicModal;