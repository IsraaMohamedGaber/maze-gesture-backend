# maze-gesture-backend
Backend API for interpreting hand gestures to control a maze game. Serves a trained ML model via FastAPI, supports image-based inference, and includes Dockerized deployment with Prometheus and Grafana monitoring.
# 🐳 Docker Setup

This branch includes all Dockerization steps to containerize the FastAPI backend for the gesture recognition app.

---

## 📦 What's Included

| File                 | Purpose                                        |
|----------------------|------------------------------------------------|
| `Dockerfile`         | Defines how the backend is built into a container |
| `.dockerignore`      | Excludes unnecessary files from the image      |
| `models/best_model.pkl` | Trained model copied into container         |

---

## 🛠️ Usage

Build and run the container:

```bash
docker build -t gesture-backend .
docker run -p 8000:8000 gesture-backend

🔗 Endpoints
API: http://localhost:8000

Docs: http://localhost:8000/docs

| Task                            | Status |
| ------------------------------- | ------ |
| Dockerfile added                | ✅ Done |
| Model included inside container | ✅ Done |
| FastAPI app runs in container   | ✅ Done |
| Manual run with `docker run`    | ✅ Done |
