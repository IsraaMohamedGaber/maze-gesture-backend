from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import joblib
import numpy as np
from prometheus_fastapi_instrumentator import Instrumentator
from prometheus_client import Counter

app = FastAPI()

# Add metrics instrumentation
Instrumentator().instrument(app).expose(app)

# Load model
model = joblib.load("models/best_model.pkl")
# Model-related: track prediction count
model_prediction_total = Counter("model_prediction_total", "Total predictions made")

# Data-related: track how many invalid inputs are sent
invalid_input_total = Counter("invalid_input_total", "Total invalid inputs received")

class LandmarkInput(BaseModel):
    landmarks: List[float]  # Accept any list of floats

@app.post("/predict/")
def predict(input_data: LandmarkInput):
    try:
        data = np.array(input_data.landmarks).reshape(1, -1)
        prediction = model.predict(data)[0]

        # Increment model usage metric
        model_prediction_total.inc()

        return {"gesture": prediction}
    except Exception as e:
        # Increment invalid input counter
        invalid_input_total.inc()
        raise HTTPException(status_code=400, detail=str(e))
