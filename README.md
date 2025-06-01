# 🧠 Maze Gesture Backend (Production)
Backend API for interpreting hand gestures to control a maze game. Serves a trained ML model via FastAPI, supports image-based inference, and includes Dockerized deployment with Prometheus and Grafana monitoring.

This is the backend service for the Maze Gesture Final Project.  
It uses a trained hand gesture recognition model to detect gestures like **left**, **right**, **up**, and **down** from 21-point hand landmarks.

---
# 🎮 Game Demo
Here’s a quick preview of the gesture-controlled maze game in action:

https://github.com/user-attachments/assets/372a40a8-4bf6-42e3-9b04-1df90d3486c8

---

# 📊 Grafana Monitoring Dashboard
This project includes monitoring via Prometheus and Grafana. Metrics such as prediction count, invalid inputs, and server usage are visualized.

Sample Grafana Dashboard:
![Screenshot (314)](https://github.com/user-attachments/assets/5dc7131d-faa6-421d-a4af-2b9ae489e0a1)
![Screenshot (315)](https://github.com/user-attachments/assets/8d1b2324-edca-4c0c-b246-412b574cc7c7)
![Screenshot (316)](https://github.com/user-attachments/assets/0527435e-2651-4e4c-be3b-98a5d2300c9a)
![Screenshot (317)](https://github.com/user-attachments/assets/3c7e337b-910f-406b-8c6a-a34554d803a6)
![Screenshot (318)](https://github.com/user-attachments/assets/64c030b8-51e4-4f0f-afba-240f3d1091b5)
![Screenshot (319)](https://github.com/user-attachments/assets/d8ef758a-dde2-49ae-8112-210c55fb40ed)

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

├── Dockerfile # Docker image for the API

├── docker-compose.yml # App + Prometheus + Grafana

├── prometheus.yml # Prometheus config

├── Procfile # For Railway deployment

├── requirements.txt # Python dependencies
├── .github/workflows/
│ └── railway-deploy.yml # CI/CD deployment workflow
└── README.md # You're here :)


---

## 📦 API: How to Use

Start the server locally:

uvicorn app.main:app --reload
ط
ط
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
| Valid input (63 landmarks)   | ✅     | 
| Invalid input (bad length)   | ✅     |
| Validation errors return 422 | ✅     |

# 🐳 Docker Support
Build the image:
docker build -t gesture-backend .
Run the container:
docker run -p 8000:8000 gesture-backend

Open:

👉 https://mlops-final-project-production-2c88.up.railway.app/docs to test the API

 Model Info
Trained using scikit-learn==1.0.2

RandomForestClassifier

21 hand landmarks × 3 coordinates = 63 features

Classes: left, right, up, down

📈 Monitoring: Prometheus + Grafana
Tracked Metrics

| Metric Name              | Type           | Description                                        |
| ------------------------ | -------------- | -------------------------------------------------- |
| `model_prediction_total` | Model-related  | Total number of predictions made                   |
| `invalid_input_total`    | Data-related   | Count of malformed/invalid inputs                  |
| `http_requests_total`    | Server-related | Auto-exposed: tracks HTTP traffic by status/method |

Prometheus & Grafana
Launch with:

docker-compose up --build

Prometheus: http://localhost:9090

Grafana: http://localhost:3000

Grafana Dashboard imported using ID: 11074

Railway
CI/CD via GitHub Actions (.github/workflows/railway-deploy.yml)

Auto-deploys on push to main

# Live API URL:
🔗 https://maze-gesture-backend-production.up.railway.app/docs

# 🌐 GitHub Pages (Frontend)
Frontend Maze Game is integrated with this backend.
📦 Live Game:
👉 https://israamohamedgaber.github.io/maze-gesture-backend/

🧠 Model Info
Trained using scikit-learn==1.0.2

Model: RandomForestClassifier

Features: 21 hand landmarks × 3 (x, y, z) = 63 floats

Classes: "left", "right", "up", "down"

---
# 🔗 Repository
gesture-maze-research: https://github.com/IsraaMohamedGaber/gesture-maze-research
Backend: https://github.com/IsraaMohamedGaber/maze-gesture-backend

---
## 🕹️ How to Use the Game
The game is controlled using your hand gestures via webcam input. The gestures are captured in real time and sent to the backend API, which classifies them into movement directions for the game.

🔧 Requirements
A webcam

A modern browser (Chrome, Firefox, etc.)

Ensure your backend is deployed and accessible from the frontend

▶️ Steps
Open the Game in the Browser
Visit: https://israamohamedgaber.github.io/maze-gesture-backend/

Allow Webcam Access
When prompted, allow the site to access your webcam.

Perform Gestures
Use your hand to perform any of the recognized gestures listed below.

Watch the Ball Move!
The game will respond to your gesture predictions in real time.

🤖 Gesture-to-Direction Mapping
| Hand Sign  | Meaning | Action in Game |
| ---------- | ------- | -------------- |
| 👍 Like    | Up      | Move Up        |
| 👎 Dislike | Down    | Move Down      |
| ☝️ One     | Left    | Move Left      |
| ✌️ Two Up  | Right   | Move Right     |

These gestures are trained and mapped via label_mapping during model training. Make sure your dataset matches these labels.
