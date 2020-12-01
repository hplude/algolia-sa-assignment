*Question 1*: 

Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

### Answer 1

Hi George, I'd be happy to help you with these questions. 

I'd recommend using the Algolia [Glossary](https://www.algolia.com/doc/glossary/) to find definitions of search engine terminology. If you head there you can quickly search for record, index, and any other term you're curious about. In addition to the glossary, we have a lot of other documentation on our site including implementation guides, integration guides, and FAQs.

Regarding custom ranking, this is an optional (but we think very important) configuration option for your indices. You would use this feature to rank certain search results above others. We have some default, out-of-the-box ranking but we recommend adding custom business metrics about your dataset so that your users' searches return the most relevant results for your business. 

For example, in a retail context, if a customer searches for 't-shirt,' you can rank the results so that the t-shirts with the most sales or views are shown at the top of the results. Ensuring the most popular results are at the top helps maximize conversion and revenue. In this case, the metrics 'number of sales' and 'views' would be added as custom ranking attributes. 

For more information on custom ranking (including how to set it up in your own dashboard) you can see our related docs [here](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/). 

Please let me know if you have any other questions!
Hunter


--

*Question 2*: 

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

###Answer 2

Hi Matt,

I'm sorry to hear about your frustration regarding the new dashboard design. We think the new UI brings a lot of great improvements but we're always trying to make it better. I'll be sure to send your feedback to our product team for review, but I'd also love to sit down with you to make sure I capture everything accurately. We can go over the indexing functionality you called out and also anything else you've noticed. Let me know if you'd be willing to hop on a quick Zoom to walk me through it and I'll go ahead and schedule something for us. 

Thanks,
Hunter

--

*Question 3*: 

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

###Answer 3

Hi Leo, thanks for reaching out. 

How much development work you'll do will depend highly on how you and your team design the search experience. The most basic implementations can be done in 5 minutes but some complex projects can take a few weeks. We find that most of our customers have a fully-functional search experience live in 1-10 days. 

Our infrastructure handles most of the heavy back-end lifting so most of the development work for your team will be on the front-end of your website. We have a lot of great information about how to do this (including tutorials and code examples) on our [website](https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/). (This link is for our Javascript guides but you can toggle to whatever front-end framework you need on the right side.)

The high level implementation process is [here](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/implementation-process/#overview) and consists of only 3 required steps. I'd suggest taking a look at the docs I've linked to. They'll give you a great sense of where to start and how long it might take your team to build and deploy to your website. 

Please let me know what other questions you have!
Hunter

