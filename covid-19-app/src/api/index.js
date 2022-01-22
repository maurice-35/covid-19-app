import axios from 'axios';

const url = 'https://covid2019-api.herokuapp.com/v2/current';

export const fetchData = async () => {
	try {
		const { data } = await axios.get(url);
		let modifiedData = {
			confirmed: data.data[0].confirmed,
			recovered: data.data[0].recovered,
			deaths: data.data[0].deaths,
			active: data.data[0].active
		}
		return modifiedData
	} catch (error) {
		return error;
	}
} 