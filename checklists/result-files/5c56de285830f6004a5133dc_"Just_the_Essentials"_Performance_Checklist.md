# "Just the Essentials" Performance Checklist
  
<p><img src="https://api.ch.ckl.st/user-images/google-logo.svg-1549199086915.svg"></p><p>Adapted from web.dev, by Google, their actionable guidance and analysis helps developers learn and apply the web's modern capabilities to your own sites and apps.</p><p>In addition to this checklist on the topic of performance, the <a href="https://web.dev/learn" target="_blank">web.dev resources also help you learn about</a>:</p><ol><li>Network resilience</li><li>Security</li><li>Search and being easily discoverable</li><li>Enabling installation (i.e. PWA)</li><li>Accessibility</li></ol><p>This checklist is part of a comprehensive series on critical&nbsp;<a href="https://ch.ckl.st/share/5c38a726792475004a001e19" target="_blank">checklists for web development</a>.</p>


## Measure First


  
- [ ] Measure your site's performance
      <ol><li>With <a href="https://web.dev/fast/discover-performance-opportunities-with-lighthouse" target="_blank">Lighthouse</a></li><li>With <a href="https://web.dev/measure" target="_blank">web.dev online</a></li></ol>



## Optimize Images


  
- [ ] Compress images
      <p>Uncompressed images bloat your pages with unnecessary bytes. Use <a href="https://web.dev/fast/use-imagemin-to-compress-images" target="_blank">Imagemin</a> to compress images.</p>

- [ ] Use video instead of animated GIFs
      <p>Animated GIFs can be downright huge. <a href="https://web.dev/fast/replace-gifs-with-videos" target="_blank">Replace animated GIFs with video</a> for faster page loads.</p>

- [ ] Lazy load images
      <p>Lazy loading is the strategy of loading resources as they are needed, rather than in advance. Images that are offscreen during the initial pageload are ideal candidates for this technique. <a href="https://web.dev/fast/use-lazysizes-to-lazyload-images" target="_blank">Lazysizes makes this a very simple strategy to implement</a>.</p>

- [ ] Serve responsive images
      <p>Serving desktop-sized images to mobile devices can use 2–4x more data than needed. Instead of a "one-size-fits-all" approach to images, <a href="https://web.dev/fast/serve-responsive-images" target="_blank">serve different image sizes to different devices</a>.</p>

- [ ] Serve images with correct dimensions
      <p>Image sizing can be deceptively complicated. There are two approaches: <a href="https://web.dev/fast/serve-images-with-correct-dimensions" target="_blank">the "good" and the "better."</a>&nbsp;</p>

- [ ] Use WebP images
      <p><a href="https://web.dev/fast/serve-images-webp" target="_blank">WebP images are smaller</a> than their JPEG and PNG counterparts - usually on the magnitude of a 25-35% reduction in filesize.</p>



## Optimize JavaScript


  
- [ ] Apply instant loading with the PRPL pattern
      <p>PRPL is an acronym that describes <a href="https://web.dev/fast/apply-instant-loading-with-prpl" target="_blank">a pattern used to make web pages load and become interactive, faster</a>:</p><ul><li><strong>Push</strong> (or <strong>preload</strong>) the most important resources.</li><li><strong>Render</strong> the initial route as soon as possible.</li><li><strong>Pre-cache</strong> remaining assets.</li><li><strong>Lazy load</strong> other routes and non-critical assets.</li></ul>

- [ ] Preload critical assets
      <p><a href="https://web.dev/fast/preload-critical-assets" target="_blank">Preload is a declarative fetch request</a> that tells the browser to request an important resource as soon as possible.</p>

- [ ] Implement code-splitting
      <p>Instead of shipping all the JavaScript to your user as soon as the first page of your application is loaded, <a href="https://web.dev/fast/reduce-javascript-payloads-with-code-splitting" target="_blank">code-split your bundle</a> into multiple "pieces" and only send what's necessary at the very beginning.</p>

- [ ] Remove unused code
      <p>We often include libraries we're not fully utilizing. To fix this issue, analyze your bundle to detect unused code. Then <a href="https://web.dev/fast/remove-unused-code" target="_blank">remove unused and unneeded libraries</a>.</p>

- [ ] Minify and compress network payloads
      <p>There are two useful techniques that can be used to improve the performance of your web page:</p><ul><li>Minification</li><li>Data compression</li></ul><p>Incorporating <a href="https://web.dev/fast/reduce-network-payloads-using-text-compression" target="_blank">both of these techniques</a> reduces payload sizes and in turn improves page load times.</p>

- [ ] Serve modern code to modern browsers
      <p>If you want to use new JavaScript language features, you need to <a href="https://web.dev/fast/serve-modern-code-to-modern-browsers" target="_blank">transpile these features to backwards-compatible formats</a> for browsers that do not yet support them. Babel is the most widely used tool to compile code that contains newer syntax into code that different browsers and environments (such as Node) can understand.</p>



## Optimize Web Fonts


  
- [ ] Avoid invisible text during font loading
      <p>Fonts are often large files that take awhile to load. To deal with this, some browsers hide text until the font loads (the "flash of invisible text"). If you're optimizing for performance, you'll want to avoid the "flash of invisible text" and <a href="https://web.dev/fast/avoid-invisible-text" target="_blank">show content to users immediately using a system font</a> (the "flash of unstyled text").</p>



## Measure Performance in the Field


  
- [ ] Use the Chrome UX Report to look at performance in the field
      <p><a href="https://web.dev/fast/chrome-ux-report" target="_blank">The Chrome UX Report</a> (informally known as CrUX) is a public dataset of real user experience data on millions of websites. Unlike lab data, CrUX data actually comes from opted-in users in the field. It measures metrics such as first contentful paint (FCP), DOM content loaded (DCL), and first input delay (FID).</p>

- [ ] Use the CrUX Dashboard on Data Studio
      <p><a href="https://web.dev/fast/chrome-ux-report-data-studio-dashboard" target="_blank">Data Studio</a> is a powerful data visualization tool that enables you to build dashboards on top of big data sources, like the Chrome UX Report (CrUX).&nbsp;</p>

- [ ] Use the Chrome UX Report on PageSpeed Insights
      <p><a href="https://web.dev/fast/chrome-ux-report-pagespeed-insights" target="_blank">PageSpeed Insights</a> (PSI) is a tool for web developers to understand what a page's performance is and how to improve it. It uses Lighthouse to audit a given page and identify opportunities to improve performance. It also integrates with the Chrome UX Report (CrUX) to show how real users experience performance on the page and the origin in aggregate.</p>

- [ ] Use the Chrome UX Report on BigQuery
      <p>The raw data of the <a href="https://web.dev/fast/chrome-ux-report-bigquery" target="_blank">Chrome UX Report (CrUX) is available on BigQuery</a>, a database on the Google Cloud Platform (GCP). Using BigQuery requires a GCP project and basic knowledge of SQL.</p>



## Enforce Performance Budgets


  
- [ ] Performance budgets 101
      <p>As with most other things—to reach a goal you have to define it clearly. Start the journey by <a href="https://web.dev/fast/performance-budgets-101" target="_blank">setting a performance budget</a>.</p>

- [ ] Your first performance budget
      <p>When you set a personal, business or family budget, you are setting a limit to your spending and making sure you stay within it. <a href="https://web.dev/fast/your-first-performance-budget" target="_blank">Performance budgets</a> work in the same way, but for metrics that affect website performance.</p>

- [ ] Incorporate performance budgets into your build process
      <p>Once you’ve defined a performance budget, it’s time to <a href="https://web.dev/fast/incorporate-performance-budgets-into-your-build-tools" target="_blank">set up the build process</a> to keep track of it.</p>

- [ ] Use bundlesize with Travis CI
      <p><a href="https://web.dev/fast/using-bundlesize-with-travis-ci" target="_blank">Using bundlesize with Travis CI</a> lets you define performance budgets with minimal setup and enforce them as part of your development workflow.</p>

- [ ] Use Lighthouse Bot to set a performance budget
      <p>Make sure you stay fast by <a href="https://web.dev/fast/using-lighthouse-bot-to-set-a-performance-budget" target="_blank">automating performance testing with Lighthouse Bot</a>.</p>

