---
title: The Rise and Demise of RSS
year: 2000
tags: ['Web']
excerpt: |
    _The X-Files_ was such a successful television show that it became
    emblematic of an entire decade. Today we associate _X-Files_ VHS tapes with
    the 1990s the same way we associate, say, patchouli with the 1960s. At the
    height of its popularity, nearly 30 million Americans watched _The X-Files_
    as it aired on Fox.

    Many more people, of course, watched _The X-Files_ either on home video or
    as it was rebroadcast on local television stations. If you were living in
    San Francisco, for example, you might have watched _X-Files_ reruns on
    KOFY-TV, a local indepenent television station that had a syndication deal
    with Fox. Fox also struck syndication deals with FX, a cable channel
    and Fox subsidiary, as well as with USA and Turner. (David Duchovny, the
    actor that played Mulder, famously sued Fox over the deal with FX.)
    Syndication deals, common in the television industry, allowed Fox to sell
    _X-Files_ episodes to other distributors and broadcasters, giving
    _X-Files_ fans many different ways to watch their favorite TV show.
---
_The X-Files_ was such a successful television show that it became emblematic
of an entire decade. Today we associate _X-Files_ VHS tapes with the 1990s the
same way we associate, say, patchouli with the 1960s. At the height of its
popularity, nearly 30 million Americans watched _The X-Files_ as it aired on
Fox.[^1]

Many more people, of course, watched _The X-Files_ either on home video or as
it was rebroadcast on local television stations. If you were living in San
Francisco, for example, you might have watched _X-Files_ reruns on KOFY-TV, a
local independent television station that had a syndication deal with Fox.[^2]
Fox also struck syndication deals with FX, a cable channel and Fox subsidiary,
as well as with USA and Turner. (David Duchovny, the actor that played Mulder,
famously sued Fox over the deal with FX.) Syndication deals, common in the
television industry, allowed Fox to sell _X-Files_ episodes to other
distributors and broadcasters, giving _X-Files_ fans many different ways to
watch their favorite television show.

In the late 1990s, in the go-go years between Netscape's IPO and the Dot-com
crash, everyone could see that the web was soon going to be an even bigger deal
than it already was, even if they didn't quite know how. One theory was that
the web was about to be revolutionized by syndication. The web, originally
built to enable a simple transaction between two parties—one client viewing a
technical document available on one host server—would be broken open by new
standards that could be used to repackage and redistribute entire websites
through a variety of channels. Kevin Werbach, writing for _Release 1.0_, a
newsletter influential among investors in the 1990s, predicted that syndication
"would evolve into the core model for the Internet economy, allowing businesses
and individuals to retain control over their online personae while enjoying the
benefits of massive scale and scope."[^3] He invited his readers to imagine a
future in which fencing afficionados, rather than going directly to an "online
sporting goods site" or "fencing equipment retailer," could buy a new épée
directly through e-commerce widgets embedded into their favorite website about
fencing.[^4] Just like in the television world, syndication on the web would
allow businesses and publications to reach consumers through a multitude of
intermediaries. This would mean, as a corollary, that consumers would have
significant control over where and how they interacted with any given business
or publication on the web.

RSS was one of the standards that promised to deliver this syndicated future.
To Werbach, RSS was "the leading example of a lightweight syndication
protocol."[^5] Another contemporaneous article called RSS the first protocol to
realize the potential of XML.[^6] It was going to be a way for both users and
content aggregators to create their own customized channels out of everything
the web had to offer. And yet, two decades later, RSS [appears to be a dying
technology](https://trends.google.com/trends/explore?date=all&geo=US&q=rss),
now used chiefly by podcasters and programmers with tech blogs. Among that
latter group, moreover, RSS is perhaps used less for its actual utility and
more for its political symbolism. Though some people really do have RSS
readers, stubbornly adding an RSS feed to your blog, even in 2018, is a
reactionary statement. That little tangerine bubble has become a wistful symbol
of defiance against a centralized web increasingly controlled by a handful of
corporations, a web not at all like the syndicated web that Werbach imagined.

The future once looked so bright for RSS. What happened?

## Muddied Water
RSS was invented twice. This meant it had no clear owner, a state of affairs
that soon spawned endless debate and acrimony. But it also suggests that RSS
was an important idea whose time had come.

In 1998, Netscape was struggling to envision a future for itself. Its flagship
product, the Netscape Navigator web browser—once preferred by 80% of web
users—was quickly losing ground to Internet Explorer. So Netscape decided to
compete in a new arena. In May, a team was brought together to start work on
what was known internally as "Project 60."[^7] Two months later, Netscape
announced "My Netscape," a web portal that would compete with other portals
like Yahoo, MSN, and Excite.

In March of the following year, Netscape added something to the My Netscape
portal called the "My Netscape Network," which allowed My Netscape users to
customize their My Netscape page so that it contained "channels" with the most
recent news from arbitrary sites around the web. As long as a given site
published a special file in a format specified by Netscape, you could add that
site to your My Netscape page easily, typically by clicking an "Add Channel"
button that participating sites were supposed to add to their interface. A
little box, containing a title, image, and list of links, would then appear on
your My Netscape home page.

![A My Netscape Network Channel](/images/mnn-channel.gif)

The special file that participating sites had to publish was an RSS file. In
the My Netscape Network announcement, Netscape explained that RSS stood for
"RDF Site Summary."[^8] This was somewhat of a misnomer. RDF, or the Resource
Description Framework, is a grammar for describing certain properties of
arbitrary resources. In 1999, a draft specification for RDF was being
considered by the W3C. Though RSS was supposed to be based on RDF, the example
RSS document Netscape actually released didn't use any RDF tags at all, even if
it declared the RDF XML namespace. In a document that accompanied the Netscape
RSS specification, Dan Libby, one of the specification's authors, explained
that "in this release of MNN, Netscape has intentionally limited the complexity
of the RSS format."[^9] The specification was versioned as RSS 0.90, the idea
being that subsequent versions would bring RSS more in line with the W3C's XML
specification and the evolving draft of the RDF specification.

RSS had been cooked up by Dan Libby and another Netscape employee, Ramanathan
Guha. Guha previously worked for Apple, where he came up with something called
the Meta Content Framework. MCF was a format for representing metadata about
anything from web pages to local files. Guha demonstrated its power by
developing an application called
[HotSauce](http://web.archive.org/web/19970703020212/http://mcf.research.apple.com:80/hs/screen_shot.html)
that visualized relationships between files as a network of nodes suspended in
3D space. After leaving Apple for Netscape, Guha worked with a Netscape
consultant named Tim Bray to produce an XML-based version of MCF, which in turn
became the foundation for the W3C's RDF draft.[^10] It's no surprise, then,
that Guha and Libby were keen to incorporate RDF into RSS. But Libby later
wrote that the original vision for RSS never came to fruition because of time
constraints and the perception that RDF was "'too complex' for the 'average
user.'"[^11]

While Netscape was trying to battle it out in what became known as the "portal
wars," elsewhere on the web a new phenomemon known as "weblogging" was being
pioneered.[^12] One of these pioneers was Dave Winer, CEO of a company called
UserLand Software, which developed early content management systems that made
blogging accessible to people without deep technical fluency. Winer ran his own
blog, [Scripting News](http://scripting.com/), which today is one of the oldest
blogs on the internet. More than a year before Netscape announced My Netscape
Network, on December 15th, 1997, Winer published a post on Scripting News
announcing that the blog would now be available in XML as well as HTML.[^13]

Dave Winer's XML format became known as the Scripting News format. It was
supposedly very similar to Microsoft's Channel Definition Format (a "push
technology" standard submitted to the W3C in March, 1997), but I haven't been
able to find an example of the original format.[^14] Like Netscape's RSS, it
structured the content of Winer's blog so that it could be understood by other
software applications. When Netscape released RSS 0.90, Winer and UserLand
Software began to support both formats. But Winer believed that Netscape's
format was "woefully inadequate" and "missing the key thing web writers and
readers need."[^15] It could only represent a list of links, whereas the
Scripting News format could represent a series of paragraphs, each containing
one or more links.

In June, 1999, two months after Netscape's My Netscape Network announcement,
Winer introduced a new version of the Scripting News format, called
ScriptingNews 2.0b1. Winer claimed that he did this only after trying but
failing to get anyone at Netscape to care about RSS 0.90's deficiencies.[^16]
The new version of the Scripting News format added several items to the
`<header>` element to bring the Scripting News format to parity with RSS. But
the two formats continued to differ in that the Scripting News format, which
Winer nicknamed the "fat" syndication format, supported entire paragraphs and
not just links.

In July, Netscape got around to releasing RSS 0.91. The new version was a major
about-face. RSS no longer stood for "RDF Site Summary"; it now stood for "Rich
Site Summary." All the RDF—which there was not that much of anyway—was stripped
out and many of the Scripting News tags were incorporated. In the RSS 0.91
specification, Dan Libby explained:

> RDF references removed. RSS was originally conceived as a metadata format
> providing a summary of a website. Two things have become clear: the first is
> that providers want more of a syndication format than a metadata format. The
> structure of an RDF file is very precise and must conform to the RDF data
> model in order to be valid. This is not easily human-understandable and can
> make it difficult to create useful RDF files. The second is that few tools
> are available for RDF generation, validation and processing. For these
> reasons, we have decided to go with a standard XML approach.[^17]

Winer was enormously pleased with the new specification, calling it "even
better than I thought it would be."[^18] UserLand Software adopted the new
specification as a replacement for the existing ScriptingNews 2.0b1 format. For
a while, it seemed that RSS finally had a single authoritative specification.

## The Great Fork
A year later, it had become clear that the RSS 0.91 specification needed to be
expanded upon. There were all sorts of things people were trying to do with RSS
that the specification did not address. There were other parts of the
specification that seemed unnecessarily constraining—each RSS channel could
only contain a maximum of 15 items, for example.

By 2000, RSS was being used by several different organizations. Other than
Netscape, which seemed to have lost interest after RSS 0.91, the big players
were Dave Winer's UserLand Software; O'Reilly Net, which ran an RSS aggregator
called Meerkat; and Moreover.com, which also ran an RSS aggregator focused on
news.[^19] Via mailing list, representatives from these organizations and a few
others regularly discussed the desperate need to improve on RSS 0.91. But there
were deep disagreements about what those improvements should look like.

Winer wanted to change RSS but only in relatively small ways. In June, he
published his own version of an RSS 0.91 specification on the UserLand website,
meant to be a starting point for further development of RSS. It made no
significant changes to the 0.91 specification published by Netscape. Winer
claimed in a blog post that accompanied his specification that it was only a
"cleanup" documenting how RSS was actually being used in the wild, which was
needed because the Netscape specification was no longer being maintained.[^20]
In the same post, he argued that RSS had succeeded so far because it was
simple, and that by adding namespaces or schemas or RDF to the format "it would
become vastly more complex, and IMHO, at the content provider level, would buy
us almost nothing for the added complexity." In a message to the `syndication`
mailing list around the same time, Winer suggested that these issues were
important enough that they might lead him to create a fork:

> I'm still pondering how to move RSS forward. I definitely want ICE-like
> stuff in RSS2, publish and subscribe is at the top of my list, but I am
> going to fight tooth and nail for simplicity. I love optional elements. I
> don't want to go down the namespaces and schema road, or try to make it a
> dialect of RDF. I understand other people want to do this, and therefore I
> guess we're going to get a fork. I have my own opinion about where the other
> fork will lead, but I'll keep those to myself for the moment at least.[^21]

Arrayed against Winer were several other people, including Rael Dornfest of
O'Reilly and Ian Davis (responsible for a search startup called Calaba),
who thought that RSS needed namespaces in order to accomodate the many
different things everyone wanted to do with it. On another mailing list hosted
by O'Reilly, Davis proposed a namespace-based module system, writing that such
a system would "make RSS as extensible as we like rather than packing in new
features that overcomplicate the spec."[^22] The "namespace camp" believed that
RSS would soon be used for much more than the syndication of blog posts, so
namespaces, rather than being a complication, were the only way to keep RSS
from becoming unmanageable as it supported more and more use cases.

At the root of this disagreement about namespaces was a deeper disagreement
about what RSS was even for. Winer had invented his Scripting News format to
syndicate the posts he wrote for his blog. Guha and Libby at Netscape had
designed RSS and called it "RDF Site Summary" because in their minds it was a
way of recreating a site in miniature within Netscape's online portal. Davis,
writing to the `syndication` mailing list, explained his view that RSS was
"originally conceived as a way of building mini sitemaps," and that now he and
others wanted to expand RSS "to encompass more types of information than simple
news headlines and to cater for the new uses of RSS that have emerged over the
last 12 months."[^23] Winer wrote a prickly reply, stating that his Scripting
News format was the original RSS and that it had been meant for a different
purpose. Given that the people most interested in RSS disagreed about why RSS
had even been created, a fork seems to have been inevitable.

The fork happened after Dornfest, Davis, and several others formed the RSS-DEV
Working Group and published a specification for what they called RSS 1.0. In
their specification, RSS once again stood for "RDF Site Summary," because RDF
had once again been pulled off the shelf to represent metadata properties of
certain RSS elements. The specification acknowledged Winer by name, giving him
credit for popularizing RSS through his "evangelism."[^24] But it also argued
that just adding more elements to RSS without providing for extensiblity with a
module system—that is, Winer's preferred approach—"sacrifices scalability." It
went on to define a module system for RSS based on XML namespaces.

Winer was furious that the RSS-DEV Working Group had arrogated the "RSS 1.0"
name for themselves.[^25] In another mailing list about decentralization, he
described what the RSS-DEV Working Group had done as theft.[^26] Other members
of the `syndication` mailing list also felt that the RSS-DEV Working Group
should not have used the name "RSS" without unanimous agreement from ths
community on how to move RSS forward. But the Working Group stuck with the
name. Winer published his own improvement to RSS 0.91, which he called RSS
0.92, on UserLand's website in December, 2000. RSS 0.92 made several small
optional improvements to RSS, among which was the addition of the `<enclosure>`
tag soon used by podcasters everywhere. RSS had officially forked.

RSS would fork again in 2003, when several developers frustrated with the
bitter infighting among the RSS community sought to create an entirely new
format. These developers created Atom, a format that did away with RDF but
embraced XML namespaces. Atom would eventually be specified by [a proposed IETF
standard](https://tools.ietf.org/html/rfc4287). With the introduction of Atom,
there were three competing versions of RSS: Winer's RSS 0.92 (updated to RSS
2.0 in 2002), the RSS-DEV Working Group's RSS 1.0, and Atom.

## Decline
The proliferation of competing RSS specifications may have hampered RSS in
other ways that I'll discuss shortly. But it did not stop RSS from becoming
enormously popular during the 2000s. By 2004, the New York Times had started
offering its headlines in RSS and had written an article explaining to the
layperson what RSS was and how to use it.[^27] Google Reader, an RSS aggregator
ultimately used by millions, was launched in 2005. By 2013, RSS had become
popular enough that the New York Times, in its obituary for Aaron Swartz (a
co-author of the RSS 1.0 specification), called the technology
"ubiquitous."[^28] For a while, before a third of the planet had signed up for
Facebook, RSS was simply how many people stayed abreast of news on the
internet.

The New York Times called RSS "ubiquitous" in January, 2013. By that point,
though, RSS had actually turned a corner and was well on its way to becoming
an obscure technology. Google Reader was shutdown in July, 2013, ostensibly
because user numbers had been falling "over the years."[^29] This provoked
several articles from various outlets declaring that RSS was dead. But people
had already been declaring that RSS was dead for years. Steve Gillmor, writing
for TechCrunch in May, 2009, advised that "it's time to get completely
off RSS and switch to Twitter" because "RSS just doesn't cut it anymore."[^30]
He pointed out that Twitter was basically a better RSS feed, since it could
show you what people thought about an article in addition to the article
itself. It allowed you to follow people and not just channels. Gillmor told his
readers that it was time to let RSS recede into the background and ended his
article with lines from Bob Dylan's "Forever Young."

Today, RSS is not dead. But neither is it anywhere near as popular as it once
was. Lots of people have offered explanations for why RSS lost its broad
appeal. Perhaps the most persuasive explanation is exactly the one offered by
Gillmor in 2009. Social networks, just like RSS, offered users a feed featuring
all the latest news on the internet. Social networks took over from RSS because
they were simply better feeds. They also offered more benefits to the companies
that owned them. Some people have accused Google, for example, of shutting down
Google Reader in order to encourage people to use Google+. Google could
monetize Google+ in a way that it couldn't monetize Google Reader. Marco
Arment, the creator of Instapaper, wrote on his blog in 2013:

> Google Reader is just the latest casualty of the war that Facebook started,
> seemingly accidentally: the battle to own everything. While Google did
> technically “own” Reader and could make some use of the huge amount of news
> and attention data flowing through it, it conflicted with their far more
> important Google+ strategy: they need everyone reading and sharing everything
> through Google+ so they can compete with Facebook for ad-targeting data, ad
> dollars, growth, and relevance.[^31]

So both users and technology companies got more out of using social networks
than they did out of RSS.

Another theory is that RSS was always too geeky for regular people. Even the
New York Times, which seems to have been eager to adopt RSS and promote it to
its audience, complained that RSS is a "not particularly user friendly" acronym
coined by "computer geeks."[^32] Before the RSS icon was designed in 2004,
websites like the New York Times linked to their RSS feeds using little orange
boxes labeled "XML," which can only have been intimidating.[^33] The label was
perfectly accurate though, because before browsers were updated to recognize
RSS, clicking the link would take a hapless user to a page full of XML. [This
great tweet](https://twitter.com/mgsiegler/status/311992206716203008) captures
the essence of this explanation for RSS' demise. Regular people
never felt comfortable using RSS; it hadn't really been designed as a
consumer-facing technology and involved too many hurdles; people jumped ship as
soon as something better came along.

RSS might have been able to overcome some of these limitations if it had been
further developed. Maybe RSS could have been extended somehow so that
friends subscribed to the same channel could syndicate their thoughts about an
article to each other. But whereas a company like Facebook was able to "move
fast and break things," the RSS developer community was stuck trying to achieve
consensus. The Great RSS Fork only demonstrates how difficult it was to do
that. So if we are asking ourselves why RSS is no longer popular, a good
first-order explanation is that social networks supplanted it. If we ask
ourselves why social networks were able to supplant it, then the answer may be
that the people trying to make RSS succeed faced a problem much harder than,
say, building Facebook. As Dornfest wrote to `syndication` mailing list
at one point, "currently it's the politics far more than the serialization
that's far from simple."[^34]

So today we are left with centralized silos of information. Part of story is
corporate rapaciousness—RSS, an open format, didn't give technology companies
the control over data and eyeballs that they needed to sell ads, so they did
not support it. But the more mundane part of the story is that centralized
silos are just much easier to design than common standards. Today, even if it
doesn't look like it, we do in fact have the syndicated internet that Kevin
Werbach foresaw in 1999. People read articles from _The Onion_ when they show
up on Facebook or Twitter the same way people watch _Seinfeld_ reruns. But, for
now, there are only a few channels on the internet television. Perhaps, just as
happened in the television industry, the big networks will eventually face
stiffening competition as new standards make creating networks and transferring
data easier and cheaper.

[^1]: <http://x-files.wikia.com/wiki/The_X_Files_Ratings>
[^2]: <http://www.turning-pages.com/xf/xfs.htm>
[^3]: Release 1.0, 1
[^4]: ibid.
[^5]: Werbach, 8
[^6]: https://people.apache.org/~jim/NewArchitect/webrevu/1999/10_29/webauthors/10_29_99_2a.html
[^7]: <https://books.google.com/books?id=kwJVAgAAQBAJ&pg=PT23&lpg=PT23&dq=%22my+netscape+network%22&source=bl&ots=dmj2FErRtM&sig=X-f5--I-0JOsQL0ceQhxfcNs1ak&hl=en&sa=X&ved=2ahUKEwix-f3BtqzdAhVK2oMKHaHSCGkQ6AEwBnoECAEQAQ#v=onepage&q=%22my%20netscape%20network%22&f=false>
[^8]: http://www.rssboard.org/rss-0-9-0
[^9]: http://www.rssboard.org/mnn-futures
[^10]: https://www.tbray.org/ongoing/When/200x/2003/05/21/RDFNet
[^11]: https://groups.yahoo.com/neo/groups/rss-dev/conversations/topics/239
[^12]: http://www.cnn.com/TECH/computing/9910/04/portal.war.idg/index.html
[^13]: http://scripting.com/davenet/1997/12/15/scriptingNewsInXML.html
[^14]: https://reagle.org/joseph/2003/rss-history.html
[^15]: http://scripting.com/davenet/1999/06/16/aFaceOffWithNetscape.html
[^16]: http://scripting.com/davenet/1999/06/16/aFaceOffWithNetscape.html
[^17]: http://www.rssboard.org/rss-0-9-1-netscape
[^18]: http://scripting.com/1999/07/28.html
[^19]: https://groups.yahoo.com/neo/groups/syndication/conversations/topics/173
[^20]: http://essaysfromexodus.scripting.com/backissues/2000/06/07/#rss
[^21]: https://groups.yahoo.com/neo/groups/syndication/conversations/topics/132
[^22]: http://www.xml.com/pub/a/2000/07/05/deviant/rss.html
[^23]: https://groups.yahoo.com/neo/groups/syndication/conversations/topics/188
[^24]: http://web.resource.org/rss/1.0/spec
[^25]: https://groups.yahoo.com/neo/groups/syndication/conversations/topics/410
[^26]: http://www.diveintomark.link/2002/history-of-the-rss-fork
[^27]: https://www.nytimes.com/2004/06/03/technology/basics-fine-tuning-your-filter-for-online-information.html
[^28]: https://www.nytimes.com/2013/01/13/technology/aaron-swartz-internet-activist-dies-at-26.html
[^29]: https://googleblog.blogspot.com/2013/03/a-second-spring-of-cleaning.html
[^30]: https://techcrunch.com/2009/05/05/rest-in-peace-rss/
[^31]: https://marco.org/2013/07/03/lockdown
[^32]: https://www.nytimes.com/2006/01/29/travel/theres-a-popular-new-code-for-deals-rss.html
[^33]: https://web.archive.org/web/20050326065348/www.nytimes.com/services/xml/rss/index.html
[^34]: https://groups.yahoo.com/neo/groups/syndication/conversations/messages/1717
