<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>🗑️ Infrastructure Destroy & Recreation Guide</h1>

<h2>🗑️ Terraform Destroy - AWS (Remote Backend)</h2>
<p><strong>⚠️ Note:</strong> Using <strong>remote S3 backend + DynamoDB locking</strong> via GitHub Actions. Local state unavailable - must initialize first.</p>

<h3>Step-by-Step Instructions</h3>
<ol>
  <li><strong>Navigate to AWS Terraform directory:</strong>
    <pre><code>cd terraform/aws</code></pre>
  </li>
  <li><strong>Initialize remote backend:</strong>
    <pre><code>terraform init</code></pre>
  </li>
  <li><strong>Preview destruction (RECOMMENDED):</strong>
    <pre><code>terraform plan -destroy</code></pre>
  </li>
  <li><strong>Execute destroy:</strong>
    <pre><code>terraform destroy</code></pre>
  </li>
</ol>

<h3>✅ Expected Output</h3>
<ul>
  <li>Destroy complete! Resources: X added, 0 changed, Y destroyed</li>
  <li>S3 state file updated with empty state</li>
  <li>DynamoDB lock released</li>
</ul>

<hr>

<h2>🗑️ Terraform Destroy - Azure (Remote Backend)</h2>
<p><strong>⚠️ Note:</strong> Using <strong>Azure Storage backend</strong>. Local state unavailable - must initialize first.</p>

<h3>Step-by-Step Instructions</h3>
<ol>
  <li><strong>Navigate to Azure Terraform directory:</strong>
    <pre><code>cd terraform/azure</code></pre>
  </li>
  <li><strong>Initialize remote backend:</strong>
    <pre><code>terraform init</code></pre>
  </li>
  <li><strong>Preview destruction (RECOMMENDED):</strong>
    <pre><code>terraform plan -destroy</code></pre>
  </li>
  <li><strong>Execute destroy:</strong>
    <pre><code>terraform destroy</code></pre>
  </li>
</ol>

<h3>✅ Expected Output</h3>
<ul>
  <li>Destroy complete! Resources: X added, 0 changed, Y destroyed</li>
  <li>Azure blob storage tfstate file updated</li>
</ul>

<hr>

<h2>🔄 Rebuild After Destroy - Common Issues & Solutions</h2>

<h3>🚨 PROBLEM 1: After Destroy + Code Changes</h3>
<p><strong>Issues when pushing to main after destroy:</strong></p>

<ul>
  <li><strong>AWS:</strong> Deploys fine but <code>AWS_BACKEND_API_URL</code> remains old</li>
  <li><strong>Azure:</strong> 
    <ul>
      <li>CI fails at ACR pull</li>
      <li>backend-app gets stuck at "Creating" state</li>
    </ul>
  </li>
</ul>

<h3>✅ SOLUTION: Step-by-Step Recovery</h3>

<h4>Step 1: Delete ONLY Container App (Keep Environment)</h4>
<ul>
  <li>Azure Portal → Container Apps → Delete <strong>backend-app</strong> ONLY</li>
  <li><strong>DO NOT delete Container Apps Environment</strong></li>
</ul>

<h4>Step 2: Fix ACR Pull Permissions</h4>
<ol>
  <li>Go to <strong>Azure Portal</strong></li>
  <li>Navigate to:
    <ul>
      <li><strong>Container Registry</strong> → <code>devopsassignmentacr</code></li>
      <li><strong>Access control (IAM)</strong></li>
    </ul>
  </li>
  <li>Click <strong>Add</strong> → <strong>Add role assignment</strong></li>
  <li>In <strong>Role</strong> tab:
    <ul>
      <li>Choose <strong>AcrPull</strong></li>
      <li>Click <strong>Next</strong></li>
    </ul>
  </li>
  <li>In <strong>Members</strong> tab:
    <ul>
      <li>Select <strong>User, group, or service principal</strong></li>
      <li>Click <strong>Select members</strong></li>
    </ul>
  </li>
  <li>Search <code>mi-devops</code>, select → <strong>Select</strong></li>
  <li><strong>Review + assign</strong> → <strong>Assign</strong></li>
</ol>

<h4>Step 3: Re-run Failed GitHub Job</h4>
<ul>
  <li>GitHub → Actions → Find failed workflow</li>
  <li>Click <strong>Re-run all jobs</strong></li>
  <li>Wait 5 minutes for IAM propagation</li>
</ul>

<h4>Step 4: Update Backend URLs in Secrets</h4>
<ol>
  <li><strong>First push:</strong> Get new URLs from successful deployment logs</li>
  <li>GitHub → Settings → Secrets → Actions</li>
  <li>Update:
    <ul>
      <li><code>AWS_BACKEND_API_URL</code> ← New ALB DNS</li>
      <li><code>AZURE_BACKEND_API_URL</code> ← New backend-app URL</li>
    </ul>
  </li>
  <li><strong>Second push to main:</strong> Frontend will use correct backend URLs</li>
</ol>

<h3>🎯 RECOVERY CHECKLIST</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Step</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Delete backend-app only</td>
      <td>☐</td>
      <td>Keep Container Apps Environment</td>
    </tr>
    <tr>
      <td>Grant AcrPull to mi-devops</td>
      <td>☐</td>
      <td>Wait 5 mins</td>
    </tr>
    <tr>
      <td>Re-run failed GitHub job</td>
      <td>☐</td>
      <td>Azure deploys successfully</td>
    </tr>
    <tr>
      <td>Copy new backend URLs</td>
      <td>☐</td>
      <td>From deployment logs</td>
    </tr>
    <tr>
      <td>Update GitHub Secrets</td>
      <td>☐</td>
      <td>AWS_BACKEND_API_URL, AZURE_BACKEND_API_URL</td>
    </tr>
    <tr>
      <td>Final push to main</td>
      <td>☐</td>
      <td>Frontend connects correctly</td>
    </tr>
  </tbody>
</table>

<h2>🚨 SAFETY CHECKS</h2>
<ul>
  <li><strong>Before destroy:</strong> <code>terraform plan -destroy</code></li>
  <li><strong>Verify credentials:</strong> <code>aws sts get-caller-identity</code>, <code>az account show</code></li>
  <li><strong>Correct directory:</strong> <code>pwd</code> shows <code>terraform/aws</code> or <code>terraform/azure</code></li>
  <li><strong>After recovery:</strong> Test both frontend/backend endpoints</li>
</ul>

</body>
</html>
