---
title: "How Lisp Became God's Own Programming Language"
year: 1962
tags: ['Languages', 'Hardware']
---
When programmers discuss the relative merits of different programming
languages, they often talk about them in prosaic terms as if they were so many
tools in a toolbelt—one might be more appropriate for systems programming,
another might be more appropriate for gluing together other programs to
accompish some ad hoc task. This is as it should be. Languages have different
strengths and claiming that a language is better than other languages without
reference to a specific use case only invites an unproductive and vitriolic
debate. 
<!--more-->

But there is one language that seems to inspire a peculiar universal reverence:
Lisp. Keyboard crusaders that would otherwise pounce on anyone daring to
suggest that some language is better than any other will concede that Lisp is
on another level. Lisp transcends the utilitarian criteria used to judge other
languages, because the median programmer has never used Lisp to build anything
practical and probably never will, yet the reverence for Lisp runs so deep that
Lisp is often ascribed mystical properties. Everyone's favorite webcomic,
_xkcd_, has depicted Lisp this way at least twice: In [one
comic](https://xkcd.com/224/), a character reaches some sort of Lisp
enlightenment, which appears to allow him to comprehend the fundamental
structure of the universe. In [another comic](https://xkcd.com/297/), a robed,
senescent programmer hands a stack of parentheses to his padawan, saying that
the parentheses are "elegant weapons for a more civilized age," suggesting that
Lisp has all the occult power of the Force.

Another great example is Bob Kanefsky's parody of a
song called "God Lives on Terra." His parody, written in the mid-1990s and
called "Eternal Flame", describes how God must have created the world using
Lisp. The following is an excerpt, but the full set of lyrics can be found in
the [GNU Humor
Collection](https://www.gnu.org/fun/jokes/eternal-flame.en.html):

> _For God wrote in Lisp code  
> When he filled the leaves with green.  
> The fractal flowers and recursive roots:  
> The most lovely hack I've seen.  
> And when I ponder snowflakes,  
> never finding two the same,  
> I know God likes a language  
> with its own four-letter name._

I can only speak for myself, I suppose, but I think this "Lisp Is Arcane Magic"
cultural meme is the most bizarre and fascinating thing ever. Lisp was
concocted in the ivory tower as a tool for artificial intelligence research, so
it was always going to be unfamiliar and maybe even a bit mysterious to the
programming laity. But programmers now [urge each other to "try Lisp before you
die"](https://www.reddit.com/r/ProgrammerHumor/comments/5c14o6/xkcd_lisp/d9szjnc/)
as if it were some kind of mind-expanding psychedelic. They do this even though
Lisp is now the second-oldest programming language in widespread use, younger
only than Fortran, and even then by just one year.[^1] Imagine if your job were
to promote some new programming language on behalf of the organization or team
that created it. Wouldn't it be great if you could convince everyone that your
new language had divine powers? But how would you even do that? How does a
programming language come to be known as a font of hidden knowledge? 

How did Lisp get to be this way?

![Byte Magazine Cover, August, 1979.](/images/byte_lisp.jpg)
_The cover of Byte Magazine, August, 1979._

## Theory A: The Axiomatic Language
John McCarthy, Lisp's creator, did not originally intend for Lisp to be an
elegant distillation of the principles of computation. But, after one or two
fortunate insights and a series of refinements, that's what Lisp became. Paul
Graham—we will talk about him some more later—has written that, with Lisp,
McCarthy "did for programming something like what Euclid did for geometry."[^2]
People might see a deeper meaning in Lisp because McCarthy built Lisp out of
parts so fundamental that it is hard to say whether he invented it or
discovered it.

McCarthy began thinking about creating a language during the 1956 Darthmouth
Summer Research Project on Artificial Intelligence. The Summer Research Project
was in effect an ongoing, multi-week academic conference, the very first in the
field of artificial intelligence. McCarthy, then an assistant professor of
Mathematics at Dartmouth, had actually coined the term "artificial
intelligence" when he proposed the event.[^3] About ten or so people attended
the conference for its entire duration.[^4] Among them were Allen Newell and
Herbert Simon, two researchers affiliated with the RAND Corporation and
Carnergie Mellon that had just designed a language called IPL.

Newell and Simon had been trying to build a system capable of generating proofs
in propositional calculus. They realized that it would be hard to do this while
working at the level of the computer's native instruction set, so they decided
to create a language—or, as they called it, a "psuedo-code"—that would help
them more naturally express the workings of their "Logic Theory Machine."[^5]
Their language, called IPL for "Information Processing Language", was more of a
high-level assembly dialect then a programming language in the sense we mean
today. Newell and Simon, perhaps referring to Fortran, noted that other
"pseudo-codes" then in development were "preoccupied" with representing
equations in standard mathematical notation.[^6] Their language focused instead
on representing sentences in propositional calculus as lists of symbolic
expressions. Programs in IPL would basically leverage a series of
assembly-language macros to manipulate and evaluate expressions within one or
more of these lists.

McCarthy thought that having algebraic expressions in a language,
Fortran-style, would be useful. So he didn't like IPL very much.[^7] But he
thought that symbolic lists were a good way to model problems in artificial
intelligence, particularly problems involving deduction. This was the germ of
McCarthy's desire to create an algebraic list processing language, a language
that would resemble Fortran but also be able to process symbolic lists like
IPL.

Of course, Lisp today does not resemble Fortran. Over the next few years,
McCarthy's ideas about what an ideal list processing language should look like
evolved. His ideas began to change in 1957, when he started writing routines
for a chess-playing program in Fortran. The prolonged exposure to Fortran
convinced McCarthy that there were several infelicities in its design, chief
among them the awkward `IF` statement.[^8] McCarthy invented an alternative,
the "true" conditional expression, which returns sub-expression A if the
supplied test succeeds and sub-expression B if the supplied test fails—and
which _also_ only evaluates the sub-expression that actually gets returned.
During the summer of 1958, when McCarthy worked to design a program that could
perform differentiation, he realized that his "true" conditional expression
made writing recursive functions easier and more natural.[^9] The
differentiation problem also prompted McCarthy to devise the _maplist_
function, which takes another function as an argument and applies it to all the
elements in a list.[^10] This was useful for differentiating sums of
arbitrarily many terms.

None of these things could be expressed in Fortran, so, in the fall of 1958,
McCarthy set some students to work implementing Lisp. Since McCarthy was now an
assistant professor at MIT, these were all MIT students. As McCarthy and his
students translated his ideas into running code, they made changes that further
simplified the language. The biggest change involved Lisp's syntax. McCarthy
had originally intended for the language to include something called
"M-expressions," which would be a layer of syntactic sugar that made Lisp's
syntax resemble Fortran's. Though M-expressions could be translated to
S-expressions—the basic lists enclosed by parentheses that Lisp is known for—
S-expressions were really a low-level representation meant for the machine. The
only problem was that McCarthy had been denoting M-expressions using square
brackets, and the IBM 026 keypunch that McCarthy's team used at MIT did not
have any square bracket keys on its keyboard.[^11] So the Lisp team stuck with
S-expressions, using them to represent not just lists of data but function
applications too. McCarthy and his students also made a few other
simplificiations, including a switch to prefix notation and a memory model
change that meant the language only had one real type.[^12]

In 1960, McCarthy published his famous paper on Lisp called "Recursive
Functions of Symbolic Expressions and Their Computation by Machine." By that
time, the language had been pared down to such a degree that McCarthy realized
he had the makings of "an elegant mathematical system" and not just another
programming language.[^13] He later wrote that the many simplifications that
had been made to Lisp turned it "into a way of describing computable functions
much neater than the Turing machines or the general recursive definitions used
in recursive function theory."[^14] In his paper, he therefore presented Lisp
both as a working programming language and as a formalism for studying the
behavior of recursive functions. 

McCarthy explained Lisp to his readers by building it up out of only a very
small collection of rules. Paul Graham later retraced McCarthy's steps, using
more readable language, in his essay ["The Roots of
Lisp"](http://languagelog.ldc.upenn.edu/myl/llog/jmc.pdf). Graham is able to
explain Lisp using only seven primitive operators, two different notations for
functions, and a half-dozen higher-level functions defined in terms of the
primitive operators. That Lisp can be specified by such a small sequence of
basic rules no doubt contributes to its mystique. Graham has called McCarthy's
paper an attempt to "axiomatize computation."[^15] I think that is a great way
to think about Lisp's appeal. Whereas other languages have clearly artificial
constructs denoted by reserved words like `while` or `typedef` or `public
static void`, Lisp's design almost seems entailed by the very logic of
computing. This quality and Lisp's original connection to a field as esoteric
as "recursive function theory" should make it no surprise that Lisp has so much
prestige today.

## Theory B: Machine of the Future
Two decades later, Lisp had become, according to the famous [_Hacker's
Dictionary_](https://en.wikipedia.org/wiki/Jargon_File), the "mother tongue" of
artificial intelligence research. Early on, Lisp spread quickly, probably
because its regular syntax made implementing it on new machines relatively
straightforward. Later, researchers would keep using it because of how well it
handled symbolic expressions, important in an era when so much of artificial
intelligence was symbolic. Lisp was used in seminal artificial intelligence
projects like the [SHRDLU natural language
program](https://hci.stanford.edu/winograd/shrdlu/), the [Macsyma algebra
system](https://en.wikipedia.org/wiki/Macsyma), and the [ACL2 logic
system](https://en.wikipedia.org/wiki/ACL2). 

By the mid-1970s, though, artificial intelligence researchers were running out
of computer power. The PDP-10, in particular—everyone's favorite machine for
artificial intelligence work—had an 18-bit address space that increasingly was
insufficient for Lisp AI programs.[^16] Many AI programs were also supposed to
be interactive, and making a demanding interactive program perform well on a
time-sharing system was challenging. The solution, originally proposed by Peter
Deutsch at MIT, was to engineer a computer specifically designed to run Lisp
programs. These Lisp machines, as I described in [my last post on Chaosnet]({%
link _posts/2018-09-30-chaosnet.md %}), would give each user a dedicated
processor optimized for Lisp. They would also eventually come with development
environments written entirely in Lisp for hardcore Lisp programmers. Lisp
machines, devised in an awkward moment at the tail of the minicomputer era but
before the full flowering of the microcomputer revolution, were
high-performance personal computers for the programming elite.

For a while, it seemed as if Lisp machines would be the wave of the future.
Several companies sprang into existence and raced to commercialize the
technology. The most successful of these companies was called Symbolics,
founded by veterans of the MIT AI Lab. Throughout the 1980s, Symbolics produced
a line of computers known as the 3600 series, which were popular in the AI
field and in industries requiring high-powered computing. The 3600 series
computers featured large screens, bit-mapped graphics, a mouse interface, and
[powerful graphics and animation software](https://youtu.be/gV5obrYaogU?t=201).
These were impressive machines that enabled impressive programs. For example,
Bob Culley, who worked in robotics research and contacted me via Twitter, was
able to implement and visualize a path-finding algorithm on a Symbolics 3650 
in 1985. He explained to me that bit-mapped graphics and object-oriented
programming (available on Lisp machines via [the Flavors
extension](https://en.wikipedia.org/wiki/Flavors_(programming_language))) were
very new in the 1980s. Symbolics was the cutting edge.

![Bob Culley's path-finding program.](/images/symbolics.jpg)
_Bob Culley's path-finding program._

As a result, Symbolics machines were outrageously expensive. The Symbolics 3600
cost $110,000 in 1983.[^16] So most people could only marvel at the power of
Lisp machines and the wizardy of their Lisp-writing operators from afar. But
marvel they did. _Byte Magazine_ featured Lisp and Lisp machines several times
from 1979 through to the end of the 1980s. In the August, 1979 issue, a special
on Lisp, the magazine's editor raved about the new machines being developed at
MIT with "gobs of memory" and "an advanced operating system."[^17] He thought
they sounded so promising that they would make the two prior years—which saw
the launch of the Apple II, the Commodore PET, and the TRS-80—look boring by
comparison. A half decade later, in 1985, a _Byte Magazine_ contributor
described writing Lisp programs for the "sophisticated, superpowerful Symbolics
3670" and urged his audience to learn Lisp, claiming it was both "the language
of choice for most people working in AI" and soon to be a general-purpose
programming language as well.[^18]

I asked Paul McJones, who has done lots of Lisp [preservation
work](http://www.softwarepreservation.org/projects/LISP/) for the Computer
History Museum in Mountain View, about when people first began talking about
Lisp as if it were a gift from higher-dimensional beings. He said that the
inherent properties of the language no doubt had a lot to do with it, but he
also said that the close association between Lisp and the powerful artificial
intelligence applications of the 1960s and 1970s probably contributed too. When
Lisp machines became available for purchase in the 1980s, a few more people
outside of places like MIT and Stanford were exposed to Lisp's power and the
legend grew. Today, Lisp machines and Symbolics are little remembered, but they
may have kept the mystique of Lisp alive into the 1990s.

## Theory C: Learn to Program

[^1]: https://web.archive.org/web/20140403021353/http://www-formal.stanford.edu/jmc/history/lisp/node6.html
[^2]: The Roots of Lisp, 1.
[^3]: https://www.independent.co.uk/news/obituaries/john-mccarthy-computer-scientist-known-as-the-father-of-ai-6255307.html
[^4]: Lisp Bulletin History. <http://www.artinfo-musinfo.org/scans/lb/lb3f.pdf>
[^5]: http://bitsavers.org/pdf/rand/ipl/P-850_Current_Developments_In_Complex_Information_Processing_May56.pdf, 19
[^6]: ibid.
[^7]: http://www.artinfo-musinfo.org/scans/lb/lb3f.pdf, 43
[^8]: McCarthy History, 5.
[^9]: ibid.
[^10]: McCarthy History, 6.
[^11]: http://www.artinfo-musinfo.org/scans/lb/lb3f.pdf, 45
[^12]: McCarthy History, 8.
[^13]: McCarthy History, 2.
[^14]: McCarthy History, 8.
[^15]: http://languagelog.ldc.upenn.edu/myl/llog/jmc.pdf, 11.
[^16]: HOPL, 22
[^17]: Byte, 154.
[^18]: Byte, April 1985, 209.
