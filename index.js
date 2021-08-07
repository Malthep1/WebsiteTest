window.navigator.geolocation.getCurrentPosition(
  function(position) {
    console.log(`latitude: ${position.coords.latitude}`);
    console.log(`longitude: ${position.coords.longitude}`);
  },
  function(error) {
    console.log("Error or user didn't share location.");
  }
);