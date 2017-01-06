(function($) {
    'use strict';

    $(document).ready(function() {
        var filmsListTemplate = doT.template(getTemplate('statics/templates/films-list.html'));
        var filmInfoTemplate = doT.template(getTemplate('statics/templates/film-info.html'));

        var userId = 101;

        $.ajax({
            headers: {
                'authorization': 'Bearer MX3CV9fvZHGKtaT9rGC+tZty10iYAuzb5IPtLVdC1DYh2x2rSVBX0KT3nqwKxxeTOc7e43qK65RbvCOyu4amLgAvj+CnCkbevSlHjfShwaZnzMckX+vPsa2BskRwE9QfqngtqURdk2jiWEPe4dZqIojNkX+Y0SL33569W0nIx0g=.eyJ0aWQiOiAxfQ=='
            },
            contentType: 'application/json',
            crossDomain: true,
            url: 'https://recomendador-154618.appspot.com/api/services/recommendations?idx=' + userId + '&kind=user',
            success: function(response) {
                console.log(response);
                if (response.status === 200) {
                    var list = [];

                    response.data.forEach(function(id) {
                        list.push(films["" + id]);
                    });

                    list = list.filter(function(e) {
                        return e.url_poster;
                    });

                    $('main').append(filmsListTemplate({'films': list}));
                }
            }
        });

        // $('main').html(filmInfoTemplate({'film': films['1']}));

        $('header .container-user').click(function() {
            $('header .user-list').toggle();
        });

        $('main .recommendations-list li a').click(function() {
            $('.recommendations').html(filmInfoTemplate({}));
        })
    });
    
})(jQuery);

