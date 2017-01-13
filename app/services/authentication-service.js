app.factory('AuthenticationService', ['$http', '$rootScope', 'API_URL', function ($http, $rootScope, API_URL) {
    var service = {};

    service.login = function (loginRequest) {
        return $http.post(API_URL + 'auth/login', loginRequest);
    };
    service.getLoggedUser = function () {
        return $http.get(API_URL + 'auth/user');
    };

    // service.createEvent = function (event, callback) {
    //     $http.post($rootScope.webApiPath + 'events/', {
    //         name: event.name,
    //         type: event.type,
    //         description: event.description
    //     }).success(
    //         function (response) {
    //             callback(response);
    //         });
    // };
    // service.getAllEvents = function (callback) {
    //     $http.get($rootScope.webApiPath + 'events', {})
    //         .success(
    //             function (response) {
    //                 callback(response);
    //             });
    // };
    // service.getEventById = function (id, callback) {
    //     $http.get($rootScope.webApiPath + 'events/' + id, {})
    //         .success(
    //             function (response) {
    //                 callback(response);
    //             });
    // };
    // service.updateEvent = function (id, event, callback) {
    //     console.log(event);
    //     $http.put($rootScope.webApiPath + 'events/' + id, {
    //         name: event.name,
    //         type: event.type,
    //         description: event.description
    //     }).success(
    //         function (response) {
    //             callback(response);
    //         });
    // };
    // service.deleteEvent = function (id, callback) {
    //     $http.delete($rootScope.webApiPath + 'events/' + id, {})
    //         .success(
    //             function (response) {
    //                 callback(response);
    //             });
    // };
    return service;
}
]);
