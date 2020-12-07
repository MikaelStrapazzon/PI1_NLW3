const map = L.map("mapid").setView([-29.9391868, -50.9973944], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
	iconUrl: "public/img/logo-icon.png",
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2]
});

const popup = L.popup({
	closeButton: false,
	className: "map-popup",
	minWidth: 240,
	minHeight: 240
}).setContent(
	"Lar das meninas" +
	'<a href="orphanage.html?id=1" class="choose-orphanage">' +
		'<img src="public/img/arrow-white.svg">' +
	"</a>"
);

L.marker([-29.9391868, -50.9973944], {icon})
	.addTo(map)
	.bindPopup(popup);