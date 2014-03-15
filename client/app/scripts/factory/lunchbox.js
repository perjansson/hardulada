app.factory('LunchBox', function ($resource) {
    return $resource('/api/lunchboxes/:lunchBoxId', {lunchBoxId: '@id'});
});