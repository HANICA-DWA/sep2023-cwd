# Demo for Session 2-1: A Tweet Form

In this demo we'll transform a simple, passive HTML form into an interactive marvel, using just the DOM manipulation features of the browser (aka Vanilla JS).
This demo is meant to make you familiar with:

- using event listeners in client side JavaScript;
- controlling visibility (and other style properties) using CSS classes, and then
- controlling CSS classes using JavaScript;
- having one listener listen to multiple DOM elements;
- preventing the browser from submitting a form to the server;
- adding DOM elements to the page;
- controlling the value of form inputs.

## The demo

We're using the HTML found [here](step-0/index.html) as your starting point. It's a form that might be useful in a kind of Twitter clone.

**Note:** We will only change the CSS and add some JavaScript, there will be no need to change the HTML itself.

Add CSS and JavaScript to make the page exhibit the following behaviours:

1. At first, only the two text input fields are visible. The text field for the tweet text is one line high. The two buttons, the counter and the file upload field are all still invisible.
2. As soon as one of the text fields receives the focus (i.e. it has the keyboard cursor), the following things happen:
   - The text field for the tweet text becomes taller: it's height increases to 4 lines. (this is why it's an HTML `textarea` element instead of an `input` element). The text field for the author's name does not change.
   - Two buttons appear: one to add a picture, and another to submit the form.
   - A counter appears above the text field, which shows how many characters the user has typed into the text field.
   - The control for the photo upload _remains invisible_ (until the photo button is clicked).
3. While the user is entering text into the text field, the counter changes. Whenever there are more than 140 characters, the user interface changes from it's normal state:
   - The border of the text field becomes red.
   - The "Send tweet"-button becomes disabled.  
     When the character-counter is 140 or lower again, the text field returns to it's normal state and the button tweet becomes is no longer disabled.
4. The "Send Tweet" button must also be disabled when the text field is empty.
5. Only when the user has clicked the "Photo"-button, should the file upload input element become visible.  
   This file upload element replaces the "Photo" button. As soon as the Photo button is clicked, the button becomes hidden.
6. Form submission should work they way users expect it to work: either by clicking the button, or by pressing the enter key (but not in the text area). This is best accomplished by listening for the `submit` event on the form.
7. When the form is submitted:
   - prevent the default action of the browser -- we don't want the page to be reloaded;
   - add the text of the tweet as a new list item `<li>` to the element called "tweetList";  
     The tweet list does not have to show a photo. You can ignore that feature for this step.
   - reset the form to it's original state:
     - buttons, file upload and counter invisible;
     - both textfields empty;
     - tweet text field 1 line high.

Here are a few DOM-features that might be useful (you don't have to use them all):

- events: `focus`, `submit`, `input`, `click`
- methods: `createElement()`, `appendChild()`, `setAttribute()`, `preventDefault()`
- DOM element properties: `className`, `style`, `innerHTML`, `disabled`
- CSS styles: `border`, `display: none` and `display: block`

The [Mozilla Developer Network](https://developer.mozilla.org/en-US/) is considered to have the [best documentation for the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).  
[W3Schools](http://www.w3schools.com/) is considered to be more accessible, but it's information is often superficial and incomplete. Professionals tend to stay away from W3Schools.

**Note on styling:** It is considered preferable to only add or remove CSS class names in the DOM using JavaScript, rather than setting style-properties directly.  
Do feel free to add or modify CSS to improve the visual design of this app, but don't spend too much time on it, though.
