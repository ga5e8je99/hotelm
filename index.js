
// وظيفة تسجيل الخروج
function handleLogout() {
  // حذف بيانات المستخدم من localStorage
  localStorage.removeItem("username");
  localStorage.removeItem("token"); // إذا كنت تخزن التوكن
  document.getElementById("user-section").style.display = "none";
  // إعادة تحميل الصفحة
  window.location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
      // document.getElementById("username").textContent = username;
      // document.getElementById("username").textContent = username;
      document.getElementById("login-section").style.display = "none";
      document.getElementById("user-section").style.display = "flex";
    }
    else {
      // إظهار زر تسجيل الدخول إذا لم يكن المستخدم مسجل الدخول
      document.getElementById("login-section").style.display = "flex";
      document.getElementById("user-section").style.display = "none";
  }
    
});

//////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', (event) => {
  const userName = localStorage.getItem('username');

  if (userName) {
      document.getElementById('welcome-message').innerText = `Welcome ${userName}!`;

      document.querySelector('.login-btn').style.display = "none";
      document.querySelector('.logout-btn').style.display = "inline";
  }
});

function logoutUser() {
  localStorage.removeItem('username');
  window.location.href = "Login.html";
}

let linkes=document.querySelectorAll('.nav-link');
let pages=[
    document.getElementById('home'),
    document.getElementById('hotels'),
    document.getElementById('feedback'),
    document.getElementById('contact'),
    document.getElementById("car"),
    document.getElementById("trou")
];

let list;
for (let i = 0; i < linkes.length; i++) {
    linkes[i].addEventListener('click', function(){
        linkes.forEach(list=>list.classList.remove('active-link'));
        this.classList.add('active-link');
        list=this;
        for (let index = 0; index < pages.length; index++) {
            pages.forEach(pages=>pages.classList.remove('active-page'));
            if (list===document.getElementById('home-page')) {
                pages.forEach(pages=>pages.classList.remove('active-page'));
                document.getElementById("home").classList.add("active-page");

                console.log('home');
            }
            else if (list===document.getElementById('hotels-page')) {
                pages.forEach(pages=>pages.classList.remove('active-page'));
                document.getElementById("hotels").classList.add("active-page");
            }
            else if (list===document.getElementById('feedback-page')) {
                pages.forEach(pages=>pages.classList.remove('active-page'));
                document.getElementById("feedback").classList.add("active-page");
                console.log('feedback');
            }
            else if (list===document.getElementById('car-page')) {
                pages.forEach(pages=>pages.classList.remove('active-page'));
                document.getElementById("car").classList.add("active-page");
                console.log('car');
            }
            else if (list===document.getElementById('contact-page')) {
              pages.forEach(pages=>pages.classList.remove('active-page'));
              document.getElementById("contact").classList.add("active-page");
              console.log('contact');
          }
            else if (list===document.getElementById('trou-page')) {
              pages.forEach(pages=>pages.classList.remove('active-page'));
              document.getElementById("trou").classList.add("active-page");
              console.log('trou');
          }
          }
          

            
            
        })
    
};
document.addEventListener("DOMContentLoaded", () => {
  const applyFilters = document.getElementById("apply-filters");
  const hotelSection = document.getElementById("hotels-section");

  applyFilters.addEventListener("click", () => {
    const searchName = document.getElementById("search-name").value.toLowerCase();
    const selectedLocation = document.getElementById("filter-location").value;
    const selectedRatings = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    ).map(cb => cb.value); // Get all selected checkbox values

    const hotelCards = hotelSection.querySelectorAll(".cont");

    hotelCards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const location = card.querySelector(".card-text").textContent.toLowerCase();
      const rating = card.querySelector(".star-rating").textContent.trim().length; // Number of stars

      const matchesName = !searchName || title.includes(searchName);
      const matchesLocation =
        selectedLocation === "all" || location.includes(selectedLocation.toLowerCase());
      const matchesRating =
        selectedRatings.length === 0 || selectedRatings.includes(rating.toString());

      // Show or hide the card based on matching conditions
      if (matchesName && matchesLocation && matchesRating) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
  const applyFiltersCar = document.getElementById("apply-filters-car");
  const carSection = document.getElementById("car-section");

  applyFiltersCar.addEventListener("click", () => {
    const searchName = document.getElementById("search-car-name").value.toLowerCase();
    const selectedCarType = document.getElementById("filter-model").value;
    const selectedRatings = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    ).map(cb => cb.value); // Get all selected checkbox values

    const carCards = carSection.querySelectorAll(".car-card"); // Use the class for car cards

    carCards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const type = card.querySelector(".model").textContent.toLowerCase();
      const rating = card.querySelector(".star-rating").textContent.trim().length; // Number of stars

      const matchesName = !searchName || title.includes(searchName);
      const matchesType =
        selectedCarType === "all" || type.includes(selectedCarType.toLowerCase());
      const matchesRating =
        selectedRatings.length === 0 || selectedRatings.includes(rating.toString());

      // Show or hide the card based on matching conditions
      if (matchesName && matchesType && matchesRating) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });



















  const applyFilterstr = document.getElementById("apply-filters-tours");
  const troSection = document.getElementById("tour-section");

  applyFilterstr.addEventListener("click", () => {
    const searchName = document.getElementById("search-tr-name").value.toLowerCase();
    const selectedtrType = document.getElementById("filter-toe").value;
    const selectedRatings = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    ).map(cb => cb.value); // Get all selected checkbox values

    const trCards = troSection.querySelectorAll(".tour-card"); // Use the class for car cards

    trCards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const type = card.querySelector(".tr").textContent.toLowerCase();
      const rating = card.querySelector(".star-rating").textContent.trim().length; // Number of stars

      const matchesName = !searchName || title.includes(searchName);
      const matchesType =
      selectedtrType === "all" || type.includes(selectedtrType.toLowerCase());
      const matchesRating =
        selectedRatings.length === 0 || selectedRatings.includes(rating.toString());

      // Show or hide the card based on matching conditions
      if (matchesName && matchesType && matchesRating) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });













});




































document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from refreshing the page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const hotel = document.getElementById('hotel').value;
  const feedback = document.getElementById('feedback').value;
  const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : 'No rating';

  console.log({
    name: name,
    email: email,
    hotel: hotel,
    feedback: feedback,
    rating: rating
  });

  alert('Thank you for your feedback!');
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log({
    name: name,
    email: email,
    message: message
  });

  alert('Thank you for contacting us! We will get back to you shortly.');})

  /////////////
 
  /////////////////hotel2///////////////////
  const hotelsContainer = document.getElementById('hotels-section');

  for (const key in hotels) {
    const hotel = hotels[key];
    const hotelCard = document.createElement('div');
    hotelCard.className = 'cont';
    hotelCard.innerHTML = `
    <div class='card'>
      <img src="${hotel.image}" class="card-img-top" alt="${hotel.name}">
      <div class="card-body">
        <h5 class="card-title">${hotel.name}</h5>
        <p><span class="star-rating">${hotel.rating}</span></p>
        <p class="card-text">${hotel.location}</p>
        <p class="card-text">Rooms Available: ${hotel.roomNumber}</p>
      </div>
      </div>
    `;
    console.log(hotel)
    hotelCard.addEventListener('click', () => {
      localStorage.setItem('selectedHotel', key);
      window.location.href = 'rooms.html';
    });
    hotelsContainer.appendChild(hotelCard);
  }
   


  const carContainer = document.getElementById('car-section');

  for (const key in cars) {
    const car = cars[key];
    const carCard = document.createElement('div');
    carCard.className = 'car-card';
    carCard.innerHTML = `
    <div class='card'>
      <img src="${car.image}" class="card-img-top" alt="${car.name}">
      <div class="card-body">
        <h5 class="card-title">${car.name}</h5>
        <p><span class="star-rating">${car.rating}</span></p>
        <p class="card-text">Description: ${car.description}</p>
        <p class="card-text model">Models Available: ${car.models}</p>
      </div>
    </div>
    `;
    carCard.addEventListener('click', () => {
        // تخزين بيانات السيارة في LocalStorage
        localStorage.setItem('selectedCar', JSON.stringify(car));
        // الانتقال إلى صفحة الحجز
        window.open('./bookingCar.html');
    });
    carContainer.appendChild(carCard);
}

const tourContainer = document.getElementById('tour-section');

for (const key in tours) {
  const tour = tours[key];
  const tourCard = document.createElement('div');
  tourCard.className = 'col-md-4 tour-card';
  tourCard.innerHTML = `
    <div class="card">
      <img src="${tour.image}" class="card-img-top" alt="${tour.name}">
      <div class="card-body">
        <h5 class="card-title">${tour.name}</h5>
        <p class="card-text tr"><strong>Location:</strong> ${tour.location}</p>
        <p class="card-text star-rating"><strong>Rating:</strong> ${tour.rating}</p>
        <p class="card-text">${tour.description}</p>
        <button class="btn btn-primary">View Details</button>
      </div>
    </div>
  `;
  tourCard.querySelector('button').addEventListener('click', () => {
    localStorage.setItem('selectedTour', JSON.stringify(tour));
    window.open('./bookingTour.html');
  });
  tourContainer.appendChild(tourCard);
}
let itemss = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = itemss.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 3500)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    itemss[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 3500)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
