document.addEventListener("DOMContentLoaded", function () {
  // تحقق من وجود اسم المستخدم في localStorage
  const username = localStorage.getItem("username");

  if (username) {
      // إظهار قسم المستخدم وإخفاء زر تسجيل الدخول
      document.getElementById("user-section").style.display = "flex";
      document.getElementById("username").textContent = username;
      document.getElementById("login-section").style.display = "none";
      document.getElementById("user-section").style.display = "flex";
      
  } else {
      // إظهار زر تسجيل الدخول إذا لم يكن المستخدم مسجل الدخول
      document.getElementById("login-section").style.display = "flex";
      document.getElementById("user-section").style.display = "none";
  }
});

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
      document.getElementById("username").textContent = username;
      document.getElementById("username").textContent = username;
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
    document.getElementById('contact')
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
            else if (list===document.getElementById('contact-page')) {
                pages.forEach(pages=>pages.classList.remove('active-page'));
                document.getElementById("contact").classList.add("active-page");
                console.log('contact');
            }
            
            
        }
    
})}
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
        <p class="card-text">Location: ${hotel.location}</p>
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
  