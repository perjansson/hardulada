app.filter('whereTags', function(){    
    return function(tags){        
        return tags.join().replace(',',' ');
    };
});
