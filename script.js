document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("questions-btn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("If you have questions, contact me at:\naxtorres05@yahoo.com");
    });
  }
});

// GOOGLE MAP
function initMap() {
  const position = { lat: 41.838813, lng: -87.627274 };

  const map = new google.maps.Map(document.getElementById("googleMap"), {
    center: position,
    zoom: 19,
    mapTypeControl: true,
    streetViewControl: true,
    zoomControl: true
  });

  // Marker
  const marker = new google.maps.Marker({
    position,
    map,
    title: "Illinois Institute of Technology"
  });

  // Info window
  const info = new google.maps.InfoWindow({
    content: "<strong>Illinois Tech</strong><br>Chicago, IL"
  });

  marker.addListener("click", () => {
    info.open(map, marker);
  });
}