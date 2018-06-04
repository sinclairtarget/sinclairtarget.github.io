---
title: The Birth of the World Wide Web
---
The miraculous thing about Tim Berners-Lee is that he was the perfect person
for the job.

In 1989, when Berners-Lee first proposed the idea that would become the World
Wide Web, exciting things were happening in the realm of computing. A new set
of standards called TCP/IP were allowing previously isolated computer networks
to talk to each other. These standards had become popular, particularly in the
American scientific community; in 1989, TCP/IP was also starting to be adopted
by commercial service providers like CompuServe.

Meanwhile, an annual conference had recently been established to discuss a
promising new avenue of computing research: hypertext. First conceived of in
the 1960s, hypertext found itself back in the spotlight in 1987 after Apple
released a program for the Macintosh called HyperCard. HyperCard was a kind of
simplified software development environment that allowed even the least savvy
Mac user to assemble an interactive application out of a "stack" of interlinked
cards. Though the cards did not contain body-text hyperlinks as we think of
them today, a card could contain buttons that, when clicked, navigated to other
cards. HyperCard was tremendously successful and even beloved by many, so much
so that last year it was [recreated](https://www.vipercard.net/) by a fan.
HyperCard's success inspired new interest in hypertext, which some thought
would supplant the printed word as the medium of the future.  Hypertext was
going to "produce effects on our culture, particularly on our literature,
education, criticism, and scholarship just as radical as those produced by
Gutenberg's movable type."[^1]

The one major problem was that, in 1989, all existing hypertext systems were
closed systems. Commercial applications of hypertext technology involved
converting complex documentation into hypertext form and then shipping it on a
floppy disk. Users could navigate the documentation more easily than if it were
printed in a book, but they could not follow links to documents not already
stored on the floppy disk. Some people, like Ted Nelson, who first coined the
term "hypertext" in the 1960s, were searching desperately for a way to open up
hyptertext systems by making them work across a network—but these efforts were
making little progress. It took Berners-Lee, whose personal interests and
professional experiences put all the jigsaw pieces in front of him, to marry
the internet and hypertext together.

Berners-Lee had been fascinated by the promise of hypertext since well before
HyperCard. As a child, he had talked with his father (both his parents were
mathematicians and programmers) about how much better it would be if computers,
rather than modeling the world in rigid hierarchies, modeled the world as a
series of loose associations, the way human beings do.[^2] In 1980, four years
after graduating from Oxford University with a degree in physics, he went to
work at CERN, the particle physics laboratory in Geneva, Switzerland. CERN, as
Berners-Lee describes it in his autobiography about the web, had an
institutional culture bordering on the anarchic.[^3] Nominally, 10,000 or so
people were a part of CERN, but only half were actually in Geneva at any given
time. There were only 3000 actual, salaried employees; the rest were
contractors or itinerant academics. As a contractor himself, Berners-Lee saw
that one of the biggest challenges he faced was simply understanding, amid the
barrage of arrivals and departures, how people and projects related to one
another.

When the weather was nice, Berners-Lee and his coworkers swapped ideas while
eating lunch outside, where bucolic vineyards climbed the slopes around them
and Lac Léman—as I can only presume—sparkled enchantingly in the distance.[^4]
In the evenings and during his time off, Berners-Lee worked on a program he
called ENQUIRE. ENQUIRE was his attempt to map out the tangle of
interconnections at CERN and a first go at creating what would, a decade later,
become the web. It used hypertext to capture the relationships that human
beings would otherwise most naturally represent on a piece of paper as a set of
circles and arrows.  ENQUIRE allowed users to make and follow links between
documents, people, and concepts; these links were furthermore all of a certain
type, so that, for example, the Vacuum Control System concept could have an
"includes" relationship with the Vacuum Equipment Modules concept and a
"described-by" relationship with a document named _Controle du System a Vide du
Booster_.  Berners-Lee named his program after a Victorian-era domestic
encycolpedia and etiquette guide called _Enquire Within Upon Everything_, a
title he liked because it evoked a magical portal to a world full of
information. Berners-Lee found that ENQUIRE did a pretty good job of living up
to its namesake and was a good fit for the chaotic, dynamic systems at CERN.
But his contract with CERN would end before he had an opportunity to sell other
people at CERN on its usefulness. On his way out the door, Berners-Lee handed
the program to his manager on a floppy disk, but the disk was later lost.
(ENQUIRE's [manual](https://www.w3.org/History/1980/Enquire/manual/), however,
is still available.)

ENQUIRE did not work across a computer network, so like the hypertext systems
that emerged later in the 1980s, it was a closed system. It is nonetheless to
Berners-Lee's credit that he was exploring the possiblities of hypertext at
such an early stage. For ENQUIRE to transform into the World Wide Web,
Berners-Lee still needed to incorporate two more key technologies.

The first of these was a markup language. Serendipitously, the very next thing
Berners-Lee did after CERN was go work for his friend, John Poole, on printer
software. John Poole ran a company called Image Computer Systems that was
trying to build smarter printers by incorporating a microprocessor, then a
relatively new technology. Berners-Lee helped to write, among other things, a
new markup language used to prepare documents for the printer. SGML, the markup
language that Berners-Lee would later base HTML on—HTML was in fact supposed to
be a particular application of SGML—was first standardized in a draft
specification released in 1980. So it's possible that, while Berners-Lee was at
Image Computer Systems, he worked with SGML. Even if he did not, the experience
would certainly have taught him a lot about the challenges inherent in trying
to render marked up text on a page, whether physical or digital.

In 1983, Berners-Lee decided he wanted to go back to working at CERN. He
applied for a fellowship and moved back to Switzerland in 1984. One of his
first assignments was to develop an RPC (remote procedure call) protocol that
would allow one CERN computer to call a function stored on another CERN
computer. This might have been relatively straightforward except for the fact
that CERN computers weren't all on the same network. CERN had only grown more
complex while Berners-Lee had been away and CERN employees, accustomed to
making their own choices about technology, now used a range of computers and
operating systems from IBM, DEC, and Control Data. Consequently, there was no
single set of networking standards that all CERN computers understood. So
Berners-Lee ensured that his RPC system supported multiple networking
protocols. In particular, he made sure to support the TCP/IP protocol suite,
which at that time was championed only by CERN's Unix crowd but which
Berners-Lee thought had great potential. That was when, as Berners-Lee writes,
"the Internet came into my life." (19)

The internet was the second key technology that enabled the web. Early in his
second stint at CERN, Berners-Lee had made some desultory attempts to rewrite
ENQUIRE, because he saw that the need for a program like it still existed at
CERN. But the closed nature of ENQUIRE was too limiting. Berners-Lee began to
wonder if he could combine ENQUIRE with the communication schemes he had
developed for the RPC project. A networked version of ENQUIRE, relying on the
increasingly popular TCP/IP standards, would allow researchers at CERN to link
not only to documents on their own computers but also to documents on everyone
else's computers. At that point, all the pieces were in place. Berners-Lee told
his manager, Mike Sendall, about his ideas. His manager told him to write a
proposal. And so, in 1989, Berners-Lee did.


[^1]: Coover, Robert. "The End of Books." The New York Times, June 21, 1992. Accessed June 2, 2018. <https://archive.nytimes.com/www.nytimes.com/books/98/09/27/specials/coover-end.html?pagewanted=all>.
[^2]: Berners-Lee, Tim, and Mark Fischetti. Weaving the Web: The Original Design and Ultimate Destiny of the World Wide Web. Harper Business, 2000.
[^3]: ibid.
[^4]:
