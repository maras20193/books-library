import React, { useState } from 'react'

import {
  Button, 
  Container, 
  Divider, 
  FormControl, 
  FormControlLabel, 
  FormLabel, 
  Radio, 
  RadioGroup, 
  TextField, 
  Typography, 
} from '@material-ui/core';
import firebase from 'firebase'
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import { useData } from '../hooks/useData'
import useStorage from '../hooks/useStorage'

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
  const [numberOfPages, setNumberOfPages] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0,7));
  const [picture, setPicture] = useState('');
  const [pictureUrl, setPictureUrl] = useState(null);

  const [titleError, setTitleError] = useState(false);
  const [authorError, setAuthorError] = useState(false);
  const [numberOfPagesError, setNumberOfPagesError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [pictureError, setPictureError] = useState(false);

  const { currentUser } = useAuth();
  const {updateBooks, changeFilter} = useData();

  const classes = useStyles();

  const history = useHistory()

  // const { url } = useStorage(picture);

  console.log(picture)
  console.log(currentUser.uid)

  async function handleSubmit (e) {
    e.preventDefault();
    setTitleError(false);
    setAuthorError(false);
    setNumberOfPagesError(false);
    setDateError(false)

    if (!title) setTitleError(true);
    if (!author) setAuthorError(true);
    if (!numberOfPages) setNumberOfPagesError(true);
    if (!date) setDate(true);


    if( title && author && numberOfPages && picture ) {

      const book = {
        title,
        author,
        primaryCategory,
        secondaryCategory,
        numberOfPages,
        date,
        picture,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      }



    db
    .collection(`users/${currentUser.uid}/books`)
    .doc()
    .set(book)
    .then(updateBooks())
    // .then(setIsSending(false))
    .then(() => {
      changeFilter('')
      history.push('/')
    })
    .then(console.log('dodaje nowa ksiazke'))
    }


  }

  const primaryCategoryList = [
    'Economics', 'Health', 'Self-grow', 'Fiction', 'Popular-science', 'Philosophy', 'Biography', 'Political'
  ]
  const secondaryCategoryList = [
    'Economics', 'Health', 'Self-grow', 'Fiction', 'Popular-science', 'Philosophy', 'Biography', 'Political', 'None'
  ]

  const types = ['image/png', 'image/jpeg']

  const handleFile = (e) => {
    const selected = e.target.files[0];
    
    if (selected && types.includes(selected.type)){
      setPicture(selected)
      setPictureError(false)
    } else {
      setPicture(null)
      setPictureError(true)
      // dodac wyswietlenie o png i jpg
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

          <FormControl className={classes.field}>
            <FormLabel>Primary Category</FormLabel>
            <RadioGroup className={classes.radio} value={primaryCategory} onChange={(e) => setPrimaryCategory(e.target.value)}>
              {primaryCategoryList.map((category, index )=> {
                return (
                  <FormControlLabel 
                    value={category.toLocaleLowerCase()}
                    key={index}
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
            label="Picture URL" 
            variant="outlined"
            color="primary"
            fullWidth
            // required
            />

            {/* <input type="file" onChange={handleFile} />
            {pictureError && <div key='1'>Please select an image file (png or jpg)</div>}
            {picture && <div key='2'>{picture.name}</div>}
            <br /> */}


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
