var http = require('http')
var client = require('graphql-client')({
	url: 'http://localhost:4000/graphql',
})
var options = {
	host: 'localhost',
	port: '4000',
	path: '/graphql',
	schema: {
		Query: 'hello'
	},
}

// var callback = (res) => {
// 	var body = ''	
// 	res.on('data', (data) => {		
// 		body += data
// 	})
// 	// end 이벤트가 감지되면 데이터 수신을 종료하고 내용 출력	
// 	res.on('end', () => { console.log(body) })
// }

// var req = http.request(options, callback)
// req.end()

// client
var variables = {
	query: "Search Query",
	limit: 100,
	from: 200
}

client.query(`
{
	Query: hello
}`, variables, (req, res) => {
		if (res.status === 401) {
			throw new Error('Not authorized')
		}
	}
)
	.then((body) => { console.log(body) })
	.catch(err => console.log(err.message))


