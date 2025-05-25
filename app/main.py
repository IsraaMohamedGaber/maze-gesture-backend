from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import joblib
import numpy as np

app = FastAPI()

# Load model
model = joblib.load("models/best_model.pkl")

class LandmarkInput(BaseModel):
    landmarks: List[float]  # Accept any list of floats

@app.post("/predict/")
def predict(input_data: LandmarkInput):
    if len(input_data.landmarks) != 63:
        raise HTTPException(status_code=422, detail="Input must contain exactly 63 values.")

    data = np.array(input_data.landmarks).reshape(1, -1)
    prediction = model.predict(data)[0]
    return {"gesture": prediction}
