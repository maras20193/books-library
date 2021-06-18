import { makeStyles, Paper, Typography, Grid, Container } from '@material-ui/core'
import React from 'react'
import DonutChart from '../components/DonutChart'
import MonthChart from '../components/MonthChart'
import { useData } from '../hooks/useData'
import { green, indigo, pink, amber, purple, red, brown, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => {
	return ({
		paper: {
			// width: 100,
			padding: theme.spacing(2),
		},
		paddingTop: {
			paddingTop: theme.spacing(1)
		},
	})
});

const Statistics = () => {
	const classes = useStyles();
	const { books } = useData();

	const CHART_DATA = [
		{
			category: 'Economics',
			color: indigo[500],
			numberOfBooks: 0,
		},
		{
			category: 'Health',
			color: green[600],
			numberOfBooks: 0,
		},
		{
			category: 'Self-grow',
			color: amber[500],
			numberOfBooks: 0,
		},
		{
			category: 'Fiction',
			color: purple[500],
			numberOfBooks: 0,
		},
		{
			category: 'Popular-science',
			color: brown[500],
			numberOfBooks: 0,
		},
		{
			category: 'Philosophy',
			color: blueGrey[500],
			numberOfBooks: 0,
		},
		{
			category: 'Biography',
			color: pink[400],
			numberOfBooks: 0,
		},
		{
			category: 'Political',
			color: red[500],
			numberOfBooks: 0,
		},
	]
	const DATA_BY_MONTH = [
		{
			month: "January",
			numberOfBooks: 0,
		},
		{
			month: "February",
			numberOfBooks: 0,
		},
		{
			month: "March",
			numberOfBooks: 0,
		},
		{
			month: "April",
			numberOfBooks: 0,
		},
		{
			month: "May",
			numberOfBooks: 0,
		},
		{
			month: "June",
			numberOfBooks: 0,
		},
		{
			month: "July",
			numberOfBooks: 0,
		},
		{
			month: "August",
			numberOfBooks: 0,
		},
		{
			month: "September",
			numberOfBooks: 0,
		},
		{
			month: "October",
			numberOfBooks: 0,
		},
		{
			month: "November",
			numberOfBooks: 0,
		},
		{
			month: "December",
			numberOfBooks: 0,
		},

	]
	const monthNames = ["January", "February", "March", "April", "May", "June",
  	"July", "August", "September", "October", "November", "December"
];

	const booksByYear = books.filter(book => (
		parseInt(book.data().date.slice(0,4)) === new Date().getFullYear()
	)).length

	const booksByMonth = books.filter(book => (
		parseInt(book.data().date.slice(5,7)) === new Date().getMonth() + 1
	)).length

	const statsPaper = [
		{
			title: 'All reads',
			number: books.length
		},
		{
			title: `This Year (${new Date().getFullYear()})`,
			number: booksByYear
		},
		{
			title: `This Month (${DATA_BY_MONTH[new Date().getMonth()].month})`,
			number: booksByMonth
		}
	]


	const updateStats = () => {
		// pie chart stats 
		books.forEach(book => {
			CHART_DATA.forEach(item => {
				if(book.data().primaryCategory === item.category.toLowerCase()){
					item.numberOfBooks ++
				}
			})
		})

		// bar chart stats
		books.forEach(book => {
			if(parseInt(book.data().date.slice(0,4)) === new Date().getFullYear()){
				DATA_BY_MONTH[parseInt(book.data().date.slice(5,7)) - 1].numberOfBooks ++
			}
		})
	}

	updateStats()


	// books.map(book => console.log(book.data()))

		return (
		<div>
			<Container>
				<Grid container spacing={3} wrap='wrap'>
					{statsPaper.map(paper => (
						<Grid key={paper.title} item xs={12} md={6} lg={4}>
							<Paper 
							elevation={1} 
							className={classes.paper}>
								<Typography variant='h6' color='textSecondary'
								align='center'
								>{paper.title}
								</Typography>
								<Typography variant='h4' color='textSecondary'
								align='center' className={classes.paddingTop}
								>{paper.number}
								</Typography>
							</Paper>
					</Grid>
					))}
				</Grid>
			</Container>

			<Container>
				<Grid container spacing={3} wrap='wrap'>
					<Grid item xs={12}  lg={6}>
						<MonthChart data={DATA_BY_MONTH}/>
					</Grid>
					<Grid item xs={12}  lg={6}>
						<DonutChart data={CHART_DATA}/>
					</Grid>
				</Grid>
			</Container>

		</div>
	)
}

export default Statistics
