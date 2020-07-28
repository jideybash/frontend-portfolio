$(document).ready(function(){
    $('#searchForm').on('submit', function(e) {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
      });
    });

    function getMovies (searchText){
       // request to OMDB API
       axios.get('https://www.omdbapi.com/?s='+searchText+'&apikey=b55f1ed3')
            .then((response) =>{
                console.log(response);
                let movies = response.data.Search;
                let output = '';
                $.each(movies, (index, movie) => {
                    output += ` 
                        <div class ="container card border-primary mb-3" style="max-width: 20rem;">
                            <div class="card-header">
                            <h5>${movie.Title}</h5></div>
                            <div class="card-body">
                                <img src="${movie.Poster} class="thumbnail">
                                <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary btn-lg btn-block" href="#">Movie Details</a>
                            </div>
                        </div>
                    `;

                });

                $('#movies').html(output);
            })
            .catch((err) => {
                console.log(err);
            });
        }

        function movieSelected(id){
          sessionStorage.setItem('movieId', id);
          window.location = 'movie.html';
          return false;
        }
        
        function getMovie(){
          let movieId = sessionStorage.getItem('movieId');
        
          axios.get('https://www.omdbapi.com?i='+movieId+'&apikey=b55f1ed3')
            .then((response) => {
              console.log(response);
              let movie = response.data;
        
              let output =`
                <div class="row">
                  <div class="col-md-4">
                    <img src="${movie.Poster}" class="thumbnail">
                  </div>
                  <div class="col-md-8">
                  <h2 class="display-3">${movie.Title}</h2>
                    <ul class="list-group">
                      <li class="list-group-item"><div class="list">Genre:</div> ${movie.Genre}</li>
                      <li class="list-group-item"><div class="list">Released:</div> ${movie.Released}</li>
                      <li class="list-group-item"><div class="list">Rated:</div> ${movie.Rated}</li>
                      <li class="list-group-item"><div class="list">IMDB Rating:</div> ${movie.imdbRating}</li>
                      <li class="list-group-item"><div class="list">Director:</div> ${movie.Director}</li>
                      <li class="list-group-item"><div class="list">Writer:</div> ${movie.Writer}</li>
                      <li class="list-group-item"><div class="list">Actors:</div> ${movie.Actors}</li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="jumbotron">
                    <h3>Plot</h3>
                    ${movie.Plot}
                    <hr>
                    <a href="https://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                    <a href="index.html" class="btn btn-default">Go Back To Search <i class="fas fa-sign-out-alt"></i></a>
                  </div>
                </div>
              `;
        
              $('#movie').html(output);
            })
            .catch((err) => {
              console.log(err);
            });
        
    }
        