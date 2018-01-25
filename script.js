const redirectLocation = location.href.slice(0, location.href.lastIndexOf("."));
if(location.href!==redirectLocation)
	location.assign(redirectLocation);