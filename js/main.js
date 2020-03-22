$(document).ready(function() {
    var templateMovieSrc = $('#template-movie').html();
    var templateMovie = Handlebars.compile(templateMovieSrc);

    $('.click').click(cerca);
    $('.search-movies').keypress(function (event) {
        if(event.key == 'Enter') {
            cerca();
        }
    });
    function cerca(){
        var searchMovies = $('.search-movies').val().toLowerCase();
        //var searchSerie = $('.searchMovies').val().toLowerCase();
        //$('.search-movies').val('');
        if (searchMovies > 0) {
            //apiSearch(searchMovies);
            // chiamata alla funzione apiSearch
        }

        //------------spostando la funzione apiSearch non sono riuscito a farla funzionare
    //function apiSearch(searchMovies){
        var apiBaseUrl = 'https://api.themoviedb.org/3';
        $.ajax({
                url: apiBaseUrl + '/search/movie',
                method: 'GET',
                data: {
                    api_key: '37928d22d4c593c96399a7ec5fe9874b',
                    query: searchMovies,
                    language: 'it-IT'
                },
                success: function(data) {
                    //console.log(data);
                    var movies = data.results;
                    infoCard(movies);
                },
                error: function() {
                    alert('Se non digiti Niente non vedi Niente!!');
                }
            });
    //}
    }

    /*var apiBaseUrl = 'https://api.themoviedb.org/3';
    $.ajax({
        url: apiBaseUrl + '/search/tv',
        method: 'GET',
        data: {
            api_key: '37928d22d4c593c96399a7ec5fe9874b',
            query: searchSerie,
            language: 'it-IT'
        },
        success: function(data) {

        },
        error:

    });*/

    function infoCard(movies) {
        $('.container-movies').empty();
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            if (movie == 0 ) {
                alert('Mi dispiace cerca ancora !');
            }
            var votoStelle = (movie.vote_average / 2 ).toFixed() ;
            var totaleStelle = '';
            for (var j = 1; j <=5;  j++) {
                if (j <= votoStelle) {
                    var stella = '<i class="fas fa-star"></i>';
                }else {
                    var stella = '<i class="far fa-star"></i>';
                }
                totaleStelle += stella;
            }
            var infoMovie = {
                titolo: movie.title,
                titoloOriginale: movie.original_title,
                lingua: movie.original_language,
                voto: totaleStelle,
            };
            var infoMovies = templateMovie(infoMovie);
            $('.container-movies').append(infoMovies);
        }
        //console.log(infoMovie);

    }




});
