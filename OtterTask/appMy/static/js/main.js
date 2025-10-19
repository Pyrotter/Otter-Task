AOS.init({
  once: true,
  duration: 700,
});

// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

// Cursor hover effect
const interactiveElements = document.querySelectorAll(
  "a, button, .card, input, .lang-option"
);

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursor.style.borderColor = "#ff6b35";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.borderColor = "#ff8c5a";
  });
});

// Language System
const translations = {
  tr: {
    heroTitle1: "Görevleriniz artık",
    heroTitle2: "çok daha kolay",
    heroDesc:
      "Ekibinizle birlikte çalışın, her şeyi takip edin ve günlük işlerinizi daha keyifli hale getirin. Otter Task ile üretkenliğinizi zirveye taşıyın.",
    ctaPrimary: "Ücretsiz Başlayın",
    ctaSecondary: "Demo İzleyin",
    featuresSubtitle: "ÖZELLİKLER",
    featuresTitle: "Her ihtiyacınız için tasarlandı",
    featuresDesc:
      "Modern iş akışları için güçlü araçlar. Basit, etkili ve kullanımı keyifli.",
    tag1: "ORGANİZASYON",
    feature1Title: "Merkezi Kontrol Paneli",
    feature1Desc:
      "Tüm görevleriniz tek bir yerde. Öncelikli işlerinizi ayırın, kategorilere bölün ve ilerlemeyi gerçek zamanlı takip edin. Gelen kutunuzdan arşivinize kadar her şey düzenli ve hep elinizin altında.",
    tag2: "İŞBİRLİĞİ",
    feature2Title: "Gerçek Zamanlı İşbirliği",
    feature2Desc:
      "Ekibinizle anlık senkronizasyon. Görevleri paylaşın, birbirinize atayın ve hep aynı frekansta olun. Akıllı bildirimler sayesinde hiçbir güncellemeyi kaçırmayın.",
    tag3: "VERİMLİLİK",
    feature3Title: "Akıllı Üretkenlik Araçları",
    feature3Desc:
      "Akıllı hatırlatıcılar, detaylı analizler ve performans raporları ile kendinizi sürekli geliştirin. İşlerinizi zamanında bitirin, hedeflerinize ulaşın. Stres yok, sadece başarı var.",
    footerDesc:
      "Modern görev yönetimi platformu. İş hayatınızı daha verimli, daha keyifli hale getirin.",
    contactTitle: "İLETİŞİM",
    socialTitle: "SOSYAL MEDYA",
    copyright: "© 2025 Otter Task. Tüm hakları saklıdır.",
    btnSignup: "Kayıt Ol",
    btnLogin: "Giriş Yap",
  },
  en: {
    heroTitle1: "Your tasks are now",
    heroTitle2: "much easier",
    heroDesc:
      "Work with your team, track everything, and make your daily work more enjoyable. Take your productivity to the peak with Otter Task.",
    ctaPrimary: "Start Free",
    ctaSecondary: "Watch Demo",
    featuresSubtitle: "FEATURES",
    featuresTitle: "Designed for every need",
    featuresDesc:
      "Powerful tools for modern workflows. Simple, effective, and enjoyable to use.",
    tag1: "ORGANIZATION",
    feature1Title: "Central Control Panel",
    feature1Desc:
      "All your tasks in one place. Separate your priorities, divide into categories, and track progress in real-time. From your inbox to your archive, everything stays organized and within reach.",
    tag2: "COLLABORATION",
    feature2Title: "Real-Time Collaboration",
    feature2Desc:
      "Instant synchronization with your team. Share tasks, assign to each other, and stay on the same wavelength. Never miss an update with smart notifications.",
    tag3: "PRODUCTIVITY",
    feature3Title: "Smart Productivity Tools",
    feature3Desc:
      "Improve yourself continuously with smart reminders, detailed analytics, and performance reports. Complete your tasks on time, reach your goals. No stress, just success.",
    footerDesc:
      "Modern task management platform. Make your work life more productive and enjoyable.",
    contactTitle: "CONTACT",
    socialTitle: "SOCIAL MEDIA",
    copyright: "© 2025 Otter Task. All rights reserved.",
    btnSignup: "Sign Up",
    btnLogin: "Login",
  },
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

  localStorage.setItem("flag", flag);
  localStorage.setItem("code", code);



  document.getElementById("current-flag").src = localStorage.getItem("flag");
  document.getElementById("current-lang").textContent = localStorage.getItem("code");

  const t = translations[lang];

  localStorage.setItem("heroTitle1", t.heroTitle1);
  localStorage.setItem("heroTitle2", t.heroTitle2);
  localStorage.setItem("heroDesc", t.heroDesc);
  localStorage.setItem("ctaPrimary", t.ctaPrimary);
  localStorage.setItem("ctaSecondary", t.ctaSecondary);
  localStorage.setItem("featuresSubtitle", t.featuresSubtitle);
  localStorage.setItem("featuresTitle", t.featuresTitle);
  localStorage.setItem("featuresDesc", t.featuresDesc);
  localStorage.setItem("tag1", t.tag1);
  localStorage.setItem("feature1Title", t.feature1Title);
  localStorage.setItem("feature1Desc", t.feature1Desc);
  localStorage.setItem("tag2", t.tag2);
  localStorage.setItem("feature2Title", t.feature2Title);
  localStorage.setItem("feature2Desc", t.feature2Desc);
  localStorage.setItem("tag3", t.tag3);
  localStorage.setItem("feature3Title", t.feature3Title);
  localStorage.setItem("feature3Desc", t.feature3Desc);
  localStorage.setItem("footerDesc", t.footerDesc);
  localStorage.setItem("contactTitle", t.contactTitle);
  localStorage.setItem("socialTitle", t.socialTitle);
  localStorage.setItem("copyright", t.copyright);
  localStorage.setItem("btnSignup", t.btnSignup);
  localStorage.setItem("btnLogin", t.btnLogin);

  document.getElementById("hero-title-1").textContent = localStorage.getItem("heroTitle1");
  document.getElementById("hero-title-2").textContent = localStorage.getItem("heroTitle2");
  document.getElementById("hero-desc").textContent = localStorage.getItem("heroDesc");
  document.getElementById("cta-primary").textContent = localStorage.getItem("ctaPrimary");
  document.getElementById("cta-secondary").textContent = localStorage.getItem("ctaSecondary");
  document.getElementById("features-subtitle").textContent = localStorage.getItem("featuresSubtitle");
  document.getElementById("features-title").textContent = localStorage.getItem("featuresTitle");
  document.getElementById("features-desc").textContent = localStorage.getItem("featuresDesc");
  document.getElementById("tag1").textContent = localStorage.getItem("tag1");
  document.getElementById("feature1-title").textContent = localStorage.getItem("feature1Title");
  document.getElementById("feature1-desc").textContent = localStorage.getItem("feature1Desc");
  document.getElementById("tag2").textContent = localStorage.getItem("tag2");
  document.getElementById("feature2-title").textContent = localStorage.getItem("feature2Title");
  document.getElementById("feature2-desc").textContent = localStorage.getItem("feature2Desc");
  document.getElementById("tag3").textContent = localStorage.getItem("tag3");
  document.getElementById("feature3-title").textContent = localStorage.getItem("feature3Title");
  document.getElementById("feature3-desc").textContent = localStorage.getItem("feature3Desc");
  document.getElementById("footer-desc").textContent = localStorage.getItem("footerDesc");
  document.getElementById("contact-title").textContent = localStorage.getItem("contactTitle");
  document.getElementById("social-title").textContent = localStorage.getItem("socialTitle");
  document.getElementById("copyright").textContent = localStorage.getItem("copyright");
  document.getElementById("btn-signup").textContent = localStorage.getItem("btnSignup");
  document.getElementById("btn-login").textContent = localStorage.getItem("btnLogin");

  document.getElementById("lang-options").classList.remove("active");
}

if (localStorage.getItem("heroTitle1")) {
  document.getElementById("hero-title-1").textContent =   localStorage.getItem("heroTitle1");
  document.getElementById("hero-title-2").textContent = localStorage.getItem("heroTitle2");
  document.getElementById("hero-desc").textContent = localStorage.getItem("heroDesc");
  document.getElementById("cta-primary").textContent = localStorage.getItem("ctaPrimary");
  document.getElementById("cta-secondary").textContent = localStorage.getItem("ctaSecondary");
  document.getElementById("features-subtitle").textContent = localStorage.getItem("featuresSubtitle");
  document.getElementById("features-title").textContent = localStorage.getItem("featuresTitle");
  document.getElementById("features-desc").textContent = localStorage.getItem("featuresDesc");
  document.getElementById("tag1").textContent = localStorage.getItem("tag1");
  document.getElementById("feature1-title").textContent = localStorage.getItem("feature1Title");
  document.getElementById("feature1-desc").textContent = localStorage.getItem("feature1Desc");
  document.getElementById("tag2").textContent = localStorage.getItem("tag2");
  document.getElementById("feature2-title").textContent = localStorage.getItem("feature2Title");
  document.getElementById("feature2-desc").textContent = localStorage.getItem("feature2Desc");
  document.getElementById("tag3").textContent = localStorage.getItem("tag3");
  document.getElementById("feature3-title").textContent = localStorage.getItem("feature3Title");
  document.getElementById("feature3-desc").textContent = localStorage.getItem("feature3Desc");
  document.getElementById("footer-desc").textContent = localStorage.getItem("footerDesc");
  document.getElementById("contact-title").textContent = localStorage.getItem("contactTitle");
  document.getElementById("social-title").textContent = localStorage.getItem("socialTitle");
  document.getElementById("copyright").textContent = localStorage.getItem("copyright");
  document.getElementById("btn-signup").textContent = localStorage.getItem("btnSignup");
  document.getElementById("btn-login").textContent = localStorage.getItem("btnLogin");
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

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
