# maze-gesture-backend
Backend API for interpreting hand gestures to control a maze game. Serves a trained ML model via FastAPI, supports image-based inference, and includes Dockerized deployment with Prometheus and Grafana monitoring.

## 📊 Monitoring Metrics

| Type           | Metric Name                  | Description |
|----------------|------------------------------|-------------|
| Model-related  | `model_prediction_total`     | Total number of predictions made by the model |
| Data-related   | `invalid_input_total`        | Counts how many invalid requests were received |
| Server-related | `http_request_duration_seconds` | Measures how long each HTTP request takes |
