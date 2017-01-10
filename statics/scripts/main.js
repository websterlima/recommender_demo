(function($) {
    'use strict';

    var moviesListTemplate = doT.template(getTemplate('statics/templates/movies-list.html'));
    var movieInfoTemplate = doT.template(getTemplate('statics/templates/movie-info.html'));
    var headerUserTemplate = doT.template(getTemplate('statics/templates/header-user.html'));
    var usersListTemplate = doT.template(getTemplate('statics/templates/users-list.html'));

    function loadUserRecommendations(userId) {
        $.ajax({
            method: 'GET',
            headers: {
                'Authorization': 'Bearer MX3CV9fvZHGKtaT9rGC+tZty10iYAuzb5IPtLVdC1DYh2x2rSVBX0KT3nqwKxxeTOc7e43qK65RbvCOyu4amLgAvj+CnCkbevSlHjfShwaZnzMckX+vPsa2BskRwE9QfqngtqURdk2jiWEPe4dZqIojNkX+Y0SL33569W0nIx0g=.eyJ0aWQiOiAxfQ=='
            },
            url: 'https://recomendador-154618.appspot.com/api/services/recommendations?idx=' + userId + '&kind=user',
            success: function(response) {
                response = JSON.parse(response);

                if (response.status === 200) {
                    var list = [];

                    response.data.forEach(function(id) {
                        var movie = movies[id];
                        movie.id = id;

                        list.push(movie);
                    });


                    list = list.filter(function(e) {
                        return e.url_poster;
                    });

                    list = list.slice(0, 10);

                    $('main').html(moviesListTemplate({'movies': list}));

                    $('main .recommendations .recommendations-list li').click(function() {
                        $('main .recommendations *').hide();

                        var movie = movies[$(this).data('id')];

                        $('main .recommendations').append(movieInfoTemplate({'movie': movie}));
                        
                        $('main .recommendations .movie-info .close').click(function() {
                            $('main .recommendations *:visible').remove();
                            $('main .recommendations *').show();
                        });
                    });
                }
            }
        });
    };

    $(document).ready(function() {
        var actualUser = users[0];
        actualUser.selected = true;

        $('header .user-area .container-user').data('id', actualUser.id);
        $('header .user-area .container-user').html(headerUserTemplate({'user': actualUser}));

        $('header .user-area').append(usersListTemplate({'users': users}));

        $('header .user-area .container-user').click(function() {
            $('header .user-area .user-list').toggle();
        });

        $('header .user-area .user-list li').click(function() {
            $('.selected').removeClass('selected');
            $(this).addClass('selected');

            var userId = $(this).data('id');
            
            var user = users.filter(function(u) {
                return u.id == userId;
            })[0];

            $('header .user-area .container-user').data('id', user.id);
            $('header .user-area .container-user').html(headerUserTemplate({'user': user}));
            loadUserRecommendations(userId);
        });

        loadUserRecommendations(actualUser.id);
    });
    
})(jQuery);