import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import cx from 'classnames';

// import { styles } from '@material-ui/system';

import styles from './Cards.module.css';

const Cards = () => {
	

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							Infected
						</Typography>
						<Typography variant="body2" color="textSecondary">
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.tested)}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							Tested
						</Typography>
						<Typography variant="body2" color="textSecondary">
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
						Recovered
						</Typography>
						<Typography variant="body2" color="textSecondary">
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deceased)}>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h5">
							Deceased
						</Typography>
						<Typography variant="body2" color="textSecondary">
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
			<h1>Cards</h1>
		</div>
	)
}

export default Cards;
