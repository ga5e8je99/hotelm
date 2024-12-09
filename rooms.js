const roomsContainer = document.getElementById('rooms-container');
const selectedHotel = localStorage.getItem('selectedHotel');
const hotel = hotels[selectedHotel];


for (const key in hotel) {
  document.getElementById('hotel-title').innerText=`${hotel.name}`;
  document.getElementById(`hotel-image`).src=`${hotel.image}`;
  document.getElementById('location-hotel').innerText=`${hotel.location}`;
  document.getElementById('raite').innerText=`${hotel.rating}`;

}
for (const key in hotel.rooms) {
  const room = hotel.rooms[key];
 
  const roomCard = document.createElement('div');

  roomCard.className = 'col-md-4';
  roomCard.innerHTML = `
  <div class="card">
    <img src="${room.image}" class="card-img-top" alt="${room.bedSize}">
    <div class="card-body">
      <h5 class="card-title">${room.bedSize}</h5>
      <p class="card-text"><strong>Price per Night:</strong> $${room.price}</p>
      <p class="card-text"><strong>Amenities:</strong> ${room.option}</p>
      <p class="card-text"><strong>Max People:</strong> ${room.maxPepole}</p>
    </div>
    </div>
  `;
  roomCard.addEventListener('click', () => {
    localStorage.setItem('selectedRoom', JSON.stringify(room));
    window.location.href = 'booking.html';
  });
  roomsContainer.appendChild(roomCard);
}
