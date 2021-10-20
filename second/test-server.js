import http from 'http';

http.createServer((request, response) => {
	request.on('error', err => {
		console.error(err);
	}).on('end', () => {
		//Событие end генерируется в тот момент, когда запрос целиком получен.
		// Обычно обработчик именно на это событие содержит логику обработки запроса.
		response.on('error', err => {
			console.error(err);
		});

		response.statusCode = 200;
		// Установка заголовков делается уже через специальный метод
		response.setHeader('Content-Type', 'application/json');

		const message = 'Welcome to The Phonebook\n';
		response.write(message);
		response.end();
	});
	//В случае, если данные не принимаются и это событие не слушается, необходимо обязательно
	// делать вызов функции resume на объекте request, иначе запрос не начнёт обрабатываться.
	request.resume();
}).listen(8080, () => {
	console.log("Server  has been started!")
});