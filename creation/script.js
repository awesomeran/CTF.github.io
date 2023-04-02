function checkPassword() {
	var password = document.getElementById("password-input").value;
	if (password === "LeBron James38388") {
		showDialog("Congratulations! You got the bonus");
	} else {
		showDialog("Please try agein");
	}
}

function showDialog(message) {
	var dialog = document.createElement("div");
	dialog.classList.add("dialog");

	var dialogBox = document.createElement("div");
	dialogBox.classList.add("dialog-box");

	var messageHeader = document.createElement("h2");
	messageHeader.textContent = message;
	dialogBox.appendChild(messageHeader);

	var closeButton = document.createElement("button");
	closeButton.textContent = "close";
	closeButton.onclick = function() {
		dialog.parentNode.removeChild(dialog);
	};
	dialogBox.appendChild(closeButton);

	dialog.appendChild(dialogBox);
	document.body.appendChild(dialog);
}
