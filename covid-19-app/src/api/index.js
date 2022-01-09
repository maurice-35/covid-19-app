import axios from 'axios';

const url = 'https://covid2019-api.herokuapp.com/v2/current';

export const fetchData = async () => {
	try {
		const { data: { location, confirmed, deaths, recovered, active } } = await axios.get(url);

		return { location, confirmed, deaths, recovered, active };
	} catch (error) {

	}
}

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${url}/daily`)
		console.log(data)
	} catch (error) {

	}
}


