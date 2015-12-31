$(function() {

	var req =  
$.getJSON('http://api.trakt.tv/shows/trending.json/9f5079d18f0651c2ad6906d0fd0b498d?callback=?'	
); //  callback url ending refers to jsonp request
	console.log("sent json req");

	req.success(function(data, textStatus, jqXHR) {
		console.log('success ' + textStatus);
	});

	req.done(function(data, status)	{
		console.log("done " + status);
		$("#spinner").fadeOut('slow');
		$("#media-area").empty() //fadeOut('slow');
		$("#media-area").prepend(getItems(data));
	});

	req.fail(function() {
		console.log("fail");
		$("#spinner").fadeOut('slow');
		$("#media-area").empty().append("Server down :(");
	});
});

function myrange(n) {
  if (n == 1){
    return [1];
  } else {
    var a = [n];
    return myrange(n-1).concat(a);
}}

function getItems(shows) {
	var s, items = '';
	for (s in myrange(20)) //shows)
		items += getImageItem(shows[s].images.poster, 
shows[s].url);
	return items;
}

function getImageItem(poster, url) {
	var src = poster.replace("http://", "//"); // js http source 
format
	src = src.replace(".jpg", "-138.jpg"); // smaller poster size
	var item = '<li><a href="' + url + '"><img src="' + src + 
'"/></a></li>';
	return item;
}
