$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
    let username = e.target.value;

    // make ajax requiest to Github
    $.ajax({
        url: 'https://api.github.com/users/'+username,
        data:{
            client_id:'59190aee3e9f23177483',
            client_secret:'51bf8755604d89c14f601a44d63bcb548f43cfd4'
        }
    }).done(function(user){
        // make ajax requiest to GitHub repos
        $.ajax({
            url: 'https://api.github.com/users/'+username+'/repos',
            data:{
                client_id:'59190aee3e9f23177483',
                client_secret:'51bf8755604d89c14f601a44d63bcb548f43cfd4',
                sort: 'created: asc',
                per_page: 5
            }
            // function that displays repo
        }).done(function(repos){
            $.each(repos, function(index, repo){
                $('#repos').append(`
                <div class="container list-group-item">
                <div class="row">
                    <div class="col-md-7">
                        <h2><strong>${repo.name}</strong></h2>
                        <br><p>${repo.description}</p>
                    </div>
                    <div class="col-md-3">
                    <button type="button" class="fas fa-code-branch btn btn-info"> <span>Forks: ${repo.forks_count}</span></button>
                    <button type="button" class="fas fa-eye btn btn-info"> <span>Watchers: ${repo.watchers_count}</span></button>
                    <button type="button" class="fas fa-star btn btn-info"> <span>Stars: ${repo.stargazers_count}</span></button>
                    </div>
                    <div class="col-md-2">
                    <a href="${repo.html_url}" target="_blank" class="fas fa-sign-in-alt btn btn-success"> Repo Page </a>
                    </div>
                </div>
                </div
                `)
            });
        });
        // profile section 
       $('#profile').html(`
       <div class="card">
       <h5 class="card-header">${user.name}</h5>
       <div class="card-body">
         <div class="row">
         <div class="col-md-3">
            <img class="avatar" src="${user.avatar_url}">
            <a target="_blank" href="${user.html_url}">
              <button class="fas fa-user btn btn-primary btn-lg btn-block"> View Profile</button>
            </a>
            </div>
         <div class="col-md-9">
            <button type="button" class="far fa-bookmark btn btn-info"> <span>Public Repos: ${user.public_repos}</span></button>
            <button type="button" class="fas fa-bolt btn btn-info"> <span>Public Gists: ${user.public_gists}</span></button>
            <button type="button" class="fas fa-users btn btn-info"> <span>Followers: ${user.followers}</span></button>
            <button type="button" class="fas fa-users btn btn-info"> <span>Following: ${user.following}</span></button>
            <br><br>
            <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
            </div>
         </div>
       </div>
     </div>
        <h2 class="display-3 page-header">Latest Repository</h2>
        <div id="repos"</div>
       `);
    
        });
    });
});