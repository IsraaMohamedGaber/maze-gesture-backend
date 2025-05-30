const API_URL = "https://maze-gesture-backend-production.up.railway.app/predict";

async function getPredictedLabel(processed_t) {
  // Make sure processed_t is an array of 63 floats
  if (!Array.isArray(processed_t) || processed_t.length !== 63 || !processed_t.every(n => typeof n === 'number')) {
    console.error("Invalid input: processed_t must be an array of 63 numbers.");
    return null;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ landmarks: processed_t }),
    });

    if (!response.ok) {
      console.error("Failed API response:", response.status);
      return null;
    }

    const data = await response.json();
    console.log("Predicted gesture:", data.gesture);
    return data.gesture;  // expected: "up", "down", "left", "right"
  } catch (error) {
    console.error("Error calling prediction API:", error);
    return null;
  }
}
