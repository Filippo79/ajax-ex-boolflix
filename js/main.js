$(document).ready(function() {
    var templateMovieSrc = $('#template-movie').html();
    var templateMovie = Handlebars.compile(templateMovieSrc);

    $('.click').click(cerca);
    $('.search-movies').keypress(function (event) {
        if(event.key == 'Enter') {
            cerca();
        }
    });
    function cerca(){//funzione cerca Movies
        var searchMovies = $('.search-movies').val().toLowerCase();
        //$('.search-movies').val('');
        if (searchMovies.length > 0) {
            $('.container-movies').empty();
            apiSearch('movie',  searchMovies);
            apiSearch('tv',  searchMovies);
        }
    }
    function apiSearch(tipo, searchMovies){// funzione che chiama API
        var apiBaseUrl = 'https://api.themoviedb.org/3';
        $.ajax({
                url: apiBaseUrl + '/search/' + tipo ,
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
    }
    function infoCard(movies) {//funzione che carica i dati nel container movies ( card )
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            if (movie == 0 ) {
                alert('Mi dispiace cerca ancora !');
            }

            var infoMovie = {
                titolo: movie.title,
                titoloSerie: movie.name,
                titoloOriginale: movie.original_title,
                titoloOriginaleSerie: movie.original_name,
                lingua: movie.original_language,
                voto: movie.vote_average,
                stelle: stars(movie.vote_average)
            };
            var infoMovies = templateMovie(infoMovie);
            $('.container-movies').append(infoMovies);
        }
        //console.log(infoMovie);
    }
    function stars(votoStelle) {// funzione che gestisce e crea le stelle
        var votoStelle = Math.ceil(votoStelle / 2) ;
        var totaleStelle = '';
        for (var j = 1; j <=5;  j++) {
            if (j <= votoStelle) {
                 totaleStelle += '<i class="fas fa-star"></i>';
            }else {
                 totaleStelle += '<i class="far fa-star"></i>';
            }
        }
        return totaleStelle ;
    }




});
