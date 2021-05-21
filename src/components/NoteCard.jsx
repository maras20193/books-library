import React from 'react'
import { Card, CardContent, CardHeader, IconButton, Paper, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons';

const NoteCard = ({ note }) => {
  return (
		<div>
			<Card>
				<CardHeader
					action={
						<IconButton>
							<DeleteOutlined/>
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary">
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</div>
		)
}

export default NoteCard
