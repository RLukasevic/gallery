var express = require('express');
const data = require('./items.json')

const app = express();

const PORT = 3232;

const PAGE_SIZE = 20;

app.use((_, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	next();
});


const paginateAndPaging = (filteredData,page) => {
	const paginatedData = filteredData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);		// 0.499999 number is used to round to the highest number if previous has decimal
	const maximumPages = Math.round(((filteredData.length / PAGE_SIZE) + 0.49999));  		// so page can exist even with 1 ticket

	return {paginatedData: paginatedData, maximumPages: maximumPages}
}

const sortFilter = (data) => {
	let temp = data

	return temp.sort((a, b) => {
		if (a.author > b.author) { return 1 }
		if (a.author < b.author) { return -1 }
		return 0;
	})
}

app.get('/api/getImages', (req, res) => {
	const page = req.query.page || 1;
	const sortedData = sortFilter(data);

	res.send(paginateAndPaging(sortedData,page));
});

app.listen(PORT);
console.log('server running', PORT)

