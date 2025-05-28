const API_URL = "https://maze-gesture-backend-production.up.railway.app/predict";

async function getPredictedLabel(processed_t) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ landmarks: processed_t })
    });

    if (!response.ok) {
      console.error("API error:", response.statusText);
      return null;
    }

    const data = await response.json();
    console.log("Predicted gesture:", data.gesture);
    return data.gesture || null;
  } catch (error) {
    console.error("Error calling prediction API:", error);
    return null;
  }
}
