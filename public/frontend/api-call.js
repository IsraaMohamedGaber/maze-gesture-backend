const API_URL = "https://maze-gesture-backend-production.up.railway.app/predict";

async function getPredictedLabel(processed_t) {
  try {
    // Check: processed_t must be an array of numbers
    if (!Array.isArray(processed_t) || processed_t.some(isNaN)) {
      console.error("Invalid input: processed_t must be an array of numbers.");
      return null;
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ landmarks: processed_t })  // Correct format for FastAPI backend
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error:", response.status, errorText);
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
