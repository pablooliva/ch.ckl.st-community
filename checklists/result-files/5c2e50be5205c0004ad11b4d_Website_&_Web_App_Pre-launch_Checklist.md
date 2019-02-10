# Website & Web App Pre-launch Checklist
  
<p><img src="https://api.ch.ckl.st/user-images/syntax-fm-logo-resized.png-1546622244892.png"></p><p>Based on Syntax.fm's <a href="https://syntax.fm/show/088/pre-launch-checklist" target="_blank">episode</a> on the topic. Thank you to <a href="https://twitter.com/wesbos" target="_blank">@wesbos</a> and <a href="https://twitter.com/stolinski" target="_blank">@stolinski</a> for producing a quality podcast about web development in general, and for this helpful episode which helped prepare the launch of this checklist application.</p><p>This checklist is part of a comprehensive series on critical <a href="https://ch.ckl.st/share/5c38a726792475004a001e19" target="_blank">checklists for web development</a>.</p>


## Automated Tools

<p>Use auditing tools and let the robots do the work for you.</p>
  
- [ ] Lighthouse
      <p><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank">Lighthouse</a>, in Chrome DevTools, is an automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, and more.</p>

- [ ] Axe
      <p>The <a href="https://www.deque.com/axe/" target="_blank">Axe</a> browser extensions offer an open source rules library for accessibility testing.</p>

- [ ] SEO Tools
      <p>There are a ton of free and paid SEO tools. Some of these include:</p><ol><li><a href="https://www.woorank.com/" target="_blank">WooRank</a></li><li><a href="https://varvy.com/" target="_blank">Varvy</a></li><li><a href="https://www.semrush.com/seo/" target="_blank">SEMrush</a></li><li><a href="https://www.found.co.uk/seo-tool/" target="_blank">Found</a></li><li><a href="https://www.screamingfrog.co.uk/seo-spider/" target="_blank">Screaming Frog SEO Spider</a></li></ol>



## Performance

<p>Remember that not every user is using a reliable high-speed broadband connection. Test your product in speed-challenged environments and then make adjustments where needed.</p>
  
- [ ] Use Chrome DevTools
      <p>Test performance and download speed by enabling the <a href="https://developers.google.com/web/tools/chrome-devtools/network-performance/network-conditions" target="_blank">Throttling</a> feature in the Chrome DevTools Network tab.</p>

- [ ] Compress images
      <p>Online services that will help you compress your images:</p><ol><li><a href="https://cloudinary.com/" target="_blank">Cloudinary</a></li><li><a href="https://www.imgix.com/" target="_blank">imgix</a></li><li><a href="https://imageoptim.com/" target="_blank">ImageOptim</a></li><li><a href="https://squoosh.app/" target="_blank">Squoosh</a></li></ol><p>Software to use in your projects that will compress your images:</p><ol><li><a href="https://github.com/imagemin/imagemin" target="_blank">imagemin</a></li><li><a href="https://github.com/tcoopman/image-webpack-loader" target="_blank">Webpack image loader</a></li><li><a href="https://github.com/svg/svgo" target="_blank">SVGO</a></li></ol>

- [ ] Minify
      <p><a href="https://en.wikipedia.org/wiki/Minification_(programming)" target="_blank">Minification</a> is the process of removing all unnecessary characters from source code without changing its functionality.</p><p>Do it online:</p><ol><li><a href="https://www.uglifyjs.net" target="_blank">JS Uglify and Prettify</a></li><li><a href="https://skalman.github.io/UglifyJS-online/" target="_blank">UglifyJS3</a></li></ol><p>Include it as a package in your project:</p><ol><li><a href="https://github.com/mishoo/UglifyJS2" target="_blank">UglifyJS</a></li><li><a href="https://webpack.js.org/plugins/uglifyjs-webpack-plugin/" target="_blank">UglifJS Webpack plugin</a></li></ol>

- [ ] Code splitting
      <p><a href="https://webpack.js.org/guides/code-splitting/" target="_blank">Code splitting</a> allows you to split your code into various bundles which can then be loaded on demand or in parallel.</p><p>Enabling this will be highly dependent on the particulars of your project.</p>

- [ ] Use Google PageSpeed Insights
      <p><a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank">PageSpeed Insights</a> analyzes the content of a web page, then generates suggestions to make that page faster.</p>

- [ ] Avoid Service Workers initially
      <p>Service Workers can cache your page and assets. Avoid doing this on launch when you might urgently need to make quick and successive final updates.</p><p>Service Workers are discussed on <a href="https://syntax.fm/show/050/progressive-web-apps" target="_blank">Syntax episode 50 on PWAs</a>.</p>



## Browser Compatibility

<p>Perform tests, manually or automated, to make sure that you avoid browser compatibility issues.</p>
  
- [ ] Which browsers do you support?
      <p>Test on actual browsers that you intend to support. If you have an existing property online, check your analytics to see which browsers your users are actually using to access your site.</p>

- [ ] Get others to test for you
      <p>Ask friends and family to test on their own devices. This will help you get a mix of hardware to test on, and it will also get actual "common users" to test your site or application.</p>

- [ ] Use a testing service
      <p>Use an online testing service to test across various browsers, platforms, and hardware:</p><ol><li><a href="https://www.browserstack.com/" target="_blank">BrowserStack</a></li><li><a href="http://browsershots.org/" target="_blank">Browsershots</a></li><li><a href="https://www.browserling.com/" target="_blank">Browserling</a></li></ol>

- [ ] Bust your cache
      <p>After making an update, make sure that you <a href="https://css-tricks.com/strategies-for-cache-busting-css/" target="_blank">bust your browser cache</a> so that you are testing on the latest version of pages and assets.</p>



## Sales and Credit Cards

<p>If your site or app performs sales online, these considerations are of the utmost importance since successful sales will be key to determining the success of your overall project.</p>
  
- [ ] Scoped manual testing
      <p>Manually test the checkout flow and have multiple people test for you.</p>

- [ ] Use package.lock
      <p>Avoid security and compatibility issues between development and production by using a package.lock file. This will ensure that the versions of packages used in development are exactly the same as those used in production.</p>

- [ ] Visible company name
      <p>Make sure that your company name is listed on customers' credit card bills.</p>

- [ ] Visible phone number
      <p>Have a phone number listed for disputes.</p>



## "Tips from the Trenches"

<p>Miscellaneous tips from real-world experience.</p>
  
- [ ] Secure API endpoints
      <p>Users will try to abuse everything they can. Do not naively believe that users will not take an interest in being junior <a href="https://en.wikipedia.org/wiki/Kevin_Mitnick" target="_blank">Mitnicks</a>, or otherwise that legitimate hackers won't take a crack.</p>

- [ ] Scale up
      <p>Scale up your server ahead of time, just in case.</p>

- [ ] Early access, soft launch
      <p>Provide early access to a select audience.</p>

- [ ] Check your URLs
      <p>Make sure all your URLs are correct and working. Avoid any references to “localhost:3000”, for example.</p>



## Content

<p>Errors in this space are easy to make and can easily make your site or app look amateur.</p>
  
- [ ] Check spelling and grammar
      

- [ ] Check for a working 404 page
      

- [ ] Check for placeholder text, i.e. "lorem ipsum"
      



## Accessibility

<p>"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect." - Tim Berners-Lee, W3C Director and inventor of the World Wide Web</p>
  
- [ ] Use Axe
      <p>Previously mentioned in the automated tools section, it can be stressed enough to take advantage of the <a href="https://www.deque.com/axe/" target="_blank">Axe</a> tools.</p>

- [ ] Provide alt text
      <p><a href="https://webaim.org/techniques/alttext/" target="_blank">Alternative text</a> provides a textual alternative to non-text content in web pages.</p>

- [ ] Use a color contrast checker
      <p><a href="http://www.webaxe.org/color-contrast-tools/" target="_blank">Web Axe list of tools</a></p><p>Browser add-ons:</p><ol><li>Chrome extension: <a href="https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll" target="_blank">Color Contrast Analyzer</a></li><li>Firefox add-on: <a href="https://addons.mozilla.org/en-US/firefox/addon/wcag-contrast-checker/" target="_blank">WCAG Contrast Checker</a></li></ol>

- [ ] Lighthouse
      <p>Previously mentioned in the automated tools section, this <a href="https://developers.google.com/web/tools/lighthouse/audits/button-name" target="_blank">Chrome browser feature</a> also runs test to make sure your site or application meets minimum standards for accessibility.</p>

- [ ] Test tabbing order
      <p>Use the site with just your keyboard and make sure you have a good experience, i.e. you can tab through content without any problems.</p>



## SEO

<p>Search Engine Optimization is important only if you want users to find you organicly.</p>
  
- [ ] Sitemap
      <p>Create a <a href="https://www.xml-sitemaps.com/" target="_blank">sitemap</a> and upload to:</p><ol><li><a href="https://support.google.com/webmasters/answer/183668?hl=en" target="_blank">Google</a></li><li><a href="https://www.bing.com/webmaster/help/how-to-submit-sitemaps-82a15bd4" target="_blank">Bing</a></li></ol>

- [ ] SEO automated checkers
      <ol><li><a href="https://www.woorank.com/" target="_blank">WooRank</a></li><li><a href="https://varvy.com/" target="_blank">Varvy</a></li><li><a href="https://www.semrush.com/seo/" target="_blank">SEMrush</a></li><li><a href="https://www.found.co.uk/seo-tool/" target="_blank">Found</a></li><li><a href="https://www.screamingfrog.co.uk/seo-spider/" target="_blank">Screaming Frog SEO Spider</a></li></ol>

- [ ] Meta tags
      <p>Confirm that your pages have meta tags and that they are optimized.</p>

- [ ] Check heading hierarchy
      <p>Make sure that your heading tags are structured in the right hierarchy. <a href="https://yoast.com/headings-use/" target="_blank">Yoast</a> and <a href="https://www.woorank.com/en/edu/seo-guides/html-header" target="_blank">Woorank</a> provide additional details regarding the importance of your "H" tags.</p>



## Analytics

<p>Get set up to receive insights on who your users are, when they are visiting and where they are visiting from.</p>
  
- [ ] Website Analytics
      <p><a href="https://analytics.google.com/analytics/web/" target="_blank">Google Analytics</a> is by far the most popular solution, but alternatives exist.</p><p>Privacy sensitive alternatives:</p><ol><li><a href="https://simpleanalytics.io/" target="_blank">Simple Analytics</a></li><li><a href="https://usefathom.com/" target="_blank">Fathom Analytics</a></li><li><a href="https://matomo.org/" target="_blank">Matomo</a></li></ol><p>Other options:</p><ol><li><a href="https://mixpanel.com/pricing/#engagement" target="_blank">Mixpanel</a></li><li><a href="https://www.kissmetricshq.com/product/" target="_blank">Kissmetrics</a></li><li><a href="https://clicky.com/" target="_blank">Clicky</a></li><li><a href="https://blog.leadfeeder.com/google-analytics-alternatives/" target="_blank">Plus others</a></li></ol>

- [ ] Facebook tracking pixel
      <p>Helps to track the effectiveness of your <a href="https://www.facebook.com/business/help/952192354843755" target="_blank">advertising on Facebook</a>.</p>

- [ ] Use Drip
      <p><a href="https://www.drip.com/" target="_blank">Drip</a> is an ecommerce marketing resource.</p>



## Server Config and Access

<p>Make sure that your server(s) are securely configured and help you to optimize the delivery of your content and assets. </p>
  
- [ ] Redirects
      <p>For example, in Apache use the <a href="https://www.digitalocean.com/community/tutorials/how-to-create-temporary-and-permanent-redirects-with-apache-and-nginx#how-to-redirect-in-apache" target="_blank">.htaccess file for redirects</a> where content has moved and users need to be redirected.</p>

- [ ] Use a robots.txt file
      <p>You can prevent the indexing of certain pages by using a <a href="https://support.google.com/webmasters/answer/6062608?hl=en" target="_blank">robots.txt</a> file. This will not guarantee that the content will not be indexed, but all legitimate search engines claim to respect this.</p>

- [ ] Enable gzip
      <p>Gzip is a method of compressing files (making them smaller). <a href="https://varvy.com/pagespeed/enable-compression.html" target="_blank">This allows your web server to load smaller files faster</a>.</p>

- [ ] Enable caching
      <p>"Intelligent content caching is one of the most effective ways to improve the experience for your site's visitors. Caching, or temporarily storing content from previous requests, is part of the core content delivery strategy implemented within the HTTP protocol." - <a href="https://www.digitalocean.com/community/tutorials/web-caching-basics-terminology-http-headers-and-caching-strategies" target="_blank">Digital Ocean</a></p>

- [ ] Use a Content Delivery Network (CDN)
      <p>Two popular options are:</p><ol><li><a href="https://www.cloudflare.com/" target="_blank">Cloudflare</a></li><li><a href="https://www.keycdn.com/" target="_blank">KeyCDN</a></li></ol>



## Company Processes

<p>Make sure company processes and workflow requirements are adhered to.</p>
  
- [ ] Make sure tests are passing
      

- [ ] All git issues are closed
      

- [ ] Merge any outstanding pull requests
      

- [ ] Provide documentation on processes
      <p>Write up instructions for your client or colleagues that will help them in case they run into any issue with the deployment of your site or app.</p>

- [ ] Deploy and test
      <p>It is common practice to deploy to a staging environment first, and then finally test a production build.</p>

- [ ] Remove logs and comments
      <p>Remove unwanted logs and error reporting left in production build.</p>



## Final Considerations

<p>Miscellaneous tips and suggestions.</p>
  
- [ ] Update DNS records ahead of time
      <p>Do not do a DNS record update right before a launch, the propagation of those records can take up to 48 hours.</p>

- [ ] Thoroughly check access
      <p>Check access from different countries. You can use a <a href="https://protonvpn.com/" target="_blank">VPN service</a> for this.</p>

- [ ] Consider edge cases
      <p>Consider what different devices, resolutions, and access speeds people are using.</p>

