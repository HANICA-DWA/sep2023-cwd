# Unit 4: More React

- [Unit 4: More React](#unit-4-more-react)
  - [Session 4-1: React fundamentals](#session-4-1-react-fundamentals)
    - [Preparation 1: Read some more about React fundamentals](#preparation-1-read-some-more-about-react-fundamentals)
    - [Preparation 2: Q\&A](#preparation-2-qa)
    - [Lesplan](#lesplan)
  - [Session 4-2: AJAX](#session-4-2-ajax)
    - [Preparation 1: View a video about AJAX](#preparation-1-view-a-video-about-ajax)
    - [Preparation 2: Read about AJAX and Fetch](#preparation-2-read-about-ajax-and-fetch)
    - [Preparation 3: ½ Q\&A](#preparation-3--qa)
    - [Preparation 4: Finish the preferences dialog](#preparation-4-finish-the-preferences-dialog)
    - [Lesplan](#lesplan-1)
  - [Sessie 4-3: Small-test](#sessie-4-3-small-test)
    - [Voorbereiding](#voorbereiding)
    - [Lesplan](#lesplan-2)

## Session 4-1: React fundamentals

### Preparation 1: Read some more about React fundamentals

From the series on _Main Concepts_ in the official React documentation, read:

- [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)
- [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- [Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)
- [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)
- [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [Thinking In React](https://react.dev/learn/thinking-in-react)

_Don't forget to think of Q&A questions or discussion items while reading!_

### Preparation 2: Q&A

Please post 2 questions, or discussion items [here](https://dwa-courses.firebaseapp.com/qna_cwd_4.1.html).

### Lesplan

- **Q&A** -- We'll try to answer as many of your wonderful questions as time will allow.
- **Workshop** -- Create the preferences forms as it was shown in class. [Here are the step-by-step instructions.](https://dwa-courses.firebaseapp.com/assignment_cwd_4.1.html) In the [preparations folder](session%204.1/workshop) you'll find some instructions, and the HTML and CSS that should help you along.
  **This is an 'assignment'**, so you _have to do this_. At the end of the instructions page, there's a box for submitting a commit-URL with the new work.

## Session 4-2: AJAX

Because XMLHttpRequest does not have a [very friendly easy API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange), there are many Javascript libraries that make doing HTTP requests a little easier. Among the most popular are [Axios](https://axios-http.com/), [SuperAgent](https://github.com/visionmedia/superagent) and [JQuery](https://jquery.com/).

### Preparation 1: View a video about AJAX

AJAX is an old jargon-term among web developers.
Officially, it stands for "Asynchronous Javascript And XML", but most developers used it for either HTML, or JSON, not XML. Less formally, AJAX means:

**Using Javascript to send HTTP requests from the browser to the server _without reloading the entire web page_, and then processing the response with Javascript (asynchronously).**

The original AJAX technology was a browser-addition by Microsoft, that they used for a web version of Outlook, back in 2000. The addition was called `XMLHttpRequest`, and later other browser makers started supporting it too. For about 15 years, `XMLHttpRequest` was _the way_ to do AJAX, even if you didn't use XML.

In recent years, browsers have started supporting a successor to XMLHttpRequest, called the `fetch API`. It has three advantages over `XMLHttpRequest`:

1. It is easier to use, and requires less typing to get simple requests done.
1. It uses Promises, making is easier and more flexible to deal with the asynchronous nature of network communication (especially when handling errors).
1. It is stricter about some security issues:
   - It does not send cookies by default (although you can tell it to).
   - It will, by default, not load data from a different server than the one that the current page came from. Here too, you _can_ ask `fetch` to do it anyway, but you need cooperation from the server. If your page came from `www.example.com`, and your page's Javascript uses `fetch` to get data from `www.other.com`, the request will only succeed if the response from `www.other.com` contains an HTTP-header explicitly telling the browser that it is OK with requests coming from `www.example.com`. This mechanism is called [`Cross-Origin Resource Sharing` (CORS)](https://medium.com/@baphemot/understanding-cors-18ad6b478e2b).

**Watch [JavaScript ES6 Fetch API](https://www.youtube.com/watch?v=lTpa6r-JBhk)** (7 minutes) to see some examples of `fetch` in action.

The server used in the video (<https://jsonplaceholder.typicode.com/>) is public for everyone, and you can try the examples yourself. Can you create a version of the same code that uses _async/await_, instead of `.then( ... )`, to handle Promise results?

### Preparation 2: Read about AJAX and Fetch

Read these two short texts. The first is about `fetch`, and the second about using AJAX in React:

- [Understanding the Fetch API](https://flaviocopes.com/fetch-api/) by Flavio Copes.
- [Fetching Data in React with useEffect](https://maxrozen.com/fetching-data-react-with-useeffect)

### Preparation 3: ½ Q&A

Please post at least 1 question or discussion item about Fetch and React [here](https://dwa-courses.firebaseapp.com/qna_cwd_4.2.html).

### Preparation 4: Finish the preferences dialog

If you couldn't finish the [Preferences Dialog assignment](https://dwa-courses.firebaseapp.com/assignment_cwd_4.1.html) in class, make sure you've finished it before the next session in class.

### Lesplan

- **Q&A** -- We'll try to answer as many of your wonderful questions as time will allow.
- **Homework discussion** -- We'll look at some of the Preferences Dialogs that you created in the previous session and discuss it.
- **Demo** -- AJAX and React application state:  
  We'll demonstrate how to add AJAX to the RrHN client and how to deal with (this) state in a React application.
- **Workshop** -- AJAX and React application state  
  Enhance your RrHN client to load live data from the actual Hacker News API, and store item statuses to a server. [Here are the instructions](https://dwa-courses.firebaseapp.com/assignment_cwd_4.2.html).
  **This is an 'assignment'**, so you _have to do this_. At the end of the instructions page, there's a box for submitting a commit-URL with the new work.

## Sessie 4-3: Small-test

### Voorbereiding

From the React documentation:

- [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)
- [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- [Reacting to Input with State](https://react.dev/learn/reacting-to-input-with-state)
- [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)
- [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [Thinking In React](https://react.dev/learn/thinking-in-react)

And from the article about fetch with useEffect:

- [Fetching Data in React with useEffect](https://maxrozen.com/fetching-data-react-with-useeffect)

### Lesplan

- **The small-test prep:** Your last opportunity to ask questions before the small-test.
- **The small-test**
- **Small-test review**: What were the correct answers to the test questions?
- Finish your **workshop assignments**, if you haven't done so already.
