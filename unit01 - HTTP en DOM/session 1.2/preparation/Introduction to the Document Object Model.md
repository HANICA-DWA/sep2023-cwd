
# Intro: What's the DOM (and why)?

_by Robert Holwerda_

(:boom: Vergeet niet vragen te bedenken voor de [Q&A](https://dwa-courses.firebaseapp.com/qna_cwd_1.2.html)!)


To a client-side JavaScript developer, the Document Object Model is one of the fundamental components of the browser. Basically, it's the _data structure_ browsers use internally to keep track of all the HTML-elements on a page, including their attributes and their text content. As a developer, you manipulate this data structure to change the web page.

### Is it a tree, or an interface?

Many descriptions of the DOM define it using terms such as "interface" or "tree". Both are correct, but the starting point in understanding the DOM is the fact that it's just a bunch of objects (in the object oriented programming sense) that refer to each other. There is one special feature of these objects: changes your JavaScript code make to them, will probably result in a visible change to the web page that the user is looking at. Here's a very simple example of a piece of DOM manipulation code:

```js
   document.body.style.backgroundColor="green";
```

In this client side JS code, `document` stands for the entire page (including the stuff in the HTML HEAD element). You've probably already guessed what this code does. You see that we're just navigating a JavaScript object structure: The `document` object refers to an object through an instance variable called `body`. Similarly, the object that `body` refers to, refers to an object through it's `style` instance variable. That object, in turn, has an instance variable called `backgroundColor` which, apparently, can refer to a string.
But: changing this string will result in a difference in the page on the screen.  
So it's not just a regular data structure. This is the one data structure that determines what the user sees on screen. This is why people often call the DOM an _interface_: It's the way the JavaScript code can tell the browser what to change on the page.  

People who explain the DOM by saying that it's a tree are not wrong either. A web page has a nested structure, like the file-system on your hard disk: Instead of a hierarchy of folders containing files and other folders, in a web page, we have a hierarchy of HTML elements containing text, attributes _and other HTML elements_. So the objects that make up the DOM form a tree structure of objects (representing page elements) referring to objects representing attributes, pieces of text, or other page elements.

### Parsing HTML into DOM

At first, this tree structure reaches the browser in a long string of text: the HTML file that the web server sent to the browser. But a string is not a useful way to represent a interesting hierarchy of information in memory. It would be inconvenient to programmers and it would be slow. Imagine sorting an HTML table on the page by having to cut pieces from a very long string and inserting them into that same string in other locations.  
So the first thing every web browser does when it receives the HTML text from the network, is to convert the information in it into a data structure that's made up of objects, arrays, numbers and strings. This process is called _parsing_, and the piece of software that knows how to do this is called a _parser_.

Parsing is actually something that happens a lot behind the scenes in your computer. Almost all methods for transferring information between two programs (or between two computers, or from memory to a disk) will only transfer streams of ones and zeroes. Files on disk are such streams, but internet connections too. Text files (or text messages) fit this way of communicating perfectly.  
So when one program needs to transmit a data structure (or store that data structure on disk), a common way of doing this is to convert the data structure into text and then convert the text into a stream of ones and zeroes. The receiving party will first have to convert the ones and zeroes to text (the OS will do this for you) and then convert the text into the data structure. This final step is the parsing step.  
Parsers exist in other places besides your browser: your database has a parser to convert (SQL) queries. When your program receives the data from the DB, it will arrive as a bit stream that also needs to be parsed. When you compile Java code, the Java text is parsed before any code is generated. The same goes for JavaScript code in the browser. In fact, the browser contains quite a few parsers: besides the ones for JavaScript and HTML, there are parsers for for CSS, SVG, JSON, XML, HTTP-headers etc.

The DOM is basically the output of the HTML parser. It is also the input of for the layout and drawing components of the browser. For a single web page, HTML parsing happens at the start when the HTML arrived from the server, but also whenever JavaScript code inserts HTML text into the DOM (using the `innerHTML` property). The browser components that use the DOM as input (the layout component and the drawing component), run more often: every time one of the values in one of the DOM's objects changes, or DOM objects are added or removed, the browser will update what the user sees on the screen.

### Just a little bit of DOM

Even though everything a JavaScript program can do to a web page happens through the DOM, many web developers don't like the DOM. It's not a bad concept, but the people at the W3C who designed it weren't very good at designing programmer friendly APIs. To most developers, the DOM is an unfriendly hassle. Programming the DOM feels a lot more complicated than it should be. There are legitimate reasons for it to be, but that doesn't make it less of a pain in the ☠@✴#.  
There's another reason programmers don't like the DOM: browsers have annoying differences in the way they implement the DOM. Similar objects have different methods and variables in different browsers; some objects or features are missing from some browsers and more problems like that.  
Most developers started using JavaScript libraries to do DOM manipulation for them. JQuery became the most important one. It hides differences between browsers and provides a much more comfortable way of programming than directly accessing the DOM itself.  
In this semester, however, we will be using a client side _framework_ instead of JQuery. Frameworks (such as AngularJS or EmberJS) are much more helpful (than JQuery) in structuring ever more complex client side code. But, like JQuery, they also provide features that allow the developer to avoid accessing the DOM directly.  

So why study the DOM, if everyone avoids programming directly with it? Because you cannot understand these libraries and frameworks properly if you don't understand the DOM. The feature sets of both JQuery and Angular are inspired by the way the DOM works. They are documented for people who understand the DOM. And, in a few years, the frameworks that are popular right now will have been replaced by new ones. Learning those new libraries and frameworks will probably not require any knowledge of JQuery of AngularJS, but they will definitely require knowledge of the DOM.  
The complete set of methods and objects and features of the DOM is big and complicated. However, a basic understanding that focusses on the fundamentals is all that's required to be able to understand DOM related JavaScript libraries or frameworks. Once you're familiar with the fundamentals of the DOM, you will have no trouble learning all the bells and whistles by yourself.

### DOM levels

There are several versions of the DOM. These versions are called _levels_.
* **DOM level 0** is basically what existed in very old browsers. Much of DOM level 0 is still supported by browsers, but developers should avoid those features.
* **DOM level 1** Almost everything in DOM level 0 is also in DOM level 1, but better. It is also very old.
* **DOM level 2** is what's being used in current browsers. It is much more complicated than DOM level 1, but this is the one we'll focus on.
* **DOM level 3** is not very interesting. It came out in 2004, but was never fully implemented in all major browsers.

Then there is the issue that some part of the DOM's commands and methods are specific to HTML features (e.g. about forms or styling), but much of the DOM's design is not: Many aspects of the DOM are designed to work with any XML-like language. In the browser we use the DOM almost exclusively with HTML, but you could use DOM commands with, for instance, SVG (Scalable Vector Graphics). One consequence of this is that the documentation on the DOM is often very abstract and not very accessible to many web developers. Never mind -- yet another reason to focus on using a framework instead of only the DOM in the weeks ahead. But, the fundamentals of the DOM are the fundamentals of what a web developer can do in a browser. So let's see some DOM first.

Here's a video (in Dutch) that shows how to view and manipulate the DOM using the Developer Tools of your browser: ["De DOM in de browser bekijken"](https://www.youtube.com/watch?v=yuvQDEoUkss)
