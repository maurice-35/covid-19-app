import axios from 'axios';

const url = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true';

export const fetchData = async () => {
	try {
		const {data: { infected, tested, recovered, deceased, lastUpdatedSource } } = await axios.get(url);


		return { infected, tested, recovered, deceased, lastUpdatedSource };
	} catch (error) {

	}
}



