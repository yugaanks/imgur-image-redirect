const redirectLocation = location.href.slice(0, -4);
if(location.href!==redirectLocation)
	location.assign(redirectLocation);