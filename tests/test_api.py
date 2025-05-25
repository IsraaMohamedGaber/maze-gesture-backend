from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_predict_success():
    sample_input = {
        "landmarks": [0.1] * 63
    }

    response = client.post("/predict/", json=sample_input)

    assert response.status_code == 200
    assert "gesture" in response.json()
    assert isinstance(response.json()["gesture"], str)

def test_predict_invalid_input():
    bad_input = {
        "landmarks": [0.1, 0.2]
    }

    response = client.post("/predict/", json=bad_input)

    assert response.status_code == 422
    assert response.json()["detail"] == "Input must contain exactly 63 values."
