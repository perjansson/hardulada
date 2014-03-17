app.filter('showTags', function(){    
    return function(tags){        
        return tags.join().replace(',',' ');
    };
});
