function fetchData(cb){
	$.ajax({
	  url: "https://graph.facebook.com/v14.0/17841407050260356?access_token=EAAZApUx5i4nIBAEKdAZCgeYeozJflevusZAA1EsDsZCbDEX6ZBABCrZC8FdlahmorBCZCuFzZC9uWWxBW2PZCbMAi0XJj9fxUsoI2LR57e5xKPsW5fNVnpopCoITb0KszNSb5WLOdyZA8NCH6bJFXhfYczZC4KX7SBwJpwN5bo3cE6gVCTs4sx6IIgKRRoJDAG6NjOyyvUZCQCKD8JtjkHshjErUzJM13GP9yoUZD&debug=all&fields=business_discovery.username(mmmmmmmmmaison){media{media_url,permalink,caption}}&format=json&method=get&pretty=0&suppress_http_code=1&transport=cors",
	  type: "GET",
	  headers: { /*Authorization: "Bearer "+localStorage.getItem("token") */},
	  data: {},
	  error: function(err) {
	    cb(err,{});
	  },
	  success: function(data,status,xhr) {
	    cb(null,data);
	  }
	});
}

fetchData(function(err,data){
	if(!err){
		var biz = data.business_discovery.media.data;
		$('.column').html('');
		for(var i=0;i<biz.length;i++){
			$('#col'+(i%3)).append(createItem(biz[i]));
		}
	}else{
		console.log(err);
	}
})

function createItem(data){
	var code = '<div class="item">';
	code += '<img src="'+data.media_url+'" alt="">';
	code += '<div class="desc">'+data.caption+'</div>';
	code += '</div>';
	return code;
}