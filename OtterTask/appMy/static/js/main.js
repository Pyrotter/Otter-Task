AOS.init();

// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

// Cursor hover effect on interactive elements
const interactiveElements = document.querySelectorAll(
  "a, button, .card, input, .lang-option"
);

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursor.style.borderColor = "#ff9d6e";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.borderColor = "#ffb088";
  });
});

const translations = {
  tr: {
    heroTitle: "Otter Task'a Hoş Geldiniz 👋",
    heroDesc:
      "Görevleriniz artık çok daha kolay! Ekibinizle birlikte çalışın, her şeyi takip edin ve günlük işlerinizi daha keyifli hale getirin. Haydi, birlikte başlayalım!",
    ctaBtn: "Hemen Başlayın",
    feature1Title: "Her Şey Bir Arada 📋",
    feature1Desc:
      "Tüm görevleriniz tek bir yerde! İster öncelikli işlerinizi ayırın, ister kategorilere bölün. Gelen kutunuzdan arşivinize kadar her şey düzenli ve hep elinizin altında.",
    feature2Title: "Takım Ruhunu Yaşayın 🤝",
    feature2Desc:
      "Ekibinizle gerçek zamanlı çalışmak hiç bu kadar kolay olmamıştı! Görevleri paylaşın, birbirinize atayın ve hep aynı frekansta olun. Birlikte başarmak çok daha güzel.",
    feature3Title: "Daha Verimli, Daha Huzurlu ⚡",
    feature3Desc:
      "Akıllı hatırlatıcılarımız hiçbir şeyi kaçırmanızı önler. İşlerinizi zamanında bitirin, performansınızı görün ve kendinizi her gün biraz daha geliştirin. Stres yok, sadece başarı var!",
    footerDesc:
      "Görev yönetimini sevdiren platform. Çünkü iş hayatı da keyifli olmalı! ✨",
    contactTitle: "İletişim",
    btnLogin: "Giriş Yap",
    btnSignup: "Kayıt Ol",
    socialTitle: "Sosyal Medya",
    copyright: "© 2024 Otter Task. Tüm hakları saklıdır.",
  },
  en: {
    heroTitle: "Welcome to Otter Task 👋",
    heroDesc:
      "Managing tasks just got easier! Work with your team, track everything, and make your daily work more enjoyable. Let's get started together!",
    ctaBtn: "Let's Get Started",
    feature1Title: "Everything in One Place 📋",
    feature1Desc:
      "All your tasks in one spot! Separate your priorities or divide them into categories. From your inbox to your archive, everything stays organized and within reach.",
    feature2Title: "Live the Team Spirit 🤝",
    feature2Desc:
      "Real-time collaboration with your team has never been this easy! Share tasks, assign to each other, and stay on the same wavelength. Achieving together feels so much better.",
    feature3Title: "More Productive, More Peaceful ⚡",
    feature3Desc:
      "Our smart reminders ensure you never miss anything. Complete your tasks on time, see your performance, and improve yourself a bit more every day. No stress, just success!",
    footerDesc:
      "The platform that makes you love task management. Because work life should be enjoyable too! ✨",
    contactTitle: "Contact",
    socialTitle: "Social Media",
    copyright: "© 2024 Otter Task. All rights reserved.",
    btnLogin: "Login",
    btnSignup: "Sign Up",
  }
};

let currentLang = "tr";

function toggleLangMenu() {
  const menu = document.getElementById("lang-options");
  menu.classList.toggle("active");
}

function changeLang(lang) {
  currentLang = lang;
  const flag = lang === "tr" ? "https://flagcdn.com/w40/tr.png" : "https://flagcdn.com/w40/gb.png";
  const code = lang === "tr" ? "TR" : "EN";

  localStorage.setItem("flag", flag)
  localStorage.setItem("code", code)



  document.getElementById("current-flag").src = localStorage.getItem("flag");
  document.getElementById("current-lang").textContent = localStorage.getItem("code");


  // Update content
  const t = translations[lang];

  localStorage.setItem("heroTitle", t.heroTitle)
  localStorage.setItem("heroDesc", t.heroDesc)
  localStorage.setItem("ctaBtn", t.ctaBtn)
  localStorage.setItem("feature1Title", t.feature1Title)
  localStorage.setItem("feature1Desc", t.feature1Desc)
  localStorage.setItem("feature2Title", t.feature2Title)
  localStorage.setItem("feature2Desc", t.feature2Desc)
  localStorage.setItem("feature3Title", t.feature3Title)
  localStorage.setItem("feature3Desc", t.feature3Desc)
  localStorage.setItem("footerDesc", t.footerDesc)
  localStorage.setItem("contactTitle", t.contactTitle)
  localStorage.setItem("socialTitle", t.socialTitle)
  localStorage.setItem("btnLogin", t.btnLogin)
  localStorage.setItem("btnSignup", t.btnSignup)


  document.getElementById("hero-title").innerText = localStorage.getItem("heroTitle");
  document.getElementById("hero-desc").innerText = localStorage.getItem("heroDesc");
  document.getElementById("cta-btn").innerText = localStorage.getItem("ctaBtn");
  document.getElementById("feature1-title").innerText = localStorage.getItem("feature1Title");
  document.getElementById("feature1-desc").innerText = localStorage.getItem("feature1Desc");
  document.getElementById("feature2-title").innerText = localStorage.getItem("feature2Title");
  document.getElementById("feature2-desc").innerText = localStorage.getItem("feature2Desc");
  document.getElementById("feature3-title").innerText = localStorage.getItem("feature3Title");
  document.getElementById("feature3-desc").innerText = localStorage.getItem("feature3Desc");
  document.getElementById("footer-desc").innerText = localStorage.getItem("footerDesc");
  document.getElementById("contact-title").innerText = localStorage.getItem("contactTitle");
  document.getElementById("social-title").innerText = localStorage.getItem("socialTitle");
  document.getElementById("btn-login").innerText = localStorage.getItem("btnLogin");
  document.getElementById("btn-signup").innerText = localStorage.getItem("btnSignup");  



  document.getElementById("lang-options").classList.remove("active");
}
// On page load, set content based on saved language or default to Turkish

  if (localStorage.getItem("flag")) {
  document.getElementById("hero-title").innerText = localStorage.getItem("heroTitle");
  document.getElementById("hero-desc").innerText = localStorage.getItem("heroDesc");
  document.getElementById("cta-btn").innerText = localStorage.getItem("ctaBtn");
  document.getElementById("feature1-title").innerText = localStorage.getItem("feature1Title");
  document.getElementById("feature1-desc").innerText = localStorage.getItem("feature1Desc");
  document.getElementById("feature2-title").innerText = localStorage.getItem("feature2Title");
  document.getElementById("feature2-desc").innerText = localStorage.getItem("feature2Desc");
  document.getElementById("feature3-title").innerText = localStorage.getItem("feature3Title");
  document.getElementById("feature3-desc").innerText = localStorage.getItem("feature3Desc");
  document.getElementById("footer-desc").innerText = localStorage.getItem("footerDesc");
  document.getElementById("contact-title").innerText = localStorage.getItem("contactTitle");
  document.getElementById("social-title").innerText = localStorage.getItem("socialTitle");
  document.getElementById("btn-login").innerText = localStorage.getItem("btnLogin");
  document.getElementById("btn-signup").innerText = localStorage.getItem("btnSignup");  
  document.getElementById("current-flag").src = localStorage.getItem("flag");
  document.getElementById("current-lang").textContent = localStorage.getItem("code");
  }

  
 

  


// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".lang-dropdown");
  if (!dropdown.contains(event.target)) {
    document.getElementById("lang-options").classList.remove("active");
  }
});
