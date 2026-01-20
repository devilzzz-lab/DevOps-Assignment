<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AWS CloudWatch Dashboard & Alerts Setup</title>
</head>
<body>

<h1>📊 AWS CloudWatch Dashboard & Alerts Setup Guide</h1>

<h2>🟦 STEP 1: Create CloudWatch Dashboard</h2>

<h3>Navigation</h3>
<ol>
  <li>AWS Console → <strong>CloudWatch</strong></li>
  <li>Left sidebar → <strong>Dashboards</strong></li>
  <li>Click <strong>Create dashboard</strong></li>
</ol>

<h3>Dashboard Name</h3>
<pre><code>devops-assignment-dashboard</code></pre>

<p>Click <strong>Create dashboard</strong></p>

<hr>

<h2>🟦 STEP 2: Add Monitoring Widgets</h2>

<h3>🔹 Widget 1 – ECS CPU Utilization</h3>
<ol>
  <li>Click <strong>Add widget</strong></li>
  <li><strong>Widget type:</strong> Line</li>
  <li>Click <strong>Next</strong></li>
  <li><strong>Metrics:</strong>
    <ul>
      <li>Browse → <strong>ECS</strong></li>
      <li>Filter by: <strong>ClusterName, ServiceName</strong></li>
    </ul>
  </li>
  <li><strong>Select these metrics:</strong>
    <ul>
      <li>✅ <code>frontend</code> → <strong>CPUUtilization</strong></li>
      <li>✅ <code>backend</code> → <strong>CPUUtilization</strong></li>
    </ul>
  </li>
  <li><strong>Widget title:</strong> <code>ECS CPU Utilization</code></li>
  <li>Click <strong>Create widget</strong></li>
</ol>

<hr>

<h3>🔹 Widget 2 – ECS Memory Utilization</h3>
<ol>
  <li>Click <strong>Add widget</strong></li>
  <li><strong>Widget type:</strong> Line</li>
  <li>Click <strong>Next</strong></li>
  <li><strong>Metrics:</strong>
    <ul>
      <li>Browse → <strong>ECS</strong></li>
      <li>Filter by: <strong>ClusterName, ServiceName</strong></li>
    </ul>
  </li>
  <li><strong>Select these metrics:</strong>
    <ul>
      <li>✅ <code>frontend</code> → <strong>MemoryUtilization</strong></li>
      <li>✅ <code>backend</code> → <strong>MemoryUtilization</strong></li>
    </ul>
  </li>
  <li><strong>Widget title:</strong> <code>ECS Memory Utilization</code></li>
  <li>Click <strong>Create widget</strong></li>
</ol>

<hr>

<h3>🔹 Widget 3 – ALB Request Count</h3>
<ol>
  <li>Click <strong>Add widget</strong></li>
  <li><strong>Widget type:</strong> Line</li>
  <li>Click <strong>Next</strong></li>
  <li><strong>Metrics:</strong>
    <ul>
      <li>Browse → <strong>Application ELB</strong></li>
      <li>Select → <strong>Per AppELB Metrics</strong></li>
    </ul>
  </li>
  <li><strong>Search for your ALB:</strong>
    <pre><code>app/devops-alb/0ac8b36fe79d6bf5</code></pre>
    <p><em>(Your ALB ID will be different - check EC2 → Load Balancers for exact name)</em></p>
  </li>
  <li><strong>Select metric:</strong>
    <ul>
      <li>✅ <strong>RequestCount</strong></li>
    </ul>
  </li>
  <li><strong>Widget title:</strong> <code>ALB Request Count</code></li>
  <li>Click <strong>Create widget</strong></li>
</ol>

<hr>

<h3>🔹 Widget 4 – ALB Target Response Time</h3>
<ol>
  <li>Click <strong>Add widget</strong></li>
  <li><strong>Widget type:</strong> Line</li>
  <li>Click <strong>Next</strong></li>
  <li><strong>Metrics:</strong>
    <ul>
      <li>Browse → <strong>Application ELB</strong></li>
      <li>Select → <strong>Per AppELB Metrics</strong></li>
    </ul>
  </li>
  <li><strong>Search for your ALB:</strong>
    <pre><code>app/devops-alb/0ac8b36fe79d6bf5</code></pre>
  </li>
  <li><strong>Select metric:</strong>
    <ul>
      <li>✅ <strong>TargetResponseTime</strong> (backend)</li>
    </ul>
  </li>
  <li><strong>Widget title:</strong> <code>Backend Response Time</code></li>
  <li>Click <strong>Create widget</strong></li>
</ol>

<hr>

<h3>🔹 Widget 5 – ALB 4XX Errors</h3>
<ol>
  <li>Click <strong>Add widget</strong></li>
  <li><strong>Widget type:</strong> Line</li>
  <li>Click <strong>Next</strong></li>
  <li><strong>Metrics:</strong>
    <ul>
      <li>Browse → <strong>Application ELB</strong></li>
      <li>Select → <strong>Per AppELB Metrics</strong></li>
    </ul>
  </li>
  <li><strong>Search for your ALB:</strong>
    <pre><code>app/devops-alb/0ac8b36fe79d6bf5</code></pre>
  </li>
  <li><strong>Select metric:</strong>
    <ul>
      <li>✅ <strong>HTTPCode_Target_4XX_Count</strong> (backend)</li>
    </ul>
  </li>
  <li><strong>Widget title:</strong> <code>Backend 4XX Errors</code></li>
  <li>Click <strong>Create widget</strong></li>
</ol>

<hr>

<h3>Save Dashboard</h3>
<ol>
  <li>After adding all widgets, click <strong>Save dashboard</strong></li>
  <li>Arrange widgets by dragging and resizing as needed</li>
  <li>Set auto-refresh interval (optional): 1 minute recommended</li>
</ol>

<hr>

<h2>🚨 STEP 3: Create CloudWatch Alarm for CPU</h2>

<h3>✅ CPU Alert Configuration (VERIFIED)</h3>

<h4>Navigate to Alarms</h4>
<ol>
  <li>CloudWatch → <strong>Alarms</strong> → <strong>All alarms</strong></li>
  <li>Click <strong>Create alarm</strong></li>
  <li>Click <strong>Select metric</strong></li>
</ol>

<h4>Select Metric</h4>
<ol>
  <li>Browse → <strong>ECS</strong></li>
  <li>Filter by: <strong>ClusterName, ServiceName</strong></li>
  <li><strong>Select:</strong>
    <ul>
      <li>ServiceName: <code>backend</code> ✅</li>
      <li>ClusterName: <code>devops-assignment-cluster</code> ✅</li>
      <li>Metric: <strong>CPUUtilization</strong> ✅</li>
    </ul>
  </li>
  <li>Click <strong>Select metric</strong></li>
</ol>

<h4>Specify Metric and Conditions</h4>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Setting</th>
      <th>Value</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Statistic</td>
      <td>Average</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Period</td>
      <td>1 minute</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Threshold type</td>
      <td>Static</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Whenever CPUUtilization is...</td>
      <td>Greater than</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Threshold value</td>
      <td>70</td>
      <td>✅</td>
    </tr>
  </tbody>
</table>

<h4>Configure Evaluation Period</h4>
<ul>
  <li><strong>Datapoints to alarm:</strong> <code>5</code> out of <code>5</code> ✅</li>
  <li><strong>Meaning:</strong> CPU > 70% for 5 consecutive minutes</li>
</ul>

<h4>Missing Data Treatment</h4>
<ul>
  <li><strong>Treat missing data as:</strong> <code>missing</code> ✅</li>
  <li><strong>Why:</strong> Prevents false alarms during ECS task restarts</li>
</ul>

<p>Click <strong>Next</strong></p>

<hr>

<h2>🟦 STEP 4: Configure Notification (SNS)</h2>

<h3>Alarm State Trigger</h3>
<ul>
  <li><strong>Select alarm state trigger:</strong> ✅ <strong>In alarm</strong></li>
</ul>

<h3>Create SNS Topic</h3>
<ol>
  <li><strong>SNS topic:</strong> Create new topic</li>
  <li><strong>Topic name:</strong>
    <pre><code>devops-cpu-alert</code></pre>
  </li>
  <li><strong>Email endpoint:</strong>
    <pre><code>your-email@gmail.com</code></pre>
    <p><em>(Replace with your actual email)</em></p>
  </li>
  <li>Click <strong>Create topic</strong></li>
</ol>

<h3>📧 CRITICAL: Confirm Email Subscription</h3>
<ol>
  <li>Check your email inbox</li>
  <li>Look for: <strong>"AWS Notification - Subscription Confirmation"</strong></li>
  <li>Click <strong>Confirm subscription</strong></li>
  <li><strong>⚠️ Without this, you won't receive alerts!</strong></li>
</ol>

<p>Click <strong>Next</strong></p>

<hr>

<h2>🟦 STEP 5: Name the Alarm</h2>

<h3>Alarm Details</h3>
<ul>
  <li><strong>Alarm name:</strong>
    <pre><code>ecs-backend-cpu-high</code></pre>
  </li>
  <li><strong>Alarm description:</strong>
    <pre><code>Trigger alert when backend ECS CPU exceeds 70% for 5 minutes</code></pre>
  </li>
</ul>

<p>Click <strong>Create alarm</strong></p>

<hr>

<h2>✅ FINAL VERIFICATION</h2>

<h3>Check Alarm Status</h3>
<ol>
  <li>CloudWatch → <strong>Alarms</strong></li>
  <li>You should see:
    <ul>
      <li><strong>Name:</strong> <code>ecs-backend-cpu-high</code></li>
      <li><strong>State:</strong> <code>OK</code> (green)</li>
    </ul>
  </li>
</ol>

<hr>

<h2>🧪 OPTIONAL: Test Alert (For Documentation Evidence)</h2>

<h3>Generate CPU Load</h3>
<p>Run this command to trigger the alarm:</p>
<pre><code>for i in {1..200}; do
  curl http://&lt;backend-alb-dns&gt;/api/message
done</code></pre>

<h3>Wait and Monitor</h3>
<ol>
  <li>Wait ~5 minutes for CPU to exceed 70%</li>
  <li>Alarm state changes: <code>OK</code> → <code>ALARM</code></li>
  <li>Check email for alert notification</li>
  <li><strong>Take screenshots for Notion documentation</strong></li>
</ol>

<hr>

<h2>📝 What to Write in Notion</h2>

<h3>Requirement Evidence</h3>
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
      <td>CPU > 70% for 5 minutes</td>
      <td>✅ Implemented</td>
      <td>CloudWatch alarm configuration</td>
    </tr>
    <tr>
      <td>AWS alerting system</td>
      <td>✅ Configured</td>
      <td>SNS topic + email subscription</td>
    </tr>
    <tr>
      <td>Production-safe config</td>
      <td>✅ Verified</td>
      <td>Missing data = missing (no false alarms)</td>
    </tr>
  </tbody>
</table>

<h3>Screenshots to Include</h3>
<ol>
  <li>CloudWatch dashboard with all 5 widgets</li>
  <li>Alarm configuration showing 70% threshold</li>
  <li>Alarm in ALARM state (if tested)</li>
  <li>Email notification received</li>
</ol>

<hr>

<h2>📋 Configuration Summary</h2>

<h3>Dashboard Widgets</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Widget</th>
      <th>Metric</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Widget 1</td>
      <td>ECS CPUUtilization</td>
      <td>Monitor frontend/backend CPU</td>
    </tr>
    <tr>
      <td>Widget 2</td>
      <td>ECS MemoryUtilization</td>
      <td>Monitor frontend/backend memory</td>
    </tr>
    <tr>
      <td>Widget 3</td>
      <td>ALB RequestCount</td>
      <td>Track incoming requests</td>
    </tr>
    <tr>
      <td>Widget 4</td>
      <td>ALB TargetResponseTime</td>
      <td>Monitor backend latency</td>
    </tr>
    <tr>
      <td>Widget 5</td>
      <td>ALB HTTPCode_Target_4XX_Count</td>
      <td>Track client errors</td>
    </tr>
  </tbody>
</table>

<h3>Alarm Configuration</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Name</td>
      <td>ecs-backend-cpu-high</td>
    </tr>
    <tr>
      <td>Metric</td>
      <td>ECS CPUUtilization (backend)</td>
    </tr>
    <tr>
      <td>Threshold</td>
      <td>> 70%</td>
    </tr>
    <tr>
      <td>Duration</td>
      <td>5 consecutive minutes</td>
    </tr>
    <tr>
      <td>Notification</td>
      <td>SNS (devops-cpu-alert)</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>🔍 How to Find Your ALB Name</h2>
<ol>
  <li>AWS Console → <strong>EC2</strong></li>
  <li>Left sidebar → <strong>Load Balancers</strong></li>
  <li>Find <code>devops-alb</code></li>
  <li>Copy the full ARN (format: <code>app/devops-alb/&lt;random-id&gt;</code>)</li>
</ol>

<p><strong>Example:</strong> <code>app/devops-alb/0ac8b36fe79d6bf5</code></p>

</body>
</html>
