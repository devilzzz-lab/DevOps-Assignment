<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>Backend Service – FastAPI</h1>

<h2>Run Locally</h2>
<pre><code>cd backend
pip install -r requirements.txt
pip install pytest
uvicorn app.main:app --reload --port 8000</code></pre>

<h2>Running Backend Unit Tests</h2>
<p><strong>Steps:</strong></p>
<ol>
  <li>Navigate to the backend directory</li>
  <li>Install dependencies from <code>requirements.txt</code></li>
  <li>Install pytest: <code>pip install pytest</code></li>
  <li>Run tests using:
    <pre><code>python3 -m pytest tests/test_main.py</code></pre>
  </li>
</ol>

<h2>Running Backend Using Docker</h2>
<p>The backend is containerized using Docker.</p>

<p><strong>Navigate to backend directory:</strong></p>
<pre><code>cd backend</code></pre>

<p><strong>Build the Docker image:</strong></p>
<pre><code>docker build -t backend-api .</code></pre>

<p><strong>Run the container:</strong></p>
<pre><code>docker run -p 8000:8000 backend-api</code></pre>

<h2>Backend Endpoints</h2>

<h3>Health Check</h3>
<pre><code>curl http://localhost:8000/api/health</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{"status": "healthy", "message": "Backend is running successfully"}</code></pre>

<h3>Message Endpoint</h3>
<pre><code>curl http://localhost:8000/api/message</code></pre>
<p><strong>Output:</strong></p>
<pre><code>{"message": "You've successfully integrated the backend!"}</code></pre>

<h2>Security Practices</h2>
<ul>
  <li>No secrets stored in source code</li>
  <li>No secrets baked into Docker images</li>
  <li>Environment variables used for configuration</li>
  <li>Non-root container execution</li>
</ul>

<h2>Backend Status</h2>
<p>
Backend implementation, testing, and Dockerization are complete and production-ready.
</p>

</body>
</html>
