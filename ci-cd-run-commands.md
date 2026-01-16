<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>🔐 STEP 1 — REQUIRED GITHUB SECRETS (VERY IMPORTANT)</h1>

<h2>1️⃣ AWS Secrets (ECR)</h2>
<p>Add these in <strong>GitHub → Settings → Secrets → Actions</strong></p>
<ul>
  <li><code>AWS_ACCESS_KEY_ID</code></li>
  <li><code>AWS_SECRET_ACCESS_KEY</code></li>
  <li><code>AWS_REGION</code></li>
  <li><code>AWS_ACCOUNT_ID</code></li>
  <li><code>AZURE_CREDENTIALS</code></li>
</ul>

<h2>How to Find these Secrets</h2>

<h2>A2️⃣ Create IAM User for THIS PROJECT</h2>

<h3>Step 1: Open IAM</h3>
<p>AWS Console → IAM → Users → Create user</p>

<h3>Step 2: User details</h3>
<ul>
  <li><strong>User name:</strong> <code>devops-assignment-ci</code></li>
</ul>
<p>Click Next</p>

<h3>Step 3: Permissions (VERY IMPORTANT)</h3>
<p>Choose: <strong>👉 Attach policies directly</strong></p>
<p>Attach <strong>ONLY</strong> these policies (minimum needed):</p>
<ul>
  <li><code>AmazonEC2ContainerRegistryFullAccess</code></li>
  <li><code>AmazonECSFullAccess</code> (needed later)</li>
  <li><code>CloudWatchFullAccess</code> (needed later)</li>
</ul>
<div class="warning">
  <strong>⚠️ Do NOT give AdministratorAccess (bad practice)</strong>
</div>
<p>Click Next → Create user</p>

<h3>Step 4: SAVE CREDENTIALS (CRITICAL)</h3>
<ol>
  <li>Go to security tab</li>
  <li>Create access key</li>
  <li>Create for AWS CLI</li>
  <li>Access ID and Secret Access Key → <strong>download .csv</strong></li>
</ol>
<ul>
  <li><strong>Access ID:</strong> <code>AWS_ACCESS_KEY_ID</code></li>
  <li><strong>Secret Access Key:</strong> <code>AWS_SECRET_ACCESS_KEY</code></li>
</ul>

<h3>What is AWS_ACCOUNT_ID & How to Verify CLI:</h3>
<pre><code>aws sts get-caller-identity</code></pre>
<p><strong>Output:</strong></p>
<pre>{
  "Account": "123456789012"
}</pre>
<p><strong>That number = AWS_ACCOUNT_ID</strong></p>

<hr>

<h2>Create ECR Repositories (backend & frontend)</h2>

<h3>Option 1: Console (simplest)</h3>
<ol>
  <li>AWS Console → ECR → Repositories → Create private repository</li>
  <li><strong>Create two repositories:</strong></li>
</ol>
<ul>
  <li><strong>Repository 1</strong><br><code>backend</code></li>
  <li><strong>Repository 2</strong><br><code>frontend</code></li>
</ul>
<p><strong>Done ✅</strong></p>

<p><strong>Verify ECR exists:</strong></p>
<ul>
  <li><code>backend</code></li>
  <li><code>frontend</code></li>
</ul>

<hr>

<h2>1️⃣ Create Azure Container Registry (ACR)</h2>
<ol>
  <li>Azure Portal → Search Container Registries → Create</li>
</ol>
<p><strong>Basics:</strong></p>
<ul>
  <li>Subscription: default</li>
  <li>Resource group: <code>devops-assignment-rg</code></li>
  <li>Registry name: <code>devopsassignmentacr</code></li>
  <li><strong>⚠️ Must be globally unique</strong></li>
  <li>Location: same as resource group</li>
  <li>SKU: Basic (cheap)</li>
</ul>
<p>Click Create</p>

<h3>B3️⃣ Enable Admin User (FAST MODE)</h3>
<ol>
  <li>ACR → Settings → Access keys</li>
  <li>Enable: <strong>✅ Admin user</strong></li>
</ol>
<p>This gives:</p>
<ul>
  <li>Username</li>
  <li>Password</li>
</ul>
<p><strong>⚠️ For now this is OK (later we'll use Service Principal)</strong></p>

<hr>

<h2>2️⃣ Azure Secrets (ACR)</h2>

<pre><code>az ad sp create-for-rbac \
  --name devops-assignment-sp \
  --role acrpush \
  --scopes /subscriptions/&lt;SUBSCRIPTION_ID&gt;/resourceGroups/devops-assignment-rg/providers/Microsoft.ContainerRegistry/registries/devopsassignmentacr \
  --sdk-auth
</code></pre>

<p><strong>⚠️ Replace <code>&lt;SUBSCRIPTION_ID&gt;</code> properly.</strong></p>

<p><strong>Output will look like:</strong></p>
<pre>{
  "clientId": "xxxx",
  "clientSecret": "yyyy",
  "subscriptionId": "zzzz",
  "tenantId": "aaaa",
  "activeDirectoryEndpointUrl": "...",
  "resourceManagerEndpointUrl": "...",
  "activeDirectoryGraphResourceId": "...",
  "sqlManagementEndpointUrl": "...",
  "galleryEndpointUrl": "...",
  "managementEndpointUrl": "..."
}</pre>

<h3>STEP 2️⃣ Add this as ONE GitHub Secret</h3>
<ol>
  <li>GitHub → Settings → Secrets → Actions → New repository secret</li>
  <li><strong>Name:</strong> <code>AZURE_CREDENTIALS</code></li>
  <li><strong>Value:</strong> 👉 paste the <strong>FULL JSON output</strong> (entire block)</li>
</ol>
<p><strong>⚠️ Do NOT modify it.</strong></p>

<hr>

<h2>🟢 GitHub Action Workflow Control</h2>

<h3>Create NEW PAT</h3>

<h3>Step 1️⃣ Go to GitHub Tokens</h3>
<p><strong>👉 <a href="https://github.com/settings/tokens" target="_blank">https://github.com/settings/tokens</a></strong></p>

<h3>Step 2️⃣ Token Settings (IMPORTANT)</h3>
<p><strong>Fill like this:</strong></p>
<ul>
  <li>Note: <code>devops-assignment-ci</code></li>
  <li>Expiration: <code>30 days</code> (fine)</li>
  <li><strong>Scopes (CHECK THESE):</strong></li>
  <li>✅ <code>repo</code></li>
  <li>✅ <code>workflow</code> ← THIS IS THE KEY</li>
</ul>
<p><strong>⚠️ If workflow is not checked → same error again</strong></p>

<h3>Step 3️⃣ Generate Token</h3>
<ol>
  <li>Click Generate token</li>
  <li><strong>COPY it immediately</strong> (you won't see again)</li>
</ol>

<hr>

<h2>✅ FIX — DO THIS EXACTLY (2–3 minutes)</h2>

<h3>STEP 1️⃣ Open Keychain Access (GUI)</h3>
<ol>
  <li>Press <code>Cmd + Space</code></li>
  <li>Type <code>Keychain Access</code></li>
  <li>Open it</li>
</ol>

<h3>STEP 2️⃣ Delete Old GitHub Credentials</h3>
<ol>
  <li>Inside Keychain Access:</li>
  <li>Select Keychain: <code>login</code></li>
  <li>Select Category: <code>Passwords</code></li>
  <li>In search bar, type: <code>github.com</code></li>
  <li>You will see entries like: <code>github.com</code></li>
  <li><strong>🔥 DELETE ALL GitHub entries</strong></li>
  <li>Right-click → Delete → Confirm deletion</li>
</ol>

<h3>Now push again:</h3>
<pre><code>git push</code></pre>
<p>When Git asks:</p>
<ul>
  <li>Username: your GitHub username</li>
  <li>Password: 👉 paste the <strong>NEW PAT</strong> (not GitHub password)</li>
</ul>

<div class="success">
  ✅ CORRECT FIX (BEST PRACTICE)
</div>

<h3>🔑 S3 Backend Naming Pattern (Industry Standard)</h3>
<pre><code>aws sts get-caller-identity</code></pre>
<p>Create bucket:</p>
<pre><code>aws s3api create-bucket \
  --bucket devops-assignment-1234567890-us-east-1-tf-state \
  --region us-east-1</code></pre>

<h3>🔐 ENABLE ENCRYPTION (MANDATORY)</h3>
<pre><code>aws s3api put-bucket-encryption \
  --bucket devops-assignment-123456789-us-east-1-tf-state \
  --server-side-encryption-configuration '{
    "Rules": [{
      "ApplyServerSideEncryptionByDefault": {
        "SSEAlgorithm": "AES256"
      }
    }]
  }'</code></pre>

<h3>🟢 CREATE DYNAMODB LOCK TABLE (ONE TIME)</h3>
<pre><code>aws dynamodb create-table \
  --table-name terraform-locks \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region us-east-1</code></pre>

<hr>

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

<div class="success">
  <strong>✅ PASS CONDITION:</strong><br>
  ✔ CI ran<br>
  ✔ No AWS infra created
</div>

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

<div class="success">
  <strong>✅ PASS CONDITION:</strong><br>
  ✔ Terraform ran from CI<br>
  ✔ Infra created<br>
  ✔ App reachable
</div>

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

<div class="success">
  <strong>✅ PASS CONDITION:</strong><br>
  ✔ Message updates smoothly<br>
  ✔ No downtime<br>
  ✔ No manual terraform
</div>

<h2>🏁 FINAL CONFIRMATION</h2>
<div class="success">
  <strong>If ALL THREE tests pass:</strong><br>
  <em>"I can deploy production by only doing <code>git push main</code>"</em>
</div>

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
