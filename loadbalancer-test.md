<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>🟫 PHASE 7: Load Balancing & Resiliency Validation (Completed ✅)</h1>

<h2>✅ STEP 1: Verify Multiple Instances Behind ALB</h2>
<p><strong>Goal:</strong> Prove that ≥ 2 ECS tasks are running behind the Application Load Balancer.</p>

<h3>🔹 STEP 1A: Verify ECS Service (MOST IMPORTANT)</h3>
<ol>
  <li>Open AWS Console → <strong>ECS</strong> → <strong>Clusters</strong></li>
  <li>Click your cluster: <code>devops-assignment-cluster</code></li>
  <li>Click <strong>Services</strong></li>
  <li>Click your backend service</li>
</ol>

<h4>✅ CHECK Service Overview (do not change yet):</h4>
<ul>
  <li><strong>Desired count:</strong> <code>2</code></li>
  <li><strong>Running count:</strong> <code>2</code></li>
</ul>

<p><strong>If you see:</strong></p>
<pre><code>Desired: 2
Running: 2</code></pre>
<p>👉 <strong>PERFECT</strong></p>

<hr>

<h3>🔹 STEP 1B: Verify ALB Target Group Health</h3>
<ol>
  <li>Go to <strong>EC2</strong> → <strong>Load Balancers</strong></li>
  <li>Click your ALB: <code>devops-alb</code></li>
  <li>Go to <strong>Listeners</strong></li>
  <li>Click <strong>HTTP:80</strong></li>
  <li>Click listener rule → <code>backend-tg</code></li>
  <li>Go to <strong>Targets</strong> tab</li>
</ol>

<h4>✅ What to CHECK:</h4>
<ul>
  <li>You must see <strong>2 targets</strong></li>
  <li>Both targets <strong>Healthy</strong></li>
</ul>

<h4>🧠 INTERVIEW LINE:</h4>
<blockquote>"My ECS service runs multiple tasks, and the Application Load Balancer distributes traffic across healthy targets."</blockquote>

<hr>

<h2>✅ STEP 2: Prove Traffic Distribution (EASY + SAFE)</h2>
<p><strong>Goal:</strong> Show that traffic is going through ALB and being handled by multiple ECS tasks.</p>

<h3>🔹 OPTION A (RECOMMENDED): ALB Target Group RequestCount</h3>
<ol>
  <li>AWS Console → <strong>CloudWatch</strong> → <strong>Metrics</strong></li>
  <li>Choose: <strong>ApplicationELB</strong> → <strong>Per AppELB, per TG Metrics</strong></li>
  <li>Select: <strong>RequestCount</strong></li>
  <li>Filter and select:
    <ul>
      <li><strong>LoadBalancer:</strong> <code>devops-alb</code></li>
      <li><strong>TargetGroup:</strong> <code>backend-tg</code></li>
    </ul>
  </li>
  <li><strong>Time range (top right):</strong> <code>Last 15 minutes</code></li>
</ol>

<h4>✅ What you should see:</h4>
<ul>
  <li><strong>RequestCount > 0</strong></li>
  <li>Graph shows activity (lines or dots)</li>
  <li>TargetGroup name visible</li>
</ul>

<h4>Generate More Traffic:</h4>
<ol>
  <li>Open your <strong>ALB DNS</strong> / frontend URL</li>
  <li>Refresh page <strong>5–6 times</strong></li>
  <li>Go back to <strong>Target Groups</strong> → <code>backend-tg</code> → <strong>Targets</strong></li>
</ol>

<h4>✅ Verify:</h4>
<ul>
  <li>Targets remain <strong>healthy</strong></li>
  <li>ALB is actively routing traffic</li>
</ul>

<h4>🧠 INTERVIEW LINE (IMPORTANT):</h4>
<blockquote>"The Application Load Balancer routes client requests to multiple ECS tasks registered in the target group."</blockquote>

<hr>

<h2>🚨 STEP 3: STOP ONE ECS TASK (RESILIENCY TEST)</h2>
<p><strong>This is the core of Phase 7. ECS will auto-recover safely.</strong></p>

<h3>🔹 STEP 3A: Open ECS Tasks</h3>
<ol>
  <li>AWS Console → <strong>ECS</strong> → <strong>Clusters</strong></li>
  <li>Open: <code>devops-assignment-cluster</code></li>
  <li>Click <strong>Tasks</strong></li>
</ol>

<h4>You should see:</h4>
<ul>
  <li><strong>2 running tasks</strong></li>
</ul>
<p>📸 <em>(Screenshot of both tasks running)</em></p>

<h3>🔹 STEP 3B: STOP ONE TASK (DO THIS NOW)</h3>
<ol>
  <li>Select <strong>ONE task only</strong></li>
  <li>Click <strong>Stop</strong></li>
  <li>Confirm <strong>Stop</strong></li>
</ol>

<h4>⚠️ CRITICAL WARNINGS:</h4>
<ul>
  <li><strong>Do NOT stop the service</strong></li>
  <li><strong>Do NOT change desired count</strong></li>
</ul>

<h4>What ECS will do:</h4>
<ul>
  <li>Mark task as <strong>STOPPED</strong></li>
  <li>ALB marks target <strong>unhealthy</strong></li>
  <li>Service continues serving traffic</li>
</ul>

<h3>🔹 STEP 3C: Observe (VERY IMPORTANT)</h3>

<h4>1️⃣ Check ALB Target Group IMMEDIATELY:</h4>
<ol>
  <li>Go to <strong>Target Groups</strong> → <code>backend-tg</code></li>
  <li>Click <strong>Targets</strong> tab</li>
</ol>

<h4>You should see:</h4>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Status</th>
      <th>Count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Healthy</strong></td>
      <td>1</td>
    </tr>
    <tr>
      <td><strong>Unhealthy / Deregistering</strong></td>
      <td>1</td>
    </tr>
  </tbody>
</table>


<h4>2️⃣ Test Application URL:</h4>
<ol>
  <li>Open your <strong>ALB DNS</strong> / frontend</li>
  <li>Refresh page multiple times</li>
</ol>

<p>✅ <strong>App should still load perfectly</strong></p>
<p>📸 <strong>SCREENSHOT #2</strong> (Browser showing app working)</p>

<h4>3️⃣ Check ECS Service (after ~1–2 min):</h4>
<ul>
  <li>ECS may launch a <strong>new task automatically</strong></li>
  <li><strong>Desired count stays 2</strong></li>
</ul>

<hr>

<h2>🧠 WHAT THIS PROVES (COMPLETE PHASE 7 REQUIREMENTS)</h2>

<table border="1" cellpadding="12" cellspacing="0" style="width:100%">
  <thead>
    <tr style="background-color: #e8f4f8;">
      <th>Requirement</th>
      <th>✅ Evidence</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Multiple container instances</strong></td>
      <td>ECS Service: Desired=2, Running=2</td>
    </tr>
    <tr>
      <td><strong>Load balancer traffic distribution</strong></td>
      <td>ALB Target Group: 2 healthy targets + RequestCount graph</td>
    </tr>
    <tr>
      <td><strong>Fault tolerance</strong></td>
      <td>1 task stopped → App continues working (no downtime)</td>
    </tr>
    <tr>
      <td><strong>Auto-recovery</strong></td>
      <td>ECS auto-launches replacement task</td>
    </tr>
  </tbody>
</table>

<h4>🧠 PERFECT INTERVIEW ANSWER:</h4>
<blockquote>
"Phase 7 validates resiliency by running 2 ECS tasks behind an Application Load Balancer. When one task fails, ALB automatically routes traffic to the healthy target, ensuring zero downtime. ECS auto-recovers by launching a replacement task."
</blockquote>

<hr>

<h2>📸 SCREENSHOTS REQUIRED (Notion Documentation)</h2>
<ol>
  <li><strong>ECS Service:</strong> Desired=2, Running=2</li>
  <li><strong>ALB Target Group:</strong> 2 healthy targets</li>
  <li><strong>CloudWatch RequestCount:</strong> Graph showing activity</li>
  <li><strong>Target Group after failure:</strong> 1 healthy, 1 unhealthy</li>
  <li><strong>Application working:</strong> Browser screenshot during failure</li>
  <li><strong>Bonus:</strong> ECS launching new task</li>
</ol>

<h2>🎯 PHASE 7 STATUS: ✅ COMPLETE</h2>

<p>All load balancing and resiliency requirements satisfied with production-grade evidence.</p>

</body>
</html>
