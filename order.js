window.addEventListener("DOMContentLoaded", function(e){

  let locationBox = document.querySelector("#location");

  let location = {
    latitude: "unknown",
    longitude: "unknown"
  }

  window.navigator.geolocation.getCurrentPosition(
    function(position) {
      location.latitude = position.coords.latitude;
      location.longitude = position.coords.latitude;

      locationBox.value = JSON.stringify(location);
    },
    function(error) {
      locationBox.value = JSON.stringify(location);
    }
  );

  const order = localStorage.getItem("order");

  if (order){
    const pieOrder = JSON.parse(order);

    const orderInput = document.querySelector("#pie-order");
    orderInput.value = order;
    
    const pie = document.querySelector(".pie");
    const title = pie.querySelector(".title");
    const price = pie.querySelector(".price");
    const desc = pie.querySelector(".desc");

    title.innerText = pieOrder.title;
    price.innerText = pieOrder.price;
    desc.innerText = pieOrder.desc;

    const img = pie.querySelector("img");
    img.setAttribute("src", `images/${pieOrder.id}.png`);
    img.setAttribute("alt", pieOrder.title);
  }
});