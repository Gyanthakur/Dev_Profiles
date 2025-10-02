document.addEventListener("DOMContentLoaded", function () {
    const VISITOR_COUNTED_KEY = 'DevProfile_SessionCounted';
    const VISITOR_COUNT_VALUE = 'DevProfile_VisitorCount';
    const API_URL = "https://logger-mocha-six.vercel.app/api/logger/v1";

    async function updateAndDisplayCount() {
        const body = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                clientSecret: "21c56528-1ecd-432f-a7c6-75fd5c97c37f",
                applicationId: "c01c2ed0-32ae-4c27-8db3-9cd087844371",
            }),
        };

        try {
            const res = await fetch(API_URL, body);
            const visitorCount = await res.json(); // The API returns the count directly
            
            if (res.status === 200) {
                document.getElementById("logger").textContent = `Visitors: ${visitorCount}`;
                
                sessionStorage.setItem(VISITOR_COUNTED_KEY, 'true');
                sessionStorage.setItem(VISITOR_COUNT_VALUE, visitorCount);
            } else {
                console.error("Error fetching visitors:", visitorCount);
            }
        } catch (error) {
            console.error("Error connecting to the API:", error);
            document.getElementById("logger").textContent = 'Visitors: Error';
        }
    }
    

    const hasBeenCounted = sessionStorage.getItem(VISITOR_COUNTED_KEY);
    
    if (hasBeenCounted) {
        const storedCount = sessionStorage.getItem(VISITOR_COUNT_VALUE);
        document.getElementById("logger").textContent = `Visitors: ${storedCount}`;
    } else {
        updateAndDisplayCount(); 
    }
});