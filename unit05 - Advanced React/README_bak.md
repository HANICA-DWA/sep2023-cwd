# Unit 05: Advanced React

- [Session 5-1: React Router](#session-5-1-react-router)
  - [Voorbereiding 1: Starten met React Router](#voorbereiding-1-starten-met-react-router)
  - [Voorbereiding 2: Q & A](#voorbereiding-2-q--a)
  - [Voorbereiding 3: Extra informatie over React Router](#voorbereiding-3-extra-informatie-over-react-router)
  - [Lesplan](#lesplan)
- [Session 5-2: React Hooks](#session-5-2-react-hooks)
  - [Preparation 1: Hooks](#preparation-1-hooks)
  - [Preparation 2: AJAX](#preparation-2-ajax)
  - [Classroom activities](#classroom-activities)
- [Session 5-3: Small-test](#session-5-3-small-test)
  - [Preparation](#preparation)
  - [Classroom activities](#classroom-activities-1)

## Session 5-1: React Router

### Voorbereiding 1: Starten met React Router

Voer de stappen [_1 t/m 8_](https://dwa-courses.firebaseapp.com/assignment_cwd_5.1.html) uit van de [_Workshop React Router_](https://dwa-courses.firebaseapp.com/assignment_cwd_5.1.html).

De eerste stap van de workshop is het bestuderen van het programma dat je als startpunt gebruikt. In de overige stappen ga je client-side routing toevoegen aan dit programma.

_Tip:_ vanaf stap 5 kun je eventueel gebruik maken van [Route Tester](https://pshrmn.github.io/route-tester/); een kleine en handige web-app om het `<Route>` component te testen.

### Voorbereiding 2: Q & A

Vergeet niet tijdens het lezen en doen van de voorbereidingen minimaal twee vragen in te dienen bij [_deze Q&A_](https://dwa-courses.firebaseapp.com/qna_cwd_5.1.html).

### Voorbereiding 3: Extra informatie over React Router

Nu je zelf ervaring opgedaan hebt met het gebruiken van React Router in een applicatie is het tijd om wat achtergrond informatie te lezen. Zorg dat je de volgende onderdelen leest en bestudeert.

- [A Simple React Router v4 Tutorial](https://blog.pshrmn.com/simple-react-router-v4-tutorial/) -- deze korte tutorial geeft informatie over het gebruik van `<Route>`, geneste routes, parameters en `<Link>`.

- [\<Route> component](https://reacttraining.com/react-router/web/api/Route) -- dit is het meest belangrijke React Router component, bestudeer deze goed.
  > Vooral het onderdeel [`Route render methods`](https://reacttraining.com/react-router/web/api/Route/Route-render-methods). Je mag de volgende onderdelen overslaan: [`children: func`](https://reacttraining.com/react-router/web/api/Route/children-func), [`strict: bool`](https://reacttraining.com/react-router/web/api/Route/strict-bool) en [`location: object`](https://reacttraining.com/react-router/web/api/Route/location-object).

### Lesplan

- **Q & A bespreking** over de voorbereidingen van de workshop.
- **Workshop** — uitbreiden van de client-side routing door het doen van [_stap 9 t/m 12_](https://dwa-courses.firebaseapp.com/assignment_cwd_5.1.html).
- **Assignment** - Add routing to the RrHN client using [these instructions](https://dwa-courses.firebaseapp.com/assignment_cwd_5.2.html). **This is an assignment** You have to do this.

## Session 5-2: React Hooks

### Preparation 1: Hooks

Watch the [introduction of React Hooks](https://youtu.be/dpw9EHDh2bM) at React Conf 2018. The talk starts of with Sophie Alpert discribing what "Still Sucks" when doing React and is then followed by Dan Abromov introducing the new Hooks API. You can stop around the 1 hour mark.

After the 1 hour mark Ryan Florence demonstrates how to refactor an application using Hooks. While watching this is recommended, it is optional.

While Dan Abromov introduces the new concepts like only he can. You should read the official React Documentation for Hooks:

- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

And ask questions by filling in this **required** [Q&A](https://dwa-courses.firebaseapp.com/qna_cwd_5.2.html).

### Preparation 2: AJAX

> This preparation is _optional_. This preparation is _not_ part of the small-test.

After studying all the official React documentation about Hooks, let's see a real world example using Hooks and AJAX.
Read the first four sections of [How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data) by Robin Wieruch.

- [Data Fetching with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data)
- [How to trigger a hook programmatically / manually?](https://www.robinwieruch.de/react-hooks-fetch-data)
- [Loading Indicator with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data)
- [Error Handling with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data)

Skip everything from the section _"Fetching Data with Forms and React"_ and onward.
If you have a few minutes left, you can read the section _"Custom Data Fetching Hook"_, to see the powers of React Hooks.

### Classroom activities

- **[Q & A](https://dwa-courses.firebaseapp.com/qna_cwd_5.2.html)** — We'll try to answer as many of your wonderful questions as time will allow.
- **Workshop** — [React Hooks](https://dwa-courses.firebaseapp.com/assignment_cwd_5.3.html)
- **Assignment** — [Hooks in the React Hacker News Client](https://dwa-courses.firebaseapp.com/assignment_cwd_5.4.html). **This is an assignment** You have to do this.

## Session 5-3: Small-test

### Preparation

Lees over React Router de volgende artikelen:

- [Workshop React Router](https://dwa-courses.firebaseapp.com/assignment_cwd_5.1.html)
- [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
- [\<Route> component](https://reacttraining.com/react-router/web/api/Route)
- [\<Redirect> component](https://reacttraining.com/react-router/web/api/Redirect)
- [\<Switch> component](https://reacttraining.com/react-router/web/api/Switch)
- [\<Link> component](https://reacttraining.com/react-router/web/api/Link)
- [\<NavLink> component](https://reacttraining.com/react-router/web/api/NavLink)

Zorg dat je de volgende concepten kent en weet hoe ze werken:

- `<Route>` component en de eigenschappen `exact`, `component`, `render`
- `<Switch>` component
- `<Link>` en `<NavLink>` componenten
- hoe URL parameters gebruikt worden in de `path` eigenschap van een `<Route>` _en_ hoe je deze parameters kunt gebruiken in je React component door gebruik te maken van het `match.params` object uit `props`

Lees over React Hooks de volgende artikelen:

- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

### Classroom activities

- **The small-test prep:** Your last opportunity to ask questions before the small-test.
- **The small-test**
- **Small-test review**: What were the correct answers to the test questions?
- Finish your **workshop assignments**, if you haven't done so already.
