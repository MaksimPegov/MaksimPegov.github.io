$(function() {
  var params = {
      url: 'https://www.codeschool.com/users/Maksim2005.json',
      dataType: 'jsonp',
      success: success
  }
  
  $.ajax(params);


  function success(respons){
    var badge;
    var parent = $("#bages");
    var finished = respons.courses.completed;
    for(var i = 0; i < finished.length; i++){
      //badge =  $("<div class='course'>");
      // badge.append($("<h3>").text(finished[i].title));
      // badge.append($("<img src='" + finished[i].badge + "'>"));
      // badge.append($("<a href='" + finished[i].url + "' class ='btn btn-primary' target='_blank'>").text("See Course"))
      badge =  $("<div class='badge'>");
      badge.append($("<a href='" + finished[i].url + "' target='_blank'>").append($("<img src='" + finished[i].badge + "'>")));
      parent.append(badge);
      
    }
  }
});