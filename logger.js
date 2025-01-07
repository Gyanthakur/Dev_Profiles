document.addEventListener("DOMContentLoaded", function () {
    async function initLogger() {
      const body = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientSecret: "f274a57c-fe8f-4967-9cd7-9b109d339fea",
          applicationId: "16cea802-947d-48ff-8761-3fda8350083b",
        }),
      };
  
      try {
        const res = await fetch("https://logger-mocha-six.vercel.app/api/logger/v1", body);
        const json = await res.json();
  
        if (res.status === 200) {
          document.getElementById("logger").textContent = `Visitors: ${json}`;
        } else {
          console.error("Error fetching visitors:", json);
        }
      } catch (error) {
        console.error("Error connecting to the API:", error);
      }
    }
  
    initLogger();
  });
  