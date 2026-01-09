<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Backend Service – FastAPI</title>
</head>
<body>

<h1>Backend Service – FastAPI</h1>

<h2>Backend Overview</h2>
<ul>
  <li>Built using FastAPI</li>
  <li>Exposes health and message endpoints</li>
  <li>Supports environment-based configuration</li>
  <li>Fully unit tested</li>
  <li>Dockerized using best practices</li>
</ul>

<h2>Running Backend Unit Tests</h2>
<p><strong>Steps:</strong></p>
<ol>
  <li>Navigate to the backend directory.</li>
  <li>Install dependencies from <code>requirements.txt</code>.</li>
  <li>Install <code>pip install pytest</code>.</li>
  <li>Run tests using:
    <pre><code>python3 -m pytest tests/test_main.py</code></pre>
  </li>
</ol>

<p>Unit tests validate backend API endpoints. Tests ensure:</p>
<ul>
  <li>Health endpoint returns expected status.</li>
  <li>Message endpoint returns valid response.</li>
</ul>


<h2>Running Backend Using Docker</h2>
<p>The backend is containerized using Docker.</p>
<p><strong>Container features:</strong></p>
<ul>
  <li>Multi-stage build</li>
  <li>Non-root user execution</li>
  <li>Optimized image size</li>
</ul>
<p>The container exposes port <strong>8000</strong>.</p>

<p><code>cd backend/Dockerfile </code></p>

<p>Run<code>docker run -p 8000:8000 backend-api</code></p>

<h2>Backend Endpoints</h2>

<h3>Health Check</h3>
<pre><code>curl http://localhost:8000/api/health</code></pre>

<h3>Message Endpoint</h3>
<pre><code>curl http://localhost:8000/api/message</code></pre>

<h2>Environment Variables</h2>

<p>Configure the backend URL in your frontend:</p>

<ol>
  <li>Create a <code>.env.local</code> file in the <code>frontend</code> directory</li>
  <li>Add the following variable:
    <pre><code>NEXT_PUBLIC_API_URL=http://localhost:8000</code></pre>
  </li>
  <li>For production, update the URL:
    <pre><code>NEXT_PUBLIC_API_URL=https://your-backend-url.com</code></pre>
  </li>
</ol>

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
