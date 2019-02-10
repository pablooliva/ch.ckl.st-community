# GDPR for Developers Checklist
  
<p><img src="https://api.ch.ckl.st/user-images/gdpr-for-developers.svg-1549118159891.svg"></p><p>This checklist was adapted from Bozho's blog post titled <a href="https://techblog.bozho.net/gdpr-practical-guide-developers/" target="_blank">GDPR - A Practical Guide for Developers</a>. You are strongly encouraged to read his intro before proceeding with this checklist. It is a quick read and it will provide some useful context for this checklist.</p><p>This checklist is part of a comprehensive series on critical&nbsp;<a href="https://ch.ckl.st/share/5c38a726792475004a001e19" target="_blank">checklists for web development</a>.</p>


## Product and Service Requirements

<p>These features should be developed into your product or service to be GDPR compliant. They do not necessarily have to be automated, manual processes will suffice, but for bigger systems it would make more sense for them to be automated.</p>
  
- [ ] "Forget me"
      <p>A method that takes a userId and deletes all personal data about that user (in case they have been collected on the basis of consent or based on the legitimate interests of the controller, and not due to contract enforcement or legal obligation). <a href="https://techblog.bozho.net/forget-me-and-tests/" target="_blank">It is actually useful for integration tests to have that feature</a> (to cleanup after the test), but it may be hard to implement depending on the data model. In a regular data model, deleting a record may be easy, but some foreign keys may be violated. That means you have two options – either make sure you allow nullable foreign keys (for example an order usually has a reference to the user that made it, but when the user requests his data be deleted, you can set the userId to null), or make sure you delete all related data (e.g. via cascades). This may not be desirable, e.g. if the order is used to track available quantities or for accounting purposes. It’s a bit trickier for event-sourcing data models, or in extreme cases, ones that include some sort of blockchain/hash chain/tamper-evident data structure. With event sourcing you should be able to remove a past event and re-generate intermediate snapshots. For blockchain-like structures – be careful what you put in there and avoid putting personal data of users. There is an option to use a chameleon hash function, but that’s suboptimal. Overall, you must constantly think of how you can delete the personal data. And “our data model doesn’t allow it” isn’t an excuse. What about backups? Ideally, you should keep a separate table of forgotten user IDs, so that each time you restore a backup, you re-forget the forgotten users. This means the table should be in a separate database or have a separate backup/restore process.</p><p><a href="https://gdpr-info.eu/art-17-gdpr/" target="_blank">More details</a>.</p>

- [ ] 3rd Party Notification of Deletions
      <p>Deleting things from your system may be one thing, but you are also obligated to inform all third parties that you have pushed that data to. So if you have sent personal data to, say, Salesforce, Hubspot, Twitter, or any cloud service provider, you should call an API of theirs that allows for the deletion of personal data. If you are such a provider, obviously, your “forget me” endpoint should be exposed. Calling the 3rd party APIs to remove data is not the full story, though. You also have to make sure the information does not appear in search results. Now, that’s tricky, as Google doesn’t have an API for removal, only a <a href="https://support.google.com/websearch/answer/6349986?hl=en" target="_blank">manual process</a>. Fortunately, it’s only about public profile pages that are crawlable by Google (and other search engines), but you still have to take measures. Ideally, you should make the personal data page return a 404 HTTP status, so that it can be removed.</p><p><a href="https://gdpr-info.eu/art-19-gdpr/" target="_blank">More details</a>.</p>

- [ ] Restrict Processing
      <p>Admin panels that provide a list of users should have a “restrict processing” option. (The user settings page may also have that button with a dropdown to select from the Article 18(1) options). When clicked (after reading the appropriate information), it should mark the profile as restricted. That means it should no longer be visible to the backoffice staff, or publicly. You can implement that with a simple “restricted” flag in the users table and a few if-clauses here and there.</p><p><a href="https://gdpr-info.eu/art-18-gdpr/" target="_blank">More details</a>.</p>

- [ ] Export Data
      <p>Users should be offered an “export data” option. When used, the user should receive all the data that you hold about them. What exactly is that data – depends on the particular use case. Usually it’s at least the data that you delete with the “forget me” functionality, but may include additional data (e.g. the orders the user has made may not be delete, but should be included in the dump). The structure of the dump is not strictly defined, but my recommendation would be to reuse <a href="http://schema.org/docs/schemas.html" target="_blank">schema.org definitions</a> as much as possible, for either JSON or XML. If the data is simple enough, a CSV/XLS export would also be fine. Sometimes data export can take a long time, so the button can trigger a background process, which would then notify the user via email when his data is ready (Twitter, for example, does that already – you can request all your tweets and you get them after a delay). You don’t need to implement an automated export, although it would be nice. It’s sufficient to have a process in place to allow users to request their data, which can be a manual database-querying process.</p><p><a href="https://gdpr-info.eu/art-20-gdpr/" target="_blank">More details</a>.</p>

- [ ] User Profile Updates
      <p>Users must be able to update and fix all data about them, including data that you have collected from other sources (e.g. using a “Login with Facebook” you may have fetched their name and address). Rule of thumb – all the fields in your “users” table should be editable via the UI. Technically, rectification can be done via a manual support process, but that’s normally more expensive for a business than just having the form to do it.</p><p><a href="https://gdpr-info.eu/art-16-gdpr/" target="_blank">More details</a>.</p>

- [ ] Consent Checkboxes
      <p>“I accept the terms and conditions” would no longer be sufficient to claim that the user has given their consent for processing their data. So, for each particular processing activity there should be a separate checkbox on the registration (or user profile) screen; or clear yes/no buttons. You should keep these consent checkboxes/buttons in separate columns in the database, and let the users withdraw their consent (by unchecking these checkboxes from their profile page). Ideally, these checkboxes should come directly from the register of processing activities (if you keep one). Note that the checkboxes should not be preselected, as this does not count as “consent”. Another important thing here is machine learning/AI. If you are going to use the user’s data to train your ML models, you should get consent for that as well (unless it’s for scientific purposes, which have special treatment in the regulation). Note here the so called “legitimate interest”. It is for the legal team to decide what a legitimate interest is, but direct marketing is included in that category, as well as any common sense processing relating to the business activity – e.g. if you collect addresses for shipping, it’s obviously a legitimate interest. So not all processing activities need consent checkboxes.</p><p><a href="https://gdpr-info.eu/art-7-gdpr/" target="_blank">More details</a>.</p>

- [ ] Confirm Consent
      <p>if the consent users have given was not clear (e.g. if they simply agreed to terms &amp; conditions), you’d have to re-obtain that consent. So prepare a functionality for mass-emailing your users to ask them to go to their profile page and check all the checkboxes for the personal data processing activities that you have. Update: since we’ve been swarmed with useless consent and privacy policy emails: this is ONLY needed if your previous consent was no clearly given. In many cases it has been, so don’t overdo it.</p>

- [ ] "See all my data"
      <p>Similar to the “export” option, except data should be displayed in the regular UI of the application rather than an XML/JSON format. I wouldn’t say this is mandatory, and you can leave it as a “desirable” feature – for example, Google Maps shows you your location history – all the places that you’ve been to. It is a good implementation of the right to access. (Though Google <a href="https://qz.com/1131515/google-collects-android-users-locations-even-when-location-services-are-disabled/" target="_blank">is very far from perfect</a> when privacy is concerned). This is not all about the right to access – you have to let unregistered users ask whether you have data about them, but that would be a more manual process. The ideal minimum would be to have a feature “check by email”, where you check if you have data about a particular email. You also need to tell the user in what ways you are processing their data. You can simply print all the records in your data process register for which the user has consented to.</p><p><a href="https://gdpr-info.eu/art-15-gdpr/" target="_blank">More details</a>.</p>

- [ ] Age Restrictions
      <p>You should ask for the user’s age, and if the user is a child (below 16), you should ask for parent permission. There’s no clear way how to do that. One suggestion is to introduce a flow, where the child should specify the email of a parent, who can then confirm. Obviously, children will just cheat with their birth date, or provide a fake parent email, but you will most likely have done your job according to the regulation (this is one of the “wishful thinking” aspects of the regulation).</p><p><a href="https://gdpr-info.eu/art-8-gdpr/" target="_blank">More details</a>.</p>

- [ ] Keep Data No Longer than Necessary
      <p>If data has been collected for a specific purpose (e.g. shipping a product), you have to delete it/anonymize it as soon as you don’t need it. Many e-commerce sites offer “purchase without registration”, in which case the consent goes only for the particular order. So you need a scheduled job/cron to periodically go through the data and anonymize it (delete names and addresses), but only after a certain condition is met – e.g. the product is confirmed as delivered. You can have a database field for storing the deadline after which the data should be gone, and that deadline can be extended in case of a delivery problem.</p><p><a href="https://gdpr-info.eu/art-5-gdpr/" target="_blank">More details</a>.</p>

- [ ] Cookies
      <p>Cookies are subject of a different regulation (a Directive that will soon become a Regulation). However, GDPR still changes things when tracking cookies are concerned. I’ve outlined my opinion on tracking cookies in a <a href="https://techblog.bozho.net/tracking-cookies-gdpr/" target="_blank">separate post</a>.</p>



## Technical Suggestions

<p>These items are mostly about the technical measures needed to protect personal data (outlined in <a href="https://gdpr-info.eu/art-32-gdpr/" target="_blank">article 32</a>). They may be more “ops” than “dev”, but often the application also has to be extended to support them. An important note here is that this is not mandated by the regulation, but it’s a good practice anyway and helps with protecting personal data.</p>
  
- [ ] Encrypt Data in Transit
      <p>That means that communication between your application layer and your database (or your message queue, or whatever component you have) should be over TLS. The certificates could be self-signed (and possibly pinned), or you could have an internal CA. Different databases have different configurations, just google “X" encrypted connections. Some databases need gossiping among the nodes – that should also be configured to use encryption.</p>

- [ ] Encrypt Data at Rest (includes Backups)
      <p>This again depends on the database (some offer table-level encryption), but can also be done on machine-level, e.g. using LUKS. The private key can be stored in your infrastructure, or in some cloud service like AWS KMS.</p>

- [ ] Implement Pseudonymization
      <p>The most obvious use-case is when you want to use production data for the test/staging servers. You should change the personal data to some “pseudonym”, so that the people cannot be identified. When you push data for machine learning purposes (to third parties or not), you can also do that. Technically, that could mean that your User object can have a “pseudonymize” method which applies hash+salt/bcrypt/PBKDF2 for some of the data that can be used to identify a person. Pseudonyms could be reversible or not, depending on the use case (the definition in the regulation implies reversibility based on a secret information, but in the case of test/staging data it might not be). Some databases have such features built-in, <a href="http://www.oracle.com/us/products/database/data-masking-best-practices-161213.pdf" target="_blank">e.g. Oracle.</a></p>

- [ ] Protect Data Integrity
      <p>This is a very broad topic, and could simply mean “have authentication mechanisms for modifying data”. But you can do something more, even as simple as a checksum. It depends on the stakes, on the way data is accessed, on the particular system, etc. The checksum can be in the form of a hash of all the data in a given database record, which should be updated each time the record is updated through the application. It isn’t a strong guarantee, but it is at least something.</p>

- [ ] Register Processing Activities
      <p><a href="https://gdpr-info.eu/art-30-gdpr/" target="_blank">Article 30</a> says that you should keep a record of all the types of activities that you use personal data for. That sounds like pure bureaucracy, but it may be useful – you will be able to link certain aspects of your application with that register (e.g. the consent checkboxes, or your audit trail records). It wouldn’t take much time to implement a simple register, but the business requirements for that should come from whoever is responsible for GDPR compliance. Such a register could be a microservice/small application deployed separately in your infrastructure.</p>

- [ ] Log Access to Personal Data
      <p>Every read operation on a personal data record should be logged, so that you know who accessed what and for what purpose. This does not follow directly from the provisions of the regulation, but it is kinda implied from the accountability principles. What about search results (or lists) that contain personal data about multiple subjects? Simply logging “user X did a search for criteria Y” would suffice. But don’t display too much personal data in lists. There are articles in the regulation that imply that keeping an audit log is a best practice (for protecting the integrity of the data as well as to make sure it hasn’t been processed without a valid reason).</p>

- [ ] Register all API Consumers
      <p>Anonymous API access to personal data should not be allowed. You should request the organization name and contact person for each API user upon registration, and add those to the data processing register.</p>



## Things to Avoid


  
- [ ] Don't Use Data for Purposes other than Agreed to
      <p>This is the spirit of the regulation. If you want to expose a new API to a new type of client, or you want to use the data for some machine learning, or you decide to add ads to your site based on users’ behavior, or sell your database to a 3rd party – think twice. I would imagine your register of processing activities could have a button to send notification emails to users to ask them for permission when a new processing activity is added (or if you use a 3rd party register, it should probably give you an API). So upon adding a new processing activity (and adding that to your register), mass email all users from whom you’d like consent.</p><p><a href="https://gdpr-info.eu/art-6-gdpr/" target="_blank">More details</a>.</p>

- [ ] Don't Log Personal Data
      <p>Getting rid of the personal data from log files (especially if they are shipped to a 3rd party service) can be tedious or even impossible. So log just identifiers if needed. Make sure old log files are cleaned up, just in case.</p>

- [ ] Don't Add Unnecessary Form Fields 
      <p>Unless you absolutely need the data for delivering your service, you shouldn’t collect it. Names you should probably always collect, but unless you are delivering something, a home address or phone is unnecessary.</p>

- [ ] Don't Assume 3rd Parties are Compliant
      <p>You are responsible if there’s a data breach in one of the 3rd parties (e.g. “processors”) to which you send personal data. So before you send data via an API to another service, make sure they have at least a basic level of data protection.</p>

- [ ] Don't Assume ISO Certification Makes you Compiant
      <p>Information security standards and even personal data standards are a good start and they will probably 70% of what the regulation requires, but they are not sufficient – most of the things listed above are not covered in any of those standards.</p>

