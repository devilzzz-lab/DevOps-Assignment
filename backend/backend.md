<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Backend Service – FastAPI</title>
</head>
<body>

<h1>Backend Service – FastAPI</h1>

<p>
This directory contains the backend service for the DevOps Assignment project.
The backend provides REST APIs consumed by the frontend application.
</p>

<h2>Backend Overview</h2>
<ul>
  <li>Built using FastAPI</li>
  <li>Exposes health and message endpoints</li>
  <li>Supports environment-based configuration</li>
  <li>Fully unit tested</li>
  <li>Dockerized using best practices</li>
</ul>

<h2>Backend Endpoints</h2>

<h3>Health Check</h3>
<ul>
  <li><strong>Method:</strong> GET</li>
  <li><strong>Endpoint:</strong> <code>/api/health</code></li>
  <li><strong>Description:</strong> Returns backend service status.</li>
</ul>

<h3>Message Endpoint</h3>
<ul>
  <li><strong>Method:</strong> GET</li>
  <li><strong>Endpoint:</strong> <code>/api/message</code></li>
  <li><strong>Description:</strong> Returns a simple integration message.</li>
</ul>

<h2>Environment Variables</h2>
<ul>
  <li><code>APP_MESSAGE</code>: Custom message returned by the message endpoint.</li>
  <li>If not set, a default message is returned.</li>
</ul>

<h2>Running Backend Locally (Without Docker)</h2>
<p><strong>Steps:</strong></p>
<ol>
  <li>Navigate to the backend directory.</li>
  <li>Install dependencies from <code>requirements.txt</code>.</li>
  <li>Start the FastAPI server using Uvicorn.</li>
</ol>
<p>
The backend runs on port <strong>8000</strong> and is accessible at:
<a href="http://localhost:8000" target="_blank">http://localhost:8000</a>
</p>

<h2>Running Backend Unit Tests</h2>
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
