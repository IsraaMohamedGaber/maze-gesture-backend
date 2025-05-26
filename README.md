# 🧠 Maze Gesture Backend (Production)
Backend API for interpreting hand gestures to control a maze game. Serves a trained ML model via FastAPI, supports image-based inference, and includes Dockerized deployment with Prometheus and Grafana monitoring.

This is the backend service for the Maze Gesture Final Project.  
It uses a trained hand gesture recognition model to detect gestures like **left**, **right**, **up**, and **down** from 21-point hand landmarks.

---

## 🚀 Features Implemented

| Feature                     | Status |
|----------------------------|--------|
| FastAPI backend            | ✅ Done |
| Gesture prediction API     | ✅ Done |
| Unit tests with pytest     | ✅ Done |
| Dockerized API service     | ✅ Done |
| Swagger UI for testing     | ✅ Done |

---

## 📁 Project Structure

maze-gesture-backend/
│
├── app/
│ ├── main.py # FastAPI application
│ └── models/
│ └── best_model.pkl # Trained model
│
├── tests/
│ └── test_api.py # Unit tests for the API
│
├── requirements.txt # Python dependencies
├── Dockerfile # Docker image for the API
└── README.md # You're here :)


---

## 📦 API: How to Use

Start the server locally:

```bash
uvicorn app.main:app --reload

Then open in browser:

👉 http://localhost:8000/docs (Swagger UI)

✋ POST /predict/
Input:
{
  "landmarks": [0.1, 0.2, 0.3, ..., 0.0]  // total 63 floats
}

Output:
{
  "gesture": "left"
}

🧪 Unit Testing
Run the tests:

pytest

✅ Unit Test Coverage
| Test                         | Status |
| ---------------------------- | ------ |
| Valid input (63 landmarks)   | ✅      |
| Invalid input (bad length)   | ✅      |
| Validation errors return 422 | ✅      |

🐳 Docker Support
Build the image:
docker build -t gesture-backend .
Run the container:
docker run -p 8000:8000 gesture-backend

Open:

👉 http://localhost:8000/docs to test the API

 Model Info
Trained using scikit-learn==1.0.2

RandomForestClassifier

21 hand landmarks × 3 coordinates = 63 features

Classes: left, right, up, down



