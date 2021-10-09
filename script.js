let times1 = randint(100, 500)
let times2 = randint(100, 500)
let posx = -17 
let posy = -12

function uhoh() {
	setInterval(move, 50)
	document.getElementById('stop')
		.style.display = 'none';
	document.getElementById('bigvid')
		.style.display = 'block';
	document.getElementById("bigvid")
		.play()
}

function randint(a, b) {
	b = b + 1
	return Math.ceil((Math.random() * (b - a)) - 1) + a - 1
}

function move() {
	document.getElementById('bigvid')
		.style.transform = "translate3d(" + randint(-100, 100) + "%, " + randint(-100, 100) + "%, 0)"
}

function check() {
	if (times1 * times2 === parseInt(document.getElementById("answer")
		.innerHTML)) {
		alert("well done!")
		alert("Prepare for...")
		alert("😂")
		document.getElementById("keypad")
			.style.display = "none"
		uhoh()
	} else {
		alert("Incorect Dummy!!!")
		document.getElementById("keypad")
			.style.display = "none"
		document.getElementById("stop")
			.style.display = "block"
		document.getElementById("answer")
			.innerHTML = ""
	}
}
windowserror = document.createElement("audio");
windowserror.src = "https://www.myinstants.com/media/sounds/erro.mp3"

function triggerKeypad() {
	document.getElementById('keypad').style.display = 'block';
	document.getElementById('problem').innerHTML = times1.toString() + '&times;' + times2.toString()
	document.getElementById("stop").style.display = 'none'
}

// Make the DIV element draggable:
function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
function create_err() {
	audio = document.createElement("AUDIO")
	audio.src = "/Error.mp3"
	audio.play()
	audio.remove()
	posx += 17
	posy += 12
	document.body.innerHTML += `
	<div class="mserror" style="top:calc(50% + ${posy}px);left:calc(50% + ${posx}px);">
		Macrohard error
		<button onclick="document.querySelector('.mserror').remove()">&times;</button>
		<div class="errcontent">
			<button class="erricon">
				&times;
			</button>
			<span class="mserrortotheright">
				<span style="font-size: 16px;">Scripts may close only the windows that were opened by them.</span>
				<br>
				<u style="font-size: 14px;">Source: <span style="color: darkred">you-failed.js</span></u>
				<br>
				<button class="errokay" onclick="document.querySelector('.mserror').remove()">
					Okay
				</button>
			</span>
		</div>
	</div>
	`
	document.querySelectorAll(".mserror").forEach((el) => { dragElement(el) })
}
function keypadAdd(num){
	document.getElementById('answer').innerHTML += num
}