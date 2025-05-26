# maze-gesture-backend
Backend API for interpreting hand gestures to control a maze game. Serves a trained ML model via FastAPI, supports image-based inference, and includes Dockerized deployment with Prometheus and Grafana monitoring.


---

### 🚀 `feature/api` Branch – FastAPI Model Serving API

```markdown
# 🚀 FastAPI API – Hand Gesture Model

This branch adds a REST API endpoint using FastAPI that predicts gestures based on hand landmarks.

---

## 📌 Endpoint

```http
POST /predict/

Body:

{
  "landmarks": [0.1, 0.2, ..., 0.3]  // 63 float values
}


Response:

{
  "gesture": "left"
}


 Model
Model used: best_model.pkl (RandomForestClassifier)

Trained to classify: left, right, up, down


✅ Features
| Feature                  | Status |
| ------------------------ | ------ |
| `/predict` route created | ✅ Done |
| Model loaded with joblib | ✅ Done |
| Validates input size     | ✅ Done |
| Returns gesture as JSON  | ✅ Done |



