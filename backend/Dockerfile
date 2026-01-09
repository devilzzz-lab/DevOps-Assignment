# ---------- builder ----------
FROM python:3.11-slim AS builder

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app app

# ---------- runtime ----------
FROM python:3.11-slim

WORKDIR /app

RUN useradd -m appuser
USER appuser

# Fix: Copy the entire /usr/local to get uvicorn binary
COPY --from=builder /usr/local /usr/local
COPY --from=builder /app /app

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
