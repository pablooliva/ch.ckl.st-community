# Web Developer Security Checklist
  
<p><img src="https://api.ch.ckl.st/user-images/powerdown-logo.png-1547310386583.png"></p><p>This checklist is based on PowerDown's excellent and thorough <a href="https://www.powerdown.io/blog/posts/stories/web-developer-security-checklist.html" target="_blank">security checklist</a>.</p><p>"Security is a journey and cannot be 'baked-in' to the product just before shipping. [It is required] through your entire development lifecycle to improve the security of your services."</p><p>This checklist is part of a comprehensive series on critical <a href="https://ch.ckl.st/share/5c38a726792475004a001e19" target="_blank">checklists for web development</a>.</p>


## Credentials and Secrets


  
- [ ] Use a key store for secrets
      <p>Store and distribute secrets using a key store designed for the purpose. Don’t hard code secrets in your applications and definitely don't store in GitHub!. For CMS fans, don't store your credentials in a file in the document directory.</p>

- [ ] Use a password manager
      <p>Use a team-based password manager such as <a href="https://1password.com/business/" target="_blank">1Password</a> for all service passwords and credentials. NEVER email passwords or credentials to team members.</p>

- [ ] Use multi-factor authentication
      <p>Use multi-factor authentication for all your logins to service providers.</p>



## Authentication


  
- [ ] Hash passwords
      <p>Ensure all passwords are hashed using appropriate crypto such as <a href="https://en.wikipedia.org/wiki/Bcrypt" target="_blank">bcrypt</a>. Never write your own crypto and correctly initialize crypto with good random data. Consider using an authentication service like <a href="https://auth0.com/" target="_blank">Auth0</a> or <a href="https://aws.amazon.com/cognito/" target="_blank">AWS Cognito</a>.</p>

- [ ] Use best-practices
      <p>Use best-practices and proven components for login, forgot password and other password reset. Don’t invent your own — it is hard to get it right in all scenarios.</p>

- [ ] Simple but adequate password rules
      <p>Implement simple but adequate password rules that encourage users to have long, random passwords.</p>

- [ ] No back-doors
      <p>Never, EVER have any undocumented and unpublicized means of access to the device including back-door accounts (like "field-service").</p>

- [ ] Run with minimal privilege
      <p>Run applications and containers with minimal privilege and never as root (Note: Docker runs apps as root by default).</p>



## Database


  
- [ ] Avoid storing sensitive data
      <p>Don't store sensitive data unless you truly need it. This means email addresses, personally identifying information and other personal information in general. Treat sensitive data like radioactive waste — i.e. there is an real, large and ongoing cost to securing it, and one day it can hurt you.</p>

- [ ] Track storage of sensitive data
      <p>Keep a complete list of all the places you store sensitive information: databases, file systems, Dropbox, GitHub, Vault, Office docs and even the paper folder. This is useful to manage, required by GDPR and essential if hacked. You need to be able to locate all sensitive information.</p>

- [ ] Comply with GDPR requirements
      <p>If subject to GDPR, make sure you really understand the requirements and design it in from the start. For some, it will represent a major change in design and thinking. See <a href="https://blog.varonis.com/privacy-design-cheat-sheet/" target="_blank">Privacy Cheatsheet</a> and <a href="https://www.cmswire.com/customer-experience/an-introduction-to-the-gdpr/" target="_blank">Intro to GDPR</a>.</p>

- [ ] Encrypt identifying data
      <p>Use encryption for data identifying users and sensitive data like access tokens, email addresses or billing details if possible (this will restrict queries to exact match lookups).</p>

- [ ] Enable low cost encryption
      <p>If your database supports low cost encryption at rest (like <a href="https://aws.amazon.com/about-aws/whats-new/2015/12/amazon-aurora-now-supports-encryption-at-rest/" target="_blank">AWS Aurora</a>), then enable that to secure data on disk. Make sure all backups are stored encrypted as well.</p>

- [ ] Use minimal privilege
      <p>Use minimal privilege for the database access user account. Don’t use the database root account and check for unused accounts and accounts with bad passwords.</p>

- [ ] Use SQL prepared statements
      <p>Fully prevent SQL injection by only using SQL prepared statements. For example: if using NPM, don’t use npm-mysql, use npm-mysql2 which supports prepared statements.</p>



## Apps


  
- [ ] Implement client-side validation
      <p>Do client-side input validation for quick user feedback, but never trust it. Always validate and encode user input before displaying.</p>

- [ ] Validate using white lists
      <p>Validate every last bit of user input using white lists on the server. Consider generating validation code from API specifications using a tool like <a href="https://swagger.io" target="_blank">Swagger</a>, it is more reliable than hand-generated code.</p>

- [ ] Avoid injecting user content into responses
      <p>Never directly inject user content into responses. Never use untrusted user input in SQL statements or other server-side logic.</p>

- [ ] Use centralized logging
      <p>Use centralized logging for all apps, servers and services. You should never need SSH to access or retrieve logs.</p>

- [ ] Consider your logs
      <p>Log with sufficient detail to diagnose all operational and security issues and NEVER log sensitive or personal information. Consider creating logs in JSON with <a href="https://www.honeycomb.io/blog/2018/03/observability-a-manifesto/" target="_blank">high cardinality</a> fields rather than flat text lines.</p>

- [ ] Watch error and debug statements
      <p>Don't emit revealing error details or stack traces to users and don't deploy your apps to production with DEBUG enabled.</p>



## APIs


  
- [ ] Always authenticate and authorize
      <p>Ensure that users are fully authenticated and authorized appropriately when using your APIs.</p>

- [ ] Avoid enumerable resources
      <p>Ensure that no resources are enumerable in your public APIs. For IDs, consider using <a href="http://www.ietf.org/rfc/rfc4122.txt" target="_blank">RFC 4122 compliant UUIDs</a> instead of integers. For node, see <a href="https://www.npmjs.com/package/uuid" target="_blank">NPM uuid</a>.</p>

- [ ] Use canary checks
      <p>Use canary checks in APIs to detect illegal or abnormal requests that indicate attacks.</p>



## Denial of Service Protection


  
- [ ] Use rate limiters
      <p>Make sure that DOS attacks on your APIs won’t cripple your site. At a minimum, have rate limiters on your slower API paths like login and token generation routines.</p>

- [ ] Enforce sanity limits
      <p>Enforce sanity limits on the size and structure of user submitted data and requests.</p>

- [ ] Perform chaos tests
      <p>Perform <a href="https://boyter.org/2016/07/chaos-testing-engineering/" target="_blank">Chaos testing</a> to determine how your service behaves under stress.</p>

- [ ] Use a DOS mitigation service
      <p>Use&nbsp;<a href="https://en.wikipedia.org/wiki/Denial-of-service_attack" target="_blank">Distributed Denial of Service</a>&nbsp;(DDOS) mitigation via a global caching proxy service like&nbsp;<a href="https://www.cloudflare.com/" target="_blank">CloudFlare</a>. This can be turned on if you suffer a DDOS attack and otherwise function as your DNS lookup.</p>



## Network and Web Traffic

<p>Most of the web traffic items discussed below can be addressed by using these <a href="https://github.com/h5bp/server-configs" target="_blank">recommended server config files</a>. Additional hardening is possible for <a href="https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html" target="_blank">nginx servers</a>.</p>
  
- [ ] Segment your network
      <p>Segment your network and protect sensitive services. Use firewalls, virtual private networks and cloud Security Groups to restrict and control inbound and outbound traffic to/from appropriate destinations. <a href="https://aws.amazon.com/elasticloadbalancing/features/#Details_for_Elastic_Load_Balancing_Products" target="_blank">AWS</a> and <a href="https://www.cloudflare.com/waf/" target="_blank">CloudFlare</a> both have excellent offerings.</p>

- [ ] Use https for entire site
      <p>Use TLS/https for the entire site, not just login forms and responses. Never use TLS for just the login form.</p><p>Recommendations for creating <a href="https://cipherli.st/" target="_blank">strong ciphers for Apache, nginx and Lighttpd</a>.</p><p>Finally, <a href="https://www.ssllabs.com/ssltest/" target="_blank">test your SSL</a> secured server.</p>

- [ ] Use secure cookies
      <p>Cookies must be httpOnly and secure and be scoped by path and domain.</p>

- [ ] Use CSP
      <p>Use&nbsp;<a href="https://en.wikipedia.org/wiki/Content_Security_Policy" target="_blank">CSP</a>&nbsp;without allowing unsafe-* backdoors: <a href="https://www.cspisawesome.com/" target="_blank">CSPisAwesome</a> can help you configure these rules. Use CSP <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity" target="_blank">Subresource Integrity</a> for CDN content.</p>

- [ ] Use X-Frame-Option and X-XSS-Protection
      <p>Use X-Frame-Option, X-XSS-Protection headers in client responses.</p>

- [ ] Use HTTP Strict Transport Security
      <p>Use HSTS responses to force TLS only access. Redirect all HTTP request to HTTPS on the server as backup.</p>

- [ ] Use CSRF tockens
      <p>Use CSRF tokens in all forms and use the new&nbsp;<a href="https://scotthelme.co.uk/csrf-is-dead/" target="_blank">SameSite Cookie</a> response header which fixes CSRF once and for all on newer browsers.</p>

- [ ] Remove identifying headers 
      <p>Remove other identifying headers that can make a hackers job easier of identifying your stack and software versions.</p>

- [ ] Consider your GET requests
      <p>Don't use GET requests with sensitive data or tokens in the URL as these will be logged on servers and proxies.</p>

- [ ] Test your server
      <ol><li><a href="https://securityheaders.com/" target="_blank">https://securityheaders.com/</a></li><li><a href="https://webhint.io" target="_blank">https://webhint.io</a></li><li><a href="https://observatory.mozilla.org" target="_blank">https://observatory.mozilla.org</a></li></ol>



## Cloud Configuration


  
- [ ] Watch your ports
      <p>Ensure all services have minimum ports open. While security through obscurity is no protection, using non-standard ports will make it a little bit harder for attackers.</p>

- [ ] Make backend databases and services private
      <p>Host backend database and services on private VPCs that are not visible on any public network. Be very careful when configuring AWS security groups and peering VPCs which can inadvertently make services visible to the public.</p>

- [ ] Separate AWS staging account
      <p>Create test and staging resources in a separate AWS account to that used by production resources.</p>

- [ ] Isolate logical services
      <p>Isolate logical services in separate VPCs and peer VPCs to provide inter-service communication.</p>

- [ ] Restrict IP addresses
      <p>Ensure all services only accept data from a minimal set of IP addresses.</p>

- [ ] Restrict outgoing traffic
      <p>Restrict outgoing IP and port traffic to minimize APTs and “botification”.</p>

- [ ] Use roles
      <p>Always use AWS IAM roles and not root credentials.</p>

- [ ] Minimize privileges
      <p>Use minimal access privilege for all ops and developer staff.</p>

- [ ] Rotate passwords and keys
      <p>Regularly rotate passwords and access keys according to a schedule.</p>



## Infrastructure


  
- [ ] Automate upgrades
      <p>Ensure you can do upgrades without downtime. Ensure you can quickly update software in a fully automated manner.</p>

- [ ] Automate infrastructure
      <p>Create all infrastructure using a tool such as <a href="https://www.terraform.io" target="_blank">Terraform</a>, and not via the cloud console. Infrastructure should be defined as “code” and be able to be recreated at the push of a button. Have zero tolerance for any resource created in the cloud by hand — Terraform can then audit your configuration.</p>

- [ ] Avoid SSH
      <p>Don’t SSH into services except for one-off diagnosis. Using SSH regularly, typically means you have not automated an important task.</p><p>Don’t keep port 22 open on any AWS service groups on a permanent basis. If you must use SSH, only use public key authentication and not passwords.</p>

- [ ] Create immutable hosts
      <p>Create <a href="http://chadfowler.com/2013/06/23/immutable-deployments.html" target="_blank">immutable hosts</a> instead of long-lived servers that you patch and upgrade. (See <a href="https://www.powerdown.io/blog/posts/stories/immutable-infrastructure-can-be-dramatically-more-secure.html" target="_blank">Immutable Infrastructure Can Be More Secure</a>).</p>

- [ ] Power off unused servers
      <p>Power off unused services and servers. The most secure server is one that is powered down. Schedule dev servers to be <a href="https://www.powerdown.io" target="_blank">powered down</a> after hours when not required.</p>

- [ ] Use an Intrusion Detection System
      <p>Use an <a href="https://en.wikipedia.org/wiki/Intrusion_detection_system" target="_blank">Intrusion Detection System</a> to minimize <a href="https://en.wikipedia.org/wiki/Advanced_persistent_threat" target="_blank">APTs</a>.</p>



## Hack Yourself


  
- [ ] Do an audit
      <p>Audit your design and implementation.</p>

- [ ] Do pen tests
      <p>Do penetration testing — hack yourself, but also have someone other than you do pen testing as well.</p>

- [ ] Proactively test beyond normal use
      <p>Proactively test your app beyond normal use. Consider the <a href="https://github.com/0xRadi/OWASP-Web-Checklist" target="_blank">OWASP test checklist</a> to guide your test hacking.</p>

