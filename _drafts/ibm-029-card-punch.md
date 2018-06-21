---
title: The IBM 029 Card Punch
---

Lines of code longer than 80 characters drive me crazy. I appreciate that this
is pedantic. I've seen people on the internet make good arguments for why the
80-character limit ought to be respected even on our modern Retina-display
screens—it ensures that people can do things like compare three versions of the
same file side-by-side while resolving merge conflicts. But that hardly
justifies the visceral hatred I feel for even that one protruding 81st
character.

There was once a golden era in which it was basically impossible to go over the
80-character limit. The 80-character limit was a physical reality, because
there was no 81st column for an 81st character to fit in. Any programmers
attempting to name a function something like
`TakesTwoIntsAndAddsThemTogetherReturningTheResultAsAnotherInt()` would
discover, in a moment of delicious, slow-dawning horror, that they just _have_
to pick a better name because there literally isn't room for the whole
declaration.
<!--more-->

This golden era was the era of punch card programming. By the 1960s, IBM's
punch cards had set the standard and the standard was that punch cards had 80
columns. The 80-column standard survived into the teletype and dumb terminal
era and from there embedded itself into the nooks and crannies of our operating
systems. Today, when you launch your terminal emulator and open a new window,
odds are it will be 80 characters wide, even though we now have plenty of
screen real estate and tend to favor longer indentifiers over inscrutable
nonsense like `iswcntrl()`.

If questions on Quora are any indication, many people have trouble imagining
what it must have been like to program computers using punch cards. I will
admit that for a long time I also didn't understand how punch card programming
could have worked, because it struck me as awfully labor-intensive to punch all
those holes. This was a misunderstanding; programmers never punched holes in
cards the same way a train conductor does. They had card punch machines (also
known as key punches), which allowed them to punch holes in cards using a
typewriter-style keyboard. And card punches were hardly new technology—they
were around as early as the 1890s.

One of the most widely used card punch machines was the IBM 029. It is perhaps
the best remembered card punch today.

![](/images/ibm029.jpg)

The IBM 029 was released in 1964 as part of IBM's System/360 rollout.
System/360 was a family of computing systems and peripherals that would go on
to dominate the mainframe computing market in the late 1960s. Like many of the
other System/360 machines, the 029 was big. This was an era when the
distinction between computing machinery and furniture was blurry—the 029 was
not something you put on a table but an entire table in itself. The 029
improved upon its predecessor, the 026, by supporting new characters like
parentheses and by generally being quieter. It had cool electric blue
highlights and was flat and angular whereas the 026 had a '40s rounded,
industrial look. Another of its big selling points was that it could
automatically left-pad numeric fields with zeros, demonstrating that JavaScript
programmers were not the first programmers too lazy to do their own
left-padding.

But wait, you might say—IBM released a brand-new card punch in 1964? What about
that photograph of the Unix gods at Bell Labs using teletype machines in, like,
1970? Weren't card punching machines passé by the mid- to late-1960s? Well, it
might surprise you to know that the 029 was available in IBM's catalog until as
late as 1984.[^1] In fact, most programmers programmed using punch cards until
well into the 1970s. This doesn't make much sense given that there were people
using teletype machines during World War II. Indeed, the teletype is almost of
the same vintage as the card punch. The limiting factor, it turns out, was not
the availability of teletypes but the availability of computing time. What kept
people from using teletypes was that teletypes assumed an interactive, "online"
model of communication with the computer. Before Unix and the invention of
timesharing operating systems, your interactive session with a computer would
stop everyone else from using it, a delay potentially costing thousands of
dollars. So, instead, programmers wrote their programs offline using card punch
machines and then fed them into mainframe computers later as batch jobs. Punch
cards had the added benefit of being a cheap data store in an era where cheap,
reliable data storage was hard to come by.

So what was it actually like using an IBM 029 card punch? That's hard to
explain without first taking a look at the cards themselves. A typical punch
card had 12 rows and 80 columns. The bottom nine rows were the digit rows,
numbered one through nine. These rows had the appropriate digit printed in each
column. The top three rows, called the "zone" rows, consisted of two blank rows
and usually a zero row. Row 12 was at the very top of the card, followed by row
11, then rows zero through nine. This somewhat confusing ordering meant that
the top edge of the card was called the 12 edge while the bottom was called the
nine edge. A corner of each card was usually clipped to make it easier to keep
a stack of cards all turned around the right way.

![](/images/card.png)

When they were first invented, punch cards were meant to be punched with
circular holes, but IBM eventually realized that they could fit more columns on
a card if the holes were narrow rectangles. Different combinations of holes in
a column represented different characters. For human convenience, card punches
like the 029 would print each column's character at the top of the card at the
same time as punching the necessary holes. Digits were represented by one
punched hole in the appropriate digit row. Alphabetical and symbolic characters
were represented by a hole in a zone row and then a combination of one or two
holes in the digit rows. The letter A, for example, was represented by a hole
in the 12 zone row and another hole in the one row. This was an encoding of
sorts, sometimes called the Hollerith code, after the original inventor of the
punch card machine. The encoding allowed for only a relatively small character
set; lowercase letters, for example, were not represented. Some clever engineer
today might wonder why punch cards didn't just use a binary encoding—after all,
with 12 rows, you could encode over 4000 characters. The Hollerith code
was used instead because it ensured that no more than three holes ever appeared
in a single column. This preserved the structural integrity of the card. A
binary encoding would have entailed so many holes that the card would have
fallen apart.

Cards came in different flavors. By the 1960s, 80 columns was the standard, but
those 80 columns could be used to represent different things. The basic punch
card was unlabeled, but cards meant for COBOL programming, for example, divided
the 80 columns into fields. On a COBOL card, the last eight columns were
reserved for an identification number, which could be used to automatically
sort a stack of cards in the event that it had been dropped (apparently a
perennial hazard). Another column, column seven, could be used to indicate that
the statement on this card was a continuation of a statement on a previous
card. This meant that if you were truly desperate you could circumvent the
80-character limit, though whether a two-card statement translates to two lines
or one long line is unclear. FORTRAN cards were similar but had different
fields. Universities often watermarked the punch cards handed out by their
computing centers, while other kinds of designs were introduced for special
occasions like the [1976
bicentennial](http://www.jkmscott.net/data/Punched%20card%20013.jpg).

Ultimately the cards had to be read and understood by a computer. IBM sold a
System/360 peripheral called the IBM 2540 which could read up to 1000 cards per
minute.[^2] The IBM 2540 ran electrical brushes across the surface of each card
which made contact with a plate behind the cards wherever there was a hole.
Once read, the System/360 family of computers represented the characters on
each punch card using an 8-bit encoding called EBCDIC, which stood for Extended
Binary Coded Decimal Interchange Code. EBCDIC was a proper binary encoding, but
it still traced its roots back to the punch card via an earlier encoding called
BCDIC, a 6-bit encoding which used the low four bits to represent the digit
rows and the high two bits to represent the zone rows. Punch card programmers
would typically hand their cards to the actual computer operators, who would
feed the cards into the IBM 2540 and then hand the printed results back to the
programmer. The programmer usually didn't see the computer at all.

What the programmer did work with was the card punch. The 029 was not a
computer, but that doesn't mean that it wasn't a complicated machine. The best
way to understand what it was like using the 029 is to watch [this
video](https://www.youtube.com/watch?v=kaQmAybWn-w). I'm going to do my best to
summarize it here, but if you don't watch the video you will miss out on all
the wonderful clacking and whooshing.



[^1]: https://www-03.ibm.com/ibm/history/exhibits/vintage/vintage_4506VV4002.html
[^2]: http://bitsavers.informatik.uni-stuttgart.de/pdf/ibm/25xx/A21-9033-1_2540_Card_Punch_Component_Description_1965.pdf
