(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");
  const form = document.querySelector(".booking-form");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  const animated = document.querySelectorAll("[data-animate]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );
    animated.forEach((el) => observer.observe(el));
  } else {
    animated.forEach((el) => el.classList.add("is-visible"));
  }

  // GitHub Pages has no backend — open the visitor's email client with the request.
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const services = data.getAll("services").join(", ") || "Not specified";
      const subject = encodeURIComponent("Booking request — Manda the Creative");
      const body = encodeURIComponent(
        [
          `Name: ${data.get("name") || ""}`,
          `Email: ${data.get("email") || ""}`,
          `Event date: ${data.get("event-date") || "Not specified"}`,
          `Event type: ${data.get("event-type") || "Not specified"}`,
          `Services: ${services}`,
          "",
          "Details:",
          data.get("details") || "",
        ].join("\n")
      );
      // Update this address to your real inbox before going live.
      const email = "hello@mandatethecreative.com";
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }
})();
