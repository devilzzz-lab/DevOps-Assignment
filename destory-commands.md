<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1> If you need to Destroy the Infrastructure <h1>

<h2>🗑️ Terraform Destroy - AWS (Remote Backend)</h2>
<p><strong>⚠️ Note:</strong> Since we're using <strong>remote S3 backend + DynamoDB locking</strong> via GitHub Actions, local state is unavailable. Must initialize remote backend first.</p>

<h3>Step-by-Step Instructions</h3>

<ol>
  <li><strong>Navigate to AWS Terraform directory:</strong>
    <pre><code>cd terraform/aws</code></pre>
  </li>
  <li><strong>Initialize remote backend:</strong>
    <pre><code>terraform init</code></pre>
    <p>This pulls state from S3 and establishes DynamoDB lock.</p>
  </li>
  <li><strong>Preview destruction (RECOMMENDED):</strong>
    <pre><code>terraform plan -destroy</code></pre>
  </li>
  <li><strong>Execute destroy:</strong>
    <pre><code>terraform destroy</code></pre>
    <p>Type <code>yes</code> to confirm when prompted.</p>
  </li>
</ol>

<h3>✅ Expected Output</h3>
<ul>
  <li>Destroy complete! Resources: X added, 0 changed, Y destroyed.</li>
  <li>S3 state file updated with empty state</li>
  <li>DynamoDB lock released</li>
</ul>

<hr>

<h2>🗑️ Terraform Destroy - Azure (Remote Backend)</h2>
<p><strong>⚠️ Note:</strong> Using <strong>Azure Storage backend</strong> configured in GitHub Actions. Local state unavailable - must initialize first.</p>

<h3>Step-by-Step Instructions</h3>

<ol>
  <li><strong>Navigate to Azure Terraform directory:</strong>
    <pre><code>cd terraform/azure</code></pre>
  </li>
  <li><strong>Initialize remote backend:</strong>
    <pre><code>terraform init</code></pre>
    <p>This connects to Azure Storage Account (tfstate container).</p>
  </li>
  <li><strong>Preview destruction (RECOMMENDED):</strong>
    <pre><code>terraform plan -destroy</code></pre>
  </li>
  <li><strong>Execute destroy:</strong>
    <pre><code>terraform destroy</code></pre>
    <p>Type <code>yes</code> to confirm when prompted.</p>
  </li>
</ol>

<h3>✅ Expected Output</h3>
<ul>
  <li>Destroy complete! Resources: X added, 0 changed, Y destroyed.</li>
  <li>Azure blob storage tfstate file updated</li>
</ul>

<h2>🚨 IMPORTANT SAFETY CHECKS</h2>

<h3>Before Destroy:</h3>
<ul>
  <li><strong>Verify correct directory:</strong> <code>pwd</code> should show <code>terraform/aws</code> or <code>terraform/azure</code></li>
  <li><strong>Check AWS credentials:</strong> <code>aws sts get-caller-identity</code></li>
  <li><strong>Check Azure credentials:</strong> <code>az account show</code></li>
  <li><strong>Always run <code>terraform plan -destroy</code> first!</strong></li>
</ul>

<h3>After Destroy:</h3>
<ul>
  <li><strong>AWS:</strong> Verify S3 bucket state file is empty</li>
  <li><strong>Azure:</strong> Verify blob container tfstate file is empty</li>
  <li><strong>Check cloud consoles:</strong> No lingering resources</li>
</ul>

<h2>⚠️ TROUBLESHOOTING</h2>

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Error</th>
      <th>Solution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Error: Could not load backend</code></td>
      <td>Run <code>terraform init</code> again</td>
    </tr>
    <tr>
      <td><code>Error acquiring the state lock</code></td>
      <td>AWS: Check DynamoDB <code>terraform-locks</code><br>Azure: Check blob lease</td>
    </tr>
    <tr>
      <td><code>No state file found</code></td>
      <td>Infra never deployed or already destroyed</td>
    </tr>
  </tbody>
</table>

</body>
</html>
