import React from 'react'
import { Card, CardContent, CardHeader, IconButton, Typography, makeStyles, Avatar, CardMedia } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons';
import { green, indigo, pink, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
	avatar: {
		backgroundColor: (note) => {
			if (note.category == 'work'){
				return indigo[500]
			};
			if (note.category == 'health'){
				return green[600]
			};
			if (note.category == 'books'){
				return yellow[700]
			};
			if (note.category == 'home'){
				return pink[400]
			};
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

const NoteCard = ({ note, handleDelete }) => {
	const classes = useStyles(note);

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
					subheader={note.primaryCategory}
				/>
				<CardMedia
					className={classes.media}
					image='https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-b-iext66634845.jpg'
					title='harry'
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
