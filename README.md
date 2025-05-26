# maze-gesture-backend
Backend API for interpreting hand gestures to control a maze game. Serves a trained ML model via FastAPI, supports image-based inference, and includes Dockerized deployment with Prometheus and Grafana monitoring.


---

### ✅ `unit-tests` Branch – FastAPI Unit Testing

```markdown
# ✅ Unit Tests (FastAPI)

This branch includes test cases for the gesture prediction API using `pytest` and FastAPI's `TestClient`.

---

## 📁 Tests Added

| Test Name                    | Description                             |
|------------------------------|-----------------------------------------|
| `test_predict_success`       | Tests valid input (63 landmarks)        |
| `test_predict_invalid_input` | Tests invalid input (too few landmarks) |

---

## ▶️ Run Tests

Make sure your virtual environment is activated:

```bash
pytest

🔬 Tech Used
pytest

FastAPI TestClient

| Task                                | Status |
| ----------------------------------- | ------ |
| Valid input test                    | ✅ Done |
| Invalid input test                  | ✅ Done |
| FastAPI validation working properly | ✅ Done |
| All tests pass                      | ✅ Done |
