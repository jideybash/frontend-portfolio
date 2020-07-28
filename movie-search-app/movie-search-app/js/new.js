$(document).ready(function(){

  var apikey = "b55f1ed3"

    $('#searchForm').submit(function(e) {
      e.preventDefault();

        var searchText = $('#searchText').val();

        var apikey = "b55f1ed3"

        var movie = ""

        var url = 'https://www.omdbapi.com/?s='+searchText+'&apikey=b55f1ed3'
     
       // request to OMDB API
       $.ajax({
        method: 'GET',
        url:url+"&t="+searchText,
        success: function(data){
          console.log(data);

          movie = `
          
              <img src="${movie.Poster}" class="img-thmnail">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
          </div>
      </div
              `;
             $('#movie').html(); 
        }

          });
    });
  
});