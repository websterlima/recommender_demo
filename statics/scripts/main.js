(function($) {
    'use strict';

    $(document).ready(function() {
        var filmsListTemplate = doT.template(getTemplate('statics/templates/films-list.html'));
        
        var data = {
            films: [
                {
                    poster: "http://image.tmdb.org/t/p/original/uMZqKhT4YA6mqo2yczoznv7IDmv.jpg"
                },
                {
                    poster: "http://image.tmdb.org/t/p/original/eQs5hh9rxrk1m4xHsIz1w11Ngqb.jpg"
                },
                {
                    poster: "http://image.tmdb.org/t/p/original/5c0ovjT41KnYIHYuF4AWsTe3sKh.jpg"
                },
                {
                    poster: "http://image.tmdb.org/t/p/original/80czeJGSoik22fhtUM9WzyjUU4r.jpg"
                },
                {
                    poster: "http://image.tmdb.org/t/p/original/vWtDUUgQAsVyvRW4mE75LBgVm2e.jpg"
                },
                {
                    poster: "http://image.tmdb.org/t/p/original/uMZqKhT4YA6mqo2yczoznv7IDmv.jpg"
                },
                {
                    poster: "http://image.tmdb.org/t/p/original/eQs5hh9rxrk1m4xHsIz1w11Ngqb.jpg"
                },
                {
                    poster: "http://image.tmdb.org/t/p/original/5c0ovjT41KnYIHYuF4AWsTe3sKh.jpg"
                },
                {
                    poster: "http://image.tmdb.org/t/p/original/80czeJGSoik22fhtUM9WzyjUU4r.jpg"
                },
                {
                    poster: "http://image.tmdb.org/t/p/original/vWtDUUgQAsVyvRW4mE75LBgVm2e.jpg"
                },
                {
                    poster: "http://image.tmdb.org/t/p/original/uMZqKhT4YA6mqo2yczoznv7IDmv.jpg"
                },
                {
                    poster: "http://image.tmdb.org/t/p/original/eQs5hh9rxrk1m4xHsIz1w11Ngqb.jpg"
                }
            ]
        };

        $('.recommendations').append(filmsListTemplate(data));

        $('header .container-user').click(function() {
            $('header .user-list').toggle();
        });
    });
    
})(jQuery);

