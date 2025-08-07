document.addEventListener("DOMContentLoaded", function () {
    async function initLogger() {
      const body = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientSecret: "21c56528-1ecd-432f-a7c6-75fd5c97c37f",
          applicationId: "c01c2ed0-32ae-4c27-8db3-9cd087844371",
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
  