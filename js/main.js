$(document).ready(function() {
    //var source = $('#template-movie').html();
    //var templateMovies = Handlebars.compile(source);


    var apiBaseUrl = 'https://api.themoviedb.org/3';

    $.ajax({
        url: apiBaseUrl + '/movie/550',
        data: {
            api_Key: '37928d22d4c593c96399a7ec5fe9874b',
            query: 'batman',
            language: 'it-IT'
        },
        method: 'GET',
        success: function (data) {
            //console.log(data);
            var movies = data.response;
            for (var i = 0; i < movies.length; i++) {
                var movie = movies[i];
                console.log(movie);
                var infoMovie = {
                    titolo: movie.title,
                    titoloOriginale: movie.original_title,
                    lingua: movie.original_language,
                    voto: movie.vote_average
                }
            }
        },
        error: function() {
            alert('Andra tutto bene....')
        }

    });




});
