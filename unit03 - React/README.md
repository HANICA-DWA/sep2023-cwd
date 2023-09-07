# Unit 3: Introduction to React

- [Sessie 3-1: Introduction to React](#sessie-3-1-introduction-to-react)
  - [Voorbereiding 1: een React project starten](#voorbereiding-1-een-react-project-starten)
  - [Voorbereiding 2: npm en ES6 modules](#voorbereiding-2-npm-en-es6-modules)
  - [Voorbereiding 3: Q&A over tools en modules](#voorbereiding-3-qa-over-tools-en-modules)
  - [Voorbereiding 4: Online tutorial about React](#voorbereiding-4-online-tutorial-about-react)
  - [Voorbereiding 5: Q&A about the online tutorial](#voorbereiding-5-qa-about-the-online-tutorial)
  - [Lesplan](#lesplan)
- [Sessie 3-2: Basics of React](#sessie-3-2-basics-of-react)
  - [Preparation 1: Review the basics about React using the React docs](#preparation-1-review-the-basics-about-react-using-the-react-docs)
  - [Preparation 2: Q&A](#preparation-2-qa)
  - [Preparation 3: Video over Classes en Events](#preparation-3-video-over-classes-en-events)
  - [Preparation 4: A few more steps in the RrHN Client](#preparation-4-a-few-more-steps-in-the-rrhn-client)
  - [Lesplan](#lesplan-1)
- [Sessie 3-3: Small-test](#sessie-3-3-small-test)
  - [Voorbereiding](#voorbereiding)
  - [Lesplan](#lesplan-2)

## Sessie 3-1: Introduction to React

Er zijn drie voorbereidingen en _twee Q&A's:_

1. Een video over het opzetten van apps die het framework gebruiken;
1. een text over het gebruik van ES6 modules in client-side apps;
1. een Q&A over de video en de module-text.
1. een online tutorial over React; en
1. een Q&A over de tutorial.

### Voorbereiding 1: een React project starten

Kijk naar [deze video over de create-react-app tool](https://youtu.be/_qeOhgW7MLg) die we gebruiken om apps voor React te maken (±20 minuten).

Bedenk vragen voor de [Q&A](https://dwa-courses.firebaseapp.com/qna_cwd_3.1.1.html)!

### Voorbereiding 2: npm en ES6 modules

Lees de volgende tekst: [An Intro To Using npm and ES6 Modules for Front End Development](https://wesbos.com/javascript-modules/), en bedenk vragen voor de [Q&A](https://dwa-courses.firebaseapp.com/qna_cwd_3.1.1.html)!

### Voorbereiding 3: Q&A over tools en modules

Lever twee vragen in voor de [Q&A over dit eerste deel van de stof](https://dwa-courses.firebaseapp.com/qna_cwd_3.1.1.html): de video's en de module-uitleg.

### Voorbereiding 4: Online tutorial about React

De volgende online tutorial is gemaakt door een hele belangrijke persoon in de Javascript wereld: [Dan Abramov](https://twitter.com/dan_abramov?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor). Het is een goede tutorial die in korte tijd al vrij veel van React laat zien.

Het laatste hoofdstuk in de tutorial, _Adding Time Travel_ kun je overslaan voor nu.

**Belangrijk**: Doe alle stappen in de tutorial ook echt zelf!

**Ook belangrijk:** Het leereffect van alleen maar lezen is wellicht maar 10% van alles ook echt zelf doen. Het leereffect is het grootst als je de code **overtikt** -- zie de 1e helft van [deze oproep om oefeningen over te tikken](https://learnpythonthehardway.org/book/intro.html). Copy-pasten zit dichter bij niet-doen dan bij zelf-doen-door-overtikken. Je verdient de extra moeite snel terug als je grotere React-programma's gaat maken.

[Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html). Let erop dat wij normaliter werken met [Setup Option 2: Local Development Environment](https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment) en niet in de browser. Maar voor deze tutorial kan je de browser versie gebruiken.

### Voorbereiding 5: Q&A about the online tutorial

Lever twee vragen in voor de [Q&A over dit laatste deel van de stof](https://dwa-courses.firebaseapp.com/qna_cwd_3.1.2.html); de React tutorial.

### Lesplan

- **Q & A bespreking** — We proberen zoveel mogelijk vragen/discussiepunten van jullie te bespreken in de beschikbare tijd.

- **Hands-on workshop** - [Eerste stappen](https://dwa-courses.firebaseapp.com/assignment_cwd_3.1.html) op weg naar React Hacker News Client.
  **Dit is een 'assignment'**, wat betekent dat je deze _moet doen_, en alle vragen erin beantwoord moet hebben.

- Small teacher-demo about event-handlers in React.

## Sessie 3-2: Basics of React

### Preparation 1: Review the basics about React using the React docs

We will use the official (and rather excellent) [React Documentation](https://reactjs.org/docs/).

To review the basics of React which you should already be familiar with, read the following:

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [Handling Events](https://reactjs.org/docs/handling-events.html)
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

After reading you should know about the way to create and run React applications,
how to create your own Component, the difference about JSX and HTML, how to use
Props and State and how to add Events on elements.

### Preparation 2: Q&A

Please post 2 questions, or discussion items [here](https://dwa-courses.firebaseapp.com/qna_cwd_3.2.html).

### Preparation 3: Video over Classes en Events

Before continuing with the RrHN Client, it helps to understand an issue that confuses some Javascript programmers when they create classes that contain event handlers.  
[Watch the video about Classes and Event Handlers](https://youtu.be/Z1UeeJiK64A) (±23 min) to see the issue, understand its cause, and see three(!) different solutions to the problem.

You can find the source code for the video in the Session 3.2 directory of this repo.

### Preparation 4: A few more steps in the RrHN Client

The RrHN Client need some more work: We want to be able to click on an item in the column on the left, and have the selected web page appear in the iframe on the right.

Do [steps 4, 5a, 5b, 5c and 5d of the RrHN assignment](https://dwa-courses.firebaseapp.com/assignment_cwd_3.1.html#h_IksAw+Dhir). This is the same file that contained the earlier steps, but it is extended to include the new steps. **This is an 'assignment'**, so you _have to do this_. At the end of the file, there's a second box for submitting a commit-URL with the new work.

### Lesplan

- **Q & A bespreking** — We proberen zoveel mogelijk vragen/discussiepunten van jullie te bespreken in de beschikbare tijd.

- **Demo - Events and forms** - We'll demonstrate how to add event-handling and forms to the RrHN applications.

- **Hands-on workshop** - Continue working on [steps 4-5 of the RrHN assignment](https://dwa-courses.firebaseapp.com/assignment_cwd_3.1.html#h_IksAw+Dhir)
  **Dit is een 'assignment'**, wat betekent dat je deze _moet doen_, en alle vragen erin beantwoord moet hebben.

## Sessie 3-3: Small-test

### Voorbereiding

- The text [An Intro To Using npm and ES6 Modules for Front End Development](https://wesbos.com/javascript-modules/)
- The video on [Classes and Event Handlers](https://youtu.be/Z1UeeJiK64A)
- The reading material for session 3-2: from [React Docs](https://reactjs.org/docs), the following articles:
  - [Create a new React App](https://reactjs.org/docs/create-a-new-react-app.html)
  - [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
  - [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
  - [Components and Props](https://reactjs.org/docs/components-and-props.html)
  - [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
  - [Handling Events](https://reactjs.org/docs/handling-events.html)
  - [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
  - [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

### Lesplan

- **The small-test prep:** Your last opportunity to ask questions before the small-test.
- **The small-test**
- **Small-test review**: What were the correct answers to the test questions?
- Finish your **workshop assignments**, if you haven't done so already.
