# maze-gesture-backend
Backend API for interpreting hand gestures to control a maze game. Serves a trained ML model via FastAPI, supports image-based inference, and includes Dockerized deployment with Prometheus and Grafana monitoring.

# 📊 Step 7: Monitoring & Metrics (Prometheus + Grafana)

This branch adds monitoring to the hand gesture recognition backend using **Prometheus**, **Grafana**, and **Docker Compose**.

---

## ✅ What’s Included

| Component          | Description                                                  |
|--------------------|--------------------------------------------------------------|
| `prometheus.yml`   | Prometheus config that scrapes metrics from FastAPI backend |
| `docker-compose.yml` | Spins up FastAPI, Prometheus, and Grafana containers       |
| `/metrics` endpoint | Exposed via `prometheus_fastapi_instrumentator`            |

---

## 🧱 Setup

Ensure Docker is installed and running.

```bash
git checkout monitoring-docker-compose
docker-compose up --build

Access Services:

FastAPI: http://localhost:8000

Metrics: http://localhost:8000/metrics

Prometheus UI: http://localhost:9090

Grafana UI: http://localhost:3000

📈 Grafana Dashboard Setup
Login (default: admin / admin)

Go to Explore tab

Try a sample query: http_requests_total

Optional Dashboard Import:

Click ➕ → Import

Use Dashboard ID: 11074

Set Data Source to Prometheus

📂 File Structure

├── docker-compose.yml
├── prometheus.yml
├── app/
│   └── main.py        # Exposes /metrics with Prometheus instrumentation
└── README.md          # This file

📌 Metrics Tracked

| Type          | Example Metric                  |
| ------------- | ------------------------------- |
| Request count | `http_requests_total`           |
| Response time | `http_request_duration_seconds` |
| Memory usage  | `process_resident_memory_bytes` |
| CPU time      | `process_cpu_seconds_total`     |

✅ Status Checklist

| Requirement                          | Status              |
| ------------------------------------ | ------------------- |
| Added Prometheus config              | ✅ Done              |
| Exposed `/metrics` from FastAPI      | ✅ Done              |
| Dockerized with `docker-compose.yml` | ✅ Done              |
| Prometheus targets show "UP"         | ✅ Done              |
| Grafana dashboard shows metrics      | ✅ Done              |
| Branch created and committed         | ✅ Pending your push |

