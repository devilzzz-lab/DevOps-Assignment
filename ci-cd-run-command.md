<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🔐 GitHub Secrets & Infrastructure Setup</title>
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
<p><strong>⚠️ Do NOT give AdministratorAccess (bad practice)</strong></p>
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
<pre><code>aws sts get-caller-identity
</code></pre>
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
  <li>✅ <code>workflow</code> ← 🔥 THIS IS THE KEY</li>
</ul>
<p><strong>⚠️ If workflow is not checked → same error again</strong></p>

<h3>Step 3️⃣ Generate Token</h3>
<ol>
  <li>Click Generate token</li>
  <li><strong>COPY it immediately</strong> (you won't see again)</li>
</ol>

<h3>Step 4️⃣ Update Git Authentication (ONE TIME)</h3>
<pre><code>git config --global --unset credential.helper
</code></pre>

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
<pre><code>git push
</code></pre>
<p>When Git asks:</p>
<ul>
  <li>Username: your GitHub username</li>
  <li>Password: 👉 paste the <strong>NEW PAT</strong> (not GitHub password)</li>
</ul>

<pre><code>git add .github/workflows/ci-cd.yml
git commit -m "ci: build, test, and push images to ECR and ACR"
git push
</code></pre>

<hr>

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
