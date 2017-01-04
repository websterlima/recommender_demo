(function($) {
    'use strict';

    $(document).ready(function() {
        var recommendationHeaderTemplate = doT.template(getTemplate('templates/recommendations-header.html'));
        var filmsListTemplate = doT.template(getTemplate('templates/films-list.html'));
        
        var data = {
            films: [
                {
                    url: 'http://google.com',
                    poster: 'http://image.tmdb.org/t/p/w185/bqLlWZJdhrS0knfEJRkquW7L8z2.jpg'
                },
                {
                    url: 'http://google.com',
                    poster: 'http://image.tmdb.org/t/p/w185/bqLlWZJdhrS0knfEJRkquW7L8z2.jpg'
                },
                {
                    url: 'http://google.com',
                    poster: 'http://image.tmdb.org/t/p/w185/bqLlWZJdhrS0knfEJRkquW7L8z2.jpg'
                },
                {
                    url: 'http://google.com',
                    poster: 'http://image.tmdb.org/t/p/w185/bqLlWZJdhrS0knfEJRkquW7L8z2.jpg'
                },
                {
                    url: 'http://google.com',
                    poster: 'http://image.tmdb.org/t/p/w185/bqLlWZJdhrS0knfEJRkquW7L8z2.jpg'
                },
                {
                    url: 'http://google.com',
                    poster: 'http://image.tmdb.org/t/p/w185/bqLlWZJdhrS0knfEJRkquW7L8z2.jpg'
                },
                {
                    url: 'http://google.com',
                    poster: 'http://image.tmdb.org/t/p/w185/bqLlWZJdhrS0knfEJRkquW7L8z2.jpg'
                },
                {
                    url: 'http://google.com',
                    poster: 'http://image.tmdb.org/t/p/w185/bqLlWZJdhrS0knfEJRkquW7L8z2.jpg'
                }
            ]
        };

        $('.recommendations').append(recommendationHeaderTemplate({}));
        $('.recommendations').append(filmsListTemplate(data));
    });
    
})(jQuery);