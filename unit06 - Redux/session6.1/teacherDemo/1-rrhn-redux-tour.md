# Part 1: A guided tour through the (partial) Redux version of RrHN

- [1/6: Get started](#16-get-started)
- [2/6: Begin by looking at `index.jsx`](#26-begin-by-looking-at-indexjsx)
- [3/6: Switch to the file `reducers.js`](#36-switch-to-the-file-reducersjs)
- [4/6: Switch to the file `App.jsx`](#46-switch-to-the-file-appjsx)
- [5/6: Switch to the file `ItemList.jsx`](#56-switch-to-the-file-itemlistjsx)
- [6/6: Reducer-code: working with immutability](#66-reducer-code-working-with-immutability)

The goal is to connect the Redux stuff the student have been reading about to the problem that they are familiar with. Part of the app is ported to Redux: The `App` and `ItemList` components. The final part (`PreferencesDialog`) is left as an assignment to students.
Things to highlight are:

- React components get much simpler: they lose all of their state, and transfer less props/event handlers to child components.
- Reducers are often quite simple too;
- `connect()()` is weird, but used in a standard pattern that is not complicated;
- `connect` creates a new React-component from an existing component.

## 1/6: Get started

👉 Start a the dev-server for the client (`npm install; npm start`), and show that:

1. the app working, but that
2. the PreferencesDialog is dysfunctional (can be opened, can't be closed). Mention that:
   - the PreferencesDialog will be hooked up by the students themselves.
   - Note that AJAX is subject for the next session.

## 2/6: Begin by looking at `index.jsx`

- This code only imports the `Redux` symbol from the redux-module. Likewise for `ReactRedux`. This results in expressions like
  - `Redux.createStore(..)`, and
  - `<ReactRedux.Provider ...>`
  - This was only done to highlight where these things (createStore and Provider) come from. It is not idiomatic code.
- The large commented-out block attaches the Redux DevTools, _and_ installs a logging middleware to make sure that Actions are also displayed in the normal console (because Redux Devtools does not show error messages).
  - ​👉 Simply uncomment, and remove the simple `createStore` line.
    ​👉 Show both measures in action.
  - No need to explain how this code works: URLs are embedded in the comments. This code can be re-used in other projects as-is.
- Pay attention to the `<Provider>` in the JSX. Redux wants its Provider to be the top-level component. When a `<Router>` must be wrapped around the app, the `<Router>` will go _inside_ the `<Provider>`.
  The Provider is just a trick to get React to make the store available to all lower-level components.
- Mention that Redux _can_ be used with other libraries (e.g. Angular, or on the server). Almost everyone uses it with React, though. But this independence is the reason why Redux needs a helper library like `ReactRedux` to integrate with React.

## 3/6: Switch to the file `reducers.js`

- This file contains two reducers: one for the items and their statuses, and one for the Preferences.
  - It is more usual to have all reducers in separate files.
  - The file contains also all Action-creator functions. Some people say these should have their own file too. I don't agree: The reducer code and the set of Actions are tightly coupled, and often edited together.
  - Note how both reducers supply an initial state as a default parameter to the reducer function.
  - ​👉 Examine the initial state for both reducers.  
    ​👉 Quickly show that the React components `App`, `ItemList` and even `PreferencesDialog` **do not have private state** anymore❗️ _This is a major point of the guided tour!_
- Focus attention in the `hnItemsReducer` function.
- Note how it manages both the items themselves, and the item-statuses.
  - At first I had the statuses in a different reducer. But the reducer-code for marking all items "seen" and for selecting an item needs access to both the statuses and the items themselves.
- Do a quick glance at the `hnItemsReducer` function itself. Don't explain the code yet. Just point to the fact that all branches of the switch return the state (usually updated, but the default branch is necessary: the reducer _has to_ return a state).
- Point to the last 4 lines, where the reducers get combined.
  - Emphasize that each reducer handles its own part of the app-state, and has no access to the state as a whole. That is why the `hnItemsReducer` accesses `state.selectedItem` instead of `state.hnItems.selectedItems` (compare with `App.js`, line 63).
  - Note that only the combined reducer is exported to the rest of the application (and used in `index.jsx`).
  - The other things that are exported are the Action-creator functions.  
     ❓Let students tell you why. Answer: actions are the only way other components can get the reducers to do anything.  
    Action-creators are convenient (everyone uses them, but officially, they're optional)

## 4/6: Switch to the file `App.jsx`

- Note (again) how this app has no internal state anymore.
  - in fact, you could make it into a functional component.
- See how things like `selectedItem` and `showingPrefs` have become `props`.
- Emphasize how much more compact this code has become. It still has some logic (choosing between iframe and prefs-dialog). One main reason is that `App` no longer passes a lot of props to `ItemList` and `PreferencesDialog`. :question:Why? Answer: Those components hook themselves up to the Redux store, and therefore don't need to get the data and functions from the parent.
- `App` does, however, pass all relevant `props` to the IFrameView component. (Just the URL, actually)  
  ❓ Why the difference? Answer: IFrameView is not interactive, and it is built to be reusable in different scenario's. So it's neither needed nor useful to have it hooked up to the Redux store for this application. If it is not connected to the store, it needs to get its props from its parent.

​👉 Focus on the last lines of `App.jsx`, where the App component is connected to the store.

- Check if students are surprised by the weird curried structure of the `ReactRedux.connect()()`-call. Explain if needed, but feel free to admit that we don't know _why_ the `ReactRedux.connect()()`-call has this weird currying. I've tried to find out — did not succeed.
- The first important thing to note is that **the result of connect()() is a new React-component!** It is this component that is used in `index.jsx`. Show how we've renamed the original `App` class to `AppUI` to signify that it has been turned into a rather dumb generator of UI-jsx. Kinda like an HTML template. The intelligence has moved to the reducer.  
  So: `App` is the 'connected' version of `AppUI`. ❗️*This is another major point of this guided tour*
- ​👉 Switch to the browser showing the RrHN client. Open the **_React_ DevTools** to take a look at the component hierarchy. Show how AppUI is embedded in a component called `Connect(AppUI)`. That's the one created by `ReactRedux.connect()()`!
  - Show how the AppUI component actually has all the props that `mapStateToProps()` has specified.

## 5/6: Switch to the file `ItemList.jsx`

👉 Focus on the `render()` method.

- Note how it does provide the `<ListItems>` with a bunch of props. That's because `ListItem` was (in my version) always a functional component, so it's easier to give it props than to hook all individual listItems up to the Store themselves.
- Note how (in contrast to `AppUI`) the `render()` also needs _functions_ from `props` that it can pass on or install as event-handlers:
  - `this.props.onToggleItem` (for ListItems, line 29 (and line 119))
  - `this.props.doShowPrefs` (for the gear-icon in the ListHeader, lines 33 and 88)
  - `this.props.onMarkAsSeen` (for the mark-all button, line 37).  
    This one needs a parameter!

​👉 focus on the connecting code: lines 45 to 77.

- Note the use of a function called `mapDispatchToProps()` to provide the eventhandlers.
  - This version is different from the one in the video's: there, a helper-function called `bindActionCreators()` is used. My code basically shows what `bindActionCreators()` does: it wraps all Action creators inside a call to `dispatch()` to **turn action creators into event handler that change the Redux store**. `bindActionCreators()` is not needed in Redux code: just use the pattern shown here.
  - Again, the class was renamed `ItemListUI`, and `ItemList` is created by `connect()()`-ing the UI-component to the Redux store.
  - ​👉 This might be a good time to discuss the React notions of "'dumb" and "smart" components, also called ["container" and "presentation" components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.2z5uuw7pt). (link to a Dan Abramov article he wrote _before_ creating Redux.

## 6/6: Reducer-code: working with immutability

​👉 follow the chain that

- starts with the use of `this.props.onMarkAsSeen` in the render function of `ItemListUI`, (line 37), then
- the specification of `onMarkAsSeen` as a dispatcher for an action (line 68), then
- the action creator in `reducers.jsx` (line 46), then jump to
- the reducer code that handles this action (line 76 in `reducers.jsx`).

​👉 The code that handles action `markAsSeenAction`.

- uses a forEach() loop to visit all hnItems that (1) are visible, and (2) not yet "seen" or "read".
- for each such item, it adds an entry into **a copy of the item-statuses field** of the state.
- This code uses object-spread feature that is not (yet) part of official Javascript. But it is included by create-react-app. Focus on the multiple uses of this gimmick to create an _entirely new version of the state_.
