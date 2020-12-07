const map = L.map("mapid").setView([-29.9391868, -50.9973944], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
	iconUrl: "public/img/logo-icon.png",
	iconSize: [58, 68],
	iconAnchor: [29, 68]
});

let marker;

map.on("click", function(event){
	const lat = event.latlng.lat;
	const lng = event.latlng.lng;

	document.querySelector("[name=lat]").value = lat;
	document.querySelector("[name=lng]").value = lng;

	marker && map.removeLayer(marker);

	marker = L.marker([lat, lng], {icon}).addTo(map);
});

function addPhotoField()
{
	const fieldsContainer = document.querySelectorAll(".new-upload");

	if(fieldsContainer[fieldsContainer.length - 1].children[0].value)
	{
		const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
		newFieldContainer.children[0].value = "";

		const container = document.querySelector("#images");
		container.appendChild(newFieldContainer);
	}
}

function deleteField(event)
{
	const span = event.currentTarget;

	const fieldsContainer = document.querySelectorAll(".new-upload");

	if(fieldsContainer.length < 2)
	{
		span.parentNode.children[0].value = "";
	}
	else
	{
		span.parentNode.remove();
	}
}

function toggleSelect(event)
{
	document.querySelectorAll(".button-select button")
	.forEach(button =>{
		button.classList.remove("active");
	});

	const button = event.currentTarget;
	button.classList.add("active");

	const input = document.querySelector('[name="open_on_weekends"]');
	input.value = button.dataset.value;
}