<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h2>🧪 TEST 1 — DEVELOP BRANCH (CI ONLY)</h2>
<p><strong>🎯 Goal:</strong> CI runs, Images build & push, ❌ NO Terraform</p>

<ol>
  <li><strong>Switch to develop:</strong>
    <pre><code>git checkout develop
git pull origin develop</code></pre>
  </li>
  <li><strong>Change backend message:</strong>
    <pre><code>@app.get("/api/message")
async def get_message():
    return {"message": "develop build – should NOT deploy"}</code></pre>
  </li>
  <li><strong>Commit & push:</strong>
    <pre><code>git add backend
git commit -m "test: develop branch CI only"
git push origin develop</code></pre>
  </li>
</ol>

<p><strong>✅ PASS CONDITION:</strong></p>
<ul>
  <li>✔ CI ran</li>
  <li>✔ No AWS infra created</li>
</ul>

<h2>🧪 TEST 2 — MAIN BRANCH (FULL DEPLOY)</h2>
<p><strong>🎯 Goal:</strong> CI + Terraform apply + App reachable</p>

<ol>
  <li><strong>Switch to main:</strong>
    <pre><code>git checkout main
git pull origin main</code></pre>
  </li>
  <li><strong>Change backend message:</strong>
    <pre><code>@app.get("/api/message")
async def get_message():
    return {"message": "main deploy v1"}</code></pre>
  </li>
  <li><strong>Commit & push:</strong>
    <pre><code>git add backend
git commit -m "deploy: main deploy v1"
git push origin main</code></pre>
  </li>
</ol>

<p><strong>✅ PASS CONDITION:</strong></p>
<ul>
  <li>✔ Terraform ran from CI</li>
  <li>✔ Infra created</li>
  <li>✔ App reachable</li>
</ul>

<h2>🧪 TEST 3 — ZERO-DOWNTIME DEPLOY (MOST IMPORTANT)</h2>
<p><strong>🎯 Goal:</strong> Rolling update, No downtime</p>

<ol>
  <li><strong>Change backend message:</strong>
    <pre><code>@app.get("/api/message")
async def get_message():
    return {"message": "main deploy v2 – zero downtime"}</code></pre>
  </li>
  <li><strong>Commit & push:</strong>
    <pre><code>git add backend
git commit -m "deploy: main deploy v2"
git push origin main</code></pre>
  </li>
  <li><strong>Live downtime test (DURING deployment):</strong>
    <pre><code>while true; do
  curl http://&lt;alb-dns&gt;/api/message
  sleep 1
done</code></pre>
  </li>
</ol>

<p><strong>✅ PASS CONDITION:</strong></p>
<ul>
  <li>✔ Message updates smoothly</li>
  <li>✔ No downtime</li>
  <li>✔ No manual terraform</li>
</ul>

<h2>🏁 FINAL CONFIRMATION</h2>
<p><strong>If ALL THREE tests pass:</strong></p>
<p><em>"I can deploy production by only doing <code>git push main</code>"</em></p>

<h2>✅ STEP 4 — VERIFY (NON-NEGOTIABLE)</h2>
<p>After push to <code>develop</code>:</p>
<ol>
  <li>GitHub → Actions</li>
  <li>Ensure:</li>
</ol>
<ul>
  <li>All tests PASS</li>
  <li>Backend tests PASS</li>
  <li>Frontend tests PASS</li>
  <li>ECR has <code>backend</code> & <code>frontend</code> images (Git SHA tag)</li>
  <li>ACR has <code>backend</code> & <code>frontend</code> images (Git SHA tag)</li>
</ul>

</body>
</html>
