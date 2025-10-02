document.getElementById("openApp").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://dev-profile-smoky.vercel.app/" });
  
});
