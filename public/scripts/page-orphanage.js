const options = {
	dragging: false,
	touchZoom: false,
	doubleClickZoom: false,
	scrollWheelZoom: false,
	zoomControl: false
}

const map = L.map("mapid", options).setView([-29.9391868, -50.9973944], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
	iconUrl: "public/img/logo-icon.png",
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2]
});

L.marker([-29.9391868, -50.9973944], {icon}).addTo(map)

function selectImage(event)
{
	const buttonClicado = event.currentTarget;

	const buttons = document.querySelectorAll(".images button");

	buttons.forEach(button => {
		button.classList.remove("active");
	});

	const image = buttonClicado.children[0];
	const imageContainer = document.querySelector(".orphanage-details > img");

	imageContainer.src = image.src;

	buttonClicado.classList.add("active");
}