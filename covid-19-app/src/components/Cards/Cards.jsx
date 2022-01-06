import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Stats = () => {
	const [carddata, setCarddata] = useState({
		infected: '',
		tested: '',
		recovered: '',
		deceased: '',
		lastUpdatedSource: '',
	})

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get(`https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true`)
			setCarddata(data)
		}
		getData()
	}, [])

	const handleChange = (event) => {
		const newCarddata = { ...carddata, [event.target.name]: event.target.value }
		setCarddata(newCarddata)
		
	}



	return (
		<div className={styles.container}>
			<Grid container spacing={3} justifyContent="center">
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
					<CardContent
						carddata={carddata}
						handleChange = {handleChange} 
					>
						<Typography gutterBottom variant="h5">
							Infected
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={carddata.infected.value} duration={2.5} separator="," />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
							{new Date(carddata.lastUpdatedSource).toDateString()}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of infected cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.tested)}>
					<CardContent
						carddata={carddata}
						handleChange = {handleChange}  
					>
						<Typography gutterBottom variant="h5" component="h5">
							Tested
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={carddata.tested.value} duration={2.5} separator=',' />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
							{new Date(carddata.lastUpdatedSource).toDateString()}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of tested cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
					<CardContent
						carddata={carddata}
						handleChange = {handleChange} 
					>
						<Typography gutterBottom variant="h5" component="h5">
							Recovered
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={carddata.recovered.value} duration={2.5} separator=',' />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
							{new Date(carddata.lastUpdatedSource).toDateString()}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deceased)}>
					<CardContent
						carddata={carddata}
						handleChange = {handleChange} 
					>
						<Typography gutterBottom variant="h5" component="h5">
							Deceased
						</Typography>
						<Typography variant="body2" color="textSecondary">
							<CountUp start={0} end={carddata.deceased.value} duration={2.5} separator=',' />
						</Typography>
						<Typography gutterBottom variant="h5" component="h5">
							{new Date(carddata.lastUpdatedSource).toDateString()}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h5">
							Number of deaths from COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	)
}

export default Stats;
