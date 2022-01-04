import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@material-ui/icons';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



import styles from './Cards.module.css';

const Cards = (props) => {
	console.log(props);

	return (
		<div className={styles.container}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Infected
				</Typography>
				<Typography variant="body2" color="textSecondary" component="h2">
					Real Data
				</Typography>
				<Typography gutterBottom variant="h5" component="h2">
					Real Date
				</Typography>
				<Typography variant="body2" color="textSecondary" component="h2">
					Number of active cases of COVID-19
				</Typography>
			</CardContent>
			<h1>Cards</h1>
		</div>
	)
}

export default Cards;
