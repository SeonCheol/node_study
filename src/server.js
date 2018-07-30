var http = require('http')
var fs = require('fs')
var url = require('url')

// 서버 생성
http.createServer((req, res) => {
	// URL 뒤에 있는 디렉토리/파일이름 파싱
	var pathName = url.parse(req.url).pathname
	var resourcePath = "../resource"

	console.log("Request for " + pathName + " received.")

	// 파일 이름이 비어있다면 index.html로 설정
	if(pathName == "/")	{
		pathName = "/index.html"
	}

	// 파일을 읽기
	fs.readFile(resourcePath + pathName, (err, data) => {
		if(err)	{
			console.log(err)
			// 페이지를 찾을 수 없음
			// HTTP Status : 404 : NOT FOUND
			// context Type: text/plain
			res.writeHead(404, {'Content-Type': 'text/html'})
		}	else	{
			// 페이지를 찾음
			// HTTP Status : 200 : OK
			// Content Type: text/plain
			res.writeHead(200, {'Content-Type': 'text/html'})
			res.write(data.toString())
		}
		// responseBody 전송
		res.end()
	})
}).listen(8081)

console.log('Server running at http://localhost:8081/')