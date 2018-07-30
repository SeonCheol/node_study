var http = require('http')

var options = {
	host: 'localhost',
	port: '8081',
	path: '/index.html',
}

var callback = (res) => {
	var body = ''	
	res.on('data', (data) => {		
		body += data
	})
	// end 이벤트가 감지되면 데이터 수신을 종료하고 내용 출력	
	res.on('end', () => { console.log(body) })
}

var req = http.request(options, callback)
req.end()