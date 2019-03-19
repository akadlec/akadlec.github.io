	$(function() {
		var body = $('#starshine'),
			template = $('.template.shine'),
			stars =  100,
			sparkle = 20;


		var size = 'small';
		var createStar = function() {
			template.clone().removeAttr('id').css({
				top: (Math.random() * 100) + '%',
				left: (Math.random() * 100) + '%',
				webkitAnimationDelay: (Math.random() * sparkle) + 's',
				mozAnimationDelay: (Math.random() * sparkle) + 's'
			}).addClass(size).appendTo(body);
		};

		for(var i = 0; i < stars; i++) {
			if(i % 2 === 0) {
				size = 'small';
			} else if(i % 3 === 0) {
				size = 'medium';
			} else {
				size = 'large';
			}

			createStar();
		}
	});

	// get a refrence to the canvas and its context
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	// newly spawned objects start at Y=25
	var spawnLineY = 25;

	// spawn a new object every 1500ms
	var spawnRate = 1000;

	// set how fast the objects will fall
	var spawnRateOfDescent = 1;

	// when was the last object spawned
	var lastSpawn = -1;

	// this array holds all spawned object
	var objects = [];

	// save the starting time (used to calc elapsed time)
	var startTime = Date.now();

	var img1 = new Image();
	img1.src = "/images/unicorn1.png";

	var img2 = new Image();
	img2.src = "/images/unicorn2.png";

	var img3 = new Image();
	img3.src = "/images/unicorn3.png";

	var img4 = new Image();
	img4.src = "/images/unicorn4.gif";

	var img5 = new Image();
	img5.src = "/images/unicorn5.png";

	var img6 = new Image();
	img6.src = "/images/unicorn6.png";

	var img7 = new Image();
	img7.src = "/images/unicorn9.png";

	var img8 = new Image();
	img8.src = "/images/unicron8.png";

	var img9 = new Image();
	img9.src = "/images/Fluffy.png";

	var img10 = new Image();
	img10.src = "/images/fatunicorn.png";

	var img11 = new Image();
	img11.src = "/images/cat.png";

	var img12 = new Image();
	img12.src = "/images/unicornbue.png";

	var img13 = new Image();
	img13.src = "/images/unicornduha.png";

	var img14 = new Image();
	img14.src = "/images/unocrnpink.png";

	var img15 = new Image();
	img15.src = "/images/gif2.gif";

	var img16 = new Image();
	img16.src = "/images/slepp.png";

	var img17 = new Image();
	img17.src = "/images/unicronsss.png";

	var img18 = new Image();
	img18.src = "/images/small.png";

	var img19 = new Image();
	img19.src = "/images/Cute_Unicorn.png";

	var img20 = new Image();
	img20.src = "/images/canva-cute-unicorn-MAB22maBpLI.png";

	// Our images array
	var images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];

	// start animating
	window.onload=function(){
		animate();
	}


	function spawnRandomObject() {

		// select a random type for this new object
		var t;

		// About Math.random()
		// Math.random() generates a semi-random number
		// between 0-1. So to randomly decide if the next object
		// will be A or B, we say if the random# is 0-.49 we
		// create A and if the random# is .50-1.00 we create B

		if (Math.random() < 0.50) {
			t = "red";
		} else {
			t = "blue";
		}

		// create the new object
		var object = {
			// set this objects type
			type: t,
			// set x randomly but at least 15px off the canvas edges
			x: Math.random() * (canvas.width - 30) + 15,
			// set y to start on the line where objects are spawned
			y: spawnLineY,
			// give random image
			image: images[Math.floor(Math.random()*images.length)]
		}
		// add the new object to the objects[] array
		objects.push(object);
	}



	function animate() {

		// get the elapsed time
		var time = Date.now();

		// see if its time to spawn a new object
		if (time > (lastSpawn + spawnRate)) {
			lastSpawn = time;
			spawnRandomObject();
		}

		// request another animation frame
		requestAnimationFrame(animate);

		// clear the canvas so all objects can be
		// redrawn in new positions
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// draw the line where new objects are spawned
		ctx.beginPath();
		ctx.moveTo(0, spawnLineY);
		ctx.lineTo(canvas.width, spawnLineY);

		// move each object down the canvas
		for (var i = 0; i < objects.length; i++) {
			var object = objects[i];
			object.y += spawnRateOfDescent;
			ctx.drawImage(object.image, object.x, object.y);
		}

	}
