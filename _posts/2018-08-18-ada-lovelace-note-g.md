---
title: What Did Ada Lovelace's Program Actually Do?
description: >
   In 1843, Ada Lovelace published the first nontrivial program. How did it
   work?
tags: ['Papers']
has_math: true
year: 1843
---
The story of Microsoft's founding is one of the most famous episodes in
computing history. In 1975, Paul Allen flew out to Albuquerque to demonstrate
the BASIC interpreter that he and Bill Gates had written for the Altair
microcomputer. Because neither of them had a working Altair, Allen and Gates
tested their interpreter using an emulator that they wrote and ran on Harvard's
computer system. The emulator was based on nothing more than the published
specifications for the Intel 8080 processor. When Allen finally ran their
interpreter on a real Altair—in front of the person he and Gates hoped would
buy their software—he had no idea if it would work. But it did. The next month,
Allen and Gates officially founded their new company.

Over a century before Allen and Gates wrote their BASIC interpreter, Ada
Lovelace wrote and published a computer program. She, too, wrote a program for
a computer that had only been described to her. But her program, unlike the
Microsoft BASIC interpreter, was never run, because the computer she was
targeting was never built.

<!--more-->

Lovelace's program is often called the world's first computer program. Not
everyone agrees that it should be called that. Lovelace's legacy, it turns out,
is one of computing history's most hotly debated subjects. Walter Isaacson has
written that the dispute about the extent and merit of her contributions
constitutes a "minor academic specialty."[^1] Inevitably, the fact that
Lovelace was a woman has made this dispute a charged one. Historians have cited
all kinds of primary evidence to argue that the credit given to Lovelace is
either appropriate or undeserved. But they seem to spend less time explaining
the technical details of her published writing, which is unfortunate, because
the technical details are the most fascinating part of the story. Who wouldn't
want to know exactly how a program written in 1843 was supposed to work?

In fairness, Lovelace's program is not easy to explain to the layperson without
some hand-waving. It's the intricacies of her program, though, that make it so
remarkable. Whether or not she ought to be known as "the first programmer," her
program was specified with a degree of rigor that far surpassed anything that
came before. She thought carefully about how operations could be organized into
groups that could be repeated, thereby inventing the loop. She realized how
important it was to track the state of variables as they changed, introducing a
notation to illustrate those changes. As a programmer myself, I'm startled to
see how much of what Lovelace was doing resembles the experience of writing
software today.

So let's take a closer look at Lovelace's program. She designed it to calculate
the Bernoulli numbers. To understand what those are, we have to go back a
couple millennia to the genesis of one of mathematics' oldest problems.

## Sums of Powers
The Pythagoreans lived on the shores of the Mediterranean and worshiped
numbers. One of their pastimes was making triangles out of pebbles.

![](/images/triangular_numbers1.png)

One pebble followed by a row of two pebbles makes a triangle
containing three pebbles. Add another row of three pebbles and you get a
triangle containing six pebbles. You can continue like this, each time adding a
row with one more pebble in it than the previous row. A triangle with six rows
contains 21 pebbles. But how many pebbles does a triangle with 423 rows
contain?

What the Pythagoreans were looking for was a way to calculate the following
without doing all the addition:

$$1 + 2 + 3 + \cdots + n$$

They eventually realized that, if you place two triangles of the same size up
against each other so that they form a rectangle, you can find the area of the
rectangle and divide by two to get the number of pebbles in each of the
triangles:

![](/images/triangular_numbers2.png)

$$1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}$$

Archimedes later explored a similar problem. He was interested in the following
series:

$$1^2 + 2^2 + 3^2 + \cdots + n^2$$

You might visualize this series by imagining a stack of progressively larger
squares (made out of tiny cubes), one on top of the other, forming a pyramid.
Archimedes wanted to know if there was an easy way to tell how many cubes would
be needed to construct a pyramid with, say, 423 levels. He recorded a solution
that also permits a geometrical interpretation.[^2]

Three pyramids can be fit together to form a rectangular prism with a tiny,
one-cube-high extrusion at one end. That little extrusion happens to be a
triangle that obeys the same rules that the Pythagoreans used to make their
pebble triangles. ([This video](https://www.youtube.com/watch?v=aXbT37IlyZQ)
might be a more helpful explanation of what I mean.) So the volume of the whole
shape is given by the following equation:

$$3(1^2 + 2^2 + 3^2 + \cdots + n^2) = (n+1)n^2 + (1 + 2 + 3 + \cdots + n)$$

By substituting the Pythagorean equation for the sum of the first _n_
integers and doing some algebra, you get this:

$$1^2 + 2^2 + 3^2 + \cdots + n^2 = \frac{n(n+1)(n+2)}{6}$$

In 499, the Indian mathematician and astronomer, Aryabhata, published a work
known as the _Aryabhatiya_, which included a formula for calculating the sum of
cubes:

$$1^3 + 2^3 + 3^3 + \cdots + n^2 = (1 + 2 + 3 + \cdots + n)^2$$

A formula for the sum of the first _n_ positive integers raised to the fourth
power wasn't published for another 500 years.[^3]

You might be wondering at this point if there is a general method for finding
the sum of the first _n_ integers raised to the _kth_ power.
Mathematicians were wondering too. Johann Faulhaber, a German mathematician and
slightly kooky numerologist, was able to calculate formulas for sums of
integers up to the 17th power, which he published in 1631. But this may have
taken him years and he did not state a general solution.[^4] Blaise Pascal
finally outlined a general method in 1665, though it depended on first knowing
how to calculate the sum of integers raised to every lesser power.[^5] To
calculate the sum of the first _n_ positive integers raised to the sixth power,
for example, you would first have to know how to calculate the sum of the first
_n_ positive integers raised to the fifth power.

A more practical general solution was stated in the posthumously published work
of Swiss mathematician Jakob Bernoulli, who died in 1705. Bernoulli began by
deriving the formulas for calculating the sums of the first _n_ positive
integers to the first, second, and third powers.[^6] These he gave in
polynomial form, so they looked like the below:

$$
1 + 2 + 3 + \cdots + n = \frac{1}{2}n^2 + \frac{1}{2}n \\

1^2 + 2^2 + 3^2 + \cdots + n^2 = \frac{1}{3}n^3 + \frac{1}{2}n^2 + \frac{1}{6}n
\\

1^3 + 2^3 + 3^3 + \cdots + n^3 = \frac{1}{4}n^4 + \frac{1}{2}n^3 +
\frac{1}{4}n^2
$$

Using Pascal's Triangle, Bernoulli realized that these polynomials followed a
predictable pattern. Essentially, Bernoulli broke the coefficients of each
term down into two factors, one of which he could determine using Pascal's
Triangle and the other which he could derive from the interesting property that
all the coefficients in the polynomial seemed to always add to one. Figuring
out the exponent that should be attached to each term was no problem,
because that also followed a predictable pattern. The factor of each
coefficient that had to be calculated using the sums-to-one rule formed a
sequence that became known as the Bernoulli numbers.

Bernoulli's discovery did not mean that it was now trivial to calculate the sum
of the first positive _n_ integers to any given power. In order to calculate
the sum of the first positive _n_ integers raised to the _kth_ power,
you would need to know every Bernoulli number up to the _kth_ Bernoulli
number. Each Bernoulli number could only be calculated if the previous
Bernoulli numbers were known. But calculating a long series of Bernoulli
numbers was significantly easier than deriving each sum of powers formula in
turn, so Bernoulli's discovery was a big advance for mathematics.

## Babbage
Charles Babbage was born in 1791, nearly a century after Bernoulli died. I've
always had some vague idea that Babbage designed but did not build a mechanical
computer. But I've never entirely understood how that computer was supposed to
work. The basic ideas, as it happens, are not that difficult to grasp, which is
good news. Lovelace's program was designed to run on one of Babbage's machines,
so we need to take another quick detour here to talk about how those machines
worked.

Babbage designed two separate mechanical computing machines. His first machine
was called the Difference Engine. Before the invention of the pocket
calculator, people relied on logarithmic tables to calculate the product of
large numbers. (There is a good [Numberphile
video](https://youtu.be/VRzH4xB0GdM) on how this was done.) Large logarithmic
tables are not difficult to create, at least conceptually, but the sheer number
of calculations that need to be done in order to create them meant that in
Babbage's time they often contained errors. Babbage, frustrated by this, sought
to create a machine that could tabulate logarithms mechanically and therefore
without error.[^7]

The Difference Engine was not a computer, because all it did was add and
subtract. It took advantage of a method devised by the French mathematician
Gaspard de Prony that broke the process of tabulating logarithms down into
small steps.[^8] These small steps involved only addition and subtraction,
meaning that a small army of people without any special mathematical aptitude
or training could be employed to produce a table. De Prony's method, known as
the method of divided differences, could be used to tabulate any polynomial.
Polynomials, in turn, could be used to approximate logarithmic and
trigonometric functions.

To get a sense of how this process worked, consider the following simple
polynomial function:

$$y = x^2 + 1$$

The method of divided differences involves finding the difference between each
successive value of _y_ for different values of _x_. The differences
between these differences are then found, and possibly the differences between
those next differences themselves, until a constant difference appears. These
differences can then be used to get the next value of the polynomial simply by
adding.

Because the above polynomial is only a second-degree polynomial, we are able to
find the constant difference after only two columns of differences:

<div markdown="block" class="table-container">
| x      | y      | Diff 1 | Diff 2 |
| ------ | ------ | ------ | ------ |
| 1      | 2      |        |        |
| 2      | 5      | 3      |        |
| 3      | 10     | 5      | 2      |
| 4      | 17     | 7      | 2      |
| 5      | ?      | ?      | 2      |
| ...    | ...    | ...    | ...    |

</div>

Now, since we know that the constant difference is 2, we can find the value of
_y_ when _x_ is 5 through addition only. If we add 2 to 7, the last entry in
the "Diff 1" column, we get 9. If we add 9 to 17, the last entry in the _y_
column, we get 26, our answer.

Babbage's Difference Engine had, for each difference column in a table like the
one above, a physical column of gears. Each gear was a decimal digit and one
whole column was a decimal number. The Difference Engine had eight columns of
gears, so it could tabulate a polynomial up to the seventh degree. The columns
were initially set with values matching an early row in the difference table,
worked out ahead of time. A human operator would then turn a crank shaft,
causing the constant difference to propagate through the machine as the value
stored on each column was added to the next.

Babbage was able to build a small section of the Difference Engine and use it
to demonstrate his ideas at parties.[^9] But even after spending an amount of
public money equal to the cost of two large warships, he never built the entire
machine.[^10] Babbage could not find anyone in the early 1800s that could make
the number of gears he needed with sufficient accuracy. A working Difference
Engine would not be built until the 1990s, after the advent of precision
machining. There is [a great video on
YouTube](https://www.youtube.com/watch?v=BlbQsKpq3Ak) demonstrating a working
Difference Engine on loan to the Computer History Museum in San Francisco,
which is worth watching even just to listen to the marvelous sounds the machine
makes while it runs.

Babbage eventually lost interest in the Difference Engine when he realized that
a much more powerful and flexible machine could be built. His Analytical Engine
was the machine that we know today as Babbage's mechanical computer. The
Analytical Engine was based on the same columns of gears used in the Difference
Engine, but whereas the Difference Engine only had eight columns, the
Analytical Engine was supposed to have many hundreds more. The Analytical
Engine could be programmed using punched cards like a Jacquard Loom and could
multiply and divide as well as add and subtract. In order to perform one of
these operations, a section of the machine called the "mill" would rearrange
itself into the appropriate configuration, read the operands off of other
columns used for data storage, and then write the result back to another
column.

Babbage called his new machine the Analytical Engine because it was powerful
enough to do something resembling mathematical analysis. The Difference Engine
could tabulate a polynomial, but the Analytical Engine would be able to
calculate, for example, the coefficients of the polynomial expansion of another
expression. It was an amazing machine, but the British government wisely
declined to fund its construction. So Babbage went abroad to Italy to try to
drum up support for his idea.

## Notes by The Translator
In Turin, Babbage met Italian engineer and future prime minister Luigi
Menabrea. He persuaded Menabrea to write an outline of what the Analytical
Engine could accomplish. In 1842, Menabrea published a paper on the topic in
French. The following year, Lovelace published a translation of Menabrea's
paper into English.

Lovelace, then known as Ada Byron, first met Babbage at a party in 1833, when
she was 17 and he was 41.[^11] Lovelace was fascinated with Babbage's
Difference Engine. She could also understand how it worked, because she had
been extensively tutored in mathematics throughout her childhood. Her mother,
Annabella Milbanke, had decided that a solid grounding in mathematics would
ward off the wild, romantic sensibility that possessed Lovelace's father, Lord
Byron, the famous poet. After meeting in 1833, Lovelace and Babbage remained a
part of the same social circle and wrote to each other frequently.

Ada Byron married William King in 1835. King later became the Earl of Lovelace,
making Ada the Countess of Lovelace. Even after having three children, she
continued her education in mathematics, employing Augustus de Morgan, inventor
of De Morgan's laws, as her tutor.[^12] Lovelace saw the potential of
Babbage's Analytical Machine immediately and was eager to work with him to
promote the idea. A friend suggested that she translate Menabrea's paper for an
English audience.[^13]

Menabrea's paper gave a brief overview of how the Difference Engine worked,
then showed how the Analytical Engine would be a far superior machine. The
Analytical Engine would be so powerful that it could "form the product of two
numbers, each containing twenty figures, in _three minutes_"[^14] (emphasis in
the original). Menabrea gave further examples of the machine's capabilities,
demonstrating how it could solve a simple system of linear equations and
expand the product of two binomial expressions. In both cases, Menabrea
provided what Lovelace called "diagrams of development," which listed the
sequence of operations that would need to be performed to calculate the correct
answer.[^15] These were programs in the same sense that Lovelace's own program
was a program and they were originally published the year before. But as we
will see, Menabrea's programs were only simple examples of what was possible.
All of them were trivial in the sense that they did not require any kind of
branching or looping.

Lovelace appended a series of notes to her translation of Menabrea's paper that
together ran much longer than the original work. It was here that she made her
major contributions to computing. In Note A, which Lovelace attached to
Menabrea's initial description of the Analytical Engine, Lovelace explained at
some length and often in lyrical language the promise of a machine that could
perform arbitrary mathematical operations. She foresaw that a machine like the
Analytical Engine wasn't just limited to numbers and could in fact act on
any objects "whose mutual fundamental relations could be expressed by those of
the abstract science of operations, and which should be also susceptible of
adaptations to the action of the operating notation and mechanism of the
engine."[^16] She added that the machine might one day, for example, compose
music. This insight was all the more remarkable given that Menabrea saw the
Analytical Engine primarily as a tool for automating "long and arid
computation," which would free up the intellectual capacities of brilliant
scientists for more advanced thinking.[^17] The miraculous foresight that
Lovelace demonstrated in Note A is one major reason that she is celebrated
today.

The other famous note is Note G. Lovelace begins Note G by arguing that,
despite its impressive powers, the Analytical Machine cannot really be said to
"think." This part of Note G is what Alan Turing would later refer to as "Lady
Lovelace's Objection." Nevertheless, Lovelace continues, the machine can do
extraordinary things. To illustrate its ability to handle even more complex
problems, Lovelace provides her program calculating the Bernoulli numbers.

The full program, in the expanded "diagram of development" format that Lovelace
explains in Note D, can be seen
[here](https://upload.wikimedia.org/wikipedia/commons/c/cf/Diagram_for_the_computation_of_Bernoulli_numbers.jpg).
The program is essentially a list of operations, specified using the usual
mathematical symbols. It doesn't appear that Babbage or Lovelace got as far as
developing anything like a set of op codes for the Analytical Engine.

Though Lovelace was describing a method for computing the entire sequence of
Bernoulli numbers up to some limit, the program she provided only illustrated
one step of that process. Her program calculated a number that she called B7,
which modern mathematicians know as the eighth Bernoulli number. Her program
thus sought to solve the following equation:

$$
B_7 = -1(A_0 + B_1A_1 + B_3A_3 + B_5A_5)
$$

In the above, each term represents a coefficient in the polynomial formula for
the sum of integers to a particular power. Here that power is eight, since the
eighth Bernoulli number first appears in the formula for the sum of positive
integers to the eighth power. The B and A numbers represent the two kinds of
factors that Bernoulli discovered. B1 through B7 are all different Bernoulli
numbers, indexed according to Lovelace's indexing. A0 through A5 represent the
factors of the coefficients that Bernoulli could calculate using Pascal's
Triangle. The values of A0, A1, A3, and A5 appear below. Here _n_ represents
the index of the Bernoulli number in the sequence of odd-numbered Bernoulli
numbers starting with the first. Lovelace's program used _n_ = 4.

$$
A_0 = -\frac{1}{2} \cdot \frac{2n - 1}{2n + 1} \\
A_1 = \frac{2n}{2} \\
A_3 = \frac{2n(2n-1)(2n-2)}{2 \cdot 3 \cdot 4} \\
A_5 = \frac{2n(2n-1)(2n-2)(2n-3)(2n-4)}{2 \cdot 3 \cdot 4 \cdot 5 \cdot 6}
$$

I've created a
[translation](https://gist.github.com/sinclairtarget/ad18ac65d277e453da5f479d6ccfc20e)
of Lovelace's program into C, which may be easier to follow. Lovelace's program
first calculates A0 and the product B1A1. It then enters a loop that repeats
twice to calculate B3A3 and B5A5, since those are formed according to an
identical pattern. After each product is calculated, it is added with all the
previous products, so that by the end of the program the full sum has been
obtained.

Obviously the C translation is not an exact recreation of Lovelace's program.
It declares variables on the stack, for example, whereas Lovelace's variables
were more like registers. But it makes obvious the parts of Lovelace's program
that are so prescient. The C program contains two `while` loops, one nested
inside the other. Lovelace's program did not have `while` loops exactly, but
she made groups of operations and in the text of her note specified when they
should repeat. The variable `v10`, in the original program and in the C
translation, functions as a counter variable that decrements with each loop, a
construct any programmer would be familiar with. In fact, aside from the
profusion of variables with unhelpful names, the C translation of Lovelace's
program doesn't look that alien at all.

The other thing worth mentioning quickly is that translating Lovelace's program
into C was not that difficult, thanks to the detail present in her diagram.
Unlike Menabrea's tables, her table includes a column labeled "Indication of
change in the value on any Variable," which makes it much easier to follow the
mutation of state throughout the program. She adds a superscript index here to
each variable to indicate the successive values they hold. A superscript of
two, for example, means that the value being used here is the second value that
has been assigned to the variable since the beginning of the program.

## The First Programmer?
After I had translated Lovelace's program into C, I was able to run it on my
own computer. To my frustration, I kept getting the wrong result. After some
debugging, I finally realized that the problem wasn't the code that I had
written. The bug was in the original!

In her "diagram of development," Lovelace gives the fourth operation as `v5 /
v4`. But the correct ordering here is `v4 / v5`. This may well have been a
typesetting error and not an error in the program that Lovelace devised. All
the same, this must be the oldest bug in computing. I marveled that, for ten
minutes or so, unknowingly, I had wrestled with this first ever bug.

Jim Randall, another blogger that has [translated Lovelace's program into
Python](https://enigmaticcode.wordpress.com/tag/bernoulli-numbers/), has noted
this division bug and two other issues. What does it say about Ada Lovelace
that her published program contains minor bugs? Perhaps it shows that she
was attempting to write not just a demonstration but a real program. After all,
can you really be writing anything more than toy programs if you aren't also
writing lots of bugs?

One Wikipedia article calls Lovelace the first to publish a "complex
program."[^18] Maybe that's the right way to think about Lovelace'
accomplishment. Menabrea published "diagrams of development" in his paper a
year before Lovelace published her translation. Babbage also wrote more than
twenty programs that he never published.[^19] So it's not quite accurate to say
that Lovelace published the first program, though there's always room to
quibble about what exactly constitutes a "program." Even so, Lovelace's program
was miles ahead of anything else that had been published before. The longest
program that Menabrea presented was 11 operations long and contained no loops
or branches; Lovelace's program contains 25 operations and a nested loop (and
thus branching). Menabrea wrote the following toward the end of his paper:

> When once the engine shall have been constructed, the difficulty will be
> reduced to the making of the cards; but as these are merely the translation
> of algebraic formulae, it will, by means of some simple notation, be easy to
> consign the execution of them to a workman.[^20]

Neither Babbage nor Menabrea were especially interested in applying the
Analytical Engine to problems beyond the immediate mathematical challenges that
first drove Babbage to construct calculating machines. Lovelace saw that the
Analytical Engine was capable of much more than Babbage or Menabrea could
imagine. Lovelace also grasped that "the making of the cards" would not be a
mere afterthought and that it could be done well or done poorly. This is hard
to appreciate without understanding her program from Note G and seeing for
oneself the care she put into designing it. But having done that, you might
agree that Lovelace, even if she was not the very first programmer, was the
first programmer to deserve the title.

{% include subscribe.html %}

_Previously on TwoBitHistory..._

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">This week&#39;s post: Parsing Vim&#39;s prestigious pedigree!<a href="https://t.co/1YUszI5dIC">https://t.co/1YUszI5dIC</a></p>&mdash; TwoBitHistory (@TwoBitHistory) <a href="https://twitter.com/TwoBitHistory/status/1026240555062386689?ref_src=twsrc%5Etfw">August 5, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

[^1]: Walter Isaacson, The Innovators (New York: Simon & Schuster Paperbacks, 2015), 25.
[^2]: Janet Beery, "Sums of Powers of Positive Integers: Archimedes," Mathematical Association of America, accessed August 18, 2018, <https://www.maa.org/press/periodicals/convergence/sums-of-powers-of-positive-integers-archimedes-287-212-bce-greece-italy>.
[^3]: Janet Beery, "Sums of Powers of Positive Integers: Abu Ali Al-Hasan Ibn Al-Hasan Ibn Al-Haytham," Mathematical Association of America, accessed August 18, 2018, <https://www.maa.org/press/periodicals/convergence/sums-of-powers-of-positive-integers-abu-ali-al-hasan-ibn-al-hasan-ibn-al-haytham-965-1039-egypt>.
[^4]: Janet Beery, "Sums of Powers of Positive Integers: Conclusion," Mathematical Association of America, accessed August 18, 2018, <https://www.maa.org/press/periodicals/convergence/sums-of-powers-of-positive-integers-conclusion>.
[^5]: Janet Beery, "Sums of Powers of Positive Integers: Blaise Pascal," Mathematical Association of America, accessed August 18, 2018, <https://www.maa.org/press/periodicals/convergence/sums-of-powers-of-positive-integers-blaise-pascal-1623-1662-france>.
[^6]: Janet Beery, "Sums of Powers of Positive Integers: Jakob Bernoulli," Mathematical Association of America, accessed August 18, 2018, <https://www.maa.org/press/periodicals/convergence/sums-of-powers-of-positive-integers-jakob-bernoulli-1654-1705-switzerland>.
[^7]: Isaacson, 19.
[^8]: Isaacson, 20.
[^9]: Robert Scoble, "A Demo of Charles Babbage's Difference Engine," YouTube, June 17, 2010, accessed August 18, 2018, <https://www.youtube.com/watch?v=BlbQsKpq3Ak&feature=youtu.be&t=7m37s>.
[^10]: Isaacson, 22.
[^11]: Isaacson, 8.
[^12]: Isaacson, 17.
[^13]: Isaacson, 25.
[^14]: Luigi Menabrea, "Sketch of the Analytical Engine," Scientific Memoirs 3 (1843): 686, accessed August 18, 2018, <https://books.google.com/books/about/Scientific_Memoirs_Selected_from_the_Tra.html?id=qsY-AAAAYAAJ>.
[^15]: Ada Lovelace, "Sketch of the Analytical Engine," Scientific Memoirs 3 (1843): 712, accessed August 18, 2018, <https://books.google.com/books/about/Scientific_Memoirs_Selected_from_the_Tra.html?id=qsY-AAAAYAAJ>.
[^16]: Lovelace, 694.
[^17]: Menabrea, 690.
[^18]: "Bernoulli number," Wikipedia, accessed August 18, 2018, <https://en.wikipedia.org/wiki/Bernoulli_number>.
[^19]: Isaacson, 29.
[^20]: Menabrea, 689.
