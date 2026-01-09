<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frontend Application – Next.js</title>
</head>
<body>

<h1>Frontend Application – Next.js</h1>

<p>
This directory contains the frontend application for the DevOps Assignment project. [conversation_history:1]
The frontend communicates with the backend via REST APIs. [conversation_history:1]
</p>

<h2>Frontend Overview</h2>
<ul>
  <li>Built using Next.js</li>
  <li>Connects to backend using configurable API URL</li>
  <li>Environment-based configuration</li>
  <li>Designed for containerized deployment</li>
</ul>

<h2>Environment Configuration</h2>
<p>Frontend uses an environment variable to connect to backend:</p>
<ul>
  <li><code>NEXT_PUBLIC_API_URL</code>: Backend API base URL</li>
</ul>

<h2>Running Frontend Locally (Without Docker)</h2>
<p><strong>Steps:</strong></p>
<ol>
  <li>Navigate to the frontend directory.</li>
  <li>Install dependencies using npm or yarn.</li>
  <li>Start the development server.</li>
</ol>
<p>
The frontend runs on port <strong>3000</strong> and is accessible at:
<a href="http://localhost:3000" target="_blank">http://localhost:3000</a>
</p>

<h2>Running Frontend Tests</h2>
<p>Frontend tests validate UI rendering and backend integration behavior. [conversation_history:1]</p>
<p>Tests ensure:</p>
<ul>
  <li>Application renders correctly</li>
  <li>Backend integration messages are displayed</li>
</ul>

<h2>Running Frontend Using Docker</h2>
<p>The frontend is containerized using Docker. [conversation_history:1]</p>
<p><strong>Container features:</strong></p>
<ul>
  <li>Multi-stage build</li>
  <li>Production-ready Next.js build</li>
  <li>Environment-based configuration</li>
</ul>
<p>The container exposes port <strong>3000</strong>.</p>

<h2>Frontend Status</h2>
<p>
Frontend application structure is ready.
Testing and Dockerization are in progress. [conversation_history:1]
</p>

</body>
</html>
