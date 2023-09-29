# Programming with immutability in JS

Here's how I would do an explanation of immutability in JS (without libraries) in twelve steps:

1. Numbers and booleans are immutable: you can only replace a number with a new one.

1. Immutability in JS is about _changing PARTS of a datastructure_, not about replacing one structure with a completely different one.

1. Strings are funny: They have multiple parts (booleans don't), but you can't change the parts: strings in JS (as well as in Java) are immutable. All methods in JS that change strings return a new string. The old one is still the same.

1. The only mutable things in JS are arrays and objects.

1. Draw memory models for the following code:

   ```js
   let message = "Hello";
   let previous_message = message;
   if (Math.random() < 0.5) {
     message = message + "!!"; // the only way to 'change' a string is to replace it
   }
   if (message == previous_message) {
     console.log("the same");
   } else {
     console.log("changed");
   }

   let list = [11, 22, 33];
   let previous_list = list;
   if (Math.random() < 0.5) {
     list.push(44); // change the array itself.
   }
   if (list == previous_list) {
     console.log("the same");
   } else {
     console.log("changed");
   }
   ```

   Discuss how the second example about array's can't use `==` (or `===`) to check that the _contents_ of an array have changed, while with immutable data (e.g. strings), you _can_.

1. Redux wants immutability to...

   - ...enable the time-traveling debugger: It can keep the old versions of the application data around, so the debugger can rewind back in time;
   - ...check very quickly which parts of the state have changed (using just the `===` check recursively), so only the React components that are connected to changed parts of the state have to re-render themselves;
   - ...prevent some types of programming error: some complex calculations are easier to design and to understand if no data is ever changed.

1. Reducers **_may not_** change an existing array or object in the state.

1. Use memory-models to explain what a _shallow_ copy is.

1. Give an example of how you would deal with updating a _nested_ datastructure (changing a field in an object in an array in an object). E.g.

   ```js
   state = {
     name: "Henk",
     courses: [
       { courseName: "CWD", finalGrade: 0 },
       { courseName: "SWD", finalGrade: 0 },
     ],
   };
   ```

1. setting the grade of SWD to '9.5' would require code like this:

   ```js
   // `copy()` does not exist in JS; this is just a conceptual example
   let newSWD = copy(state.courses[1]);
   newSWD.finalGrade = 9.5;

   let newCourses = copy(state.courses);
   newCourses[1] = newSWD;

   let newState = copy(state);
   newState.courses = newCourses;
   ```

   Emphasize how each array-or-object between the root of the structure and the changed value must be copied. Also, mention that the rest does not have to be copied (if we're certain no-one else tries to mutate `state`). So the copying is partially shallow, partially deep.

1. With spreads, the code becomes:

   ```js
   const newSWD = { ...state.courses[1], finalGrade: 9.5 };
   let newCourses = [...state.courses];
   newCourses[1] = newSWD;
   const newState = { ...state, courses: newCourses );
   ```

1. There are some libraries that make working with immutability easier. These are the three most important ones:
   - <https://github.com/kolodny/immutability-helper> was originaly created by the React-team itself. It is no longer part of React, but still very useful.
   - <https://github.com/immutable-js/immutable-js/> is also by Facebook people. It has better performance than the immutability helpers, but is also much more complex. [Here's an introduction](https://medium.freecodecamp.org/immutable-js-is-intimidating-heres-how-to-get-started-2db1770466d6).
   - <https://github.com/mweststrate/immer> is quickly becoming the most popular immutability library in the JS world. It is both easy to use, and quite fast. The Redux people publish a [Redux Starter Kit](https://redux-starter-kit.js.org/) that makes working with Redux easier, and uses Immer for immutability in reducers.  
     Here's an [introduction to Immer](https://egghead.io/lessons/redux-simplify-creating-immutable-data-trees-with-immer) by its Dutch author, the brilliant Michel Weststrate. The video is 7½ minutes, and it also gives an example of using Immer with Redux.
