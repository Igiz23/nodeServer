import fs from 'fs/promises';
/*	Импортируется модуль http. Он встроен в nodejs и позволяет создать веб-сервер*/
import http from 'http';

/*	Создаётся веб-сервер. В функцию createServer передается обработчик запросов.
	Он будет вызываться на каждый входящий запрос. Сервер вешается на порт.*/
const server = http.createServer((request, response) => {
	// content-length формируется автоматически!
	response.write('hello, world! this is my first node.js app\n');
	response.end();
});

const port = 4000;
//слушать порт :4000
server.listen(port, () => {
	console.log('Server has been started');
});

//curl 127.0.0.1:4000 || postman