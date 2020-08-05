$(document).ready(function(){
    $('.tab_container:first').show();
    $('.tab_navigation li:first').addClass('active');

// Adding  CLICK Event

    $('.tab_navigation li').click(function() {
        index = $(this).index();
        $('.tab_navigation li').removeClass('active');
        $(this).addClass('active');
        $('.tab_container').hide();
        $('.tab_container').eq(index).show();

      });

// Making the 'tabs' and 'ol' sortable
     /*   $(document).ready(function(){
         $('.#projects').sortable({
            axis: 'y',
            opacity: '0.5',
         });
              
          }); */
// Modal Dialog Functionalities
          $(document).ready(function(){
            $('#btnAddProject').click(function() {
                $("#project-dailog").css("display","block", "width", "400px");
              })
               $("#close").click(function() {
                   $("#project-dailog").css("display","none");
                    $("#newProject").val("") 
                })
                 $("#closeModal").click(function() {
                    $("#project-dailog").css("display","none");
                    $("#newProject").val("") 
                })
            
            $("#addNewProject").click(function(){
                var projectName =  $("#newProject").val();
                $("#nav-tab").append("<li class='nav-item nav-link' data-toggle='tab' role='tab'  aria-selected='true'>" + projectName);
                $("#project-dailog").css("display","none");
                    $("#newProject").val("");
                    index = $(this).index();
                        $('.tab_navigation li:first').removeClass('active');
                        $(this).addClass('active');
                        $('.tab_container').hide();
                        $('#nav-tab').eq(index).show();
            })
                $("#nav-item").click(function(){
                    $("#newProject").val('active')
                    $(this).addClass('active');
                    $('#nav-tab').eq(index).show();   
                  })
            });
});