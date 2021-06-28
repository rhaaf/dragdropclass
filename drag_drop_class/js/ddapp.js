    //identify the nodes of interest in the DOM
const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropcontainer = document.querySelector(".puzzle-board"),
				dragimages = document.querySelectorAll(".puzzle-image"),
				dropzones = document.querySelectorAll(".drop-zone");

	// functions go in the middle

	function startDrag() {
		console.log('dragging ' + this.dataset.piecenum);
	}

	function draggedOver(event) {
		event.preventDefault();
		console.log('dragging over drop zone elements');
	}

	function dropped(event) {
		event.preventDefault();
		console.log('dropped on the element');
		console.log(event.target.id);
	}


	// event handling at the bottom
dragimages.forEach(piece => {
	piece.addEventListener('dragstart', startDrag, false);
});


dropzones.forEach(zone => {
	zone.addEventListener('drop',dropped, false);
	zone.addEventListener('dragover',draggedOver, false);
});
