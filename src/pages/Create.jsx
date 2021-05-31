import React, { useState } from 'react'

import {
  Button, 
  Container, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  InputLabel, 
  MenuItem, 
  Radio, 
  RadioGroup, 
  Select, 
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
  const [author, setAuthor] = useState('');
  const [primaryCategory, setPrimaryCategory] = useState('economics');
  const [secondaryCategory, setSecondaryCategory] = useState('none');
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().slice(0,7));
  const [picture, setPicture] = useState('');

  const [titleError, setTitleError] = useState(false);
  const [authorError, setAuthorError] = useState(false);
  const [numberOfPagesError, setNumberOfPagesError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [pictureError, setPictureError] = useState(false);

  

  const classes = useStyles();

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setAuthorError(false);
    setNumberOfPagesError(false);
    setDateError(false)

    if (!title) setTitleError(true);
    if (!author) setAuthorError(true);
    if (!numberOfPages) setNumberOfPagesError(true);
    if (!date) setDate(true);


    if( title && author && numberOfPages ) {
      const book = {
        title,
        author,
        primaryCategory,
        secondaryCategory,
        numberOfPages,
        date,
        picture,
      }
    fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(book)
    }).then(() => history.push('/'))
    }
  }

  const primaryCategoryList = [
    'Economics', 'Health', 'Self-grow', 'Fiction', 'Popular-science', 'Philosophy', 'Biography', 'Political'
  ]
  const secondaryCategoryList = [
    'Economics', 'Health', 'Self-grow', 'Fiction', 'Popular-science', 'Philosophy', 'Biography', 'Political', 'None'
  ]

    return (
        <Container>
          <Typography 
            variant='h4'
            component='h2'
            color="textSecondary"
            gutterBottom
          >
            Add new book :)
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
            label="Title" 
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={titleError}
            />
          {/* <TextField
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
            /> */}
            <TextField 
            className={classes.field}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            label="Author" 
            variant="outlined"
            color="primary"
            fullWidth
            required
            error={authorError}
            />
            

          {/* <FormControl className={classes.field} variant='outlined'>
            <InputLabel id='primaryCategory'>Primary Category</InputLabel>
            <Select
              labelId='primaryCategory'
              value={primaryCategory}
              onChange={(e) => setPrimaryCategory(e.target.value)}
              >
              {primaryCategoryList.map(category => 
                <MenuItem value={category.toLowerCase()}>{category}</MenuItem>
              )}
              </Select>
          </FormControl> */}

          <FormControl className={classes.field}>
            <FormLabel>Primary Category</FormLabel>
            <RadioGroup className={classes.radio} value={primaryCategory} onChange={(e) => setPrimaryCategory(e.target.value)}>
              {primaryCategoryList.map(category => {
                return (
                  <FormControlLabel 
                    value={category.toLocaleLowerCase()} 
                    control={<Radio/>} 
                    label={category} />
                )
              })}
            </RadioGroup>
          </FormControl>

          <FormControl className={classes.field}>
            <FormLabel>Secondary Category</FormLabel>
            <RadioGroup className={classes.radio} value={secondaryCategory} onChange={(e) => setSecondaryCategory(e.target.value)}>
              {secondaryCategoryList.map(category => {
                return (
                  <FormControlLabel 
                    value={category.toLocaleLowerCase()} 
                    control={<Radio/>} 
                    label={category} />
                )
              })}
            </RadioGroup>
          </FormControl>

          <TextField 
            className={classes.field}
            value={numberOfPages}
            onChange={(e) => setNumberOfPages(e.target.value)}
            label="Number of Pages" 
            variant="outlined"
            color="primary"
            // fullWidth
            required
            error={numberOfPagesError}
            type='number'
            />
            <TextField 
            className={classes.field}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            label="Date" 
            variant="outlined"
            color="primary"
            // fullWidth
            required
            error={dateError}
            type='month'
            />
            <TextField 
            className={classes.field}
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            label="Picture" 
            variant="outlined"
            color="primary"
            fullWidth
            required
            />
          

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
