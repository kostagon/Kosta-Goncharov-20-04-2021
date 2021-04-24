export function errorHandler(err) {
    if (err.response.status === 400) {
        console.log('Request had bad syntax or the parameters supplied were invalid.');
        return 'Error 400';
    }
    if (err.response.status === 401) {
        console.log('Unauthorized. API authorization failed.');
        return 'Error 401';
    }
    if (err.response.status === 403) {
        console.log('Unauthorized. You do not have permission to access this endpoint.');
        return 'Error 403';
    }
    if (err.response.status === 404) {
        console.log('Server has not found a route matching the given URI.');
        return 'Error 404';
    }
    if (err.response.status === 500) {
        console.log('Server encountered an unexpected condition which prevented it from fulfilling the request.');
        return 'Error 500';
    }
}