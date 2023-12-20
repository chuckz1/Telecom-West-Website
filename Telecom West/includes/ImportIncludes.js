function resizeImportedIframe(obj, forceHight = true) {
	//set iframe height and width to match content
	if (forceHight) {
		obj.height = obj.contentWindow.document.documentElement.clientHeight + "px";
	} else {
		obj.height = "100%";
	}
	obj.style.width = "100%";

	//remove margins created by default body in an iframe
	obj.contentWindow.document.body.style = "margin: 0px;";

	//import stylesheets from main file
	var oHead = obj.contentWindow.document.getElementsByTagName("head")[0];
	var arrStyleSheets = document.getElementsByTagName("style");
	for (var i = 0; i < arrStyleSheets.length; i++)
		oHead.appendChild(arrStyleSheets[i].cloneNode(true));

	//overide <a> clicks so that parent can trigger them instead
	var elems = obj.contentWindow.document.body.getElementsByTagName("A");
	for (let i = 0; i < elems.length; i++) {
		elems[i].onclick = () => {
			triggerHrefInParrent(elems[i].href);
			elems[i].removeAttribute("href");
		};
	}
}

//alternate method to trigger anchor tags in the main window
function triggerHrefInParrent(href) {
	window.location.href = href;
}

//example iframe
/*
<iframe src="./includes/top_index.htm" title="top_index" frameborder="0" scrolling="no"
								onload="resizeImportedIframe(this, true);"></iframe>
*/

//Used to hide code for testing only
/*
<span class="deleteMe" style="display:none">
*/
