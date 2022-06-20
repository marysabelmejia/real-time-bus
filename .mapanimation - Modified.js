// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.0828757110461, 42.31626608333003],
  [-71.08177332314375, 42.318193853120405],
  [-71.0813851862909, 42.319953534436266],
  [-71.0818125959454, 42.32158617155352],
  [-71.08260365934376, 42.32391327471938], 
  [-71.0832396990551, 42.32573924243441],
  [-71.08302091944381, 42.32735171962828],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeXNhYmVsbWVqaWEiLCJhIjoiY2w0MXJ3MHFhMHZvbjNkbXBiaGE5aHBwNCJ9.c1UG_2whDV-pWV-9UnlMWg';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.08198819531181, 42.32131907464338],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  let marker = new mapboxgl.Marker()
  .setLngLat([-71.0846, 42.3161])
  .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() =>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
