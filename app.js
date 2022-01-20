function toggleDialog(num) {
	const element = document.querySelector("#dialog" + num);
	element.classList.toggle("dialog-container-opened");
}

function showSnackbar() {
	const snackbar = document.querySelector("#_snackbar");
	snackbar.classList.add("snackbar");
	if (snackbar.classList.contains("snackbar")) {
		setTimeout(hideSnackBar, 4000);
	}
}

function hideSnackBar() {
	const snackbar = document.querySelector("#_snackbar");
	snackbar.classList.remove("snackbar");
}

const tabs = document.querySelectorAll(".tabbar-button");
const tabContent = document.querySelectorAll(".tabbar-content");
tabContent.forEach((content) => {
	content.style.display = "none";
	console.log(content.id);
	if (content.id === "Mumbai") {
		content.style.display = "block";
	}
});
tabs.forEach((tab) => {
	tab.addEventListener("click", function () {
		tabs.forEach((tab) => {
			tab.classList.remove("selected");
		});
		this.classList.add("selected");
		selectTab(this.innerText);
	});
});
function selectTab(element) {
	tabContent.forEach((content) => {
		content.style.display = "none";
		console.log(content.id);
		if (content.id === element) {
			content.style.display = "block";
		}
	});
}
