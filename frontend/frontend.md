<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>Frontend Application – Next.js</h1>

<h2>Run Locally</h2>
<pre><code>cd frontend
npm install
npm run dev
</code></pre>

<h2>Running Frontend Tests</h2>
<pre><code>cd frontend
npm test
</code></pre>

<h2>Running Frontend Using Docker</h2>
<p>The frontend is containerized using Docker.</p>

<p><strong>Navigate to frontend directory:</strong></p>
<pre><code>cd frontend</code></pre>

<p><strong>Build the Docker image:</strong></p>
<pre><code>docker build -t frontend-ui .</code></pre>

<p><strong>Run the container:</strong></p>
<pre><code>docker run -p 3000:3000 frontend-ui</code></pre>

<h2>Running Docker compose (Optional)</h2>
<p>The frontend and backend is containerized using Docker.</p>

<p><strong>Navigate to root directory:</strong></p>
<pre><code>cd ..</code></pre>

<p><strong>Run:</strong></p>
<pre><code>docker compose up --build
</code></pre>


<h2>Frontend Status</h2>
<p>
Frontend application structure is ready.
Testing and Dockerization are in progress.
</p>

</body>
</html>
