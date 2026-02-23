const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


  const track = document.querySelector(".reviews_track");
  const cards = document.querySelectorAll(".review_card");

  let index = 0;

  function autoScrollReviews() {
    index++;
    if (index > cards.length - 1) {
      index = 0;
    }
    track.style.transform = `translateX(-${index * (cards[0].offsetWidth + 30)}px)`;
  }

  setInterval(autoScrollReviews, 3000); // 3 წამში ერთხელ

  
const translations = {
  ka: {
    hero_title: "Mercedes-Benz პროგრამირება და დიაგნოსტიკა",
    hero_desc: "AMG Menu • CarPlay • აირბაგები • რადარები<br>თბილისი | ბათუმი | ფოთი | გურჯაანი",
    call_now: "📞 დარეკვა ახლა",
    write_fb: "💬 მოგვწერე Facebook-ზე",
    best_service: "საუკეთესო მომსახურება",
    about_title: "Crash Event • დიაგნოსტიკა",
    about_text: "AMG Menu / CarPlay ჩაწერა, დისტრონიკის და რადარის გაუქმება, აირბაგებისა და ღვედების აღდგენა და სხვა მრავალი.",
    see_more: "მეტის ნახვა",
    services_title: "ჩვენი <span>მომსახურებები</span>",
    services_desc: "პროფესიონალური და სწრაფი სერვისი",
    srv_diag: "დიაგნოსტიკა",
    srv_diag_desc: "სრული კომპიუტერული დიაგნოსტიკა",
    srv_airbag: "აირბაგები",
    srv_airbag_desc: "აირბაგებისა და ღვედების აღდგენა",
    srv_radar: "რადარები",
    srv_radar_desc: "რადარის და დისტრონიკის პროგრამირება"
  },

  en: {
    hero_title: "Mercedes-Benz Coding & Diagnostics",
    hero_desc: "AMG Menu • CarPlay • Airbags • Radars<br>Tbilisi | Batumi | Poti | Gurjaani",
    call_now: "📞 Call Now",
    write_fb: "💬 Message us on Facebook",
    best_service: "Premium Service",
    about_title: "Crash Event • Diagnostics",
    about_text: "AMG Menu / CarPlay coding, radar & distronic coding, airbag and seatbelt restoration and more.",
    see_more: "See more",
    services_title: "Our <span>Services</span>",
    services_desc: "Professional and fast service",
    srv_diag: "Diagnostics",
    srv_diag_desc: "Full computer diagnostics",
    srv_airbag: "Airbags",
    srv_airbag_desc: "Airbag & seatbelt restoration",
    srv_radar: "Radars",
    srv_radar_desc: "Radar & Distronic coding"
  },

  ru: {
    hero_title: "Программирование и диагностика Mercedes-Benz",
    hero_desc: "AMG Menu • CarPlay • Подушки • Радары<br>Тбилиси | Батуми | Поти | Гурджаани",
    call_now: "📞 Позвонить",
    write_fb: "💬 Написать в Facebook",
    best_service: "Премиальный сервис",
    about_title: "Crash Event • Диагностика",
    about_text: "Программирование AMG Menu / CarPlay, радары, восстановление подушек и ремней безопасности.",
    see_more: "Подробнее",
    services_title: "Наши <span>услуги</span>",
    services_desc: "Быстро и профессионально",
    srv_diag: "Диагностика",
    srv_diag_desc: "Полная компьютерная диагностика",
    srv_airbag: "Подушки безопасности",
    srv_airbag_desc: "Восстановление подушек и ремней",
    srv_radar: "Радары",
    srv_radar_desc: "Программирование радаров"
  }
};

function setLang(lang) {
  localStorage.setItem("siteLang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// AUTO LOAD LANGUAGE
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("siteLang") || "ka";
  setLang(savedLang);
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  const SHOW_TIME = 3500; // ⏳ 3.5 წამი ჩანს
  const HIDE_TIME = 2000;  // ✨ გაქრობის ანიმაცია

  setTimeout(() => {
    preloader.classList.add("hide");

    setTimeout(() => {
      preloader.style.display = "none";
    }, HIDE_TIME);
  }, SHOW_TIME);
});

const counters = document.querySelectorAll(".stat_number");
let statsPlayed = false;

function runCounters() {
  if (statsPlayed) return;

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const increment = target / 80;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCounter();
  });

  statsPlayed = true;
}

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats_section");
  if (!statsSection) return;

  const top = statsSection.getBoundingClientRect().top;
  if (top < window.innerHeight - 150) {
    runCounters();
  }
});

function sendAutoMessage() {
  const model = document.getElementById("carModel").value;
  const serviceKey = document.getElementById("serviceType").value;

  const aiMessages = {
    carplay: (m) => `
გამარჯობა 👋  
მყავს Mercedes ${m}. მაინტერესებს CarPlay ჩაწერა.

❓ შესაძლებელია ჩემს მოდელზე?
❓ ქარხნული კოდირებაა თუ დამატებითი მოწყობილობა სჭირდება?
❓ დაახლოებით რა დრო და ფასი აქვს?
`.trim(),

    amg: (m) => `
გამარჯობა 👋  
Mercedes ${m}-ზე მინდა AMG Menu / AMG Design გააქტიურება.

❓ სრული ქარხნული კოდირებაა?
❓ ყველა რეჟიმი იმუშავებს სწორად?
❓ რამდენ ხანში კეთდება?
`.trim(),

    airbag: (m) => `
გამარჯობა,  
მყავს Mercedes ${m} და ანთებულია SRS / აირბაგის შეცდომა.

❓ შესაძლებელია სრული აღდგენა?
❓ შეცდომები საბოლოოდ წაიშლება?
❓ უსაფრთხო იქნება მანქანის გამოყენება?
`.trim(),

    radar: (m) => `
გამარჯობა 👋  
Mercedes ${m}-ზე მაინტერესებს რადარის / დისტრონიკის პროგრამირება.

❓ უსაფრთხოდ კეთდება?
❓ სხვა სისტემებზე ხომ არ იმოქმედებს?
❓ გამოცდილება გაქვთ ამ მოდელზე?
`.trim(),

    diagnostic: (m) => `
გამარჯობა,  
მყავს Mercedes ${m} და მინდა სრული კომპიუტერული დიაგნოსტიკა.

❓ რამდენ ხანს გრძელდება პროცესი?
❓ ყველა ბლოკი მოწმდება?
❓ დღეს ან ხვალ შესაძლებელი იქნება?
`.trim()
  };

  const message =
    aiMessages[serviceKey]
      ? aiMessages[serviceKey](model)
      : `გამარჯობა, მყავს Mercedes ${model}. მაინტერესებს თქვენი სერვისები.`;

  const encoded = encodeURIComponent(message);

  const PAGE_ID = "100025626823315"; // შენი Facebook Page ID
  const url = `https://m.me/${PAGE_ID}?text=${encoded}`;

  window.open(url, "_blank");
}

function setLang(lang) {
  localStorage.setItem("siteLang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;

    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// AUTO LOAD LANGUAGE (სწორი)
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("siteLang") || "ka";
  setLang(savedLang);
});

function login() {
  const name = document.getElementById("clientName").value;
  const car = document.getElementById("carModel").value;
  const phone = document.getElementById("phone").value;

  if (!name || !car || !phone) {
    alert("შეავსე ყველა ველი");
    return;
  }

  const clientData = {
    name,
    car,
    phone,
    services: []
  };

  localStorage.setItem("clientAccount", JSON.stringify(clientData));
  window.location.href = "dashboard.html";
}

