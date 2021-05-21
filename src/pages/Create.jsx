import React, { useState } from 'react'

import {
  Button, 
  Container, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  Radio, 
  RadioGroup, 
  TextField, 
  Typography, 
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
  radio: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})


const Create = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('home');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const classes = useStyles();

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (!title) setTitleError(true);
    if (!details) setDetailsError(true);

    if( title && details) {
    fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({ title, details, category })
    }).then(() => history.push('/'))
    }
  }

    return (
        <Container>
          <Typography 
            variant='h4'
            component='h2'
            color="textSecondary"
            gutterBottom
          >
            Add new task
          </Typography>

          <form 
            onSubmit={handleSubmit}
            action="submit"
            noValidate
            autoComplete='off'>

          <TextField 
            className={classes.field}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Note Title" 
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={titleError}
            />
          <TextField
            className={classes.field}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            label="Details" 
            variant="outlined"
            color="primary"
            fullWidth
            multiline
            rows={4}
            required
            error={detailsError}
            />

          <FormControl className={classes.field}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup className={classes.radio} value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value='home' control={<Radio/>} label="Home" />
            <FormControlLabel value='work' control={<Radio/>} label="Work" />
            <FormControlLabel value='health' control={<Radio/>} label="Health" />
            <FormControlLabel value='books' control={<Radio/>} label="Books" />
          </RadioGroup>
          </FormControl>
          

          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            endIcon={<SendIcon/>}
            >
            Submit
          </Button>

          </form>

        </Container>
    );
}

export default Create
