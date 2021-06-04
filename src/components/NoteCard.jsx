import React from 'react'
import { Card, CardContent, CardHeader, IconButton, Typography, makeStyles, Avatar, CardMedia } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons';
import { green, indigo, pink, amber, purple, red, brown, blueGrey } from '@material-ui/core/colors';
import { db } from '../firebase';
import { useAuth } from '../hooks/useAuth'
import { useData } from '../hooks/useData'

const useStyles = makeStyles({
	avatar: {
		backgroundColor: (note) => {
			switch (note.primaryCategory) {
				case 'economics':
					return indigo[500];
				case 'health':
					return green[600];	
				case 'self-grow':
					return amber[500];
				case 'fiction':
					return purple[500];
				case 'popular-science':
					return brown[500];
				case 'philosophy':
					return blueGrey[500];
				case 'biography':
					return pink[400];
				case 'political':
					return red[500];
			}
		} 
	},
	media: {
		height: '100px',
		paddingTop: '56.25%',
		marginRight: '6%',
		marginLeft: '6%',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain'
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between'
	}
})

const NoteCard = ({ dataID, note}) => {
	const classes = useStyles(note);
	const { currentUser } = useAuth();
	const { books, setBooks, updateBooks } = useData();

	const defaultPicture = 'img/default-book.png'

	const subheaderCategory = !note.secondaryCategory 
		? note.primaryCategory
		: `${note.primaryCategory} / ${note.secondaryCategory}`

	const handleDelete = () => {
		db
		.collection(`users/${currentUser.uid}/books`)
		.doc(dataID)
		.delete()
		updateBooks()
	} 

  return (
		<div>
			<Card className={classes.test}>
				<CardHeader
					avatar={
						<Avatar className={classes.avatar}>
							{note.primaryCategory &&note.primaryCategory[0].toUpperCase()}
						</Avatar>
					}
					action={
						<IconButton onClick={() => handleDelete(note.id)}>
							<DeleteOutlined/>
						</IconButton>
					}
					title={note.title}
					subheader={subheaderCategory}
				/>
				<CardMedia
					className={classes.media}
					image={note.picture
						? note.picture
						: defaultPicture}
					title={note.title}
				/>
				<CardContent className={classes.flex}>
					<Typography 
						variant="body2" color="textSecondary">
						Pages: {note.numberOfPages} 
					</Typography>
					<Typography 
						variant="body2" color="textSecondary">
						Date: {note.date} 
					</Typography>
				</CardContent>
			</Card>
		</div>
		)
}

export default NoteCard
