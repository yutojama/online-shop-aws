function handler(event) {
    var request = event.request;

    if (request.uri.startsWith('/be/')) {
        request.uri = request.uri.substring(3);
    } else if (request.uri === '/be') {
        request.uri = '/';
    }

    return request;
}