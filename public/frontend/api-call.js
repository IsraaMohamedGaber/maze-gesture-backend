const API_URL = "https://maze-gesture-backend-production.up.railway.app/predict";

// ✅ Helper to normalize the 63-length landmark array
function normalizeLandmarks(landmarks) {
  const wristX = landmarks[0];
  const wristY = landmarks[1];
  const midFingerX = landmarks[36];
  const midFingerY = landmarks[37];

  const normalized = [...landmarks];

  // Subtract wrist position from all x and y
  for (let i = 0; i < normalized.length; i += 3) {
    normalized[i] -= wristX;     // x
    normalized[i + 1] -= wristY; // y
    // z remains unchanged
  }

  const scale = Math.hypot(midFingerX - wristX, midFingerY - wristY);
  if (scale > 0) {
    for (let i = 0; i < normalized.length; i++) {
      normalized[i] /= scale;
    }
  }

  return normalized;
}

async function getPredictedLabel(landmarks) {
  // ✅ Flatten the 21 landmarks into a 1D array of 63 floats
  const raw_t = landmarks.flatMap(point => [point.x, point.y, point.z]);

  // ✅ Normalize the flattened data
  const processed_t = normalizeLandmarks(raw_t);

  console.log("🔢 Normalized input:", processed_t);

  // ✅ Validate shape
  if (!Array.isArray(processed_t) || processed_t.length !== 63 || !processed_t.every(n => typeof n === 'number')) {
    console.error("❌ Invalid input: processed_t must be an array of 63 numbers.");
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
      console.error("❌ Failed API response:", response.status);
      return null;
    }

    const data = await response.json();
    console.log("✅ Predicted gesture:", data.gesture);
    return data.gesture; // "up", "down", "left", "right"
  } catch (error) {
    console.error("❌ Error calling prediction API:", error);
    return null;
  }
}
