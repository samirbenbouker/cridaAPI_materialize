(function($){
  $(function(){
 
    $('.sidenav').sidenav();
    $('.tabs').tabs({"swipeable":true});
    $('#searchButton').click( APICall );
 
  }); // end of document ready
})(jQuery); // end of jQuery name space
 

function APICall(){

	var query = $('#searchInput').val();
	console.log(query);
	$.ajax({
	  method: "GET",
	  url: "https://musicbrainz.org/ws/2/artist?query="+query,
	  dataType: "json",
	}).done(function (msg) {
		$('#musics').empty();
	  for(var item in msg.artists) {
	    console.log(msg.artists[item]);
	    if(msg.artists[item].disambiguation == null){
	    	$('#musics').append('<li class="collection-item"><div><h5>'+msg.artists[item].name+'</h5><a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>');
	    } else {
	    	$('#musics').append('<li class="collection-item"><div><h5>'+msg.artists[item].name+'</h5>'+'('+msg.artists[item].disambiguation+')<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>');
	    }
	  };
	}).fail(function () {
		alert(query);
	});

}

document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
}