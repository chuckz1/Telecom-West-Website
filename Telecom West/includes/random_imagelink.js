function random_imglink() {
	var myimages = new Array();
	//specify random images below. You can have as many as you wish
	// myimages[1] = "images/box_laying_down_w_computer.jpg";
	// myimages[2] = "images/boy_and_tent.jpg";
	// myimages[3] = "images/girl_on_floor_w_computer.jpg";
	// myimages[4] = "images/girl_student_w_computer.jpg";
	// myimages[5] = "images/guy_sitting_with_globe.jpg";
	// myimages[6] = "images/guy_sitting_with_laptop.jpg";
	// myimages[7] = "images/happy_girls_w_laptop.jpg";
	// myimages[8] = "images/lady_holding_globe_at_desk.jpg";
	// myimages[9] = "images/lady_holding_notebook.jpg";

	myimages[1] =
		"images/photos/112A4664-windmill-and-road-sandhills-nebraska.jpg";
	myimages[2] = "images/photos/Nebraska-Sandhills-Highway-1500x1000.jpg";
	myimages[3] = "images/photos/Sand Hills 6.jpg";
	myimages[4] = "images/photos/Sand Hills Western Ne..jpg";
	myimages[5] = "images/photos/SANDHILLS-e1506978838182.jpg";
	myimages[6] = "images/photos/Western Nebraska Cows 1.jpg";
	myimages[7] = "images/photos/Western Nebraska Cows 2.jpg";
	myimages[8] = "images/photos/Western Nebraska Cows.jpg";
	myimages[9] = "images/photos/Western Nebraska Sandhills.jpg";

	var ry = Math.floor(Math.random() * myimages.length);
	if (ry == 0) ry = 1;
	document.write(
		'<img src="' +
			myimages[ry] +
			'" style="width:296px; height: 178px;" border="0"></a>'
	);
}
random_imglink();
