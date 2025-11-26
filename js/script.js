function initMap() {
  const center = { lat: 41.85, lng: -87.65 }; 
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    center: center,
    zoom: 12,
  });

  const locations = [
    {
      name: "Illinois Institute of Technology",
      position: { lat: 41.838813, lng: -87.627274 },
      color: "#ff7a7aff",
      website: "https://www.iit.edu/"
    },
    {
      name: "University of Illinois Chicago",
      position: { lat: 41.8740, lng: -87.6500 },
      color: "#7070ffff",
      website: "https://www.uic.edu/"
    },
    {
      name: "National Museum of Mexican Art",
      position: { lat: 41.8573, lng: -87.6758 },
      color: "#d883ffff",
      website: "https://nationalmuseumofmexicanart.org/"
    }
  ];

  locations.forEach(loc => {
    const circle = new google.maps.Circle({
      strokeColor: loc.color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: loc.color,
      fillOpacity: 0.25,
      map: map,
      center: loc.position,
      radius: 100, 
    });

    circle.addListener("click", () => {
      window.open(loc.website, "_blank");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("questionButton");
  if (button) {
    button.addEventListener("click", () => {
      alert("If you have questions, contact me at:\natorres41@hawk.illinoistech.edu");
    });
  }
});