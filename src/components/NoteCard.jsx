import React from 'react'
import { Card, CardContent, CardHeader, IconButton, Typography, makeStyles, Avatar } from '@material-ui/core'
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
							{note.category[0].toUpperCase()}
						</Avatar>
					}
					action={
						<IconButton onClick={() => handleDelete(note.id)}>
							<DeleteOutlined/>
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography 
						variant="body2" color="textSecondary">
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</div>
		)
}

export default NoteCard
