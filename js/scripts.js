var observer = new FontFaceObserver("MyWebSerif");
observer.check().then(function() {
	document.documentElement.className += "fonts-loaded";
});