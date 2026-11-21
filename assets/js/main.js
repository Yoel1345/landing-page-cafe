const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#menu-navigasi");

if (menuToggle && navigation) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu navigasi");
    navigation.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Buka menu navigasi" : "Tutup menu navigasi");
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm instanceof HTMLFormElement) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("nama") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("pesan") || "").trim();

    if (!name || !email || !message) return;

    const whatsappLink = document.querySelector(".whatsapp-link");
    const whatsappNumber = whatsappLink instanceof HTMLAnchorElement
      ? new URL(whatsappLink.href).pathname.match(/^\/(\d+)$/)?.[1]
      : undefined;

    if (!whatsappNumber) {
      if (formStatus) formStatus.textContent = "Nomor WhatsApp belum dikonfigurasi.";
      return;
    }

    const whatsappMessage = [
      "Halo Kopi Senja!",
      "",
      `Nama: ${name}`,
      `Email: ${email}`,
      `Pesan: ${message}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    if (formStatus) {
      formStatus.textContent = "Pesan WhatsApp telah disiapkan. Jika WhatsApp tidak terbuka, gunakan tombol WhatsApp pada halaman ini.";
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}
