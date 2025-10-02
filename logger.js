document.addEventListener("DOMContentLoaded", () => {
  const loggerEl = document.getElementById("logger");

  const API_URL = "https://logger-mocha-six.vercel.app/api/logger/v1";
  const CLIENT_SECRET = "21c56528-1ecd-432f-a7c6-75fd5c97c37f";
  const APPLICATION_ID = "c01c2ed0-32ae-4c27-8db3-9cd087844371";

  const CACHE_KEY = `visitorCount_${APPLICATION_ID}`;
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    loggerEl.textContent = `Visitors: ${cached}`;
  } else {
    loggerEl.textContent = "Visitors: loading... ";
  }

  async function updateCount() {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientSecret: CLIENT_SECRET,
          applicationId: APPLICATION_ID,
        }),
      });

      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      
      if (data !== undefined) {
        loggerEl.textContent = `Visitors: ${data}`;
        localStorage.setItem(CACHE_KEY,data);
      }
    } catch (err) {
      console.error("Visitor count error:", err);
    }
  }
  updateCount();
});

  