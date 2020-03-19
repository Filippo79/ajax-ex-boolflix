$(document).ready(function() {
    var source = $('#template-movie').html();
    var templateMovie = Handlebars.compile(source);
    $('.click').click(function(){
        var searchMovies = $('.search-movies').val().toLowerCase();
        //console.log(searchMovies);
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
                        if (movie == 0 ) {
                            alert('Mi dispiace cerca ancora !')}
                            $('.search-movies').val('');
                        var infoMovie = {
                            titolo: movie.title,
                            titoloOriginale: movie.original_title,
                            lingua: movie.original_language,
                            stelle: movie.vote_average,
                            //immagineMovies: movie.logo_path
                        }
                        var infoMovies = templateMovie(infoMovie);
                        $('.container-movies').append(infoMovies);
                    }
                    console.log(infoMovie);
                },
                error: function() {
                    alert('Se non digiti Niente non vedi Niente!!');
                }
            });
    });

});
