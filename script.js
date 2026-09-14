// ==========================================
// 1. DOM HELPER UTILITIES & APPLICATION DATA
// ==========================================

// Query Selector Helpers
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

// Sample Properties Dataset
const properties = [
  {
    id: 1,
    title: "Self contain",
    area: "University Road · 8 mins from campus",
    price: 85000,
    type: "Self contain",
    distance: 0.8,
    rating: 4.8,
    verified: true,
    wifi: false,
    gender: "Any",
    beds: "1 room",
    bath: "1 bath",
    image:
      "Dormer Image/20.jpg",
  },
  {
    id: 2,
    title: "Self contain",
    area: "Student Village · 12 mins from campus",
    price: 100000,
    type: "Self contain",
    distance: 1.3,
    rating: 4.6,
    verified: true,
    wifi: false,
    gender: "any",
    beds: "1 room",
    bath: "1 bath",
    image:
      "Dormer Image/14.jpg",
    furnished: false,
  },
  {
    id: 3,
    title: " Shared Apartment",
    area: "Tudun Wada · 6 mins from campus",
    price: 65000,
    type: "Shared room",
    distance: 0.6,
    rating: 4.7,
    verified: true,
    wifi: false,
    gender: "Any",
    beds: "Shared",
    bath: " baths",
    image:
      "Dormer Image/15.jpg",
    furnished: false,
    parking: false,
    gym: false,
  },
  {
    id: 4,
    title: "Compact Student Apartment",
    area: "University Junction · 15 mins from campus",
    price: 190000,
    type: "Self contain",
    distance: 1.8,
    rating: 4.4,
    verified: false,
    wifi: false,
    gender: "Any",
    beds: "1 room",
    bath: "1 bath",
    image:
      "Dormer Image/17.jpg",
    furnished: false,
    parking: false,
    gym: false,
  },
  {
    id: 5,
    title: " Shared Flat",
    area: "Bauchi Road · 9 mins from campus",
    price: 95000,
    type: "Shared room",
    distance: 0.9,
    rating: 4.9,
    verified: true,
    wifi: false,
    gender: "Female",
    beds: "Shared",
    bath: "1 baths",
    image:
      "Dormer Image/18.jpg",
    furnished: false,
    parking: false,
    gym: false,
  },
  {
    id: 6,
    title: "Self contain",
    area: "Dada · 5 mins from campus",
    price: 120000,
    type: "Shortlet",
    distance: 0.5,
    rating: 4.5,
    verified: true,
    wifi: false,
    gender: "Any",
    beds: "1 room",
    bath: "1 bath",
    image:
      "Dormer Image/10.jpg",
    furnished: false,
    parking: false,
    gym: false,
  },
  {
    id: 7,
    title: "Shared Apartment",
    area: "Mabushi Close · 10 mins from campus",
    price: 120000,
    type: "Shared Apartment",
    distance: 1.1,
    rating: 4.8,
    verified: true,
    wifi: false,
    gender: "Any",
    beds: "rooms",
    bath: "baths",
    image:
      "Dormer Image/5.jpg",
    furnished: false,
    parking: false,
    gym: false,
  },
  {
    id: 8,
    title: "Self contain",
    area: "Sango Estate · 14 mins from campus",
    price: 100000,
    type: "Studio",
    distance: 1.5,
    rating: 4.7,
    verified: true,
    wifi: true,
    gender: "Any",
    beds: "1 room",
    bath: "1 bath",
    image:
      "Dormer Image/7.jpg",
    amenities: ["Wi-Fi", "Balcony", "Security"],
    furnished: true,
    parking: false,
    gym: true,
  },
  {
    id: 9,
    title: "Premium Apartment with Study Room",
    area: "New Garage Area · 7 mins from campus",
    price: 200000,
    type: "Apartment",
    distance: 0.7,
    rating: 4.9,
    verified: true,
    wifi: true,
    gender: "Any",
    beds: "1 rooms",
    bath: "1 baths",
    image:
      "Dormer Image/21.jpg",
  },
  {
    id: 10,
    title: "Budget Apartment Near Campus",
    area: "Lagos Road · 4 mins from campus",
    price: 180000,
    type: "Apartment",
    distance: 0.4,
    rating: 4.5,
    verified: false,
    wifi: false,
    gender: "Any",
    beds: "1 room",
    bath: "1 bath",
    image:
      "Dormer Image/default.jpg",
    amenities: ["Water", "Security", "Kitchen"],
    furnished: false,
    parking: false,
    gym: false,
  },
  {
    id: 11,
    title: "Executive Studio Loft",
    area: "Maitama Avenue · 11 mins from campus",
    price: 295000,
    type: "Studio",
    distance: 1.2,
    rating: 4.8,
    verified: true,
    wifi: true,
    gender: "Any",
    beds: "1 room",
    bath: "1 bath",
    image:
      "Dormer Image/default.jpg",
    amenities: ["Wi-Fi", "Gym", "Parking"],
    furnished: true,
    parking: true,
    gym: true,
  },
  {
    id: 12,
    title: "Spacious Duplex with Balcony",
    area: "Green Park Estate · 16 mins from campus",
    price: 360000,
    type: "Duplex",
    distance: 1.7,
    rating: 4.9,
    verified: true,
    wifi: true,
    gender: "Any",
    beds: "3 rooms",
    bath: "2 baths",
    image:
      "Dormer Image/default.jpg",
    amenities: ["Wi-Fi", "Balcony", "Parking"],
    furnished: false,
    parking: true,
    gym: false,
  },
  {
    id: 13,
    title: "Shared Duplex Suite",
    area: "Hostel Road · 3 mins from campus",
    price: 110000,
    type: "Shared room",
    distance: 0.3,
    rating: 4.6,
    verified: true,
    wifi: true,
    gender: "Female",
    beds: "Shared",
    bath: "2 baths",
    image:
      "Dormer Image/default.jpg",
    amenities: ["Wi-Fi", "Shared kitchen", "Security"],
    furnished: true,
    parking: false,
    gym: false,
  },
  {
    id: 14,
    title: "Semi-Furnished Mini Flat",
    area: "Aminu Kano Crescent · 6 mins from campus",
    price: 175000,
    type: "Self contain",
    distance: 0.6,
    rating: 4.5,
    verified: true,
    wifi: false,
    gender: "Any",
    beds: "1 room",
    bath: "1 bath",
    image:
      "Dormer Image/default.jpg",
    amenities: ["Kitchen", "Water", "Security"],
    furnished: true,
    parking: false,
    gym: false,
  },
  {
    id: 15,
    title: "Luxury Apartment with Pool View",
    area: "Adetokunbo Drive · 9 mins from campus",
    price: 420000,
    type: "Apartment",
    distance: 1.0,
    rating: 4.9,
    verified: true,
    wifi: true,
    gender: "Any",
    beds: "2 rooms",
    bath: "2 baths",
    image:
      "Dormer Image/default.jpg",
    amenities: ["Wi-Fi", "Pool", "Parking"],
    furnished: true,
    parking: true,
    gym: true,
  },
  {
    id: 16,
    title: "Cozy Shortlet Studio",
    area: "Campus Breeze Estate · 2 mins from campus",
    price: 145000,
    type: "Shortlet",
    distance: 0.2,
    rating: 4.7,
    verified: true,
    wifi: true,
    gender: "Any",
    beds: "1 room",
    bath: "1 bath",
    image:
      "Dormer Image/default.jpg",
    amenities: ["Wi-Fi", "Furnished", "Kitchen"],
    furnished: true,
    parking: false,
    gym: false,
  },
];

const campusLocations = [
  { id: "main-gate", name: "Main gate", category: "Access", description: "The primary entrance and first point of orientation for visitors.", coords: [9.0768, 7.3982] },
  { id: "library", name: "University library", category: "Study", description: "A quiet place for research, group work and borrowing course materials.", coords: [9.0784, 7.4001] },
  { id: "lecture-halls", name: "Central lecture halls", category: "Learning", description: "The main cluster of lecture theatres for large classes and examinations.", coords: [9.0775, 7.4021] },
  { id: "faculties", name: "Faculty complex", category: "Learning", description: "Faculty offices, departmental rooms and student notice boards.", coords: [9.0758, 7.4015] },
  { id: "medical-centre", name: "Medical centre", category: "Health", description: "Campus health support for consultations and urgent first aid.", coords: [9.0747, 7.3996] },
  { id: "security-post", name: "Security post", category: "Safety", description: "Report an incident, ask for help or get after-hours directions.", coords: [9.0771, 7.3972] },
  { id: "mosque", name: "Campus mosque", category: "Faith", description: "A campus worship space and community point.", coords: [9.0791, 7.3986] },
  { id: "church", name: "Campus church", category: "Faith", description: "A campus worship space and student fellowship point.", coords: [9.0739, 7.4028] },
  { id: "cafeteria", name: "Main cafeteria", category: "Food", description: "Affordable meals, snacks and a place to recharge between classes.", coords: [9.0761, 7.4040] },
  { id: "admin", name: "Administrative offices", category: "Services", description: "Find registry, bursary and other central student services.", coords: [9.0749, 7.4052] },
  { id: "atm", name: "ATM and financial services", category: "Services", description: "Convenient access to ATMs and everyday financial services.", coords: [9.0738, 7.3979] },
];

let campusMap;
let campusMarkers = new Map();
let selectedCampusLocation = campusLocations[0];

// Sample Roommates Dataset
const roommates = [
  {
    name: "Favour A.",
    initials: "FA",
    course: "Law · 300 Level",
    match: 94,
    traits: ["Early sleeper", "Clean", "Quiet study", "₦100k–₦200k"],
  },
  {
    name: "Samuel O.",
    initials: "SO",
    course: "Engineering · 200 Level",
    match: 90,
    traits: ["Night reader", "Football", "Organised", "₦65k–₦150k"],
  },
  {
    name: "Mariam K.",
    initials: "MK",
    course: "Medicine · 400 Level",
    match: 88,
    traits: ["Early mornings", "Clean", "No smoking", "Self contain"],
  },
  {
    name: "Joseph E.",
    initials: "JE",
    course: "Computer Science · 300 Level",
    match: 84,
    traits: ["Flexible schedule", "Gaming", "Shared home", "₦100k–₦200k"],
  },
  {
    name: "Zainab M.",
    initials: "ZM",
    course: "Economics · 200 Level",
    match: 82,
    traits: ["Quiet study", "Female roommate", "Cooking", "Campus Road"],
  },
];

// Global Application State Variables
let saved = new Set();
let bookings = [];
let searchType = "Rent";
let currentProperty = properties[0];
let authRole = "student";
let landlordAuthenticated = false;
let toastTimer;

// Currency Formatter Utility
const money = (n) => "₦" + n.toLocaleString();


// ==========================================
// 2. UI HELPERS & MODAL MANAGEMENT
// ==========================================

// Display Toast Notifications
function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3200);
}

// Modal Control Functions
function openModal(id) {
  $("#" + id).classList.add("show");
  $("#" + id).setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  $("#" + id).classList.remove("show");
  $("#" + id).setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}


// ==========================================
// 3. PROPERTY RENDERING & FILTERING
// ==========================================

// Generate HTML for Property Card Component
function card(p) {
  return `<article class="property-card">
    <div class="property-image">
      <img loading="lazy" src="${p.image}" alt="${p.title}" />
      <span class="badge">${p.verified ? "Verified" : "New listing"}</span>
      <button class="save ${saved.has(p.id) ? "saved" : ""}" data-save="${p.id}" aria-label="Save ${p.title}">
        ${saved.has(p.id) ? "♥" : "♡"}
      </button>
    </div>
    <div class="card-body">
      <div class="price">${money(p.price)} <small>/ year</small></div>
      <h3>${p.title}</h3>
      <div class="place">⌖ ${p.area}</div>
      <div class="meta">
        <span>🛏 ${p.beds}</span>
        <span>🛁 ${p.bath}</span>
        <span class="rating">★ ${p.rating}</span>
      </div>
      <button class="text-link" data-detail="${p.id}" style="margin-top:12px">View details →</button>
    </div>
  </article>`;
}

// Bind Action Handlers for Property Cards
function bindCards() {
  $$("[data-save]").forEach(
    (b) =>
      (b.onclick = () => {
        const id = +b.dataset.save;
        saved.has(id) ? saved.delete(id) : saved.add(id);
        toast(
          saved.has(id)
            ? "Home saved to your favourites."
            : "Home removed from favourites."
        );
        renderHome();
        renderListings();
      })
  );
  $$("[data-detail]").forEach(
    (b) => (b.onclick = () => showDetail(+b.dataset.detail))
  );
}

// Render Featured Properties on Home Screen
function renderHome() {
  $("#homeCards").innerHTML = properties.slice(0, 3).map(card).join("");
  $("#recommendedCards").innerHTML = properties.slice(1, 4).map(card).join("");
  bindCards();
}

// Filter and Sort Properties
function filteredProperties() {
  let list = [...properties];
  let q = $("#filterUniversity")?.value.toLowerCase() || "";
  let type = $("#filterType")?.value || "";
  let amenity = $("#filterAmenity")?.value || "";
  let price = +($("#filterPrice")?.value || 999999);

  if (q) list = list.filter((p) => (p.area + p.title).toLowerCase().includes(q));
  if (type) list = list.filter((p) => p.type === type);
  if (amenity === "furnished") list = list.filter((p) => p.furnished);
  if (amenity === "parking") list = list.filter((p) => p.parking);
  if (amenity === "gym") list = list.filter((p) => p.gym);
  if ($("#filterVerified")?.checked) list = list.filter((p) => p.verified);
  if ($("#filterWifi")?.checked) list = list.filter((p) => p.wifi);
  if ($("#filterFemale")?.checked) list = list.filter((p) => p.gender === "Female");

  list = list.filter((p) => p.price <= price);

  let sort = $("#sortListings")?.value;
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "distance") list.sort((a, b) => a.distance - b.distance);

  return list;
}

// Render Search & Filter Results Grid
function renderListings() {
  const holder = $("#listingCards");
  if (!holder) return;

  const list = filteredProperties();
  holder.innerHTML = list.map(card).join("");
  holder.classList.toggle("hide", !list.length);
  $("#listingEmpty").classList.toggle("hide", !!list.length);
  $("#resultsText").textContent = `${list.length} ${
    list.length === 1 ? "home" : "homes"
  } found`;
  bindCards();
}

// Simulate Loading Skeletons for Property Grid
function loadListings() {
  $("#skeletons").classList.remove("hide");
  $("#listingCards").classList.add("hide");
  $("#listingEmpty").classList.add("hide");
  $("#resultsText").textContent = "Finding homes for you…";
  setTimeout(() => {
    $("#skeletons").classList.add("hide");
    renderListings();
  }, 650);
}

// ======= User helpers: read current user and update UI =======
function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('dormerUser') || 'null');
  } catch (e) {
    return null;
  }
}

function getFirstName(user) {
  if (!user || !user.name) return null;
  return String(user.name).trim().split(/\s+/)[0] || null;
}

function updateGreeting() {
  const el = $('#welcomeGreeting');
  if (!el) return;
  const user = getCurrentUser();
  const first = getFirstName(user);
  el.textContent = first ? `Welcome back, ${first}.` : 'Welcome back.';
}

function updateProfileUI() {
  const user = getCurrentUser();
  if (!user) return;
  const nameEl = $('#profileName');
  const avatar = $('#profileAvatar');
  const roleEl = $('#profileRole');
  const firstInput = $('#profileFirstName');
  const lastInput = $('#profileLastName');
  if (user.name && nameEl) nameEl.textContent = user.name;
  if (avatar && user.name) {
    const parts = String(user.name).trim().split(/\s+/);
    const initials = (parts[0] || '').charAt(0) + ((parts[1] || '').charAt(0) || '');
    avatar.textContent = initials.toUpperCase();
  }
  if (roleEl && user.role) roleEl.textContent = `${user.role} · Profile`;
  if (firstInput && lastInput && user.name) {
    const parts = String(user.name).trim().split(/\s+/);
    firstInput.value = parts[0] || '';
    lastInput.value = parts.slice(1).join(' ') || '';
  }
}

function renderCampusLocations(query = "") {
  const normalizedQuery = query.trim().toLowerCase();
  const locations = campusLocations.filter((location) =>
    `${location.name} ${location.category}`.toLowerCase().includes(normalizedQuery)
  );

  $("#campusLocationList").innerHTML = locations.length
    ? locations.map((location) => `<button class="campus-location ${location.id === selectedCampusLocation.id ? "active" : ""}" data-campus-location="${location.id}">
        <span class="campus-location-icon">⌖</span><span><strong>${location.name}</strong><small>${location.category}</small></span>
      </button>`).join("")
    : `<p class="campus-no-results">No campus locations found.</p>`;

  $$('[data-campus-location]').forEach((button) => {
    button.onclick = () => selectCampusLocation(button.dataset.campusLocation);
  });
}

function renderCampusPlace(location) {
  const directionsUrl = `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=Current+Location%3B${location.coords[0]}%2C${location.coords[1]}`;
  $("#campusPlacePanel").innerHTML = `<div>
    <p class="eyebrow">Selected location</p><h2>${location.name}</h2><p>${location.description}</p>
  </div><div class="campus-place-actions"><span class="pill">${location.category}</span><a class="btn btn-soft" href="${directionsUrl}" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a></div>`;
}

function renderNearbyProperties() {
  const nearby = [...properties].sort((a, b) => a.distance - b.distance).slice(0, 3);
  $("#campusPropertyCards").innerHTML = nearby.map(card).join("");
  bindCards();
}

function selectCampusLocation(id) {
  const location = campusLocations.find((item) => item.id === id);
  if (!location) return;
  selectedCampusLocation = location;
  renderCampusLocations($("#campusSearch").value);
  renderCampusPlace(location);
  const marker = campusMarkers.get(location.id);
  if (marker && campusMap) {
    campusMap.setView(location.coords, 16);
    marker.openPopup();
  }
}

function renderCampusGuide() {
  if (!window.L) {
    $("#campusPlacePanel").innerHTML = '<div class="notice">The map is unavailable right now. The campus location list is still available.</div>';
    renderCampusLocations($("#campusSearch").value);
    renderNearbyProperties();
    return;
  }

  if (!campusMap) {
    campusMap = L.map("campusMap").setView(selectedCampusLocation.coords, 15);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(campusMap);

    campusLocations.forEach((location) => {
      const marker = L.marker(location.coords).addTo(campusMap).bindPopup(`<strong>${location.name}</strong><br>${location.category}`);
      marker.on("click", () => selectCampusLocation(location.id));
      campusMarkers.set(location.id, marker);
    });
  }

  renderCampusLocations($("#campusSearch").value);
  renderCampusPlace(selectedCampusLocation);
  renderNearbyProperties();
  setTimeout(() => campusMap.invalidateSize(), 0);
}


// ==========================================
// 4. VIEW NAVIGATION & DETAILS VIEW
// ==========================================

// Global Navigation Function (Patched later for auth guard)
let rawNav = function (view) {
  $$(".view").forEach((v) =>
    v.classList.toggle("active", v.dataset.view === view)
  );
  $$(".nav button").forEach((b) =>
    b.classList.toggle("active", b.dataset.nav === view)
  );

  $("#header").classList.remove("open");
  $("#menu").textContent = "☰";
  $("#menu").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (view === "listings") loadListings();
  if (view === "roommates") renderRoommates();
  if (view === "student") renderHome();
  if (view === "bookings") renderBookings();
  if (view === "campus-guide") renderCampusGuide();
};

let nav = function (view) {
  if (view === "landlord" && !landlordAuthenticated) {
    toast("Please sign in as a landlord to access the dashboard.");
    $("#signInButton").click();
    return;
  }
  rawNav(view);
  // Update dynamic UI after navigation
  if (view === 'student') updateGreeting();
  if (view === 'profile') updateProfileUI();
};

// Render Detailed Page View for Selected Property
function showDetail(id) {
  currentProperty = properties.find((p) => p.id === id) || properties[0];
  const p = currentProperty;

  $("#detailContent").innerHTML = `
    <button class="back" data-nav="listings">← Back to listings</button>
    <div class="gallery">
      <img src="${p.image}" alt="${p.title}" />
      <img src="${p.image}" alt="Living space" />
      <img src="Dormer Image/default.jpg" />
    </div>
    <div class="detail-layout">
      <article>
        <span class="badge" style="position:static">${p.verified ? "Verified listing" : "Recently added"}</span>
        <h1 class="detail-title" style="margin-top:11px">${p.title}</h1>
        <p class="detail-sub">⌖ ${p.area} · ★ ${p.rating} rating · ${p.distance} km to campus</p>
        <div class="pill-row">
          ${(p.amenities || []).map((a) => `<span class="pill">${a}</span>`).join("")}
          <span class="pill">Available now</span>
        </div>
        <p class="detail-copy">
          A practical student home with straightforward access to campus. The listing includes a clear price, essential amenities and a host ready to answer viewing questions. In a production release, this description and its gallery would be provided and reviewed by the landlord.
        </p>
        <section class="detail-block">
          <h3>Amenities</h3>
          <div class="amenities">
            <div class="amenity">✓ Water supply</div>
            <div class="amenity">✓ Secure access</div>
            <div class="amenity">✓ Prepaid electricity</div>
            <div class="amenity">✓ Study-friendly</div>
            <div class="amenity">✓ Nearby transport</div>
            <div class="amenity">✓ Available now</div>
          </div>
        </section>
        <section class="detail-block">
          <h3>House rules</h3>
          <ul class="rules">
            <li>Respect shared spaces and quiet hours.</li>
            <li>Confirm a viewing before paying a deposit.</li>
            <li>Smoking is not permitted inside the property.</li>
          </ul>
        </section>
        <section class="detail-block">
          <h3>Student reviews</h3>
          <div class="review">
            <div class="review-head"><strong>Chiamaka I.</strong><span>★ 5.0</span></div>
            <p>Clean space and the landlord answered questions before the viewing.</p>
          </div>
          <div class="review">
            <div class="review-head"><strong>Emeka T.</strong><span>★ 4.0</span></div>
            <p>Good value for the distance from school. Water supply was reliable.</p>
          </div>
          <button class="text-link" data-toast="Review editing is available after a completed stay (demo)." style="margin-top:10px">
            Leave or edit a review →
          </button>
        </section>
      </article>
      <aside class="booking-box">
        <div class="price">${money(p.price)} <small>/ year</small></div>
        <div class="booking-line"><span>Availability</span><strong>Available now</strong></div>
        <div class="booking-line"><span>Distance</span><strong>${p.distance} km to campus</strong></div>
        <div class="booking-line"><span>Room type</span><strong>${p.type}</strong></div>
        <hr>
        <div class="landlord-mini">
          <span class="avatar">AU</span>
          <div><strong>Abubakar U.</strong><span>Verified host · Replies in 1 hour</span></div>
        </div>
        <button class="btn btn-primary" id="bookNow" style="width:100%">Request booking</button>
        <div style="display:flex;gap:7px;margin-top:8px">
          <button class="btn btn-light" id="saveDetail" style="flex:1">
            ${saved.has(p.id) ? "Saved ♥" : "Save ♡"}
          </button>
          <button class="btn btn-light" id="shareDetail" style="flex:1">Share</button>
        </div>
        <button class="text-link" data-toast="Listing report form would open here (demo)." style="margin-top:13px">
          Report this listing
        </button>
      </aside>
    </div>`;

  nav("detail");
  $('[data-nav="listings"]').onclick = () => nav("listings");
  $("#bookNow").onclick = () => openBooking(p);
  $("#saveDetail").onclick = () => {
    saved.has(p.id) ? saved.delete(p.id) : saved.add(p.id);
    showDetail(p.id);
    toast("Saved properties updated.");
  };
  $("#shareDetail").onclick = () => toast("Share link copied (demo).");
  $$("[data-toast]").forEach((b) => (b.onclick = () => toast(b.dataset.toast)));
}


// ==========================================
// 5. ROOMMATE & BOOKING MANAGEMENT
// ==========================================

// Render Roommate Search List
function renderRoommates() {
  $("#roommateCards").innerHTML = roommates
    .map(
      (r) => `<article class="roommate">
        <div class="person-head">
          <span class="person-avatar">${r.initials}</span>
          <div>
            <h3>${r.name}</h3>
            <p>${r.course}</p>
          </div>
          <span class="match">${r.match}% match</span>
        </div>
        <div class="trait-list">
          ${r.traits.map((t) => `<span class="trait">${t}</span>`).join("")}
        </div>
        <p style="color:var(--muted);font-size:.78rem">
          Compatible on budget, cleanliness and preferred study environment.
        </p>
        <button class="btn btn-soft" data-connect="${r.name}">Connect about a room</button>
      </article>`
    )
    .join("");

  $$("[data-connect]").forEach(
    (b) =>
      (b.onclick = () =>
        toast(`Connection request sent to ${b.dataset.connect} (demo).`))
  );
}

// Open Booking Request Modal
function openBooking(p) {
  $("#bookingSummary").innerHTML = `
    <strong>${p.title}</strong>
    <span>${p.area}</span>
    <span>${money(p.price)} / year · booking request only</span>`;

  $$("[data-book-step]").forEach((s) =>
    s.classList.toggle("active", s.dataset.bookStep === "summary")
  );
  openModal("bookingModal");
}

// Render User Booking History & Requests
function renderBookings() {
  const html = bookings.length
    ? bookings
        .map(
          (b) => `<div class="booking-row">
            <img src="${b.image}" alt=""/>
            <div>
              <strong>${b.title}</strong>
              <span>${b.date} · ${b.price}</span>
            </div>
            <span class="status ${b.status === "Cancelled" ? "cancelled" : "pending"}">${b.status}</span>
            <button class="btn btn-danger" data-cancel="${b.id}">Cancel</button>
          </div>`
        )
        .join("")
    : `<div class="empty">
        <div>
          <i>⌂</i>
          <h3>No bookings yet</h3>
          <p>When you request or confirm a stay, it will appear here with its status and a receipt placeholder.</p>
          <button class="btn btn-primary" data-nav="listings">Explore homes</button>
        </div>
       </div>`;

  $("#bookingHistory").innerHTML = html;
  $("#studentBookings").innerHTML = bookings.length
    ? html
    : `<p style="color:var(--muted);font-size:.78rem">No confirmed stays yet. Your booking requests will appear here.</p>`;

  $$("[data-cancel]").forEach(
    (b) =>
      (b.onclick = () => {
        bookings = bookings.map((x) =>
          x.id === +b.dataset.cancel ? { ...x, status: "Cancelled" } : x
        );
        renderBookings();
        toast(
          "Booking request cancelled. Receipt placeholder remains available."
        );
      })
  );

  $$('[data-nav="listings"]').forEach(
    (b) => (b.onclick = () => nav("listings"))
  );
}


// ==========================================
// 6. LANDLORD DASHBOARD
// ==========================================

// Render Landlord Dashboard Dynamic Tabs
function renderLandlord(tab = "overview") {
  const content = $("#landlordContent");

  if (tab === "overview") {
    content.innerHTML = `
      <div class="metric-grid">
        <div class="metric"><span>Active listings</span><strong>03</strong><small>+1 this month</small></div>
        <div class="metric"><span>New inquiries</span><strong>12</strong><small>+25% this week</small></div>
        <div class="metric"><span>Occupancy</span><strong>86%</strong><small>+4% this month</small></div>
        <div class="metric"><span>Revenue placeholder</span><strong>₦720k</strong><small>Current term</small></div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Property</th><th>Status</th><th>Inquiries</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Campus View Studio</strong><span>University Road</span></td>
              <td><b class="status">Live</b></td>
              <td>4 new</td>
              <td class="table-actions">
                <button data-toast="Opening listing editor (demo).">Edit</button>
                <button data-toast="Opening listing insights (demo).">View</button>
              </td>
            </tr>
            <tr>
              <td><strong>Shared Apartment</strong><span>Student Village</span></td>
              <td><b class="status">Live</b></td>
              <td>3 new</td>
              <td class="table-actions">
                <button data-toast="Opening listing editor (demo).">Edit</button>
                <button data-toast="Opening listing insights (demo).">View</button>
              </td>
            </tr>
            <tr>
              <td><strong>Quiet Room & Parlour</strong><span>Campus Extension</span></td>
              <td><b class="status pending">Pending KYC</b></td>
              <td>0</td>
              <td class="table-actions">
                <button data-toast="KYC review is in progress (demo).">View KYC</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>`;
  } else if (tab === "properties") {
    content.innerHTML = `
      <div class="empty">
        <div>
          <i>⌂</i>
          <h3>Property tools ready</h3>
          <p>Add a draft, edit listing details or remove an unpublished property. These actions are simulated in this MVP.</p>
          <button class="btn btn-primary" id="addPropertyInline">Add property</button>
        </div>
      </div>`;
  } else if (tab === "bookings") {
    content.innerHTML = `
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>Student</th><th>Property</th><th>Status</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Ada Okafor</strong><span>University student</span></td>
              <td>Campus View Studio</td>
              <td><b class="status pending">Requested</b></td>
              <td class="table-actions"><button data-toast="Booking marked for review (demo).">Review</button></td>
            </tr>
            <tr>
              <td><strong>Tosin B.</strong><span>University student</span></td>
              <td>Shared Apartment</td>
              <td><b class="status">Confirmed</b></td>
              <td class="table-actions"><button data-toast="Opening booking details (demo).">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>`;
  } else {
    content.innerHTML = `
      <div class="side-card">
        <h3>Revenue placeholder</h3>
        <p style="color:var(--muted);font-size:.8rem">A production dashboard would show payout history, occupancy-based forecasts, tax records and exportable statements.</p>
        <div class="bar-chart">
          <i style="height:38%"></i>
          <i style="height:60%"></i>
          <i style="height:46%"></i>
          <i style="height:78%"></i>
          <i style="height:88%"></i>
          <i style="height:71%"></i>
        </div>
      </div>`;
  }

  $$("[data-toast]").forEach((b) => (b.onclick = () => toast(b.dataset.toast)));
  $("#addPropertyInline")?.addEventListener("click", () => openModal("propertyModal"));
}


// ==========================================
// 7. USER PROFILE & AUTHENTICATION
// ==========================================

function authStep(step) {
  $$("[data-auth-step]").forEach((s) =>
    s.classList.toggle("active", s.dataset.authStep === step)
  );
}

function showAuthStep(step) {
  authStep(step);
  if (step === "login") {
    $("#loginError").textContent = "";
  }
}

function profileTab(tab) {
  const data = {
    details: [
      "Profile details",
      "Keep your details current so Dormer can personalise your experience.",
    ],
    preferences: [
      "Housing preferences",
      "Update budget, room type and study preferences to improve listings and roommate matches.",
    ],
    settings: [
      "Notifications & privacy",
      "Choose which account, property and booking updates you want to receive.",
    ],
  };
  $("#profileTitle").textContent = data[tab][0];
  $("#profileCopy").textContent = data[tab][1];
  $$("[data-profile-tab]").forEach((b) =>
    b.classList.toggle("active", b.dataset.profileTab === tab)
  );
  toast(`${data[tab][0]} selected.`);
}

// Asynchronous Backend Login Request Handler
async function handleLoginSubmit(e) {
  e.preventDefault();

  const email = $("#loginEmail").value.trim();
  const password = $("#loginPassword").value;
  const errorEl = $("#loginError");

  if (!email || !password) {
    errorEl.textContent = "Email and password are required.";
    return;
  }

  errorEl.textContent = "";

  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const payload = await response.json();

    if (!response.ok) {
      errorEl.textContent =
        payload.message || "Email or password is incorrect.";
      return;
    }

    if (!payload.user) {
      errorEl.textContent = "Invalid login response.";
      return;
    }

    // Save logged-in user
    localStorage.setItem(
      "dormerUser",
      JSON.stringify(payload.user)
    );

    closeModal("authModal");

    toast(`Welcome back, ${payload.user.name}!`);

    // Send user to the correct section
    if (payload.user.role === "landlord") {
      landlordAuthenticated = true;
      nav("landlord");
    } else if (payload.user.role === "student") {
      nav("student");
    }

  } catch (err) {
    console.error("Login request failed:", err);
    errorEl.textContent =
      "Cannot reach the Dormer backend. Please try again later.";
  }
}


// ==========================================
// 8. EVENT LISTENERS & INITIALIZATION
// ==========================================

// Global Navigation Clicks
$$("[data-nav]").forEach((b) => (b.onclick = () => nav(b.dataset.nav)));

// Header Mobile Menu Toggle
$("#menu").onclick = () => {
  const open = $("#header").classList.toggle("open");
  $("#menu").textContent = open ? "×" : "☰";
  $("#menu").setAttribute("aria-expanded", open);
};

// Hero Search Controls
$$(".search-tab").forEach(
  (b) =>
    (b.onclick = () => {
      $$(".search-tab").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      searchType = b.dataset.searchType;
    })
);

$("#heroSearch").onsubmit = (e) => {
  e.preventDefault();
  const uni = $("#heroUniversity").value.trim();
  $("#filterUniversity").value = uni;
  toast(`Showing ${searchType.toLowerCase()} homes${uni ? ` near ${uni}` : ""}.`);
  nav("listings");
};

$$("[data-quick]").forEach(
  (b) =>
    (b.onclick = () => {
      $("#heroUniversity").value =
        b.dataset.quick === "Shared homes" ? "" : b.dataset.quick;
      $("#heroType").value =
        b.dataset.quick === "Shared homes" ? "Shared room" : "";
      toast("Search updated.");
    })
);

// Search Filters Input Change Handlers
[
  "filterUniversity",
  "filterType",
  "filterAmenity",
  "filterPrice",
  "filterVerified",
  "filterWifi",
  "filterFemale",
  "sortListings",
].forEach((id) => $("#" + id).addEventListener("input", renderListings));

$("#clearFilters").onclick = $("#emptyReset").onclick = () => {
  $("#filterUniversity").value = "";
  $("#filterType").value = "";
  $("#filterAmenity").value = "";
  $("#filterPrice").value = "999999";
  $("#filterVerified").checked = false;
  $("#filterWifi").checked = false;
  $("#filterFemale").checked = false;
  renderListings();
};

$("#loadListings").onclick = loadListings;

$("#campusSearch").oninput = (event) => renderCampusLocations(event.target.value);

// FAQ Accordions
$$(".faq-q").forEach(
  (q) => (q.onclick = () => q.parentElement.classList.toggle("open"))
);

// Profile Actions
$("#completeProfile").onclick = () => nav("profile");
$("#viewNotifications").onclick = $("#notificationsButton").onclick = () => openModal("notificationModal");
$("#editPreferences").onclick = () => nav("profile");
$$("[data-profile-tab]").forEach((b) => (b.onclick = () => profileTab(b.dataset.profileTab)));

$("#profileForm").onsubmit = (e) => {
  e.preventDefault();
  toast("Profile changes saved.");
};
$("#uploadAvatar").onclick = () => toast("Avatar upload placeholder opened.");

// Landlord Tabs & Actions
$$(".dash-tabs button").forEach(
  (b) =>
    (b.onclick = () => {
      $$(".dash-tabs button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      renderLandlord(b.dataset.landlordTab);
    })
);

$("#addProperty").onclick = $("#footerAddProperty").onclick = () => openModal("propertyModal");

$("#propertyForm").onsubmit = (e) => {
  e.preventDefault();
  closeModal("propertyModal");
  toast("Draft property saved. It is pending KYC and listing review.");
  renderLandlord("properties");
};

// Auth Controls & Handlers
$("#signInButton").onclick = () => {
  showAuthStep("login");
  openModal("authModal");
};

$$("[data-close]").forEach((b) => (b.onclick = () => closeModal(b.dataset.close)));
$$(".modal").forEach((m) => (m.onclick = (e) => { if (e.target === m) closeModal(m.id); }));

$$("[data-auth-role]").forEach(
  (b) =>
    (b.onclick = () => {
      authRole = b.dataset.authRole;
      authStep("form");
      $("#authTitle").textContent = `Create ${authRole} account`;
      $("#authCopy").textContent =
        authRole === "landlord"
          ? "Register and complete KYC before publishing a listing."
          : "Register and verify your student details to personalise Dormer.";

      $("#studentAuthFields").classList.toggle("hide", authRole !== "student");
      $("#landlordAuthFields").classList.toggle("hide", authRole !== "landlord");
      $("#authInstitution").required = authRole === "student";
      $("#studentId").required = authRole === "student";
      $("#landlordPhone").required = authRole === "landlord";
      $("#landlordKyc").required = authRole === "landlord";
      $("#landlordAddress").required = authRole === "landlord";
      $("#kycConsent").required = authRole === "landlord";
      $("#authSubmit").textContent =
        authRole === "landlord"
          ? "Submit KYC & create account →"
          : "Create student account →";
    })
);

$("#togglePassword").onclick = () => {
  const i = $("#authPassword");
  i.type = i.type === "password" ? "text" : "password";
  $("#togglePassword").textContent = i.type === "password" ? "Show" : "Hide";
};

$("#forgotPassword").onclick = () => authStep("forgot");
$("#backToAuth").onclick = () => authStep("form");
$("#loginToRegister").onclick = () => authStep("role");
$("#switchToLogin").onclick = () => showAuthStep("login");
$("#loginForm").onsubmit = handleLoginSubmit;

$("#forgotForm").onsubmit = (e) => {
  e.preventDefault();
  authStep("role");
  toast("Password reset email placeholder sent.");
};

// Registration Form Handler
$("#authForm").onsubmit = async (e) => {
  e.preventDefault();

  const name = $("#authName").value.trim();
  const email = $("#authEmail").value.trim();
  const password = $("#authPassword").value;
  const errorEl = $("#authError");

  if (!name || !email || !password) {
    errorEl.textContent = "Please fill in all required fields.";
    return;
  }

  if (password.length < 8) {
    errorEl.textContent = "Use at least 8 characters for your password.";
    return;
  }

  errorEl.textContent = "";

  try {
    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role: authRole
      })
    });

    const payload = await response.json();

    if (!response.ok) {
      errorEl.textContent =
        payload.message || "Registration failed. Please try again.";
      return;
    }

    // Save the newly registered user
    localStorage.setItem(
      "dormerUser",
      JSON.stringify(payload)
    );

    closeModal("authModal");

    toast(
      authRole === "landlord"
        ? "Account created successfully."
        : "Account created successfully."
    );

    // Send user to the correct section
    if (authRole === "landlord") {
      landlordAuthenticated = true;
      nav("landlord");
    } else {
      nav("student");
    }

  } catch (err) {
    console.error("Registration request failed:", err);

    errorEl.textContent =
      "Cannot reach the Dormer backend. Please try again later.";
  }
};

// Booking Form Actions
$("#bookingForm").onsubmit = (e) => {
  e.preventDefault();
  bookings.push({
    id: Date.now(),
    title: currentProperty.title,
    image: currentProperty.image,
    date: "Request sent today",
    price: money(currentProperty.price) + "/year",
    status: "Requested",
  });
  $$("[data-book-step]").forEach((s) =>
    s.classList.toggle("active", s.dataset.bookStep === "success")
  );
  toast("Booking request sent.");
};

$("#viewBookings").onclick = () => {
  closeModal("bookingModal");
  nav("bookings");
};

// Legal & Static Page Modal Handlers
$$("[data-legal]").forEach(
  (b) =>
    (b.onclick = () => {
      nav("legal");
      const term = b.dataset.legal === "terms";
      $("#legalTitle").textContent = term
        ? "Terms of service"
        : "Privacy policy";
      $("#legalIntro").textContent = term
        ? "These prototype terms explain the responsibilities of students, landlords and Dormer."
        : "This prototype explains how a production Dormer service would handle account and property information.";
    })
);

$("#contactForm").onsubmit = (e) => {
  e.preventDefault();
  e.target.reset();
  toast("Support message received. We will reply by email (demo).");
};

// Delegated Click Listener for Navigation inside Dynamic Detail Views
document.addEventListener("click", (e) => {
  const button = e.target.closest("#detailContent [data-nav]");
  if (button) nav(button.dataset.nav);
});

// Scroll Reveal Animations Initialization
const observer = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    }),
  { threshold: 0.1 }
);
$$(".reveal").forEach((el) => observer.observe(el));

// App Initial Render Calls
renderHome();
renderLandlord();

