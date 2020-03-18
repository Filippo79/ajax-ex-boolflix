$(document).ready(function() {
    //var source = $('#template-movie').html();
    //var templateMovie = Handlebars.compile(source);
    $('.click').click(function(){
        var searchMovies = $('.search-movies').val().toLowerCase();
        console.log(searchMovies);


    });


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
                for (var i = 0; i < movies.length; i++) {
                    var movie = movies[i];
                    var infoMovie = {
                        titolo: movie.title,
                        titoloOriginale: movie.original_title,
                        lingua: movie.original_language,
                        voto: movie.vote_average,
                        //immagine: movie.logo_path
                    }
                }
                //console.log(infoMovie);
            },
            error: function() {
                alert('Si è verificato un errore');
            }
        });




});
