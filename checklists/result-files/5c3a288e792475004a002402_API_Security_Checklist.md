# API Security Checklist
  
<p><img src="https://api.ch.ckl.st/user-images/shieldfy-logo.png-1547315233637.png"></p><p>Based on Shieldfy's excellent <a href="https://github.com/shieldfy/API-Security-Checklist" target="_blank">secure API design checklist</a>.</p><p>This checklist is part of a comprehensive series on critical <a href="https://ch.ckl.st/share/5c38a726792475004a001e19" target="_blank">checklists for web development</a>.</p>


## Authentication


  
- [ ] Avoid Basic Auth
      <p>Don't use <code>Basic Auth</code>. Use standard authentication (e.g. <a href="https://jwt.io/" target="_blank">JWT</a>, <a href="https://oauth.net/" target="_blank">OAuth</a>).</p>

- [ ] Use the standards
      <p>Don't reinvent the wheel in <code>Authentication</code>, <code>token generation</code>, <code>password storage</code>.</p>

- [ ] Use Max Retry
      <p>Use <code>Max Retry</code> and jail features in Login.</p>

- [ ] Use encryption
      <p>Use encryption on all sensitive data.</p>



## JWT (JSON Web Token)


  
- [ ] Use a random complicated key
      <p>Use a random complicated key (<code>JWT Secret</code>) to make brute forcing the token very hard.</p>

- [ ] Force the algorithm in the backend
      <p>Don't extract the algorithm from the payload. Force the algorithm in the backend (<code>HS256</code> or <code>RS256</code>).</p>

- [ ] Expire tokens as soon as possible
      <p>Make token expiration (<code>TTL</code>, <code>RTTL</code>) as short as possible.</p>

- [ ] Don't store sensitive data in the JWTs
      <p>Don't store sensitive data in the JWT payload, it can be decoded <a href="https://jwt.io/#debugger-io" target="_blank">easily</a>.</p>



## OAuth


  
- [ ] Validate redirect_uri server-side 
      <p>Always validate <code>redirect_uri</code> server-side to allow only whitelisted URLs.</p>

- [ ] Exchange for code and not tokens
      <p>Always try to exchange for code and not tokens (don't allow <code>response_type=token</code>).</p>

- [ ] Use state parameter with a random hash
      <p>Use <code>state</code> parameter with a random hash to prevent CSRF on the OAuth authentication process.</p>

- [ ] Validate scope parameters
      <p>Define the default scope, and validate scope parameters for each application.</p>



## Access


  
- [ ] Throttle requests
      <p>Limit requests (Throttling) to avoid DDoS / brute-force attacks.</p>

- [ ] Use HTTPS
      <p>Use HTTPS on server side to avoid MITM (Man in the Middle Attack).</p>

- [ ] Use HSTS
      <p>Use <code>HSTS</code> header with SSL to avoid SSL Strip attack.</p>



## Input


  
- [ ] Use the proper HTTP method according to the operation
      <p>Use the proper HTTP method according to the operation: <code>GET (read)</code>, <code>POST (create)</code>, <code>PUT/PATCH (replace/update)</code>, and <code>DELETE (to delete a record)</code>, and respond with <code>405 Method Not Allowed</code> if the requested method isn't appropriate for the requested resource.</p>

- [ ] Validate content-type on request Accept header
      <p>Validate <code>content-type</code> on request Accept header (Content Negotiation) to allow only your supported format (e.g. <code>application/xml</code>, <code>application/json</code>, etc.) and respond with <code>406 Not Acceptable</code> response if not matched.</p>

- [ ] Validate content-type of posted data as you accept
      <p>Validate <code>content-type</code> of posted data as you accept (e.g. <code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code>, <code>application/json</code>, etc.).</p>

- [ ] Validate user input
      <p>Validate user input to avoid common vulnerabilities (e.g. <code>XSS</code>, <code>SQL-Injection</code>, <code>Remote Code Execution</code>, etc.).</p>

- [ ] Don't use any sensitive data in the URL
      <p>Don't use any sensitive data (<code>credentials</code>, <code>Passwords</code>, <code>security tokens</code>, or <code>API keys</code>) in the URL, but use standard Authorization header.</p>

- [ ] Use an API Gateway service to enable caching
      <p>Use an API Gateway service to enable caching, Rate Limit policies (e.g. <code>Quota</code>, <code>Spike Arrest</code>, or <code>Concurrent Rate Limit</code>) and deploy APIs resources dynamically.</p>



## Processing


  
- [ ] Check all endpoints are protected
      <p>Check if all the endpoints are protected behind authentication to avoid broken authentication process.</p>

- [ ] Use generic resources
      <p>User own resource ID should be avoided. Use <code>/me/orders</code> instead of <code>/user/654321/orders</code>.</p>

- [ ] Use random IDs
      <p>Don't auto-increment IDs. Use <code>UUID</code> instead.</p>

- [ ] Use a CDN
      <p>Use a CDN for file uploads.</p>

- [ ] Use Workers for background processing
      <p>If you are dealing with huge amount of data, use Workers and Queues to process as much as possible in background and return response fast to avoid HTTP Blocking.</p>

- [ ] Disable DEBUG mode
      <p>Do not forget to turn the DEBUG mode OFF.</p>

- [ ] Disable parsing entity
      <p>If you are parsing XML files, make sure entity parsing is not enabled to avoid <code>XXE</code> (XML external entity attack).</p>

- [ ] Disable entity expansion
      <p>If you are parsing XML files, make sure entity expansion is not enabled to avoid <code>Billion Laughs/XML bomb</code> via exponential entity expansion attack.</p>



## Output


  
- [ ] Set X-Content-Type-Options header
      <p>Send <code>X-Content-Type-Options: nosniff</code> header.</p>

- [ ] Set X-Frame-Options header
      <p>Send <code>X-Frame-Options: deny</code> header.</p>

- [ ] Set Content-Security-Policy header
      <p>Send <code>Content-Security-Policy: default-src 'none'</code> header.</p>

- [ ] Remove fingerprinting headers
      <p>Remove fingerprinting headers - <code>X-Powered-By</code>, <code>Server</code>, <code>X-AspNet-Version</code>, etc.</p>

- [ ] Force content-type for your response
      <p>Force <code>content-type</code> for your response, if you return <code>application/json</code> then your response <code>content-type</code> is <code>application/json</code>.</p>

- [ ] Don't return sensitive data
      <p>Don't return sensitive data like <code>credentials</code>, <code>Passwords</code>, or <code>security tokens</code>.</p>

- [ ] Return the proper status code
      <p>Return the proper status code according to the operation completed. (e.g. <code>200 OK</code>, <code>400 Bad Request</code>, <code>401 Unauthorized</code>, <code>405 Method Not Allowed</code>, etc.).</p>



## CI and CD


  
- [ ] Audit your design
      <p>Audit your design and implementation with unit/integration tests coverage.</p>

- [ ] Don't trust yourself
      <p>Use a code review process and disregard self-approval.</p>

- [ ] Use AV software
      <p>Ensure that all components of your services are statically scanned by AV software before pushing to production, including vendor libraries and other dependencies.</p>

- [ ] Have a rollback solution
      <p>Design a rollback solution for deployments.</p>

