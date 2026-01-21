<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>📊 Azure Monitor Dashboard & Alerts Setup Guide</h1>

<h2>🟦 STEP 1: Open Backend Container App Metrics</h2>

<h3>Navigation</h3>
<ol>
  <li>Azure Portal → <strong>Container Apps</strong></li>
  <li>Select <strong>backend-app</strong></li>
  <li>Left sidebar → <strong>Metrics</strong></li>
</ol>

<hr>

<h2>🟦 STEP 2: Add Metrics ONE at a Time</h2>

<h3>🔹 Metric 1 – CPU Usage</h3>
<ol>
  <li>Click <strong>Metric</strong> dropdown</li>
  <li>Select: <strong>CPU Usage</strong></li>
  <li><strong>Aggregation:</strong> Average</li>
  <li>Wait for graph to appear</li>
</ol>

<h4>📌 PIN IT (MOST IMPORTANT)</h4>
<ol>
  <li>Top-right of metric chart → Click <strong>📌 Pin to dashboard</strong></li>
  <li>Popup appears: <strong>"Pin to dashboard"</strong></li>
  <li>Choose: <strong>Create new dashboard</strong></li>
  <li><strong>Dashboard name:</strong>
    <pre><code>devops-assignment-dashboard</code></pre>
  </li>
  <li><strong>Type:</strong> Private</li>
  <li>Click <strong>Pin</strong></li>
</ol>

<p>✅ Metric is now SAVED permanently</p>

<hr>

<h3>🔹 Metric 2 – Memory Usage</h3>
<ol>
  <li>Click <strong>Add metric</strong></li>
  <li>Select: <strong>Memory Usage</strong></li>
  <li><strong>Aggregation:</strong> Average</li>
  <li>Top-right → <strong>📌 Pin to dashboard</strong></li>
  <li>Select: <strong>devops-assignment-dashboard</strong> (existing)</li>
  <li>Click <strong>Pin</strong></li>
</ol>

<hr>

<h3>🔹 Metric 3 – Requests</h3>
<ol>
  <li>Click <strong>Add metric</strong></li>
  <li>Select: <strong>Requests</strong></li>
  <li><strong>Aggregation:</strong> Total</li>
  <li>Top-right → <strong>📌 Pin to dashboard</strong></li>
  <li>Select: <strong>devops-assignment-dashboard</strong></li>
  <li>Click <strong>Pin</strong></li>
</ol>

<hr>

<h3>🔹 Metric 4 – Response Time</h3>
<ol>
  <li>Click <strong>Add metric</strong></li>
  <li>Select: <strong>Response Time</strong></li>
  <li><strong>Aggregation:</strong> Average</li>
  <li>Top-right → <strong>📌 Pin to dashboard</strong></li>
  <li>Select: <strong>devops-assignment-dashboard</strong></li>
  <li>Click <strong>Pin</strong></li>
</ol>

<hr>

<h2>🟦 STEP 3: Verify Dashboard</h2>

<h3>Navigation</h3>
<ol>
  <li>Azure Portal → <strong>Dashboard</strong></li>
  <li>Select: <strong>devops-assignment-dashboard</strong></li>
  <li>You should see all 4 widgets</li>
</ol>

<hr>

<h2>🚨 STEP 4: Create Alert Rule</h2>

<h3>Navigation</h3>
<ol>
  <li>Azure Portal → <strong>Monitor</strong></li>
  <li>Left sidebar → <strong>Alerts</strong></li>
  <li>Click <strong>Create</strong> → <strong>Alert rule</strong></li>
  <li>Select scope: <strong>backend-app</strong></li>
</ol>

<hr>

<h2>🟦 STEP 5: Configure Alert Condition</h2>

<h3>Condition Tab</h3>
<ol>
  <li>Click <strong>Add condition</strong></li>
  <li><strong>Signal name:</strong> CPU Usage</li>
  <li>Click on <strong>CPU Usage</strong></li>
</ol>

<h3>Alert Logic Section</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Aggregation type</td>
      <td>Average</td>
    </tr>
    <tr>
      <td>Operator</td>
      <td>Greater than</td>
    </tr>
    <tr>
      <td>Threshold value</td>
      <td>1.0</td>
    </tr>
  </tbody>
</table>

<h3>When to Evaluate Section</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Check every</td>
      <td>1 minute</td>
    </tr>
    <tr>
      <td>Lookback period</td>
      <td>5 minutes</td>
    </tr>
  </tbody>
</table>

<p>Click <strong>Next: Actions</strong></p>

<hr>

<h2>🟦 STEP 6: Create Action Group</h2>

<h3>Actions Tab</h3>
<ol>
  <li>Click <strong>Create action group</strong></li>
</ol>

<h3>Basics Section</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Field</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Subscription</td>
      <td>Your subscription</td>
    </tr>
    <tr>
      <td>Resource group</td>
      <td>devops-assignment-rg</td>
    </tr>
    <tr>
      <td>Action group name</td>
      <td>azure-cpu-alert</td>
    </tr>
    <tr>
      <td>Display name</td>
      <td>azure-alert</td>
    </tr>
  </tbody>
</table>

<p>Click <strong>Next: Notifications</strong></p>

<hr>

<h2>🟦 STEP 7: Configure Notification</h2>

<h3>Notifications Tab</h3>
<ol>
  <li><strong>Notification type:</strong> Email/SMS message/Push/Voice</li>
  <li><strong>Name:</strong> <code>Sriram G</code> (or any name)</li>
  <li>Click on the notification type → Popup opens on right side</li>
</ol>

<h3>Email/SMS Message/Push/Voice Popup</h3>
<ol>
  <li><strong>✅ Email</strong> (check this box)</li>
  <li><strong>Email:</strong>
    <pre><code>srisuj0814@gmail.com</code></pre>
    <p><em>(Replace with your email)</em></p>
  </li>
  <li>Leave SMS, Push, Voice unchecked</li>
  <li>Click <strong>OK</strong></li>
</ol>

<p>Click <strong>Next: Actions</strong></p>

<hr>

<h2>🟦 STEP 8: Skip Actions Tab</h2>

<h3>Actions Tab</h3>
<p><strong>Leave empty</strong> (no actions needed)</p>

<p>Click <strong>Next: Tags</strong></p>

<hr>

<h2>🟦 STEP 9: Review and Create Action Group</h2>

<h3>Tags Tab</h3>
<p><strong>Leave empty</strong> (optional)</p>

<p>Click <strong>Review + create</strong></p>

<p>Click <strong>Create</strong></p>

<p>✅ Action group created: <strong>azure-cpu-alert</strong></p>

<hr>

<h2>🟦 STEP 10: Select Action Group in Alert Rule</h2>

<h3>Back to Alert Rule - Actions Tab</h3>
<ol>
  <li>You should now see <strong>azure-cpu-alert</strong> in the list</li>
  <li>Select: <strong>azure-cpu-alert</strong></li>
</ol>

<p>Click <strong>Next: Details</strong></p>

<hr>

<h2>🟦 STEP 11: Name the Alert Rule</h2>

<h3>Details Tab</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Field</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alert rule name</td>
      <td>azure-backend-cpu-high</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>Trigger alert when backend CPU exceeds threshold for 5 minutes</td>
    </tr>
    <tr>
      <td>Severity</td>
      <td>2 - Warning</td>
    </tr>
    <tr>
      <td>Enable upon creation</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

<p>Click <strong>Review + create</strong></p>

<p>Click <strong>Create</strong></p>

<hr>

<h2>✅ FINAL VERIFICATION</h2>

<h3>Check Alert Rule</h3>
<ol>
  <li>Azure Portal → <strong>Monitor</strong> → <strong>Alerts</strong></li>
  <li>You should see:
    <ul>
      <li><strong>Name:</strong> azure-backend-cpu-high</li>
      <li><strong>State:</strong> Enabled</li>
      <li><strong>Severity:</strong> Warning</li>
    </ul>
  </li>
</ol>

<h3>Check Email Subscription</h3>
<ol>
  <li>Check your email inbox</li>
  <li>Look for: <strong>"Action Group Created"</strong> or <strong>"Subscription Confirmation"</strong></li>
  <li>If confirmation required, click the link</li>
</ol>

<hr>

<h2>🧪 OPTIONAL: Test Alert</h2>

<h3>Quick Test (Low Threshold Method)</h3>
<ol>
  <li>Go back to alert rule: <strong>azure-backend-cpu-high</strong></li>
  <li>Edit → Condition → Set threshold to <strong>1%</strong> temporarily</li>
  <li>Save changes</li>
  <li>Generate traffic:
    <ul>
      <li>Refresh frontend multiple times</li>
      <li>Or use: \
      <code>for i in {1..200}; do
              curl http://&lt;azure-backend-url&gt;/api/message &
            done</code></li>
    </ul>
  </li>
  <li>Wait 5-10 minutes</li>
  <li>Check email for alert notification 📧</li>
  <li><strong>Reset threshold back to 50% or 70%</strong></li>
</ol>

<hr>

<h2>📊 Configuration Summary</h2>

<h3>Dashboard Metrics</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Metric</th>
      <th>Aggregation</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CPU Usage</td>
      <td>Average</td>
      <td>Monitor backend CPU consumption</td>
    </tr>
    <tr>
      <td>Memory Usage</td>
      <td>Average</td>
      <td>Monitor backend memory consumption</td>
    </tr>
    <tr>
      <td>Requests</td>
      <td>Total</td>
      <td>Track incoming request count</td>
    </tr>
    <tr>
      <td>Response Time</td>
      <td>Average</td>
      <td>Monitor backend latency</td>
    </tr>
  </tbody>
</table>

<h3>Alert Configuration</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alert name</td>
      <td>azure-backend-cpu-high</td>
    </tr>
    <tr>
      <td>Metric</td>
      <td>CPU Usage (backend-app)</td>
    </tr>
    <tr>
      <td>Threshold</td>
      <td>> 1.0 (test) / 50-70 (production)</td>
    </tr>
    <tr>
      <td>Check every</td>
      <td>1 minute</td>
    </tr>
    <tr>
      <td>Lookback period</td>
      <td>5 minutes</td>
    </tr>
    <tr>
      <td>Action group</td>
      <td>azure-cpu-alert</td>
    </tr>
    <tr>
      <td>Notification</td>
      <td>Email (xxxxxxx@gmail.com)</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>📝 What to Document in Notion</h2>

<h3>Screenshots to Include</h3>
<ol>
  <li>Azure dashboard with all 4 metrics</li>
  <li>Alert rule configuration showing condition</li>
  <li>Action group with email notification</li>
  <li>Email notification received (if tested)</li>
</ol>

<h3>Evidence Table</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Requirement</th>
      <th>Status</th>
      <th>Evidence</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Azure monitoring dashboard</td>
      <td>✅ Implemented</td>
      <td>4 metrics pinned to dashboard</td>
    </tr>
    <tr>
      <td>CPU alert configuration</td>
      <td>✅ Configured</td>
      <td>Alert rule: azure-backend-cpu-high</td>
    </tr>
    <tr>
      <td>Email notifications</td>
      <td>✅ Configured</td>
      <td>Action group: azure-cpu-alert</td>
    </tr>
    <tr>
      <td>Lookback period: 5 minutes</td>
      <td>✅ Verified</td>
      <td>Condition configuration screenshot</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>🚨 Important Notes</h2>

<ul>
  <li><strong>Threshold value:</strong> Set to 1.0 for testing, increase to 50-70 for production</li>
  <li><strong>Email confirmation:</strong> Must confirm subscription or alerts won't arrive</li>
  <li><strong>Lookback period:</strong> 5 minutes means alert evaluates last 5 minutes of data</li>
  <li><strong>Check every:</strong> 1 minute means alert runs evaluation every minute</li>
  <li><strong>Action group reuse:</strong> Same action group can be used for multiple alert rules</li>
</ul>

</body>
</html>
