    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');

      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0,0,0,.98)';
        navbar.style.padding = '12px 0';
      } else {
        navbar.style.background = 'rgba(5,5,5,.92)';
        navbar.style.padding = '18px 0';
      }
    });

    // Close mobile menu after clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const menu = document.querySelector('.navbar-collapse');
        const bsCollapse = bootstrap.Collapse.getInstance(menu);

        if (bsCollapse) {
          bsCollapse.hide();
        }
      });
    });

const galleryItems = Array.from(
    document.querySelectorAll(".gallery-item")
);

const galleryModal = document.getElementById("galleryModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const modalCounter = document.getElementById("modalCounter");

const modalClose = document.getElementById("modalClose");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

let currentIndex = 0;
let previousFocus = null;

function showGalleryImage(index) {
    currentIndex = (index + galleryItems.length) % galleryItems.length;

    const item = galleryItems[currentIndex];
    const image = item.querySelector("img");

    modalImage.src = item.dataset.full || image.src;
    modalImage.alt = image.alt;
    modalCaption.textContent = item.dataset.title || image.alt;

    modalCounter.textContent =
        `${currentIndex + 1} / ${galleryItems.length}`;
}

function openGalleryModal(index) {
    previousFocus = document.activeElement;

    showGalleryImage(index);

    galleryModal.classList.add("active");
    galleryModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    modalClose.focus();
}

function closeGalleryModal() {
    galleryModal.classList.remove("active");
    galleryModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (previousFocus) {
        previousFocus.focus();
    }
}

galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        openGalleryModal(index);
    });
});

modalClose.addEventListener("click", closeGalleryModal);

modalNext.addEventListener("click", () => {
    showGalleryImage(currentIndex + 1);
});

modalPrev.addEventListener("click", () => {
    showGalleryImage(currentIndex - 1);
});

galleryModal.addEventListener("click", (event) => {
    if (event.target === galleryModal) {
        closeGalleryModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (!galleryModal.classList.contains("active")) return;

    if (event.key === "Escape") {
        closeGalleryModal();
    }

    if (event.key === "ArrowRight") {
        showGalleryImage(currentIndex - 1);
    }

    if (event.key === "ArrowLeft") {
        showGalleryImage(currentIndex + 1);
    }
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach((faq) => {
            faq.classList.remove("active");
            faq.querySelector(".faq-question")
                .setAttribute("aria-expanded", "false");
        });

        if (!isActive) {
            item.classList.add("active");
            question.setAttribute("aria-expanded", "true");
        }
    });
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const service = document.getElementById("serviceType").value;
  const from = document.getElementById("fromCity").value.trim();
  const to = document.getElementById("toCity").value.trim();
  const date = document.getElementById("movingDate").value;
  const message = document.getElementById("customerMessage").value.trim();

  const whatsappNumber = "966566209093";

  const text = `
طلب خدمة جديد - شركة الفرسان الذهبية

الاسم: ${name}
رقم الجوال: ${phone}
نوع الخدمة: ${service}
مدينة الاستلام: ${from || "غير محدد"}
مدينة التوصيل: ${to || "غير محدد"}
تاريخ النقل: ${date || "غير محدد"}

تفاصيل إضافية:
${message || "لا توجد تفاصيل إضافية"}
  `;

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank");
  this.reset();
});
const companyVideo = document.getElementById("companyVideo");
const showcaseOverlay = document.getElementById("showcaseOverlay");

showcaseOverlay.addEventListener("click", () => {
  companyVideo.play().catch(() => {});
});

companyVideo.addEventListener("play", () => {
  showcaseOverlay.classList.add("hidden");
});

companyVideo.addEventListener("pause", () => {
  if (!companyVideo.ended) {
    showcaseOverlay.classList.remove("hidden");
  }
});

companyVideo.addEventListener("ended", () => {
  showcaseOverlay.classList.remove("hidden");
});
document.getElementById("footerYear").textContent =
  new Date().getFullYear();
