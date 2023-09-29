# Playing with the Time-traveling Debugger

The Redux Time-traveling Debugger is called "Redux DevTools". You can add it to your application as a library, but it's easier to install a browser extension. But, in contrast to the React DevTools, the Redux Devtools browser extension needs you to add a bit of code to your app to connect the extension to the Redux infrastructure in your app. Let's get this to work!

- [Playing with the Time-traveling Debugger](#playing-with-the-time-traveling-debugger)
  - [Install the Redux Devtools](#install-the-redux-devtools)
  - [Install and start a Redux example app](#install-and-start-a-redux-example-app)
  - [Connect the Redux Devtools to the app](#connect-the-redux-devtools-to-the-app)
  - [Play around with the Time-travelling debugger](#play-around-with-the-time-travelling-debugger)
  - [What do the Reset / Revert / Sweep / Commit buttons do?](#what-do-the-reset--revert--sweep--commit-buttons-do)

## Install the Redux Devtools

​👉 Install the Redux DevTools in your browser ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/) or [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)).

## Install and start a Redux example app

We'll need some Redux code to play with. The [Redux repo](https://github.com/reactjs/redux) on Github contains some [examples](https://github.com/reactjs/redux/blob/master/docs/introduction/Examples.md).

👉 Use your favorite Git tool to clone te Redux repo.

> _(If you use GitKraken, you may have some trouble cloning using the Github-facility in GitKraken. You can always clone using Clone Repo -> URL page, and using this URL: <https://github.com/reactjs/redux.git>. Have a look at how GitKraken displays the branching and merging in this repo!)_

​👉 Open a terminal window, and navigate to the examples-directory in your clone of the Redux repo.

​👉 `cd todos`

> _(There are several todo-examples. For now you want this one. `todomvc` is not a complete Redux app, and the others add complexity that's not useful right now.)_

​👉 `npm install`

❓ How many npm modules were installed for this simple example?

​👉 `npm start`

> _This will start a webpack-dev-server, but also try to open your **default** webbrowser to `localhost:3000`. If you installed Redux Devtools in a different browser, simply open `localhost:3000` in that browser._

​👉 Open the Redux DevTools in your browsertab containing the todos-example.

It won't work: The redux devtools complain that it cannot find a Redux Store.

![Redux DevTools not connecting](redux-devtools-not-connecting.png)

## Connect the Redux Devtools to the app

​👉 Open the todos example in your editor/IDE. Open the file `index.js`

​👉 The Redux store must be enhanced with a plugin that connects to the browser extension. Replace this line:

```js
const store = createStore(rootReducer);
```

With this line:

```js
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

This code looks more complicated than it is. It looks for a a global variable (in a browser, global variables are stored in the `window` object), called `__REDUX_DEVTOOLS_EXTENSION__` that should be available if the browser has the ReduxDevTools installed. `__REDUX_DEVTOOLS_EXTENSION__` is actually a function that returns a kind of Redux plug-in. If the function exists, it gets called, and the resulting plug-in is installed into the Redux store by passing it as a second parameter to Redux's `createStore(…)` function.

​👉 Reload, and check the browser again: the Redux Devtools should have connected to the Redux store in your app.

![Redux DevTools connected successfully](redux-devtools-connected-successfully.png)

## Play around with the Time-travelling debugger

👉 Add a few todo items.
👉 Click a few items to change their state.
👉 Play with the visibility filters ("All", "Active" & "Completed").

👉 See the actions appear in the Redux DevTools.

👉 Use the `Slider`-button in the DevTools to start time-traveling!
👉 Use the `Dispatcher`-button to create a new todo-item, or toggle an existing item by sending your own action into the Redux Store.

👉 In the top-left of the DevTools panel, it says "Inspector". Change that to "Chart" to get a graphical view of the entire app-state. Hover the mouse over an object to see its values.

![Redux Devtools Chart view](redux-devtools-chart-view.png)

👉 In the top-left of the DevTools panel, Change "Chart" to "Log Monitor" to see the third way of viewing the state-history of your app. Play with enabling and disabling individual actions.

## What do the Reset / Revert / Sweep / Commit buttons do?

Here's what the Reset / Revert / Sweep / Commit buttons do ([courtesy of Wes Bos](https://github.com/gaearon/redux-devtools/pull/231/files)):

- _Sweep_ will remove any disabled actions from your log.
- _Commit_ works similar to a a git commit - it will remove all actions from your log and make the current state your initial state.
- _Revert_ will remove any actions since your last commit.
- _Reset_ will remove all actions and bring your store back to it's initial state. This includes actions that have previously been committed.
