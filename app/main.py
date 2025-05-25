from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

# Load the model
model = joblib.load("models/best_model.pkl")

# Define input data format
class LandmarkInput(BaseModel):
    landmarks: list  # A list of 63 floats (21 hand landmarks × x, y, z)

@app.post("/predict/")
def predict(input_data: LandmarkInput):
    data = np.array(input_data.landmarks).reshape(1, -1)
    prediction = model.predict(data)[0]
    return {"gesture": prediction}
